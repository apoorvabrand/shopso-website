// Advanced Content SEO utilities with LSI keywords and semantic optimization

export interface LSIKeywordGroup {
  primary: string;
  lsi: string[];
  semantic: string[];
  longtail: string[];
  questions: string[];
}

// LSI (Latent Semantic Indexing) Keywords for better content optimization
export const lsiKeywordGroups: LSIKeywordGroup[] = [
  {
    primary: "Shopify analytics",
    lsi: [
      "e-commerce tracking",
      "store performance metrics",
      "sales data analysis",
      "customer behavior insights",
      "conversion rate optimization",
      "revenue attribution",
      "business intelligence dashboard"
    ],
    semantic: [
      "Shopify store optimization",
      "e-commerce business growth",
      "online retail analytics",
      "digital commerce insights",
      "merchant performance tracking"
    ],
    longtail: [
      "best Shopify analytics tools 2024",
      "how to track Shopify store performance",
      "Shopify analytics dashboard setup",
      "improve Shopify conversion rates",
      "Shopify sales tracking software"
    ],
    questions: [
      "How to analyze Shopify store performance?",
      "What are the best Shopify analytics metrics?",
      "How to improve Shopify conversion rates?",
      "Which Shopify analytics tools are most effective?"
    ]
  },
  {
    primary: "ROAS tracking",
    lsi: [
      "return on advertising spend",
      "ad performance measurement",
      "marketing ROI calculation",
      "campaign effectiveness",
      "advertising efficiency",
      "marketing attribution modeling",
      "ad spend optimization"
    ],
    semantic: [
      "advertising return analysis",
      "marketing investment tracking",
      "campaign profitability measurement",
      "ad performance optimization",
      "marketing budget allocation"
    ],
    longtail: [
      "how to calculate ROAS for Shopify",
      "improve Facebook ads ROAS",
      "Google Ads ROAS optimization",
      "best ROAS tracking tools",
      "ROAS benchmarks for e-commerce"
    ],
    questions: [
      "What is a good ROAS for e-commerce?",
      "How to improve ROAS on Facebook ads?",
      "How to track ROAS across multiple platforms?",
      "What factors affect ROAS performance?"
    ]
  },
  {
    primary: "Meta Ads integration",
    lsi: [
      "Facebook advertising platform",
      "Instagram ads management",
      "social media advertising",
      "Facebook pixel tracking",
      "audience targeting optimization",
      "ad creative performance",
      "social commerce analytics"
    ],
    semantic: [
      "Facebook marketing automation",
      "social media ROI tracking",
      "Instagram advertising insights",
      "Meta business platform integration",
      "social commerce optimization"
    ],
    longtail: [
      "connect Meta Ads to Shopify analytics",
      "Facebook ads Shopify integration",
      "track Instagram ads performance",
      "Meta Ads API integration guide",
      "Facebook pixel Shopify setup"
    ],
    questions: [
      "How to integrate Meta Ads with Shopify?",
      "How to track Facebook ads ROI?",
      "What is Meta Ads Manager integration?",
      "How to optimize Instagram ads for Shopify?"
    ]
  },
  {
    primary: "Google Ads tracking",
    lsi: [
      "Google advertising platform",
      "search engine marketing",
      "PPC campaign management",
      "Google Analytics integration",
      "conversion tracking setup",
      "keyword performance analysis",
      "search advertising optimization"
    ],
    semantic: [
      "Google marketing platform",
      "search advertising insights",
      "PPC performance tracking",
      "Google Ads optimization",
      "search marketing analytics"
    ],
    longtail: [
      "Google Ads Shopify conversion tracking",
      "setup Google Ads for e-commerce",
      "Google Ads performance tracking",
      "optimize Google Ads for Shopify",
      "Google Ads attribution modeling"
    ],
    questions: [
      "How to track Google Ads conversions in Shopify?",
      "How to optimize Google Ads for e-commerce?",
      "What is Google Ads conversion tracking?",
      "How to improve Google Ads performance?"
    ]
  },
  {
    primary: "Klaviyo integration",
    lsi: [
      "email marketing automation",
      "customer segmentation",
      "email campaign analytics",
      "marketing automation platform",
      "customer lifecycle management",
      "personalized email marketing",
      "e-commerce email optimization"
    ],
    semantic: [
      "email marketing insights",
      "customer engagement tracking",
      "automated email campaigns",
      "email performance analytics",
      "customer retention optimization"
    ],
    longtail: [
      "Klaviyo Shopify integration setup",
      "email marketing analytics dashboard",
      "Klaviyo campaign performance tracking",
      "automated email marketing for Shopify",
      "customer segmentation with Klaviyo"
    ],
    questions: [
      "How to integrate Klaviyo with Shopify analytics?",
      "How to track email marketing ROI?",
      "What are Klaviyo analytics features?",
      "How to optimize email campaigns with data?"
    ]
  }
];

