import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ShopSo Insights & E-commerce Analytics Tips",
  description: "Discover the latest insights on Shopify analytics, e-commerce optimization, and digital marketing strategies from ShopSo's expert team.",
  keywords: [
    "Shopify blog", "e-commerce analytics", "digital marketing tips", "Shopify optimization", 
    "analytics insights", "e-commerce strategies", "ROAS optimization", "marketing automation"
  ],
  openGraph: {
    title: "ShopSo Blog - E-commerce Analytics Insights",
    description: "Get expert insights on Shopify analytics, e-commerce optimization, and digital marketing strategies.",
    url: "https://shopso.com/blog",
    type: "website",
    images: [
      {
        url: "https://shopso.com/green-logo.png",
        width: 1200,
        height: 630,
        alt: "ShopSo Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopSo Blog - E-commerce Analytics Insights",
    description: "Get expert insights on Shopify analytics and e-commerce optimization.",
  },
  alternates: {
    canonical: "https://shopso.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
