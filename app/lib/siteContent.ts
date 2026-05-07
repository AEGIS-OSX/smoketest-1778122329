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

export const featuresSection = {
  headline: "What PawWalk gives you",
  items: [
    {
      title: "Flexible scheduling",
      description: "Request a walk now, or set a recurring window that fits your day. Choose 30 or 60 minutes, change or cancel in two taps.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123058565-feature_1.png",
      imageAlt: "A dog walker checking their phone schedule in an urban neighborhood."
    },
    {
      title: "Vetted, insured walkers",
      description: "Every walker passes ID and background checks and is covered by insurance. We match walkers to neighborhoods for consistent care.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123114627-feature_2.png",
      imageAlt: "A professional dog walker with a leashed dog on a city street."
    },
    {
      title: "Real-time updates",
      description: "Receive a photo, route map, and short report after each walk so you know your dog is safe, exercised, and happy.",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123176004-feature_3.png",
      imageAlt: "A phone screen displaying a photo and route map from a completed dog walk."
    }
  ]
};

export const processSection = {
  headline: "How it works",
  steps: [
    {
      title: "Book",
      description: "Tell us when you need a walk, or join a recurring schedule."
    },
    {
      title: "Walk",
      description: "A local PawWalk walker completes the walk and shares a photo and route."
    },
    {
      title: "Report",
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

export const testimonialsSection = {
  headline: "What early users say",
  testimonials: [
    {
      quote: "Reliable and thoughtful. My dog naps after every PawWalk walk, and I get a photo that actually shows the route.",
      author: "Lina",
      location: "Hayes Valley",
      badge: "Beta tester",
      imageUrl: "https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/smoketest-1778122329/cleo/1778123233210-social_proof.png",
      imageAlt: "Portrait of Lina, a PawWalk beta tester."
    },
    {
      quote: "Easy to sign up, even easier to trust. I stopped worrying when I had to work late.",
      author: "Marcus",
      location: "Mission District",
      badge: "Beta tester",
      imageUrl: "",
      imageAlt: ""
    },
    {
      quote: "Professional walkers who show up on time. The little notes after the walk are exactly what I need.",
      author: "Priya",
      location: "Brooklyn",
      badge: "Beta tester",
      imageUrl: "",
      imageAlt: ""
    }
  ]
};

export const emailCaptureForm = {
  headline: "Join the waitlist",
  subheadline: "Get early access to PawWalk in your neighborhood. We'll email you when we open nearby.",
  fields: [
    {
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      required: true,
      label: "Email address"
    },
    {
      name: "zipcode",
      type: "text",
      placeholder: "94103",
      required: false,
      label: "ZIP code (optional)"
    }
  ],
  submitButton: "Get early access.",
  microcopy: "We'll only use your email to share early access updates. You'll get a confirmation email after signing up."
};

export const footerContent = {
  faq: [
    {
      question: "How are walkers vetted?",
      answer: "Walkers complete ID and background checks, plus live checks in their neighborhood. We describe our vetting steps on the privacy page."
    },
    {
      question: "When will PawWalk be available in my area?",
      answer: "Sign up with your ZIP code and we'll email your neighborhood when we're ready to launch."
    },
    {
      question: "How much does a walk cost?",
      answer: "Pricing varies by city. We'll share sample rates with early access members before general launch."
    }
  ],
  privacyLine: "We'll only use your email to share early access updates.",
  privacyLinkText: "Privacy policy",
  privacyLinkHref: "/privacy"
};

export const analyticsEvents = {
  heroCta: "hero_cta_click",
  formSubmitSuccess: "email_submit_success"
};
