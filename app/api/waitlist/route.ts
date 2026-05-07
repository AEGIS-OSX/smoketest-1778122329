export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, zip = "", source = "landing_page" } = body;

    // Validate email
    if (!email || typeof email !== "string" || email.trim() === "") {
      return Response.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Check Mailchimp environment variables
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServerPrefix) {
      return Response.json(
        { error: "Mailchimp is not configured." },
        { status: 500 }
      );
    }

    // Build Mailchimp endpoint
    const mailchimpUrl = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

    // Prepare Basic auth header
    const authString = Buffer.from(`anystring:${mailchimpApiKey}`).toString(
      "base64"
    );

    // Prepare Mailchimp payload
    const mailchimpPayload = {
      email_address: email.trim(),
      status: "pending",
      merge_fields: {
        ZIP: zip.trim(),
        SOURCE: source,
      },
    };

    // POST to Mailchimp
    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${authString}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailchimpPayload),
    });

    const mailchimpData = await mailchimpResponse.json();

    // Handle Mailchimp response
    if (!mailchimpResponse.ok) {
      // If member already exists, treat as success
      if (
        mailchimpResponse.status === 400 &&
        mailchimpData.title === "Member Exists"
      ) {
        // Continue to webhook
      } else {
        return Response.json(
          { error: "Unable to save your email right now." },
          { status: 502 }
        );
      }
    }

    // Send to Zapier webhook if configured
    const zapierWebhookUrl = process.env.ZAPIER_WAITLIST_WEBHOOK_URL;
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            zip: zip.trim(),
            source,
          }),
        });
      } catch (webhookError) {
        // Webhook failure does not fail the request
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: "Unable to save your email right now." },
      { status: 502 }
    );
  }
}
