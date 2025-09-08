import Script from 'next/script';

// Local Business Schema for better local SEO
export function LocalBusinessSchema({
  businessName = "ShopSo",
  description = "Shopify Analytics Platform for E-commerce Businesses",
  address,
  phone,
  email = "info@shopso.apoorvaverma.in",
  website = "https://shopso.com",
  businessType = "SoftwareCompany",
  serviceArea = "Worldwide",
  openingHours,
  socialProfiles = ["https://twitter.com/ShopSoOfficial"]
}: {
  businessName?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  businessType?: string;
  serviceArea?: string;
  openingHours?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  socialProfiles?: string[];
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": businessType,
    "name": businessName,
    "description": description,
    "url": website,
    "logo": {
      "@type": "ImageObject",
      "url": `${website}/green-logo.png`,
      "width": 512,
      "height": 512
    },
    "image": `${website}/green-logo.png`,
    "telephone": phone,
    "email": email,
    "sameAs": socialProfiles,
    "areaServed": {
      "@type": "Place",
      "name": serviceArea
    },
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      }
    }),
    ...(openingHours && {
      "openingHoursSpecification": openingHours.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.dayOfWeek,
        "opens": hours.opens,
        "closes": hours.closes
      }))
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ShopSo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Analytics Platform",
            "description": "Comprehensive analytics solution for Shopify stores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Integration Services",
            "description": "Connect Meta Ads, Google Ads, and Klaviyo with Shopify"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ROAS Tracking & Optimization",
            "description": "Advanced return on ad spend tracking and optimization"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

// Professional Service Schema
export function ProfessionalServiceSchema({
  serviceName,
  description,
  provider = "ShopSo",
  areaServed = "Worldwide",
  serviceType = "Analytics Consulting",
  category = "Business Intelligence"
}: {
  serviceName: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
  category?: string;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://shopso.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    },
    "serviceType": serviceType,
    "category": category,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Options`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Analytics Setup",
            "description": "Essential Shopify analytics configuration"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Integration",
            "description": "Full marketing platform integration"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Script
      id="professional-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

// Contact Point Schema
export function ContactPointSchema({
  contactType = "customer service",
  telephone,
  email = "info@shopso.apoorvaverma.in",
  url = "https://shopso.com/contact",
  availableLanguage = ["English"],
  hoursAvailable
}: {
  contactType?: string;
  telephone?: string;
  email?: string;
  url?: string;
  availableLanguage?: string[];
  hoursAvailable?: {
    opens: string;
    closes: string;
    dayOfWeek: string[];
  };
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": contactType,
    "email": email,
    "url": url,
    "availableLanguage": availableLanguage,
    ...(telephone && { "telephone": telephone }),
    ...(hoursAvailable && {
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "opens": hoursAvailable.opens,
        "closes": hoursAvailable.closes,
        "dayOfWeek": hoursAvailable.dayOfWeek
      }
    })
  };

  return (
    <Script
      id="contact-point-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
}

// Geographic targeting for local SEO
export function GeographicSEO({
  targetLocations,
  businessLocation
}: {
  targetLocations: string[];
  businessLocation?: {
    city: string;
    state: string;
    country: string;
  };
}) {
  // Generate location-based keywords
  const locationKeywords = targetLocations.flatMap(location => [
    `Shopify analytics ${location}`,
    `e-commerce consulting ${location}`,
    `ROAS optimization ${location}`,
    `digital marketing analytics ${location}`
  ]);

  const geoTargetingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Analytics Services",
    "provider": {
      "@type": "Organization",
      "name": "ShopSo"
    },
    "areaServed": targetLocations.map(location => ({
      "@type": "Place",
      "name": location
    })),
    "availableAtOrFrom": businessLocation ? {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": businessLocation.city,
        "addressRegion": businessLocation.state,
        "addressCountry": businessLocation.country
      }
    } : undefined
  };

  return (
    <>
      <Script
        id="geo-targeting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoTargetingSchema) }}
      />
      
      {/* Hidden location keywords for SEO (not visible to users) */}
      <div className="sr-only" aria-hidden="true">
        <p>
          ShopSo provides Shopify analytics services in {targetLocations.join(', ')}. 
          Our e-commerce analytics platform serves businesses worldwide with 
          specialized support for {locationKeywords.slice(0, 5).join(', ')}.
        </p>
      </div>
    </>
  );
}
