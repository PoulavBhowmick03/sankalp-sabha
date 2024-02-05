import { CiChat1 } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { GoLaw } from "react-icons/go";

import Link from "next/link";
export const navLinks = [
  {
    id: "/forum/proposals",
    title: "Home",
    href: "/forum/proposals",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: CiChat1,
    title: "Chat app",
    content:
      "A completely anonymous chat application for citizens to talk to anyone of their locality about pertaining issues",
  },
  {
    id: "feature-2",
    icon: CiBullhorn,
    title: "100% anonymous complaint raising",
    content:
      "A completely anonymous complaint raising section for people who are often afraid to raise a complaint because of their identities being revealed",
  },
  {
    id: "feature-3",
    icon: GoLaw,
    title: "Proposal System",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: GoLaw,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: GoLaw,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: GoLaw,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Chat application",
    value: "Private",
  },
  {
    id: "stats-2",
    title: "Complaint registration",
    value: "Anonymous",
  },
  {
    id: "stats-3",
    title: "System",
    value: "Proposal",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: GoLaw,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: GoLaw,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: GoLaw,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: GoLaw,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: GoLaw,
  },
  {
    id: "client-2",
    logo: GoLaw,
  },
  {
    id: "client-3",
    logo: GoLaw,
  },
  {
    id: "client-4",
    logo: GoLaw,
  },
];