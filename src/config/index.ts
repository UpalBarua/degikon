import {
  Brain,
  Facebook,
  Headset,
  Instagram,
  Lightbulb,
  Linkedin,
  Scale,
  Trophy,
  Wrench,
} from "lucide-react";

export const navLinks = [
  {
    label: "Packages",
    href: "/#packages",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
] as const;

export const adminNavLinks = [
  { label: "Portfolios", href: "/admin/portfolios" },
  { label: "Testimonials", href: "/admin/testimonials" },
  { label: "Newsletter", href: "/admin/newsletter" },
] as const;

export const whyChooseUsData = [
  {
    Icon: Trophy,
    title: "Established Success Record",

    icon: Trophy,
    color: "#F9EC12",
    description:
      "With a proven history of delivering measurable results and surpassing client expectations, we are the trusted choice for businesses striving for success in today's competitive landscape.",
  },
  {
    Icon: Brain,
    title: "Multi-Industry Expertise",

    icon: Brain,
    color: "#F14D34",
    description:
      "Our team of seasoned professionals brings expertise across various industries, ensuring that we understand the unique challenges and opportunities specific to your business niche.",
  },
  {
    Icon: Wrench,
    title: "Tailored Solutions",
    icon: Wrench,
    color: "#4A7DBF",
    description:
      "We believe in personalized approaches tailored to each client's needs. Our customized solutions are designed to address your specific goals and drive sustainable growth.",
  },
  {
    Icon: Lightbulb,
    title: "Innovative Tactics",
    icon: Lightbulb,
    color: "#6BB953",
    description:
      "Remain ahead with our innovative strategies. We dynamically adapt to the evolving digital landscape, leveraging cutting-edge tools and techniques to ensure your success.",
  },
  {
    Icon: Scale,
    title: "Cost-Effective Excellence",
    icon: Scale,
    color: "#6CADCB",
    description:
      "We offer cost-effective solutions without compromising on quality. Get the most out of your investment with our competitive pricing and exceptional service.",
  },
  {
    Icon: Headset,
    title: "Committed Assistance",
    icon: Headset,
    color: "#599792",
    description:
      "We are committed to your success. Rely on us for steadfast support and continuous guidance, equipped with the resources needed to excel in today's fast-paced business landscape.",
  },
] as const;

export const socialLinks = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/degikon",
    Icon: Facebook,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/degikon",
    Icon: Instagram,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/company/degikon",
    Icon: Linkedin,
  },
] as const;

export const employees = [
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
  {
    name: "Harry Magure",
    position: "Chief Business Officer",
    image: "/images/headshots/about.jpg",
  },
] as const;

export const trustedCompanines = [
  "/images/brands/logo-0.webp",
  "/images/brands/logo-1.webp",
  "/images/brands/logo-2.webp",
  "/images/brands/logo-3.webp",
  "/images/brands/logo-4.webp",
  "/images/brands/logo-5.webp",
  "/images/brands/logo-6.webp",
  "/images/brands/logo-7.webp",
  "/images/brands/logo-8.webp",
] as const;

export const pricingPackages = [
  {
    name: "Brand Starter Kit",
    services: [
      "Basic Brand Consultation",
      "Logo Design",
      "Basic SEO Analysis",
      "2 Custom Social Media Post Designs",
    ],
    features: [
      "1 Video Call Session",
      "2 Revisions per Service",
      "Initial Brand Strategy Outline",
    ],
  },
  {
    name: "Digital Presence Builder",
    services: [
      "Brand Development Session",
      "SEO and Basic Website Content",
      "4 Custom Social Media Post Designs",
      "1 Short Video Ad or Social Media Video",
    ],
    features: [
      "2 Video Call Sessions",
      "3 Revisions per Service",
      "Monthly SEO and Social Media Report",
    ],
  },
  {
    name: "Market Influence Creator",
    services: [
      "Comprehensive Branding and Strategy",
      "Advanced SEO Services",
      "Influencer Marketing Introduction",
      "6 Social Media Designs",
      "1 Animated Explainer Video",
    ],
    features: [
      "4 Video Call Sessions",
      "4 Revisions per Service",
      "Influencer Matching and Strategy",
    ],
  },
];
