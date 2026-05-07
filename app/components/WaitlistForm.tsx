"use client";

import { useState } from "react";

export type WaitlistFormProps = {
  formId: "hero" | "footer";
};

export default function WaitlistForm({ formId }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      // Track CTA click event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "email_submit_attempt", {
          form_id: formId,
        });
      }

      // Submit to Mailchimp API endpoint
      const response = await fetch("/api/mailchimp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          zipCode: zipCode || undefined,
          formId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to subscribe");
      }

      // Track successful conversion
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "email_submit_success", {
          form_id: formId,
        });
      }

      setStatus("success");
      setEmail("");
      setZipCode("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <div className="form-stack">
        <div className="form-field">
          <label htmlFor={`email-${formId}`} className="form-label">
            Email address
          </label>
          <input
            id={`email-${formId}`}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="form-input"
            aria-describedby={`email-note-${formId}`}
          />
        </div>

        <div className="form-field">
          <label htmlFor={`zip-${formId}`} className="form-label">
            ZIP code (optional)
          </label>
          <input
            id={`zip-${formId}`}
            type="text"
            placeholder="94103"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            disabled={isLoading}
            className="form-input"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !email}
          className="primary-cta"
          aria-busy={isLoading}
        >
          {isLoading ? "Submitting..." : "Get early access."}
        </button>
      </div>

      {status === "success" && (
        <div className="form-status" role="status" aria-live="polite">
          <p className="form-note" style={{ color: "var(--color-success)" }}>
            Check your email for a confirmation link.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="form-status" role="alert" aria-live="assertive">
          <p className="form-note" style={{ color: "var(--color-warn)" }}>
            {errorMessage}
          </p>
        </div>
      )}

      <p className="form-note" id={`email-note-${formId}`}>
        We'll only use your email to share early access updates. You'll get a confirmation email after signing up.
      </p>
    </form>
  );
}
