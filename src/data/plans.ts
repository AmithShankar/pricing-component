export const plans = [
  {
    name: "Solo",
    price: "$19",
    period: "/month",
    description: "Perfect for freelancers and solo founders getting started.",
    features: [
      "Contact & deal management",
      "Basic reporting dashboard",
      "Email & activity tracking",
      "Community support",
    ],
    buttonColor: "bg-slate-800 hover:bg-slate-900",
  },
  {
    name: "Team",
    price: "$129",
    period: "/month",
    description: "Built for growing teams that need better collaboration.",
    features: [
      "Everything in Solo",
      "Team reporting & analytics",
      "Shared inbox & team chat",
      "Onboarding & performance stats",
    ],
    buttonColor: "bg-teal-500 hover:bg-teal-600",
    isPopular: true,
  },
  {
    name: "Scale",
    price: "$299",
    period: "/month",
    description: "Advanced tools for scaling companies and sales teams.",
    features: [
      "Everything in Team",
      "Advanced automation",
      "Custom workflows",
      "Priority support",
    ],
    buttonColor: "bg-slate-800 hover:bg-slate-900",
  },
];
