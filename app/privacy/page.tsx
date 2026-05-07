export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <section className="section-shell" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
        <p className="eyebrow">Privacy</p>
        <h1 className="section-title">Privacy policy</h1>
        <p className="section-copy">We'll only use your email to share early access updates.</p>
        
        <div style={{ marginTop: "var(--space-8)", display: "grid", gap: "var(--space-6)" }}>
          <p className="privacy-copy">
            Walkers complete ID and background checks, plus live checks in their neighborhood. We describe our vetting steps on the privacy page.
          </p>
          
          <p className="privacy-copy">
            Sign up with your ZIP code and we'll email your neighborhood when we're ready to launch.
          </p>
          
          <p className="privacy-copy">
            You can ignore the confirmation email if you change your mind.
          </p>
        </div>
        
        <div style={{ marginTop: "var(--space-8)" }}>
          <a href="/" className="secondary-link focus-ring">Back to PawWalk</a>
        </div>
      </section>
    </main>
  );
}
