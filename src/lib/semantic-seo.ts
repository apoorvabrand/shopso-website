// Semantic SEO utilities for entity optimization and topic clustering

export interface EntityData {
  name: string;
  type: 'Product' | 'Service' | 'Technology' | 'Company' | 'Concept';
  description: string;
  relatedEntities: string[];
  keywords: string[];
}

// Core entities for ShopSo
export const coreEntities: EntityData[] = [
  {
    name: 'Shopify',
    type: 'Technology',
    description: 'E-commerce platform for online stores and retail point-of-sale systems',
    relatedEntities: ['E-commerce', 'Online Store', 'Retail', 'Analytics'],
    keywords: ['shopify store', 'shopify platform', 'shopify analytics', 'shopify dashboard']
  },
  {
    name: 'Meta Ads',
    type: 'Service',
    description: 'Facebook and Instagram advertising platform for businesses',
    relatedEntities: ['Facebook', 'Instagram', 'Social Media Marketing', 'ROAS'],
    keywords: ['facebook ads', 'instagram ads', 'meta advertising', 'social media ads']
  },
  {
    name: 'Google Ads',
    type: 'Service',
    description: 'Google\'s online advertising platform for search and display marketing',
    relatedEntities: ['Google', 'Search Marketing', 'PPC', 'AdWords'],
    keywords: ['google adwords', 'ppc advertising', 'search ads', 'google marketing']
  },
  {
    name: 'Klaviyo',
    type: 'Technology',
    description: 'Email marketing and automation platform for e-commerce businesses',
    relatedEntities: ['Email Marketing', 'Marketing Automation', 'Customer Segmentation'],
    keywords: ['email marketing', 'marketing automation', 'customer emails', 'email campaigns']
  },
  {
    name: 'ROAS',
    type: 'Concept',
    description: 'Return on Advertising Spend - key metric for measuring advertising effectiveness',
    relatedEntities: ['ROI', 'Marketing Metrics', 'Advertising Performance', 'Revenue'],
    keywords: ['return on ad spend', 'advertising roi', 'marketing metrics', 'ad performance']
  },
  {
    name: 'E-commerce Analytics',
    type: 'Concept',
    description: 'Data analysis and insights for online retail businesses',
    relatedEntities: ['Business Intelligence', 'Data Analytics', 'KPIs', 'Metrics'],
    keywords: ['ecommerce data', 'online store analytics', 'retail metrics', 'sales analytics']
  }
];

// Topic clusters for content organization
export interface TopicCluster {
  pillarPage: {
    title: string;
    url: string;
    description: string;
  };
  clusterPages: Array<{
    title: string;
    url: string;
    keywords: string[];
    intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  }>;
}

export const topicClusters: TopicCluster[] = [
  {
    pillarPage: {
      title: 'Complete Guide to Shopify Analytics',
      url: '/guides/shopify-analytics',
      description: 'Everything you need to know about Shopify analytics, metrics, and optimization'
    },
    clusterPages: [
      {
        title: 'How to Set Up Shopify Analytics',
        url: '/guides/shopify-analytics/setup',
        keywords: ['shopify analytics setup', 'configure shopify tracking'],
        intent: 'informational'
      },
      {
        title: 'Top 10 Shopify Metrics to Track',
        url: '/guides/shopify-analytics/metrics',
        keywords: ['shopify kpis', 'ecommerce metrics', 'shopify reporting'],
        intent: 'informational'
      },
      {
        title: 'Shopify Analytics Tools Comparison',
        url: '/guides/shopify-analytics/tools',
        keywords: ['shopify analytics tools', 'best shopify apps'],
        intent: 'commercial'
      }
    ]
  },
  {
    pillarPage: {
      title: 'ROAS Optimization Guide',
      url: '/guides/roas-optimization',
      description: 'Master ROAS tracking and optimization for better advertising performance'
    },
    clusterPages: [
      {
        title: 'What is ROAS and How to Calculate It',
        url: '/guides/roas-optimization/calculate',
        keywords: ['roas calculation', 'return on ad spend formula'],
        intent: 'informational'
      },
      {
        title: 'Improve Your ROAS: 15 Proven Strategies',
        url: '/guides/roas-optimization/strategies',
        keywords: ['improve roas', 'increase ad performance'],
        intent: 'informational'
      },
      {
        title: 'ROAS Tracking Tools for E-commerce',
        url: '/guides/roas-optimization/tools',
        keywords: ['roas tracking software', 'ad performance tools'],
        intent: 'commercial'
      }
    ]
  }
];

