import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ShopSo Team & Company Information",
  description: "Learn about ShopSo's mission to simplify Shopify analytics. Meet our team of experts dedicated to helping e-commerce businesses grow with data-driven insights.",
  keywords: [
    "ShopSo team", "about ShopSo", "company information", "Shopify analytics experts", 
    "e-commerce analytics team", "digital transformation", "automation experts"
  ],
  openGraph: {
    title: "About ShopSo - Shopify Analytics Experts",
    description: "Meet the team behind ShopSo's innovative Shopify analytics platform. Learn about our mission to help e-commerce businesses grow.",
    url: "https://shopso.com/aboutus",
    type: "website",
    images: [
      {
        url: "https://shopso.com/green-logo.png",
        width: 1200,
        height: 630,
        alt: "ShopSo About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ShopSo - Shopify Analytics Experts",
    description: "Meet the team behind ShopSo's innovative Shopify analytics platform.",
  },
  alternates: {
    canonical: "https://shopso.com/aboutus",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
