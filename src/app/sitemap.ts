import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shopso.com'
  const currentDate = new Date()
  
  // High priority pages (homepage and key landing pages)
  const highPriorityRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ]

  // Medium priority pages (main content pages)
  const mediumPriorityRoutes = [
    '/aboutus',
    '/blog', 
    '/gallery',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Lower priority pages (legal, etc.)
  const lowPriorityRoutes = [
    '/privacy-policy',
    '/terms-of-service',
    '/career',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  // Dynamic product/service pages (high SEO value)
  const productServiceRoutes = [
    {
      url: `${baseUrl}/products/shopify-analytics`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/marketing-integrations`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/analytics-dashboard`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/automated-reports`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/data-security`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/shopify-analytics`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/platform-integrations`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Industry-specific pages for better targeting
  const industryRoutes = [
    {
      url: `${baseUrl}/industries/ecommerce`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/fashion`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/retail`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [
    ...highPriorityRoutes,
    ...mediumPriorityRoutes,
    ...lowPriorityRoutes,
    ...productServiceRoutes,
    ...industryRoutes,
  ]
}
