import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import {
  heroContent,
  featuresSection,
  processSection,
  trustPanel,
  testimonialsSection,
  footerContent,
} from "@/app/lib/siteContent";

export default function LandingSections() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="section-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{heroContent.eyebrow}</p>
              <h1 id="hero-title" className="hero-title">
                {heroContent.headline}
              </h1>
              <p className="hero-subtitle">{heroContent.subheadline}</p>
              <div className="hero-cta-row">
                <a href="#waitlist" className="primary-cta focus-ring">
                  {heroContent.primaryCta}
                </a>
                <a href="#process" className="secondary-link focus-ring">
                  {heroContent.secondaryCta}
                </a>
              </div>
              <p className="hero-note">{heroContent.note}</p>
            </div>
            <div className="hero-media-frame">
              <Image
                src={heroContent.imageUrl}
                alt={heroContent.imageAlt}
                width={480}
                height={600}
                priority
                className="hero-image"
              />
            </div>
          </div>
          <div style={{ marginTop: "var(--space-12)" }}>
            <WaitlistForm
              formId="hero"
              title="Join the waitlist"
              subhead="Get early access to PawWalk in your neighborhood. We'll email you when we open nearby."
              submitLabel="Get early access."
              privacyLine="We'll only use your email to share early access updates."
              privacyLinkLabel="Privacy policy."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-shell" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
        <h2 className="section-title">{featuresSection.headline}</h2>
        <div className="panel-grid features-grid" style={{ marginTop: "var(--space-8)" }}>
          {featuresSection.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <Image
                src={feature.imageUrl}
                alt={feature.imageAlt}
                width={400}
                height={250}
                className="feature-image"
              />
              <div className="card-body">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-copy">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-shell" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
        <h2 className="section-title">{processSection.headline}</h2>
        <div className="panel-grid process-grid" style={{ marginTop: "var(--space-8)" }}>
          {processSection.steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="card-body">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-copy">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Panel */}
      <section className="section-shell" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
        <ul className="badge-list" style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
          {trustPanel.items.map((item, index) => (
            <li key={index} className="badge-item">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="section-shell" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
        <h2 className="section-title">{testimonialsSection.headline}</h2>
        <div className="panel-grid testimonials-grid" style={{ marginTop: "var(--space-8)" }}>
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.imageUrl && (
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.imageAlt}
                  width={400}
                  height={225}
                  className="social-proof-image"
                />
              )}
              <div className="card-body">
                <blockquote className="card-copy" style={{ fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </blockquote>
                <p className="testimonial-meta">
                  — {testimonial.author}, {testimonial.location}, {testimonial.badge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section with Waitlist and FAQ */}
      <footer id="waitlist" className="site-footer">
        <div className="section-shell">
          <div className="footer-grid">
            <div className="waitlist-panel" style={{ padding: "var(--space-8)" }}>
              <div className="card-body">
                <h2 className="card-title">Join the waitlist</h2>
                <p className="card-copy">Get early access to PawWalk in your neighborhood. We'll email you when we open nearby.</p>
                <WaitlistForm
                  formId="footer"
                  title="Join the waitlist"
                  subhead="Get early access to PawWalk in your neighborhood. We'll email you when we open nearby."
                  submitLabel="Get early access."
                  privacyLine="We'll only use your email to share early access updates."
                  privacyLinkLabel="Privacy policy."
                />
              </div>
            </div>
            <div>
              <h3 className="card-title" style={{ marginBottom: "var(--space-6)" }}>FAQ</h3>
              <ul className="faq-list" style={{ display: "grid", gap: "var(--space-6)" }}>
                {footerContent.faq.map((item, index) => (
                  <li key={index} className="faq-card" style={{ border: "none", background: "transparent", padding: 0 }}>
                    <h4 className="faq-question" style={{ fontWeight: 600, marginBottom: "var(--space-2)" }}>
                      {item.question}
                    </h4>
                    <p className="faq-answer">{item.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-8)", borderTop: "1px solid var(--color-border-soft)" }}>
            <p className="footer-copy">
              {footerContent.privacyLine}{" "}
              <a href={footerContent.privacyLinkHref} className="privacy-link focus-ring">
                {footerContent.privacyLinkText}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}