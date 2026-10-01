const siteUrl = 'https://www.ibcstudio.com';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/clients', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blogs', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ibc-intelligence', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.4, changeFrequency: 'yearly' },
];

const blogRoutes = [
  '/blog-post/ai-video-storytelling-2026',
  '/blog-post/brand-listening-ai-market-research',
  '/blog-post/e-learning-2025-platforms-that-work',
  '/blog-post/how-ai-video-redefines-brand-storytelling-2026',
  '/blog-post/jingles-are-back-brands-investing',
  '/blog-post/multilingual-media-arabic-first-uae',
  '/blog-post/rise-of-aerial-cinematography-gulf',
  '/blog-post/the-power-of-cinematic-corporate-films',
  '/blog-post/what-makes-a-great-product-photograph',
  '/blog-post/why-your-ivr-voice-matters-more-than-you-think',
];

export default function sitemap() {
  const now = new Date();

  const routes = [...staticRoutes, ...blogRoutes.map((path) => ({
    path,
    priority: 0.7,
    changeFrequency: 'weekly',
  }))].map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  return routes;
}
