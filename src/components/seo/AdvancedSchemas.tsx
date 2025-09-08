import Script from 'next/script';

// Review Schema Component
export function ReviewSchema({ 
  itemName, 
  rating, 
  reviewCount, 
  reviews 
}: {
  itemName: string;
  rating: number;
  reviewCount: number;
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    datePublished: string;
  }>;
}) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.datePublished
    }))
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}

// Local Business Schema (if applicable)
export function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShopSo",
    "description": "Shopify Analytics Platform for E-commerce Businesses",
    "url": "https://shopso.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "ShopSo",
      "url": "https://shopso.com"
    },
    "datePublished": "2024-01-01",
    "softwareVersion": "1.0",
    "downloadUrl": "https://shopso.com",
    "screenshot": "https://shopso.com/dashboard-light.webp",
    "featureList": [
      "Real-time Shopify Analytics",
      "Meta Ads Integration",
      "Google Ads Tracking", 
      "Klaviyo Email Analytics",
      "ROAS Optimization",
      "Automated Reporting",
      "Customer Lifetime Value Tracking",
      "Marketing Attribution"
    ],
    "applicationSubCategory": "Analytics Software",
    "requirements": "Modern Web Browser",
    "memoryRequirements": "512MB",
    "storageRequirements": "100MB"
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

// Course/Tutorial Schema for educational content
export function CourseSchema({
  name,
  description,
  provider,
  url
}: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://shopso.com"
    },
    "url": url,
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "Shopify Analytics",
      "E-commerce Metrics",
      "ROAS Optimization",
      "Marketing Attribution"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "Business Owner"
    }
  };

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
}

// Video Schema for video content
export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "contentUrl": contentUrl,
    "embedUrl": contentUrl,
    "publisher": {
      "@type": "Organization",
      "name": "ShopSo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shopso.com/green-logo.png"
      }
    }
  };

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}
