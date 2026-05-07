import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import {
  faqContent,
  featuresSection,
  heroContent,
  processSection,
  testimonialsSection,
  trustPanel,
  waitlistContent
} from "@/app/lib/siteContent";

export default function LandingSections() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="section-shell hero-grid">
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
            <WaitlistForm
              formId="hero"
              title={waitlistContent.headline}
              subhead={waitlistContent.subhead}
              submitLabel={waitlistContent.submitLabel}
              privacyLine={waitlistContent.privacyLine}
              privacyLinkLabel={waitlistContent.privacyLinkLabel}
            />
          </div>
          <div className="hero-media-frame">
            <Image
              src={heroContent.imageUrl}
              alt={heroContent.imageAlt}
              width={960}
              height={1200}
              className="hero-image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="features-title">
        <p className="eyebrow">PawWalk</p>
        <h2 id="features-title" className="section-title">
          {featuresSection.headline}
        </h2>
        <div className="panel-grid features-grid">
          {featuresSection.items.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <Image
                src={feature.imageUrl}
                alt={feature.imageAlt}
                width={720}
                height={450}
                className="feature-image"
              />
              <div className="card-body">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-copy">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-shell" aria-labelledby="process-title">
        <p className="eyebrow">{processSection.eyebrow}</p>
        <h2 id="process-title" className="section-title">
          {processSection.headline}
        </h2>
        <ol className="panel-grid process-grid process-list">
          {processSection.steps.map((item) => (
            <li className="process-card" key={item.step}>
              <div className="card-body">
                <p className="process-step-label">{item.step}</p>
                <p className="card-copy">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell" aria-labelledby="trust-title">
        <h2 id="trust-title" className="section-title">
          {trustPanel.headline}
        </h2>
        <ul className="badge-list hero-cta-row">
          {trustPanel.items.map((item) => (
            <li className="badge-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title" className="section-title">
          {testimonialsSection.headline}
        </h2>
        <div className="panel-grid testimonials-grid">
          {testimonialsSection.items.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.meta}>
              <blockquote className="card-body">
                <p className="card-copy">“{testimonial.quote}”</p>
                <figcaption className="testimonial-meta">{testimonial.meta}</figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
        <Image
          src={testimonialsSection.socialProofImageUrl}
          alt={testimonialsSection.socialProofImageAlt}
          width={1200}
          height={675}
          className="social-proof-image"
        />
      </section>

      <section id="waitlist" className="site-footer" aria-labelledby="footer-title">
        <div className="section-shell footer-grid">
          <div>
            <h2 id="footer-title" className="section-title">
              {waitlistContent.headline}
            </h2>
            <p className="footer-copy">{waitlistContent.subhead}</p>
            <WaitlistForm
              formId="footer"
              title={waitlistContent.headline}
              subhead={waitlistContent.subhead}
              submitLabel={waitlistContent.submitLabel}
              privacyLine={waitlistContent.privacyLine}
              privacyLinkLabel={waitlistContent.privacyLinkLabel}
            />
          </div>
          <div>
            <h2 className="section-title">{faqContent.headline}</h2>
            <dl className="faq-list">
              {faqContent.items.map((item) => (
                <div className="faq-card card-body" key={item.question}>
                  <dt className="faq-question">{item.question}</dt>
                  <dd className="faq-answer">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
