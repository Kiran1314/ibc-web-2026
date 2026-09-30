import Go from '@/components/Go';
import Counter from '@/components/Counter';
import PageEffects from '@/components/PageEffects';
import AboutVideo from '@/components/AboutVideo';

export const metadata = {
  title: 'About Us | IBC Studio - Dubai Media Production Company',
  description: 'Meet the team redefining creative digital media in UAE. Combining over 15 years of world-class production, technical mastery, and brand photography.',
  keywords: 'media production house uae, production companies in dubai, media production company uae',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/about',
    title: 'About Us | IBC Studio - Dubai Media Production Company',
    description: 'Serving the UAE and Middle East for over 15 years with premier video, audio, photography, and digital development services.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/about",
      "telephone": "+971552912810",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IBN Batuta Gate Office, P.O. Box: 120472, Dubai, UAE",
        "addressLocality": "Dubai",
        "postalCode": "25314",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
         "https://www.facebook.com/profile.php?id=61575559854140",
         "https://www.instagram.com/ibcstudio_uae/",
         "https://www.linkedin.com/company/ibcstudiouae/",
         "https://www.youtube.com/@ibcstudiome"
      ]
    })
  }
};

export default function AboutPage() {
  return (
    <>
    <div className="page active" id="pg-about">
      <main className="pw" id="main-content">
        <div className="ahwrap">
          <div className="reveal">
            <div className="lbl ph-eyebrow">
              Our Story
            </div>
            <h1 className="ph-title">
              More Than a Studio.
              <br />
              A Creative Force.
            </h1>
            <p className="ph-desc" style={{ marginTop: "18px" }}>
              Founded in Dubai, IBC Studio began with a vision to combine creativity, technology, and storytelling under one roof. With over 19 years of industry experience, we have grown into a trusted media production company delivering high-quality audiovisual and digital solutions for brands and businesses across the region.
            </p>
            <div style={{ display: "flex", gap: "14px", marginTop: "28px" }}>
              <Go as="button" to="/contact" className="btn-p">
                Work With Us →
              </Go>
              <Go as="button" to="/work" className="btn-o">
                See Our Work
              </Go>
            </div>
          </div>
          <AboutVideo />
        </div>
        <div className="divl" />
        <section className="sec reveal">
          <div className="stats-bar">
            <div className="sitem reveal">
              <Counter value="19" suffix="+" />
              <span className="slbl">
                Years Experience
              </span>
            </div>
            <div className="sitem reveal">
              <Counter value="1K" suffix="+" />
              <span className="slbl">
                {"Video & Photo Projects"}
              </span>
            </div>
            <div className="sitem reveal">
              <Counter value="3K" suffix="+" />
              <span className="slbl">
                Audio Projects
              </span>
            </div>
            <div className="sitem reveal">
              <Counter value="3K" suffix="+" />
              <span className="slbl">
                Satisfied Clients
              </span>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal">
          <div className="split-grid">
            <div className="reveal">
              <div className="lbl">
                What We Do
              </div>
              <h2 className="title">
                End-to-End Media Production
              </h2>
              <p style={{ fontSize: "16.5px", color: "var(--mid)", lineHeight: "1.75", marginBottom: "14px" }}>
                IBC Studio provides end-to-end media production and digital solutions including audio recording, dubbing, video production, photography, IVR systems, event coverage, AI-generated content, and digital development.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--mid)", lineHeight: "1.75" }}>
                From corporate productions and commercials to social media and branded content, we create professional media experiences designed to communicate ideas clearly and effectively.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }} className="reveal">
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "9px", padding: "20px", display: "flex", gap: "13px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", marginTop: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "14.5px", fontWeight: "700", marginBottom: "5px" }}>
                    Audio Production
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.58" }}>
                    IVR, OHM, voice-overs, jingles, dubbing, and multilingual localization.
                  </p>
                </div>
              </div>
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "9px", padding: "20px", display: "flex", gap: "13px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", marginTop: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="M16 10l5-3v10l-5-3" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "14.5px", fontWeight: "700", marginBottom: "5px" }}>
                    {"Video & Photography"}
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.58" }}>
                    Corporate films, commercials, events, drone, color grading, and photography.
                  </p>
                </div>
              </div>
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "9px", padding: "20px", display: "flex", gap: "13px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", marginTop: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "14.5px", fontWeight: "700", marginBottom: "5px" }}>
                    {"AI & Digital"}
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--dim)", lineHeight: "1.58" }}>
                    AI content, synthetic media, web development, e-learning, and custom tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal" style={{ background: "var(--bg2)" }}>
          <div className="lbl">
            Leadership
          </div>
          <h2 className="title">
            From the Founder's Desk
          </h2>
          <div className="fwrap">
            <div className="fcard fcard--photo reveal" style={{ backgroundImage: "url('/assets/images/opt/about/founder.jpg')" }} role="img" aria-label={"K. Banerjee, Founder & Director of IBC Studio, filming on location"}>
              <div className="finfo">
                <h3>
                  {"Founder & Director"}
                </h3>
                <span>
                  IBC Studio, Dubai UAE
                </span>
              </div>
            </div>
            <div className="fquote reveal">
              <blockquote>
                {"\"We didn’t build IBC Studio to simply create content. We built it to help brands tell stories with impact, deliver quality without compromise, and create work that people genuinely remember.\""}
              </blockquote>
              <p>
                Dear Valued Clients,
              </p>
              <p style={{ marginTop: "14px" }}>
                I am K. Banerjee, Founder of IBC Studio, and I sincerely thank you for the trust you continue to place in our work. My journey in the media industry began in Mumbai, India, where I worked across films, television serials, and commercial productions.
              </p>
              <p style={{ marginTop: "14px" }}>
                With a vision to build a globally recognized production company, IBC Studio has proudly served clients across the UAE and the Middle East for over 19 years, deeply valuing every client relationship while combining creativity, technology, and storytelling to create impactful media experiences.
              </p>
              <div style={{ marginTop: "28px", display: "flex", gap: "18px", alignItems: "center" }}>
                <div style={{ width: "44px", height: "1px", background: "var(--sage)" }} />
                <div>
                  <div style={{ fontFamily: "'Red Hat Display',sans-serif", fontWeight: "700", fontSize: "15px" }}>
                    {"Founder & Director"}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--sage)" }}>
                    IBC Studio — Dubai, UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <PageEffects />
    </>
  );
}
