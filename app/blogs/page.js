import Image from 'next/image';
import Link from 'next/link';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: 'Insights & Trends: Pro Tech, AI & Video Media Hub | IBC Studio',
  description: 'Stay ahead of the curve with insights on media production, AI, localization, photography, audio, and digital platforms from IBC Studio.',
  keywords: [
    'video production',
    'AI video production UAE',
    'media production trends',
    'audio production Dubai',
    'photography UAE',
    'IBC Studio blog',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/blogs',
    title: 'Insights & Trends: Pro Tech, AI & Video Media Hub',
    description: 'Insights on media production, AI, photography, audio, and brand storytelling from IBC Studio.',
    siteName: 'IBC Studio',
  },
};

const archiveBlogs = [
  {
    slug: 'what-makes-a-great-product-photograph',
    url: '/blog-post/what-makes-a-great-product-photograph',
    tag: 'Photography',
    title: 'What Makes a Great Product Photograph',
    desc: 'The technical and creative decisions that separate average shots from ones that actually sell.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FWhat%20Makes%20a%20Great%20Product%20Photograph.webp?alt=media&token=4a22068a-f2f9-4b3d-b690-3a0ceef846a2',
  },
  {
    slug: 'multilingual-media-arabic-first-uae',
    url: '/blog-post/multilingual-media-arabic-first-uae',
    tag: 'Localization',
    title: 'Multilingual Media: Why Arabic First Matters in the UAE',
    desc: 'The cultural and commercial case for leading with Arabic in your media production strategy.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FMultilingual%20Media%20Why%20Arabic%20First%20Matters%20in%20the%20UAE.webp?alt=media&token=5b257d61-e35e-4972-83fb-c6002df284e3',
  },
  {
    slug: 'brand-listening-ai-market-research',
    url: '/blog-post/brand-listening-ai-market-research',
    tag: 'IBC Intelligence',
    title: 'Brand Listening: How AI is Changing Market Research',
    desc: 'How real-time AI social listening is transforming how brands understand their audience.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FBrand%20Listening%20How%20AI%20is%20Changing%20Market%20Research.webp?alt=media&token=d4fc52c9-9b50-4537-ae26-d5678260a2c2',
  },
  {
    slug: 'rise-of-aerial-cinematography-gulf',
    url: '/blog-post/rise-of-aerial-cinematography-gulf',
    tag: 'Drone',
    title: 'The Rise of Aerial Cinematography in the Gulf',
    desc: 'How drone technology is reshaping real estate, events, and infrastructure storytelling in the UAE.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FThe%20Rise%20of%20Aerial%20Cinematography%20in%20the%20Gulf-clean.webp?alt=media&token=9afb33e6-4a3b-40bf-8b89-385bb00108ca',
  },
  {
    slug: 'e-learning-2026-platforms-that-work',
    url: '/blog-post/e-learning-2025-platforms-that-work',
    tag: 'Digital',
    title: 'E-Learning in 2026: Platforms That Actually Work',
    desc: 'Design principles behind e-learning platforms that employees actually use and enjoy.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FE-Learning%20in%202026%20Platforms%20That%20Actually%20Work-clean.webp?alt=media&token=8c918a22-0dee-493c-b894-707dbcd72e2d',
  },
  {
    slug: 'jingles-are-back-brands-investing',
    url: '/blog-post/jingles-are-back-brands-investing',
    tag: 'Audio',
    title: 'Jingles Are Back — Why Brands Are Investing Again',
    desc: 'The surprising resurgence of brand audio identity and what it means for your marketing.',
    date: 'October 2026',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FJingles%20Are%20Back%20%E2%80%94%20Why%20Brands%20Are%20Investing%20Again.webp?alt=media&token=279e5fcf-f00a-4e4c-8e6c-3c52c252e6ee',
  },
];

const latestBlogs = archiveBlogs.slice(0, 3);
const olderBlogs = archiveBlogs.slice(3);

const featuredImage = 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FHow%20AI%20Video%20is%20Redefining%20Brand%20Storytelling%20in%202025.webp?alt=media&token=9985875d-48d0-4ffa-9b21-b89dbe3a62e3';
const featuredArticle = {
  url: '/blog-post/ai-video-storytelling-2026',
  image: featuredImage,
  title: 'How AI Video is Redefining Brand Storytelling in 2026',
  tag: 'Featured · AI Production',
  date: 'October 2026 · 8 min read',
  desc: 'UAE brands are leveraging AI-generated video to scale content production without sacrificing quality. The shift is faster than most expected.',
};
const secondaryFeaturedArticles = [
  {
    url: '/blog-post/the-power-of-cinematic-corporate-films',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FThe%20Power%20of%20Cinematic%20Corporate%20Films.webp?alt=media&token=a1db3cf8-cc01-4807-a3e1-d27f40cf0204',
    title: 'The Power of Cinematic Corporate Films',
    tag: 'Video Production',
    date: 'October 2026',
  },
  {
    url: '/blog-post/why-your-ivr-voice-matters-more-than-you-think',
    image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FWhy%20Your%20IVR%20Voice%20Matters%20More%20Than%20You%20Think.webp?alt=media&token=58b89f68-304a-48bd-8221-cfbdcb4091e3',
    title: 'Why Your IVR Voice Matters More Than You Think',
    tag: 'Audio',
    date: 'October 2026',
  },
];