// Content optimization functions
export function optimizeContentForSEO(content: string, targetKeyword: string): {
  optimizedContent: string;
  suggestions: string[];
  keywordDensity: number;
} {
  const keywordGroup = lsiKeywordGroups.find(group => 
    group.primary.toLowerCase().includes(targetKeyword.toLowerCase()) ||
    targetKeyword.toLowerCase().includes(group.primary.toLowerCase())
  );

  if (!keywordGroup) {
    return {
      optimizedContent: content,
      suggestions: ["No LSI keywords found for this target keyword"],
      keywordDensity: 0
    };
  }

  // Calculate keyword density
  const wordCount = content.split(/\s+/).length;
  const keywordCount = (content.toLowerCase().match(new RegExp(targetKeyword.toLowerCase(), 'g')) || []).length;
  const keywordDensity = (keywordCount / wordCount) * 100;

  // Generate suggestions
  const suggestions: string[] = [];
  
  if (keywordDensity < 0.5) {
    suggestions.push(`Increase keyword density for "${targetKeyword}" (currently ${keywordDensity.toFixed(2)}%)`);
  }
  
  if (keywordDensity > 3) {
    suggestions.push(`Reduce keyword density for "${targetKeyword}" to avoid over-optimization`);
  }

  // Check for LSI keywords
  const missingLSI = keywordGroup.lsi.filter(lsi => 
    !content.toLowerCase().includes(lsi.toLowerCase())
  );
  
  if (missingLSI.length > 0) {
    suggestions.push(`Consider adding LSI keywords: ${missingLSI.slice(0, 3).join(', ')}`);
  }

  // Check for semantic keywords
  const missingSemantic = keywordGroup.semantic.filter(semantic => 
    !content.toLowerCase().includes(semantic.toLowerCase())
  );
  
  if (missingSemantic.length > 0) {
    suggestions.push(`Add semantic keywords: ${missingSemantic.slice(0, 2).join(', ')}`);
  }

  return {
    optimizedContent: content,
    suggestions,
    keywordDensity
  };
}

// Generate content suggestions based on target keywords
export function generateContentSuggestions(targetKeywords: string[]): {
  headings: string[];
  paragraphs: string[];
  questions: string[];
} {
  const headings: string[] = [];
  const paragraphs: string[] = [];
  const questions: string[] = [];

  targetKeywords.forEach(keyword => {
    const keywordGroup = lsiKeywordGroups.find(group => 
      group.primary.toLowerCase().includes(keyword.toLowerCase())
    );

    if (keywordGroup) {
      // Generate H2/H3 headings
      headings.push(`How ${keywordGroup.primary} Improves Your Business`);
      headings.push(`Best Practices for ${keywordGroup.primary}`);
      headings.push(`${keywordGroup.primary} vs Traditional Methods`);

      // Generate paragraph topics
      paragraphs.push(`Benefits of implementing ${keywordGroup.primary} for e-commerce growth`);
      paragraphs.push(`Step-by-step guide to ${keywordGroup.primary} optimization`);
      paragraphs.push(`Common challenges with ${keywordGroup.primary} and solutions`);

      // Add questions for FAQ sections
      questions.push(...keywordGroup.questions);
    }
  });

  return {
    headings: [...new Set(headings)],
    paragraphs: [...new Set(paragraphs)],
    questions: [...new Set(questions)]
  };
}

