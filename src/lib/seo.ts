// SEO utility functions and constants

export const seoConfig = {
  defaultTitle: "ShopSo – Shopify Analytics Made Simple | Connect Marketing Tools & Track ROAS",
  defaultDescription: "Lightweight analytics platform for Shopify stores. Connect Meta Ads, Google Ads, Klaviyo & GA4. Get automated reports, track ROAS, and grow your business with simple insights.",
  siteUrl: "https://shopso.com",
  siteName: "ShopSo",
  twitterHandle: "@ShopSoOfficial",
  defaultImage: "https://shopso.com/green-logo.png",
  defaultImageAlt: "ShopSo – Shopify Analytics Platform",
};

export const generatePageMetadata = ({
  title,
  description,
  path = "",
  image = seoConfig.defaultImage,
  imageAlt = seoConfig.defaultImageAlt,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
}) => {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullUrl = `${seoConfig.siteUrl}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
};

// Structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${seoConfig.siteUrl}/#organization`,
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  logo: {
    "@type": "ImageObject",
    url: seoConfig.defaultImage,
    width: 512,
    height: 512,
  },
  description: seoConfig.defaultDescription,
  sameAs: [
    `https://twitter.com/${seoConfig.twitterHandle.replace('@', '')}`,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${seoConfig.siteUrl}/contact`,
  },
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${seoConfig.siteUrl}/#website`,
  url: seoConfig.siteUrl,
  name: seoConfig.siteName,
  description: seoConfig.defaultDescription,
  publisher: {
    "@id": `${seoConfig.siteUrl}/#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
});

export const generateSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ShopSo Analytics Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  description: "Analytics platform for Shopify stores with Meta Ads, Google Ads, and Klaviyo integration.",
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateArticleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "ShopSo Team",
  image = seoConfig.defaultImage,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  url: url,
  datePublished: datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@id": `${seoConfig.siteUrl}/#organization`,
  },
  image: {
    "@type": "ImageObject",
    url: image,
    width: 1200,
    height: 630,
  },
});

// SEO-friendly URL slug generator
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Meta keywords generator (use sparingly, most search engines ignore them)
export const generateKeywords = (baseKeywords: string[], pageSpecific: string[] = []): string[] => {
  const defaultKeywords = [
    "Shopify analytics",
    "e-commerce analytics",
    "Shopify dashboard",
    "ROAS tracking",
    "marketing attribution",
  ];
  
  return [...new Set([...defaultKeywords, ...baseKeywords, ...pageSpecific])];
};
