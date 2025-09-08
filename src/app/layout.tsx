import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MyNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shopso.com"),
  title: {
    default: "ShopSo – Shopify Analytics Made Simple | Connect Marketing Tools & Track ROAS",
    template: "%s | ShopSo - Shopify Analytics Platform"
  },
  description: "Lightweight analytics platform for Shopify stores. Connect Meta Ads, Google Ads, Klaviyo & GA4. Get automated reports, track ROAS, and grow your business with simple insights.",
  applicationName: "ShopSo",
  keywords: [
    "Shopify analytics", "Shopify dashboard", "Meta Ads ROAS", "Google Ads tracking", 
    "Klaviyo integration", "e-commerce analytics", "Shopify reports", "marketing attribution", 
    "Shopify metrics", "store analytics", "revenue tracking", "customer analytics", 
    "automated reports", "Slack integration", "Shopify business intelligence", "e-commerce insights",
    "Shopify performance tracking", "marketing ROI", "customer lifetime value", "conversion tracking"
  ],
  authors: [{ name: "ShopSo", url: "https://shopso.com" }],
  creator: "ShopSo",
  publisher: "ShopSo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Business Software",

  alternates: {
    canonical: "https://shopso.com",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: "ShopSo – Shopify Analytics Made Simple",
    description: "Connect your Shopify store with Meta Ads, Google Ads, and Klaviyo. Get simple, actionable insights with automated reports and real-time ROAS tracking.",
    url: "https://shopso.com",
    siteName: "ShopSo",
    images: [
      {
        url: "https://shopso.com/green-logo.png",
        width: 1200,
        height: 630,
        alt: "ShopSo – Shopify Analytics Platform",
      },
      {
        url: "https://shopso.com/logo.png",
        width: 512,
        height: 512,
        alt: "ShopSo Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "ShopSo – Shopify Analytics Made Simple",
    description: "Connect your Shopify store with marketing tools. Track ROAS, get automated reports, and grow your business with simple insights.",
    images: ["https://shopso.com/green-logo.png"],
    site: "@ShopSoOfficial",
    creator: "@ShopSoOfficial",
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  
  verification: {
    google: "your-google-verification-code", // Add your actual Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#7c3aed" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://shopso.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/green-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        
        {/* Critical CSS optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .navbar-text { font-display: block; }
            .hero-text { font-display: block; }
            img { font-display: block; }
            /* Critical above-the-fold styles */
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          `
        }} />
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YLHBGST7H3"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YLHBGST7H3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1508534101075098"
     crossOrigin="anonymous"></script>
        
        {/* Enhanced Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://shopso.com/#organization",
                  "name": "ShopSo",
                  "url": "https://shopso.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://shopso.com/green-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Lightweight analytics platform for Shopify stores. Connect Meta Ads, Google Ads, Klaviyo & GA4.",
                  "sameAs": [
                    "https://twitter.com/ShopSoOfficial"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "url": "https://shopso.com/contact",
                    "email": "info@shopso.apoorvaverma.in"
                  },
                  "foundingDate": "2024",
                  "numberOfEmployees": "2-10",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://shopso.com/#website",
                  "url": "https://shopso.com",
                  "name": "ShopSo",
                  "description": "Shopify Analytics Made Simple - Connect Marketing Tools & Track ROAS",
                  "publisher": {
                    "@id": "https://shopso.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://shopso.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "ShopSo Analytics Platform",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web Browser",
                  "url": "https://shopso.com",
                  "description": "Analytics platform for Shopify stores with Meta Ads, Google Ads, and Klaviyo integration.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "150",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "featureList": [
                    "Shopify Analytics Dashboard",
                    "Meta Ads Integration", 
                    "Google Ads Tracking",
                    "Klaviyo Email Analytics",
                    "ROAS Tracking",
                    "Automated Reports",
                    "Real-time Data Sync"
                  ]
                },
                {
                  "@type": "Service",
                  "name": "Shopify Analytics Services",
                  "provider": {
                    "@id": "https://shopso.com/#organization"
                  },
                  "description": "Professional Shopify analytics and marketing attribution services",
                  "serviceType": "Analytics Platform",
                  "areaServed": "Worldwide",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "ShopSo Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Shopify Analytics Dashboard"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Marketing Attribution Tracking"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        
        {/* Breadcrumb Schema for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://shopso.com"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <MyNavbar />
          <BreadcrumbNavigation />
          {children}
          <Footer />
          <Analytics /> {/* Vercel Analytics */}
          <PerformanceOptimizer />
        </ThemeProvider>
      </body>
    </html>
  );
}