// Featured snippet optimization
export function optimizeForFeaturedSnippets(content: string, questionKeyword: string): {
  definition: string;
  list: string[];
  steps: string[];
} {
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Extract definition (first sentence mentioning the keyword)
  const definition = sentences.find(sentence => 
    sentence.toLowerCase().includes(questionKeyword.toLowerCase())
  ) || `${questionKeyword} is a key metric for measuring performance in e-commerce analytics.`;

  // Extract list items (sentences with numbers or bullet points)
  const list = sentences.filter(sentence => 
    /^\s*[\d•\-\*]/.test(sentence) || sentence.includes('include') || sentence.includes('such as')
  ).slice(0, 8);

  // Extract steps (sentences with step indicators)
  const steps = sentences.filter(sentence => 
    /step|first|second|third|then|next|finally/i.test(sentence)
  ).slice(0, 6);

  return { definition, list, steps };
}

// Voice search optimization
export function optimizeForVoiceSearch(content: string): {
  conversationalKeywords: string[];
  questionAnswerPairs: Array<{ question: string; answer: string }>;
} {
  const conversationalKeywords = [
    "how to", "what is", "why should", "where can", "when should",
    "best way to", "easiest way", "step by step", "guide to",
    "near me", "for beginners", "vs", "compared to"
  ];

  // Extract question-answer pairs from content
  const questionAnswerPairs: Array<{ question: string; answer: string }> = [];
  
  lsiKeywordGroups.forEach(group => {
    group.questions.forEach(question => {
      // Find relevant answer in content
      const relevantSentences = content.split(/[.!?]+/).filter(sentence => {
        const questionWords = question.toLowerCase().split(' ');
        return questionWords.some(word => 
          sentence.toLowerCase().includes(word) && word.length > 3
        );
      });

      if (relevantSentences.length > 0) {
        questionAnswerPairs.push({
          question,
          answer: relevantSentences[0].trim() + '.'
        });
      }
    });
  });

  return { conversationalKeywords, questionAnswerPairs };
}

// Content readability optimization
export function optimizeReadability(content: string): {
  score: number;
  suggestions: string[];
  optimizedContent: string;
} {
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = content.split(/\s+/).filter(w => w.length > 0);
  
  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = words.reduce((acc, word) => {
    return acc + countSyllables(word);
  }, 0) / words.length;

  // Flesch Reading Ease Score
  const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
  
  const suggestions: string[] = [];
  
  if (avgWordsPerSentence > 20) {
    suggestions.push("Break down long sentences (average: " + avgWordsPerSentence.toFixed(1) + " words)");
  }
  
  if (score < 60) {
    suggestions.push("Simplify vocabulary and sentence structure for better readability");
  }
  
  if (sentences.length < 3) {
    suggestions.push("Add more sentences to improve content depth");
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    suggestions,
    optimizedContent: content // Would implement actual optimization logic here
  };
}

// Helper function to count syllables
function countSyllables(word: string): number {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  
  const vowels = 'aeiouy';
  let syllableCount = 0;
  let previousWasVowel = false;
  
  for (let i = 0; i < word.length; i++) {
    const isVowel = vowels.includes(word[i]);
    if (isVowel && !previousWasVowel) {
      syllableCount++;
    }
    previousWasVowel = isVowel;
  }
  
  // Handle silent 'e'
  if (word.endsWith('e')) {
    syllableCount--;
  }
  
  return Math.max(1, syllableCount);
}
