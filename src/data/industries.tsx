export const industriesData = {
  "fashion-apparel": {
    name: "Fashion & Apparel",
    tagline: "Analytics for fashion brands and clothing stores",
    description: "Track seasonal trends, size analytics, and customer preferences for fashion and apparel Shopify stores.",
    image: "/ind1.png",
    metrics: [
      "Seasonal sales patterns and trend analysis",
      "Size and color preference analytics",
      "Customer lifetime value by fashion category",
      "Return rates and exchange analytics"
    ],
    integrations: [
      "Instagram Shopping integration",
      "Pinterest advertising tracking",
      "Influencer campaign attribution",
      "Email marketing for fashion trends"
    ]
  },
  "electronics-tech": {
    name: "Electronics & Tech",
    tagline: "Advanced analytics for tech and electronics retailers",
    description: "Monitor product lifecycles, warranty analytics, and tech customer behavior patterns.",
    image: "/ind2.png",
    metrics: [
      "Product lifecycle and replacement patterns",
      "Warranty and support cost analysis",
      "Tech specs preference tracking",
      "Cross-sell and upsell opportunities"
    ],
    integrations: [
      "Google Shopping integration",
      "YouTube advertising tracking",
      "Tech review platform monitoring",
      "B2B customer segmentation"
    ]
  },
  "health-beauty": {
    name: "Health & Beauty",
    tagline: "Specialized analytics for beauty and wellness brands",
    description: "Track subscription patterns, ingredient preferences, and beauty customer journey analytics.",
    image: "/ind3.png",
    metrics: [
      "Subscription and repeat purchase patterns",
      "Ingredient and formulation preferences",
      "Skin type and beauty profile analytics",
      "Seasonal beauty trend tracking"
    ],
    integrations: [
      "Subscription app integrations",
      "Beauty influencer tracking",
      "Social media beauty campaigns",
      "Personalized product recommendations"
    ]
  },
  "home-garden": {
    name: "Home & Garden",
    tagline: "Analytics for home improvement and garden retailers",
    description: "Monitor seasonal patterns, project-based purchases, and home improvement customer behavior.",
    image: "/ind4.png",
    metrics: [
      "Seasonal gardening and home improvement trends",
      "Project-based purchase patterns",
      "Room and space category analytics",
      "DIY vs professional customer segments"
    ],
    integrations: [
      "Pinterest home inspiration tracking",
      "Seasonal marketing automation",
      "Local market and weather integration",
      "Home improvement project tracking"
    ]
  },
  "food-beverage": {
    name: "Food & Beverage",
    tagline: "Analytics for food and beverage e-commerce",
    description: "Track dietary preferences, subscription patterns, and food customer behavior analytics.",
    image: "/ind5.png",
    metrics: [
      "Dietary preference and restriction tracking",
      "Subscription and repeat order patterns",
      "Seasonal food and beverage trends",
      "Local and regional taste preferences"
    ],
    integrations: [
      "Subscription and recurring order apps",
      "Local delivery service integration",
      "Food blogger and influencer tracking",
      "Nutritional preference analytics"
    ]
  },
  "sports-outdoors": {
    name: "Sports & Outdoors",
    tagline: "Analytics for sports and outdoor recreation brands",
    description: "Monitor seasonal sports trends, equipment lifecycles, and outdoor activity customer patterns.",
    image: "/ind6.png",
    metrics: [
      "Seasonal sports and activity trends",
      "Equipment replacement and upgrade cycles",
      "Activity level and intensity analytics",
      "Geographic and climate-based preferences"
    ],
    integrations: [
      "Fitness app and wearable integration",
      "Seasonal sports marketing automation",
      "Outdoor activity and weather tracking",
      "Sports influencer campaign attribution"
    ]
  }
} as const;

export type IndustrySlug = keyof typeof industriesData;