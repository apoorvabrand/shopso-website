'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/green-logo.png',
        '/dashboard-light.webp',
        '/dashboard-dark.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Prefetch important pages on hover
    const prefetchOnHover = () => {
      const importantLinks = document.querySelectorAll('a[href^="/"]');
      
      importantLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = (link as HTMLAnchorElement).href;
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const delayedScripts = [
        'https://www.googletagmanager.com/gtag/js',
      ];

      const loadDelayedScripts = () => {
        delayedScripts.forEach(src => {
          if (!document.querySelector(`script[src*="${src}"]`)) {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
          }
        });
      };

      // Load after user interaction or 3 seconds
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      const loadScriptsOnce = () => {
        loadDelayedScripts();
        events.forEach(event => {
          document.removeEventListener(event, loadScriptsOnce);
        });
      };

      events.forEach(event => {
        document.addEventListener(event, loadScriptsOnce, { passive: true } as AddEventListenerOptions);
      });

      setTimeout(loadDelayedScripts, 3000);
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    prefetchOnHover();
    optimizeThirdPartyScripts();

    // Web Vitals reporting
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Report Core Web Vitals to analytics
      const reportWebVitals = (metric: any) => {
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }
      };

      // Dynamic import for web-vitals with better error handling
      const loadWebVitals = async () => {
        try {
          // TODO: Fix web-vitals import for newer version
          // const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
          // if (onCLS) onCLS(reportWebVitals);
          // if (onFID) onFID(reportWebVitals);
          // if (onFCP) onFCP(reportWebVitals);
          // if (onLCP) onLCP(reportWebVitals);
          // if (onTTFB) onTTFB(reportWebVitals);
          throw new Error('Web vitals temporarily disabled');
        } catch (error) {
          // Fallback if web-vitals is not available
          console.log('Web Vitals library not available:', error);
          
          // Manual Core Web Vitals tracking as fallback
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                reportWebVitals({
                  name: 'LCP',
                  value: entry.startTime,
                  id: 'manual-lcp'
                });
              }
            }
          });
          
          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.log('Performance Observer not supported');
          }
        }
      };

      loadWebVitals();
    }
  }, []);

  return null; // This component doesn't render anything
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
