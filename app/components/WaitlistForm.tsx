"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { waitlistContent } from "../lib/siteContent";

export type WaitlistFormProps = {
  formId: "hero" | "footer";
  title: string;
  subhead: string;
  submitLabel: string;
  privacyLine: string;
  privacyLinkLabel: string;
  className?: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

export default function WaitlistForm({
  formId,
  title,
  subhead,
  submitLabel,
  privacyLine,
  privacyLinkLabel,
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedZip = zip.trim();

    setSuccess("");
    setError("");

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    setSubmitting(true);

    if (formId === "hero") {
      window.gtag?.("event", waitlistContent.analyticsHeroClick, { source: formId });
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          zip: trimmedZip,
          source: formId,
        }),
      });

      if (!response.ok) {
        throw new Error("Waitlist request failed.");
      }

      setSuccess("Thanks. Check your inbox to confirm your spot.");
      setEmail("");
      setZip("");
      window.gtag?.("event", waitlistContent.analyticsSubmitSuccess, { source: formId });
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  const statusMessage = success || error;

  return (
    <section className={["waitlist-panel", className].filter(Boolean).join(" ")} aria-labelledby={`${formId}-waitlist-title`}>
      <div className="card-body">
        <h2 id={`${formId}-waitlist-title`} className="card-title">
          {title}
        </h2>
        <p className="card-copy">{subhead}</p>
        <form className="form-stack" noValidate onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor={`${formId}-email`}>
              {waitlistContent.emailLabel}
            </label>
            <input
              className="form-input"
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={waitlistContent.emailPlaceholder}
              required
              value={email}
              disabled={submitting}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor={`${formId}-zip`}>
              {waitlistContent.zipLabel}
            </label>
            <input
              className="form-input"
              id={`${formId}-zip`}
              name="zip"
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              placeholder={waitlistContent.zipPlaceholder}
              value={zip}
              disabled={submitting}
              onChange={(event) => setZip(event.target.value)}
            />
          </div>
          <button className="primary-cta" type="submit" disabled={submitting}>
            {submitting ? "Saving..." : submitLabel}
          </button>
          <p className="privacy-copy">
            {privacyLine} {" "}
            <Link className="privacy-link focus-ring" href="/privacy">
              {privacyLinkLabel}
            </Link>
          </p>
          <p className="form-status" aria-live="polite">
            {statusMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
