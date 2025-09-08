import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enhanced image optimization for better SEO and performance
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    domains: ['images.pexels.com', 'images.unsplash.com', 'shopso.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion', '@radix-ui/react-accordion', '@radix-ui/react-tabs'],
    optimizeCss: false, // Disable to avoid critters dependency issues
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  
  // External packages for server components
  serverExternalPackages: ['web-vitals'],
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Compression and caching
  compress: true,
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO (prevent 404 errors)
  async redirects() {
    return [
      // Service page redirects
      {
        source: '/services/analytics',
        destination: '/services/shopify-analytics',
        permanent: true,
      },
      {
        source: '/services/integrations',
        destination: '/services/platform-integrations',
        permanent: true,
      },
      {
        source: '/services/support',
        destination: '/contact',
        permanent: true,
      },
      
      // Product page redirects
      {
        source: '/products/shopify-integration',
        destination: '/products/shopify-analytics',
        permanent: true,
      },
      {
        source: '/products/automated-reporting',
        destination: '/products/automated-reports',
        permanent: true,
      },
      
      // Integration redirects
      {
        source: '/integrations/:path*',
        destination: '/products/:path*',
        permanent: true,
      },
      {
        source: '/features/:path*',
        destination: '/products/:path*',
        permanent: true,
      },
      
      // Common typos and variations
      {
        source: '/about',
        destination: '/aboutus',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/aboutus',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      
      // Legacy URLs (if you had any old structure)
      {
        source: '/dashboard',
        destination: '/products/analytics-dashboard',
        permanent: true,
      },
      {
        source: '/analytics',
        destination: '/products/shopify-analytics',
        permanent: true,
      },
    ]
  },
  
  // Enable trailing slash for consistency
  trailingSlash: false,
  
  // PoweredByHeader removal for security
  poweredByHeader: false,
};

export default nextConfig;