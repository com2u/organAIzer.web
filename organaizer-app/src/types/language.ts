export interface TranslationStructure {
  home: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    learnMore: string;
    features: {
      title: string;
      items: string[];
    };
    ready: {
      title: string;
      description: string;
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    problems: {
      title: string;
      items: Array<{
        problem: string;
        solution: string;
      }>;
    };
    workflow: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    testimonials: {
      title: string;
      items: Array<{
        quote: string;
        author: string;
        company: string;
      }>;
    };
    stats: {
      title: string;
      items: Array<{
        value: string;
        label: string;
      }>;
    };
    integrations: {
      title: string;
      description: string;
      items: string[];
    };
    security: {
      title: string;
      items: string[];
    };
    technology: {
      title: string;
      description: string;
      subtitle: string;
      benefits: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      architecture: {
        title: string;
        description: string;
        components: Array<{
          name: string;
          description: string;
          features: string[];
        }>;
      };
      performance: {
        title: string;
        metrics: Array<{
          label: string;
          value: string;
          description: string;
        }>;
        description?: string;
      };
      security: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      deployment: {
        title: string;
        options: Array<{
          title: string;
          description: string;
          features: string[];
        }>;
      };
      compliance: {
        title: string;
        standards: string[];
        description?: string;
      };
    };
  };
  products: {
    title: string;
    description: string;
    subtitle: string;
    saas: {
      title: string;
      description: string;
      features: string[];
      pricing: {
        title: string;
        free: string;
        basic: string;
        enterprise: string;
      };
      useCases: {
        title: string;
        items: string[];
      };
      cta: string;
    };
    selfHosted: {
      title: string;
      description: string;
      features: string[];
      requirements: {
        title: string;
        items: string[];
      };
      useCases: {
        title: string;
        items: string[];
      };
      cta: string;
    };
    custom: {
      title: string;
      description: string;
      features: string[];
      process: {
        title: string;
        steps: string[];
      };
      useCases: {
        title: string;
        items: string[];
      };
      cta: string;
    };
    comparison: {
      title: string;
      features: {
        title: string;
        items: string[];
      };
      saas: string;
      selfHosted: string;
      custom: string;
      available: string;
      limited: string;
      onRequest: string;
    };
    consultation: {
      title: string;
      description: string;
      cta: string;
    };
    roadmap: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        status: string;
      }>;
    };
  };
  ai: {
    title: string;
    description: string;
    features: string[];
    howItWorks: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  pricing: {
    title: string;
    description: string;
    plans: {
      free: {
        title: string;
        price: string;
        features: string[];
        cta: string;
      };
      basic: {
        title: string;
        price: string;
        features: string[];
        cta: string;
      };
      enterprise: {
        title: string;
        price: string;
        features: string[];
        cta: string;
      };
      selfHosted: {
        title: string;
        price: string;
        features: string[];
        cta: string;
      };
    };
  };
  about: {
    title: string;
    description: string;
    contact: {
      title: string;
      owner: string;
      location: string;
      contactForm: string;
      name: string;
      email: string;
      message: string;
      send: string;
      messageSent?: string;
      getInTouch: string;
      emailMethod: string;
      emailDesc: string;
      githubMethod: string;
      githubDesc: string;
      officeHours: string;
      officeHoursDesc: string;
    };
    project: {
      title: string;
      description: string;
      openSource: string;
      license: string;
    };
    owner: {
      name: string;
      location: string;
      email: string;
    };
    values: {
      title: string;
      customerFirst: string;
      innovation: string;
      privacy: string;
      openSource: string;
    };
    milestones: {
      title: string;
      inception: string;
      inceptionDesc: string;
      beta: string;
      betaDesc: string;
      release: string;
      releaseDesc: string;
      expansion: string;
      expansionDesc: string;
    };
      roadmap: {
        title: string;
        teamGrowth: string;
        teamGoals: string[];
        expansion: string;
        expansionGoals: string[];
        market: string;
        marketGoals: string[];
      };
    team: {
      founder: string;
      background: string;
      vision: string;
      approach: string;
      community: string;
    };
    story: {
      title: string;
      content: string;
      growth: string;
    };
  };
  navigation: {
    home: string;
    products: string;
    productsSaaS: string;
    productsSelfHosted: string;
    productsCustom: string;
    technology: string;
    ai: string;
    pricing: string;
    about: string;
  };
}
