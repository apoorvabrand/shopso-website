// Link validation utilities to prevent 404 errors

export interface LinkValidationResult {
  url: string;
  isValid: boolean;
  status: 'valid' | 'redirect' | 'broken' | 'external';
  redirectTo?: string;
  error?: string;
}

// Define all valid internal routes
export const validRoutes = [
  '/',
  '/aboutus',
  '/blog',
  '/career',
  '/contact',
  '/gallery',
  '/privacy-policy',
  '/terms-of-service',
  
  // Dynamic routes (these will be handled by the [slug] pages)
  '/products/shopify-analytics',
  '/products/marketing-integrations',
  '/products/analytics-dashboard',
  '/products/automated-reports',
  '/products/data-security',
  '/products/meta-ads',
  '/products/google-ads',
  '/products/klaviyo',
  
  '/services/shopify-analytics',
  '/services/platform-integrations',
  
  '/industries/ecommerce',
  '/industries/fashion',
  '/industries/retail',
];

// Define redirect mappings
export const redirectMappings: Record<string, string> = {
  '/services/analytics': '/services/shopify-analytics',
  '/services/integrations': '/services/platform-integrations',
  '/services/support': '/contact',
  '/products/shopify-integration': '/products/shopify-analytics',
  '/products/automated-reporting': '/products/automated-reports',
  '/about': '/aboutus',
  '/about-us': '/aboutus',
  '/careers': '/career',
  '/privacy': '/privacy-policy',
  '/terms': '/terms-of-service',
  '/dashboard': '/products/analytics-dashboard',
  '/analytics': '/products/shopify-analytics',
};

// Validate a single link
export function validateLink(url: string): LinkValidationResult {
  // Handle external links
  if (url.startsWith('http://') || url.startsWith('https://')) {
    if (!url.startsWith('https://shopso.com')) {
      return {
        url,
        isValid: true,
        status: 'external'
      };
    }
    // Remove domain for internal links
    url = url.replace('https://shopso.com', '');
  }

  // Handle anchor links and query parameters
  const cleanUrl = url.split('#')[0].split('?')[0];

  // Check if it's a valid route
  if (validRoutes.includes(cleanUrl)) {
    return {
      url,
      isValid: true,
      status: 'valid'
    };
  }

  // Check if it needs a redirect
  if (redirectMappings[cleanUrl]) {
    return {
      url,
      isValid: true,
      status: 'redirect',
      redirectTo: redirectMappings[cleanUrl]
    };
  }

  // Check for dynamic routes
  const dynamicRoutePatterns = [
    /^\/products\/[a-z-]+$/,
    /^\/services\/[a-z-]+$/,
    /^\/industries\/[a-z-]+$/,
    /^\/Timeline\/[a-z-]+$/,
  ];

  for (const pattern of dynamicRoutePatterns) {
    if (pattern.test(cleanUrl)) {
      return {
        url,
        isValid: true,
        status: 'valid'
      };
    }
  }

  // Link is broken
  return {
    url,
    isValid: false,
    status: 'broken',
    error: `Route ${cleanUrl} does not exist`
  };
}

// Validate multiple links
export function validateLinks(urls: string[]): LinkValidationResult[] {
  return urls.map(validateLink);
}

// Extract all links from HTML content
export function extractLinksFromHTML(html: string): string[] {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links: string[] = [];
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }

  return [...new Set(links)]; // Remove duplicates
}

// Generate a link validation report
export function generateLinkReport(urls: string[]): {
  total: number;
  valid: number;
  redirects: number;
  broken: number;
  external: number;
  details: LinkValidationResult[];
} {
  const results = validateLinks(urls);
  
  return {
    total: results.length,
    valid: results.filter(r => r.status === 'valid').length,
    redirects: results.filter(r => r.status === 'redirect').length,
    broken: results.filter(r => r.status === 'broken').length,
    external: results.filter(r => r.status === 'external').length,
    details: results
  };
}

// Common SEO-friendly link patterns
export const seoFriendlyLinks = {
  // Product pages
  products: {
    shopifyAnalytics: '/products/shopify-analytics',
    marketingIntegrations: '/products/marketing-integrations',
    analyticsDashboard: '/products/analytics-dashboard',
    automatedReports: '/products/automated-reports',
    dataSecurity: '/products/data-security',
    metaAds: '/products/meta-ads',
    googleAds: '/products/google-ads',
    klaviyo: '/products/klaviyo',
  },
  
  // Service pages
  services: {
    shopifyAnalytics: '/services/shopify-analytics',
    platformIntegrations: '/services/platform-integrations',
  },
  
  // Industry pages
  industries: {
    ecommerce: '/industries/ecommerce',
    fashion: '/industries/fashion',
    retail: '/industries/retail',
  },
  
  // Main pages
  main: {
    home: '/',
    about: '/aboutus',
    contact: '/contact',
    blog: '/blog',
    career: '/career',
    gallery: '/gallery',
    privacy: '/privacy-policy',
    terms: '/terms-of-service',
  }
};

// Helper function to get SEO-optimized link with title and aria-label
export function createSEOLink(
  href: string, 
  text: string, 
  description?: string
): {
  href: string;
  title: string;
  'aria-label': string;
} {
  const validation = validateLink(href);
  const finalHref = validation.status === 'redirect' ? validation.redirectTo! : href;
  
  return {
    href: finalHref,
    title: description || `Navigate to ${text}`,
    'aria-label': description || `Navigate to ${text} page`
  };
}
