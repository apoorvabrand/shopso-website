'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Critical rendering path optimization
export function CriticalRenderingPath() {
  useEffect(() => {
    // Optimize font loading
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      fontLinks.forEach(link => {
        (link as HTMLLinkElement).rel = 'preload';
        (link as HTMLLinkElement).setAttribute('as', 'style');
        (link as HTMLLinkElement).setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      });
    };

    // Optimize images with modern formats
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" if not already present
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        
        // Add fetchpriority for above-the-fold images
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          img.setAttribute('fetchpriority', 'high');
        }
      });
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/green-logo.png', as: 'image', type: 'image/png' },
        { href: '/favicon.ico', as: 'image', type: 'image/x-icon' },
        { href: '/dashboard-light.webp', as: 'image', type: 'image/webp' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        document.head.appendChild(link);
      });
    };

    optimizeFonts();
    optimizeImages();
    preloadCriticalResources();
  }, []);

  return null;
}

// Core Web Vitals optimization
export function CoreWebVitalsOptimizer() {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload hero images
      const heroImages = document.querySelectorAll('.hero-section img, .hero img');
      heroImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = (img as HTMLImageElement).src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Use requestIdleCallback for non-critical tasks
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          // Initialize non-critical features
          const nonCriticalScripts = document.querySelectorAll('script[data-non-critical]');
          nonCriticalScripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.getAttribute('src') || '';
            newScript.async = true;
            document.head.appendChild(newScript);
          });
        });
      }
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add aspect ratio to images without dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        imageElement.addEventListener('load', () => {
          const aspectRatio = imageElement.naturalWidth / imageElement.naturalHeight;
          imageElement.style.aspectRatio = aspectRatio.toString();
        });
      });

      // Reserve space for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic]');
      dynamicElements.forEach(element => {
        (element as HTMLElement).style.minHeight = '100px';
      });
    };

    optimizeLCP();
    optimizeFID();
    optimizeCLS();
  }, []);

  return null;
}

// Advanced caching and service worker
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}

// Schema.org markup for technical SEO
export function TechnicalSchemaMarkup() {
  const technicalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://shopso.com/#webpage",
        "url": "https://shopso.com",
        "name": "ShopSo - Shopify Analytics Platform",
        "isPartOf": {
          "@id": "https://shopso.com/#website"
        },
        "about": {
          "@id": "https://shopso.com/#organization"
        },
        "primaryImageOfPage": {
          "@id": "https://shopso.com/#primaryimage"
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@id": "https://shopso.com/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://shopso.com"]
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://shopso.com/#primaryimage",
        "inLanguage": "en-US",
        "url": "https://shopso.com/green-logo.png",
        "contentUrl": "https://shopso.com/green-logo.png",
        "width": 512,
        "height": 512,
        "caption": "ShopSo - Shopify Analytics Platform Logo"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://shopso.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shopso.com"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="technical-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(technicalSchema) }}
    />
  );
}

// Mobile-first optimization
export function MobileFirstOptimizer() {
  useEffect(() => {
    // Optimize for mobile viewport
    const optimizeMobileViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
        );
      }
    };

    // Touch-friendly interactions
    const optimizeTouchInteractions = () => {
      const buttons = document.querySelectorAll('button, a, [role="button"]');
      buttons.forEach(button => {
        const element = button as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // Ensure minimum touch target size (44px)
        if (rect.width < 44 || rect.height < 44) {
          element.style.minWidth = '44px';
          element.style.minHeight = '44px';
          element.style.display = 'inline-flex';
          element.style.alignItems = 'center';
          element.style.justifyContent = 'center';
        }
      });
    };

    // Optimize for mobile performance
    const optimizeMobilePerformance = () => {
      // Reduce animations on mobile for better performance
      if (window.innerWidth < 768) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
      }
      
      // Use passive event listeners for better scroll performance
      const scrollElements = document.querySelectorAll('[data-scroll]');
      scrollElements.forEach(element => {
        element.addEventListener('scroll', () => {}, { passive: true });
        element.addEventListener('touchstart', () => {}, { passive: true });
      });
    };

    optimizeMobileViewport();
    optimizeTouchInteractions();
    optimizeMobilePerformance();
  }, []);

  return null;
}

// Accessibility and SEO integration
export function AccessibilitySEO() {
  useEffect(() => {
    // Ensure proper heading hierarchy
    const fixHeadingHierarchy = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let currentLevel = 0;
      
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        
        // Warn about skipped heading levels (SEO issue)
        if (level > currentLevel + 1) {
          console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${currentLevel}`);
        }
        
        currentLevel = level;
      });
    };

    // Add missing alt attributes (critical for SEO)
    const addMissingAltAttributes = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        const src = (img as HTMLImageElement).src;
        const filename = src.split('/').pop()?.split('.')[0] || 'image';
        (img as HTMLImageElement).alt = `ShopSo ${filename.replace(/[-_]/g, ' ')}`;
      });
    };

    // Add ARIA labels for better accessibility and SEO
    const addARIALabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const text = button.textContent?.trim();
        if (text) {
          button.setAttribute('aria-label', text);
        }
      });
    };

    fixHeadingHierarchy();
    addMissingAltAttributes();
    addARIALabels();
  }, []);

  return null;
}
