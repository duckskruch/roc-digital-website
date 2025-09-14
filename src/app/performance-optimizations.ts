// Performance Optimizations for ROC Digital

// 1. Image Optimization Configuration
export const IMAGE_OPTIMIZATION = {
  // Recommended image formats by use case
  HERO_IMAGES: {
    format: 'webp',
    fallback: 'jpg',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    quality: 85,
    priority: true
  },
  
  NEWS_IMAGES: {
    format: 'webp', 
    fallback: 'jpg',
    sizes: '(max-width: 768px) 100vw, 50vw',
    quality: 80,
    loading: 'lazy' as const
  },
  
  CASE_IMAGES: {
    format: 'webp',
    fallback: 'png', 
    sizes: '(max-width: 768px) 100vw, 33vw',
    quality: 85,
    loading: 'lazy' as const
  }
};

// 2. Critical Resource Hints
export const RESOURCE_HINTS = {
  // Preload critical fonts
  FONTS: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      rel: 'preload',
      as: 'style'
    }
  ],
  
  // Preconnect to external domains
  DOMAINS: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]
};

// 3. Bundle Splitting Strategy
export const BUNDLE_STRATEGY = {
  // Vendor chunks
  VENDOR_CHUNKS: {
    react: ['react', 'react-dom'],
    ui: ['framer-motion', 'lucide-react'],
    utils: ['clsx', 'tailwind-merge']
  },
  
  // Route-based splitting
  ROUTE_CHUNKS: {
    landing: ['/', '/services'],
    news: ['/news'],
    cases: ['/cases']
  }
};

// 4. Caching Strategy
export const CACHE_STRATEGY = {
  // Static assets
  STATIC_ASSETS: {
    images: '1y',
    fonts: '1y', 
    icons: '1y'
  },
  
  // API responses
  API_CACHE: {
    news: '1h',
    cases: '24h',
    services: '1d'
  },
  
  // Page cache
  PAGE_CACHE: {
    static: '1d',
    dynamic: '1h'
  }
};

// 5. Critical CSS Extraction
export const CRITICAL_CSS = {
  // Above-the-fold styles
  CRITICAL_SELECTORS: [
    '.header-island',
    '.hero-section',
    '.hero-section__glass-panel', 
    '.loading-spinner',
    '.page-background'
  ],
  
  // Defer non-critical styles
  DEFER_STYLES: [
    '.footer-full',
    '.mvp-teaser-window',
    '.cookie-banner',
    '.news-article-content'
  ]
};

// 6. JavaScript Optimization
export const JS_OPTIMIZATION = {
  // Tree shaking
  TREE_SHAKE: {
    sideEffects: false,
    usedExports: true
  },
  
  // Code splitting
  DYNAMIC_IMPORTS: [
    'TechRiver',
    'ServicesBento', 
    'CaseFlipCards',
    'WhyUs',
    'CreativesRow',
    'NewsSection',
    'FAQWithChat',
    'ConsultationFormSection',
    'Footer',
    'MvpTeaserWindow',
    'CookieSmileBanner'
  ],
  
  // Compression
  COMPRESSION: {
    algorithm: 'gzip',
    level: 9,
    threshold: 1024
  }
};

// 7. Database Optimization (for future)
export const DB_OPTIMIZATION = {
  // Connection pooling
  CONNECTION_POOL: {
    min: 2,
    max: 10,
    idle: 10000
  },
  
  // Query optimization
  QUERIES: {
    newsLimit: 20,
    casesLimit: 12,
    cacheTime: 3600
  }
};

// 8. CDN Configuration
export const CDN_CONFIG = {
  // Static assets CDN
  STATIC_CDN: 'https://cdn.roc.digital',
  
  // Image CDN with optimization
  IMAGE_CDN: 'https://images.roc.digital',
  
  // Regions for global distribution
  REGIONS: ['us-east-1', 'eu-west-1', 'ap-southeast-1']
};

// 9. Monitoring and Analytics
export const MONITORING = {
  // Core Web Vitals targets
  WEB_VITALS: {
    LCP: 2.5, // Largest Contentful Paint (seconds)
    FID: 100, // First Input Delay (ms)
    CLS: 0.1, // Cumulative Layout Shift
    TTFB: 800 // Time to First Byte (ms)
  },
  
  // Performance budgets
  BUDGETS: {
    javascript: '250kb',
    css: '50kb', 
    images: '1mb',
    fonts: '100kb'
  }
};

// 10. Progressive Loading Strategy
export const PROGRESSIVE_LOADING = {
  // Lazy loading thresholds
  INTERSECTION_MARGIN: '50px',
  
  // Priority loading order
  LOADING_PRIORITY: [
    'hero-video',
    'navigation', 
    'hero-content',
    'tech-river',
    'services',
    'cases',
    'news',
    'footer'
  ],
  
  // Preload next sections
  PRELOAD_STRATEGY: 'viewport'
};

// Helper function to implement optimizations
export function applyPerformanceOptimizations() {
  // Enable service worker for caching
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/sw.js');
  }
  
  // Optimize images on scroll
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  // Observe all lazy images
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
  
  // Preload critical resources
  RESOURCE_HINTS.DOMAINS.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
}