function BlogThumbnail({ src, alt, featured = false, priority = false }) {
  return (
    <div className={featured ? 'bfthumb' : 'bthumb'}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        style={{ objectFit: 'cover' }}
        priority={priority}
        unoptimized
      />
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <Link href={post.url} className="bcard reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <BlogThumbnail src={post.image} alt={post.title} />
      <div className="bc">
        <span className="btag">{post.tag}</span>
        <h3 style={{ color: '#fff' }}>{post.title}</h3>
        <p>{post.desc}</p>
        <div className="bmeta">
          <span className="bdate">{post.date}</span>
          <span className="brm">Read →</span>
        </div>
      </div>
    </Link>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="blogs-section-label">
      {children}
    </div>
  );
}

export default function BlogsPage() {
  return (
    <>
    <title>Insights & Trends: Pro Tech, AI & Video Media Hub</title>

      <meta
        name="description"
        content="Stay ahead of the curve with deep-dives on industry trends: local AI video automation, Abu Dhabi media markets, and premium audio recording studio setups."
      />

      <meta
        name="keywords"
        content="video production companies in abu dhabi, corporate video in dubai, ai video production uae, media production trends abu dhabi, audio recording studios dubai, corporate video production uae, ai video automation dubai, media production insights uae"
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs"
      />

      <meta
        property="og:title"
        content="Insights & Trends: Pro Tech, AI & Video Media Hub"
      />

      <meta
        property="og:description"
        content="Stay ahead of the curve with deep-dives on industry trends: local AI video automation, Abu Dhabi media markets, and premium audio recording studio setups."
      />

      <meta property="og:site_name" content="IBC Studio" />
      <div className="page active" id="pg-blogs">
        <main className="pw" id="main-content">
          <div className="sec reveal" style={{ paddingTop: '130px', paddingBottom: '36px' }}>
            <div className="lbl ph-eyebrow">Insights &amp; Ideas</div>
            <h1 className="title ph-title">The IBC Studio Blog</h1>
            <p className="desc ph-desc">
              Perspectives on media, production, AI, and the future of brand storytelling.
            </p>
          </div>

          <section className="bfeat" aria-label="Featured articles">
            <Link href={featuredArticle.url} className="bfcard reveal" style={{ textDecoration: 'none', display: 'block' }}>
              <BlogThumbnail
                src={featuredArticle.image}
                alt={featuredArticle.title}
                featured
                priority
              />
              <div className="bfbody">
                <span className="btag">{featuredArticle.tag}</span>
                <h2 style={{ color: '#fff' }}>{featuredArticle.title}</h2>
                <p>{featuredArticle.desc}</p>
                <div className="bmeta" style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
                  <span className="bdate">{featuredArticle.date}</span>
                  <span className="brm">Read Article →</span>
                </div>
              </div>
            </Link>

            <div className="blogs-feature-stack">
              {secondaryFeaturedArticles.map((post) => (
              <Link key={post.url} href={post.url} className="bfcard reveal" style={{ flex: '1', textDecoration: 'none' }}>
                <BlogThumbnail src={post.image} alt={post.title} />
                <div className="bc blogs-small-feature-body">
                  <span className="btag">{post.tag}</span>
                  <h3 style={{ color: '#fff' }}>{post.title}</h3>
                  <div className="bmeta">
                    <span className="bdate">{post.date}</span>
                    <span className="brm">Read →</span>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </section>

          <section className="blogs-article-section" aria-labelledby="latest-articles-title">
            <SectionLabel>
              <h2 id="latest-articles-title">Latest Articles</h2>
            </SectionLabel>
            <div className="bgrid blogs-article-grid">
              {latestBlogs.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </section>

          <section className="blogs-article-section" aria-labelledby="all-articles-title">
            <SectionLabel>
              <h2 id="all-articles-title">All Articles</h2>
            </SectionLabel>
            <div className="bgrid blogs-article-grid">
              {olderBlogs.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </section>
        </main>
      </div>
      <PageEffects />
    </>
  );
}