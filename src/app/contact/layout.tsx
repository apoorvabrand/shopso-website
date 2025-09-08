import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with ShopSo",
  description: "Contact ShopSo for Shopify analytics support, questions, or custom solutions. Get in touch with our team of e-commerce experts today.",
  keywords: [
    "contact ShopSo", "Shopify analytics support", "e-commerce help", "customer support", 
    "get in touch", "ShopSo contact", "analytics questions", "technical support"
  ],
  openGraph: {
    title: "Contact ShopSo - Get Expert Shopify Analytics Help",
    description: "Need help with Shopify analytics? Contact our team of experts for support, questions, or custom solutions.",
    url: "https://shopso.com/contact",
    type: "website",
    images: [
      {
        url: "https://shopso.com/green-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact ShopSo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ShopSo - Get Expert Shopify Analytics Help",
    description: "Need help with Shopify analytics? Contact our team of experts.",
  },
  alternates: {
    canonical: "https://shopso.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