// Generate semantic keywords based on entities
export function generateSemanticKeywords(primaryKeyword: string, entities: EntityData[]): string[] {
  const semanticKeywords: string[] = [];
  
  entities.forEach(entity => {
    // Add entity-related keywords
    entity.keywords.forEach(keyword => {
      semanticKeywords.push(`${primaryKeyword} ${keyword}`);
      semanticKeywords.push(`${keyword} ${primaryKeyword}`);
    });
    
    // Add related entity combinations
    entity.relatedEntities.forEach(relatedEntity => {
      semanticKeywords.push(`${primaryKeyword} ${relatedEntity.toLowerCase()}`);
    });
  });
  
  return [...new Set(semanticKeywords)]; // Remove duplicates
}

// Generate FAQ questions based on entities and search intent
export function generateEntityFAQs(entity: EntityData): Array<{question: string; answer: string}> {
  const faqs = [];
  
  // What questions
  faqs.push({
    question: `What is ${entity.name}?`,
    answer: entity.description
  });
  
  // How questions
  if (entity.type === 'Technology' || entity.type === 'Service') {
    faqs.push({
      question: `How does ${entity.name} work with ShopSo?`,
      answer: `ShopSo integrates seamlessly with ${entity.name} to provide comprehensive analytics and insights for your e-commerce business.`
    });
  }
  
  // Why questions
  faqs.push({
    question: `Why should I use ${entity.name} for my Shopify store?`,
    answer: `${entity.name} helps optimize your e-commerce performance by providing valuable insights into ${entity.relatedEntities.join(', ').toLowerCase()}.`
  });
  
  return faqs;
}

// Voice search optimization
export const voiceSearchOptimization = {
  // Common voice search patterns
  patterns: [
    'how to',
    'what is',
    'why should',
    'where can I',
    'when should I',
    'best way to',
    'how do I'
  ],
  
  // Generate voice-friendly content
  generateVoiceQuestions: (topic: string) => [
    `How to set up ${topic}?`,
    `What is the best ${topic} for Shopify?`,
    `Why should I use ${topic}?`,
    `Where can I find ${topic} analytics?`,
    `When should I optimize my ${topic}?`,
    `What's the best way to track ${topic}?`
  ],
  
  // Conversational keywords
  conversationalKeywords: [
    'near me',
    'for beginners',
    'step by step',
    'easy way',
    'quick guide',
    'best practices',
    'tips and tricks'
  ]
};

// Featured snippet optimization
export const featuredSnippetOptimization = {
  // Structure content for featured snippets
  structureForSnippets: {
    definition: (term: string, definition: string) => ({
      format: 'paragraph',
      content: `${term} is ${definition}`,
      wordCount: 40-50
    }),
    
    list: (title: string, items: string[]) => ({
      format: 'list',
      content: {
        title: title,
        items: items.slice(0, 8) // Google typically shows 8 items
      }
    }),
    
    table: (headers: string[], rows: string[][]) => ({
      format: 'table',
      content: {
        headers,
        rows: rows.slice(0, 5) // Limit to 5 rows for snippets
      }
    }),
    
    steps: (title: string, steps: string[]) => ({
      format: 'steps',
      content: {
        title: title,
        steps: steps.map((step, index) => `${index + 1}. ${step}`)
      }
    })
  }
};

// Local SEO optimization (if applicable)
export const localSEOOptimization = {
  // Location-based keywords
  locationKeywords: [
    'shopify analytics service',
    'ecommerce consulting',
    'digital marketing analytics',
    'online store optimization'
  ],
  
  // Business categories
  businessCategories: [
    'Software Company',
    'Analytics Service',
    'E-commerce Consultant',
    'Digital Marketing Agency'
  ]
};
