import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).optional()
});

const profilesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    emoji: z.string(),
    tagline: z.string(),
    description: z.string(),
    longDescription: z.string(),
    tools: z.array(z.string()),
    useCases: z.array(z.string()),
    seo: seoSchema
  })
});

const distrosCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    longDescription: z.string(),
    logo: z.string().nullable(),
    website: z.string().url(),
    gradient: z.string(),
    features: z.array(z.string()),
    bestFor: z.array(z.string()),
    downloadUrl: z.string().url(),
    seo: seoSchema
  })
});

const toolsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    icon: z.string(),
    description: z.string(),
    longDescription: z.string(),
    features: z.array(z.string()),
    alternatives: z.array(z.string()),
    installCommand: z.string().optional(),
    website: z.string().url(),
    seo: seoSchema,
    schema: z.object({
      type: z.string(),
      applicationCategory: z.string(),
      operatingSystem: z.string()
    })
  })
});

const docsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
      code: z.string().optional(),
      language: z.string().optional()
    })),
    seo: seoSchema
  })
});

const usecasesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    icon: z.string(),
    description: z.string(),
    longDescription: z.string(),
    benefits: z.array(z.string()),
    recommendedTools: z.array(z.string()),
    recommendedDistros: z.array(z.string()),
    gettingStarted: z.array(z.object({
      step: z.number(),
      title: z.string(),
      description: z.string()
    })),
    seo: seoSchema
  })
});

const comparisonsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    itemA: z.object({
      name: z.string(),
      logo: z.string().optional(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      bestFor: z.string()
    }),
    itemB: z.object({
      name: z.string(),
      logo: z.string().optional(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      bestFor: z.string()
    }),
    verdict: z.string(),
    comparisonTable: z.array(z.object({
      feature: z.string(),
      itemA: z.string(),
      itemB: z.string()
    })),
    seo: seoSchema
  })
});

const guidesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    timeToComplete: z.string(),
    prerequisites: z.array(z.string()),
    steps: z.array(z.object({
      title: z.string(),
      content: z.string(),
      code: z.string().optional(),
      language: z.string().optional(),
      warning: z.string().optional()
    })),
    relatedGuides: z.array(z.string()).optional(),
    seo: seoSchema
  })
});

const alternativesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    proprietary: z.object({
      name: z.string(),
      description: z.string(),
      price: z.string()
    }),
    alternatives: z.array(z.object({
      name: z.string(),
      description: z.string(),
      features: z.array(z.string()),
      website: z.string().url(),
      installCommand: z.string().optional(),
      rating: z.number().min(1).max(5)
    })),
    verdict: z.string(),
    seo: seoSchema
  })
});

const glossaryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    term: z.string(),
    slug: z.string(),
    shortDefinition: z.string(),
    longDefinition: z.string(),
    category: z.string(),
    relatedTerms: z.array(z.string()).optional(),
    examples: z.array(z.string()).optional(),
    seo: seoSchema
  })
});

export const collections = {
  profiles: profilesCollection,
  distros: distrosCollection,
  tools: toolsCollection,
  docs: docsCollection,
  usecases: usecasesCollection,
  comparisons: comparisonsCollection,
  guides: guidesCollection,
  alternatives: alternativesCollection,
  glossary: glossaryCollection
};
