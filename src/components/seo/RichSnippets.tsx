import Script from 'next/script';

// Article Schema for blog posts and guides
export function ArticleSchema({
  headline,
  description,
  author = "ShopSo Team",
  datePublished,
  dateModified,
  url,
  image,
  category = "E-commerce Analytics"
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  category?: string;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://shopso.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ShopSo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shopso.com/green-logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": [
      "Shopify analytics",
      "e-commerce optimization",
      "ROAS tracking",
      "marketing attribution",
      "business intelligence"
    ],
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      }
    })
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

// Product Schema for software/service pages
export function ProductSchema({
  name,
  description,
  price = "0",
  currency = "USD",
  availability = "https://schema.org/InStock",
  rating = 4.8,
  reviewCount = 150,
  features,
  category = "Software Application"
}: {
  name: string;
  description: string;
  price?: string;
  currency?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
  features?: string[];
  category?: string;
}) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "ShopSo"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "ShopSo"
    },
    "category": category,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": availability,
      "seller": {
        "@type": "Organization",
        "name": "ShopSo"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    ...(features && {
      "additionalProperty": features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
      }))
    })
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

// Event Schema for webinars, demos, etc.
export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer = "ShopSo",
  eventType = "BusinessEvent",
  isOnline = true
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  organizer?: string;
  eventType?: string;
  isOnline?: boolean;
}) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    ...(endDate && { "endDate": endDate }),
    "eventAttendanceMode": isOnline 
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": isOnline ? {
      "@type": "VirtualLocation",
      "url": "https://shopso.com"
    } : {
      "@type": "Place",
      "name": location || "ShopSo Office",
      "address": location
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer,
      "url": "https://shopso.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}

// JobPosting Schema for career pages
export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType = "FULL_TIME",
  location = "Remote",
  salary
}: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  location?: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}) {
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "datePosted": datePosted,
    ...(validThrough && { "validThrough": validThrough }),
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ShopSo",
      "sameAs": "https://shopso.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressCountry": "US"
      }
    },
    ...(salary && {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": salary.currency,
        "value": {
          "@type": "QuantitativeValue",
          "minValue": salary.min,
          "maxValue": salary.max,
          "unitText": "YEAR"
        }
      }
    })
  };

  return (
    <Script
      id="job-posting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
    />
  );
}

// Rating Schema for testimonials and reviews
export function RatingSchema({
  itemName,
  ratingValue,
  bestRating = 5,
  worstRating = 1,
  author,
  reviewBody,
  datePublished
}: {
  itemName: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  author: string;
  reviewBody: string;
  datePublished: string;
}) {
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": itemName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue,
      "bestRating": bestRating,
      "worstRating": worstRating
    },
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewBody": reviewBody,
    "datePublished": datePublished
  };

  return (
    <Script
      id="rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
    />
  );
}

// SearchAction Schema for site search
export function SearchActionSchema() {
  const searchSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://shopso.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://shopso.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="search-action-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSchema) }}
    />
  );
}
