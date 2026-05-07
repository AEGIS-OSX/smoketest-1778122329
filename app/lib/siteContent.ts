export type FeatureItem = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export type TestimonialItem = {
  quote: string;
  meta: string;
};

export const heroContent = {
  eyebrow: "PawWalk",
  headline: "Reliable walks, on your schedule.",
  subheadline: "PawWalk helps busy urban dog owners book on-demand or recurring 30 and 60 minute walks with vetted, insured walkers, plus photo and route updates after every walk.",
  primaryCta: "Get early access.",
  secondaryCta: "How it works",
  note: "Visible on mobile: headline and Get early access. Short copy to show value and invite a single tap to sign up.",
  imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778122993271-hero.png",
  imageAlt: "Hand clipping a warm brass carabiner to a Forest Ink leather leash against a Deep Charcoal background."
};

export const featuresSection: { headline: string; items: FeatureItem[] } = {
  headline: "What PawWalk gives you",
  items: [
    {
      title: "Flexible scheduling",
      description: "Request a walk now, or set a recurring window that fits your day. Choose 30 or 60 minutes, change or cancel in two taps.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123058565-feature_1.png",
      imageAlt: "Hand tapping a phone calendar on a Deep Charcoal tabletop with a Warm Brass keyring nearby."
    },
    {
      title: "Vetted, insured walkers",
      description: "Every walker passes ID and background checks and is covered by insurance. We match walkers to neighborhoods for consistent care.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123114627-feature_2.png",
      imageAlt: "Warm Brass engraved badge clipped to a Forest Ink leash strap against a Deep Charcoal coat."
    },
    {
      title: "Real-time updates",
      description: "Receive a photo, route map, and short report after each walk so you know your dog is safe, exercised, and happy.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123176004-feature_3.png",
      imageAlt: "Phone notification held against a Deep Charcoal background with Warm Brass reflections on the bezel."
    }
  ]
};

export const processSection = {
  eyebrow: "How it works",
  items: [
    {
      step: "Book",
      description: "Tell us when you need a walk, or join a recurring schedule."
    },
    {
      step: "Walk",
      description: "A local PawWalk walker completes the walk and shares a photo and route."
    },
    {
      step: "Report",
      description: "You get a short report and a map. No surprises, just clear updates."
    }
  ]
};

export const trustPanel = {
  items: [
    "Background-checked walkers",
    "Insurance coverage for every walk",
    "Simple, clear pricing examples shared during early access"
  ]
};

export const testimonialsSection: { headline: string; socialProofImageUrl: string; socialProofImageAlt: string; items: TestimonialItem[] } = {
  headline: "What early users say",
  socialProofImageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123233210-social_proof.png",
  socialProofImageAlt: "Street-level environmental shot of walker legs and a dog’s paws on dark pavement with a Warm Brass leash catch and Bone paper flyer.",
  items: [
    {
      quote: "Reliable and thoughtful. My dog naps after every PawWalk walk, and I get a photo that actually shows the route.",
      meta: "Lina, Hayes Valley, Beta tester"
    },
    {
      quote: "Easy to sign up, even easier to trust. I stopped worrying when I had to work late.",
      meta: "Marcus, Mission District, Beta tester"
    },
    {
      quote: "Professional walkers who show up on time. The little notes after the walk are exactly what I need.",
      meta: "Priya, Brooklyn, Beta tester"
    }
  ]
};

export const waitlistContent = {
  headline: "Join the waitlist",
  subhead: "Get early access to PawWalk in your neighborhood. We’ll email you when we open nearby.",
  emailLabel: "Email address",
  emailPlaceholder: "your@email.com",
  zipLabel: "Optional: ZIP code",
  zipPlaceholder: "94103",
  submitLabel: "Get early access.",
  microcopy: "We’ll only use your email to share early access updates. You’ll get a confirmation email after signing up.",
  privacyLine: "We’ll only use your email to share early access updates.",
  privacyLinkLabel: "Privacy policy.",
  analyticsHeroClick: "hero_cta_click",
  analyticsSubmitSuccess: "email_submit_success"
};

export const faqContent = {
  headline: "FAQ",
  items: [
    {
      question: "How are walkers vetted?",
      answer: "Walkers complete ID and background checks, plus live checks in their neighborhood. We describe our vetting steps on the privacy page."
    },
    {
      question: "When will PawWalk be available in my area?",
      answer: "Sign up with your ZIP code and we’ll email your neighborhood when we’re ready to launch."
    },
    {
      question: "How much does a walk cost?",
      answer: "Pricing varies by city. We’ll share sample rates with early access members before general launch."
    }
  ]
};
