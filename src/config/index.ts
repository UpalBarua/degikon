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
  { label: "Consultations", href: "/admin/consultations" },
  { label: "Portfolios", href: "/admin/portfolios" },
  // { label: "Reviews", href: "/admin/reviews" },
  { label: "Newsletter", href: "/admin/newsletter" },
] as const;

export const whyChooseUsData = [
  {
    icon: Trophy,
    color: "#F9EC12",
    title: "Proven Track Record",
    description:
      "With a track record of delivering measurable results and exceeding client expectations, we're the trusted choice for businesses seeking success in today's competitive landscape.",
  },
  {
    icon: Brain,
    color: "#F14D34",
    title: "Expertise Across Industries",
    description:
      "Our team of seasoned professionals brings expertise across various industries, ensuring that we understand the unique challenges and opportunities specific to your business niche.",
  },
  {
    icon: Wrench,
    color: "#4A7DBF",
    title: "Customized Solutions",
    description:
      "We believe in personalized approaches tailored to each client's needs. Our customized solutions are designed to address your specific goals and drive sustainable growth.",
  },
  {
    icon: Lightbulb,
    color: "#6BB953",
    title: "Innovative Strategies",
    description:
      "Stay ahead of the curve with our innovative strategies. We continuously adapt to the ever-changing digital landscape, leveraging the latest tools and techniques to maximize your success.",
  },
  {
    icon: Scale,
    color: "#6CADCB",
    title: "Value for Money",
    description:
      "We offer cost-effective solutions without compromising on quality. Get the most out of your investment with our competitive pricing and exceptional service.",
  },
  {
    icon: Headset,
    color: "#599792",
    title: "Dedicated Support",
    description:
      "Your success is our priority. Count on us for dedicated support and ongoing assistance, ensuring that you have the resources and guidance you need to thrive in today's dynamic business environment.",
  },
] as const;

export const socialLinks = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/thrivenvision",
    Icon: Facebook,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/thrivenvision",
    Icon: Instagram,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/company/thrivenvision",
    Icon: Linkedin,
  },
] as const;

export const employees = [
  {
    name: "Mohammed Nazmul Hossain",
    position: "Chief Operating Officer",
    image: "/images/headshots/nazmul.webp",
  },
  {
    name: "Robin M. Rahman",
    position: " Chief Executive Officer",
    image: "/images/headshots/robin.webp",
  },
  {
    name: "Syed Hameem Bin Arshad",
    position: "Chief Business Officer",
    image: "/images/headshots/hameem.webp",
  },
] as const;

export const termsOfServices = [
  {
    term: "Eligibility",
    description:
      "Our services are accessible only to those who are at least 18 years of age. By engaging with our services, you confirm that you meet this age requirement.",
  },
  {
    term: "Services",
    description:
      "thrivenvision offers a broad spectrum of digital services to a global clientele. In using our services, you commit to providing truthful and comprehensive details about your pro ect requirements and agree to supply all necessary materials for the successful completion of your project.",
  },
  {
    term: "Payment",
    description:
      "Access to our services incurs a charge, the details of which will be provided in our service quote. We require full payment in advance of project initiation.",
  },
  {
    term: "Copyright",
    description:
      "You guarantee that you hold or possess the requisite licenses, rights, and permissions for any material you provide for your project. You agree that the output generated by us becomes your property upon full settlement of payment.",
  },
  {
    term: "Confidentiality",
    description:
      "thrivenvision commits to maintaining the confidentiality of all materials and information you provide and will not disclose such information to any third parties without your explicit consent.",
  },
  {
    term: "Revision and Approval",
    description:
      "We offer a reasonable number of revisions to ensure the final product aligns with your specifications. Final approval of the project by you will signify the project's completion, and any subsequent modifications may incur additional fees.",
  },
  {
    term: "Liability",
    description:
      "thrivenvision shall not be liable for any direct or indirect damages, including but not limited to loss of profits, savings, or incidental or consequential damages, that may result from utilizing our services.",
  },
  {
    term: "Termination",
    description:
      "We reserve the right to terminate our services at any discretion should we ascertain non-compliance with our terms and conditions on your part.",
  },
  {
    term: "Modification",
    description:
      "thrivenvision reserves the right to alter these terms and conditions at any moment, without prior notification. By continuing to use our services, you consent to be bound by such modifications.",
  },
] as const;

export const privacyPolicy = [
  {
    privacy: "Information Collection",
    description:
      "We gather your personal details voluntarily given through forms, email, and direct contact, including name, email, phone number, and other information. We also automatically collect data like your IP address, browser type, and browsing activity when you visit our website.",
  },
  {
    privacy: "Information Use",
    description:
      "The personal information we collect is primarily used to offer and improve our services, to respond to your inquiries and requests, and to provide you with information and updates about our services. With your consent, we may also use your contact information to send you marketing communications and promotional offers.",
  },
  {
    privacy: "Information Protection",
    description:
      "We employ various security measures to protect your personal information from unauthorized access, use, or disclosure. This includes the use of industry-standard encryption technologies and maintaining physical, electronic, and procedural safeguards in line with applicable laws and standards.",
  },
  {
    privacy: "Information Sharing",
    description:
      "We do not sell, rent, or trade your personal information. We may share it with trusted partners to help run our website and business, provided they keep it confidential. Your information may also be disclosed if necessary to comply with the law, enforce our policies, or protect rights and safety.",
  },
  {
    privacy: "Cookies",
    description:
      "Our website uses cookies to improve your experience and analyze site traffic. You can disable cookies in your browser settings, but this may affect site functionality.",
  },
  {
    privacy: "Updates",
    description:
      "We reserve the right to update this Privacy Policy at any time. When we do, we will post a notification on our website. We encourage you to periodically review this page for the latest information on our privacy practices.",
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
