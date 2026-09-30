import Link from 'next/link';
import Go from '@/components/Go';
import Counter from '@/components/Counter';
import Faq from '@/components/Faq';
import ClientTrack from '@/components/ClientTrack';
import HeroGallery from '@/components/HeroGallery';
import PageEffects from '@/components/PageEffects';
import Image from 'next/image';

export const metadata = {
  title: 'Audio-Video Production House Dubai | IBC Studio',
  description: 'Discover the best audio-video production house in Dubai. We offer top-notch digital media creation, professional audio recording, and production services.',
  keywords: [
     'audio video company in dubai', 'production house in dubai', 'media production company in dubai', 'best production company in dubai'
  ],
  openGraph: {
    type: 'website',  
    url: 'https://www.ibcstudio.com/',  
    title: 'Audio-Video Production House Dubai | IBC Studio',  
    description: 'Discover the best audio-video production house in Dubai. We offer top-notch digital media creation, professional audio recording, and production services',
    siteName: 'IBC Studio',  
    locale: 'en_US',  
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com",
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
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
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

export const viewport = { themeColor: "#0d1212" };

export default function HomePage() {
  return (
    <>
    <div className="page active" id="pg-home">
      <main className="pw" id="main-content">
        <section className="ibc-home-hero" aria-label="IBC Studio introduction">
          <div className="ibc-hero-copy">
            <div className="ibc-hero-eyebrow">
              — IBC Studio · Dubai, UAE —
            </div>
            <h1>
              <span className="ibc-line">
                <span>
                  UAE'S LEADING
                </span>
              </span>
              <span className="ibc-line">
                <span className="ibc-hero-accent">
                  MEDIA PRODUCTION
                </span>
              </span>
              <span className="ibc-line">
                <span>
                  HOUSE
                </span>
              </span>
            </h1>
            <p>
              Welcome to IBC Studio. We are a full-service media production and digital solutions company creating powerful visual experiences, meaningful brand stories, and impactful content that leaves a lasting impression.
            </p>
            <div className="ibc-hero-actions">
              <Link className="ibc-hero-primary" href="/services">
                Explore our services
              </Link>
              <Link className="ibc-hero-secondary" href="/work">
                View our work
              </Link>
            </div>
          </div>
          <HeroGallery />
        </section>
        <div className="cband reveal">
          <div className="chdr">
            <strong>
              3,000+ Satisfied Clients
            </strong>
            {" "}trust IBC Studio
          </div>
          <div style={{ overflow: "hidden" }}>
            <ClientTrack />
          </div>
        </div>
        <section className="sec reveal">
          <div className="lbl">
            Client Testimonials
          </div>
          <h2 className="title">
            Voices of Trust
          </h2>
          <p className="desc">
            Real results, real relationships. Hear directly from the brands who've partnered with us.
          </p>
          <div className="tgrid">
            <div className="tcard reveal">
              <p className="tquote">
                {"Overall great, smooth, professional & interesting experience. I enjoyed the whole process. It's a pleasure to work with IBC Studio. I am looking forward to working with you on your upcoming projects. Thank you IBC Studio."}
              </p>
              <div className="tauthor">
                <div className="tav">
                  DS
                </div>
                <div>
                  <div className="tan">
                    Dina Samy
                  </div>
                </div>
              </div>
            </div>
            <div className="tcard reveal">
              <p className="tquote">
                Worked with them in 2 projects so far and I really appreciate their professionalism and honesty. Looking forward to the new projects we will work on together!
              </p>
              <div className="tauthor">
                <div className="tav">
                  LA
                </div>
                <div>
                  <div className="tan">
                    Lilly Ally
                  </div>
                </div>
              </div>
            </div>
            <div className="tcard reveal">
              <p className="tquote">
                I recently had the pleasure of working with IBC Studio on a timelapse video project, and I couldn't be more impressed! The team demonstrated exceptional professionalism and creativity from start to finish.
              </p>
              <div className="tauthor">
                <div className="tav">
                  KK
                </div>
                <div>
                  <div className="tan">
                    Kishan Krishnan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal">
          <div className="split-grid">
            <div className="reveal">
              <div className="lbl">
                About IBC Studio
              </div>
              <h2 className="title">
                {"The UAE’s Destination for Creative Media & Digital Production"}
              </h2>
              <p style={{ fontSize: "16.5px", color: "var(--mid)", lineHeight: "1.75", marginBottom: "14px" }}>
                IBC Studio is a Dubai-based media production and digital solutions company with over 19 years of industry experience.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--mid)", lineHeight: "1.75", marginBottom: "26px" }}>
                We specialize in audio, video, photography, IVR, OHM, event coverage, AI-powered content, and digital media solutions, helping businesses create professional, engaging, and impactful content tailored for modern audiences across the UAE and Middle East.
              </p>
              <Go as="button" to="/about" className="btn-o">
                Learn Our Story →
              </Go>
            </div>
            <div className="mini-stat-grid reveal">
              <div className="sitem">
                <Counter value="19" suffix="+" />
                <span className="slbl">
                  Years Experience
                </span>
              </div>
              <div className="sitem" style={{ borderRight: "none" }}>
                <Counter value="1K" suffix="+" />
                <span className="slbl">
                  {"Video & Photo Projects"}
                </span>
              </div>
              <div className="sitem" style={{ borderTop: "1px solid var(--border)" }}>
                <Counter value="3K" suffix="+" />
                <span className="slbl">
                  Audio Projects
                </span>
              </div>
              <div className="sitem" style={{ borderRight: "none", borderTop: "1px solid var(--border)" }}>
                <Counter value="3K" suffix="+" />
                <span className="slbl">
                  Satisfied Clients
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal">
          <div className="lbl">
            What We Do
          </div>
          <h2 className="title">
            Our Core Services
          </h2>
          <p className="desc">
            Complete media solutions designed to help businesses create professional, impactful, and meaningful content across every platform.
          </p>
          <div className="srv-grid">
            <Go as="div" to="/services#service-audio" className="srv-card reveal">
              <div className="srv-ic">
                <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3>
                Audio Production
              </h3>
              <p>
                IVR, on-hold messaging, multilingual voice-overs, jingles, dubbing and localization services.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
            <Go as="div" to="/services#service-video" className="srv-card reveal">
              <div className="srv-ic">
                <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8">
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                  <path d="M16 10l5-3v10l-5-3" />
                </svg>
              </div>
              <h3>
                Video Production
              </h3>
              <p>
                Corporate films, commercials, drone, 360°/VR/AR, editing, and color grading.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
            <Go as="div" to="/services#service-photo" className="srv-card reveal">
              <div className="srv-ic">
                <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <h3>
                Photography
              </h3>
              <p>
                Product, real estate, industrial, corporate and event photography.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
            <Go as="div" to="/services#service-ai" className="srv-card reveal">
              <div className="srv-ic">
                <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
              <h3>
                AI Production
              </h3>
              <p>
                AI video, AI photography, synthetic media, creative direction, and workflow-aware production systems.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
            <Go as="div" to="/services#service-digital" className="srv-card reveal">
              <div className="srv-ic">
                <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>
                {"Digital & Development"}
              </h3>
              <p>
                Web design, e-learning platforms, interactive media and custom digital tools.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
            <Go as="div" to="/ibc-intelligence" className="srv-card reveal">
              <div className="srv-ic">
               <div className="logo" style={{ cursor: 'default', position: 'relative', height: '50px', width: '150px' }} >
                  <Image 
                    src="/assets/images/logo/intel2.webp" 
                    alt="IBC Studio Logo" 
                    fill
                    sizes="150px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>

              </div>
              <h3>
                IBC Intelligence
              </h3>
              <p>
                Operator-led AI advisory helping teams find and build practical workflow systems that improve productivity, speed, and decision support.
              </p>
              <div className="srv-arr">
                Explore Service →
              </div>
            </Go>
          </div>
        </section>
        <div className="divl" />
        <section className="sec-sm reveal">
          <div className="intel-strip">
            <div>
              <div className="lbl">
                IBC Intelligence
              </div>
              <h2>
                Business-first AI advisory for real workflows.
              </h2>
              <p>
                IBC Intelligence helps businesses identify where AI creates measurable operational leverage across productivity, speed, reporting, decision support, and execution, then turns those opportunities into practical systems aligned with how teams actually work.
              </p>
              <div style={{ marginTop: "22px" }}>
                <Go as="button" to="/ibc-intelligence" className="btn-p">
                  Book a Consultancy →
                </Go>
              </div>
            </div>
            <div className="intel-container">
              <div className="logo" style={{ cursor: 'default' }}>
                  <Image 
                    src="/assets/images/logo/intel3.webp" 
                    alt="IBC Studio Logo" 
                    width={200}
                    height={200}
                    style={{ 
                      width: 'clamp(110px, 15vw, 200px)', 
                      height: 'clamp(110px, 15vw, 200px)', 
                      objectFit: 'contain',
                      display: 'block',
                      
                      marginLeft: '400px'
                    }} 
                  />
                </div>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal" style={{ background: "var(--bg2)" }}>
          <div style={{ textAlign: "center" }}>
            <div className="lbl lbl-c" style={{ justifyContent: "center" }}>
              How We Work
            </div>
            <h2 className="title">
              Our 4-Step Process
            </h2>
            <p className="desc desc-c">
              From your first idea to final delivery, a streamlined and collaborative approach focused on clarity and results.
            </p>
          </div>
          <div className="proc">
            <div className="pstep">
              <div className="pnum">
                <span>
                  01
                </span>
              </div>
              <h3>
                Initial Consultation
              </h3>
              <p>
                We listen, understand your goals, audience and vision before a single frame is captured.
              </p>
            </div>
            <div className="pstep">
              <div className="pnum">
                <span>
                  02
                </span>
              </div>
              <h3>
                {"Proposal & Agreement"}
              </h3>
              <p>
                A detailed proposal and agreement outlining scope, timeline, and pricing tailored to your needs.
              </p>
            </div>
            <div className="pstep">
              <div className="pnum">
                <span>
                  03
                </span>
              </div>
              <h3>
                Production Phase
              </h3>
              <p>
                Our team manages scripting, shooting, and editing with regular updates throughout production.
              </p>
            </div>
            <div className="pstep">
              <div className="pnum">
                <span>
                  04
                </span>
              </div>
              <h3>
                {"Delivery & Review"}
              </h3>
              <p>
                Final delivery in your required formats, with a revision process until you're 100% satisfied.
              </p>
            </div>
          </div>
        </section>
        <div className="divl" />
        <section className="sec reveal">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div className="lbl">
                Latest Insights
              </div>
              <h2 className="title">
                From Our Blog
              </h2>
            </div>
            <Go as="button" to="/blogs" className="btn-o">
              View All Articles →
            </Go>
          </div>
        <div className="bgrid">
  <Go as="div" to="/blog-post/ai-video-storytelling-2026" className="bcard reveal">
    <div className="bthumb" style={{ position: 'relative', overflow: 'hidden', background: "linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)" }}>
      <Image 
        src="assets/images/blog/blog1.webp" 
        alt="How AI Video is Redefining Brand Storytelling in 2025" 
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: 'cover' }} 
        priority
        unoptimized
      />
    </div>
    <div className="bc">
      <span className="btag">
        AI Production
      </span>
      <h3>
        How AI Video is Redefining Brand Storytelling in 2025
      </h3>
      <p>
        How UAE brands are leveraging AI-generated video to scale content without sacrificing quality.
      </p>
      <div className="bmeta">
        <span className="bdate">
          October 2026
        </span>
        <span className="brm">
          Read More →
        </span>
      </div>
    </div>
  </Go>

  <Go as="div" to="/blog-post/the-power-of-cinematic-corporate-films" className="bcard reveal">
    <div className="bthumb" style={{ position: 'relative', overflow: 'hidden', background: "linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)" }}>
      <Image 
        src="assets/images/blog/blog2.webp" 
        alt="The Power of Cinematic Corporate Films: Why They Work" 
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: 'cover' }} 
        unoptimized
      />
    </div>
    <div className="bc">
      <span className="btag">
        Video Production
      </span>
      <h3>
        The Power of Cinematic Corporate Films: Why They Work
      </h3>
      <p>
        How a well-crafted corporate film builds credibility, trust and emotional connection.
      </p>
      <div className="bmeta">
        <span className="bdate">
          October 2026
        </span>
        <span className="brm">
          Read More →
        </span>
      </div>
    </div>
  </Go>

  <Go as="div" to="/blog-post/why-your-ivr-voice-matters-more-than-you-think" className="bcard reveal">
    <div className="bthumb" style={{ position: 'relative', overflow: 'hidden', background: "linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)" }}>
      <Image 
        src="assets/images/blog/blog3.webp" 
        alt="Why Your IVR Voice Matters More Than You Think" 
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: 'cover' }} 
        unoptimized
      />
    </div>
    <div className="bc">
      <span className="btag">
        Audio
      </span>
      <h3>
        Why Your IVR Voice Matters More Than You Think
      </h3>
      <p>
        The first voice a customer hears shapes their entire experience with your brand.
      </p>
      <div className="bmeta">
        <span className="bdate">
          October 2026
        </span>
        <span className="brm">
          Read More →
        </span>
      </div>
    </div>
  </Go>
</div>
        </section>
        <div className="divl" />
        <section className="sec reveal">
          <div style={{ textAlign: "center" }}>
            <div className="lbl lbl-c">
              Common Questions
            </div>
            <h2 className="title">
              Frequently Asked
            </h2>
          </div>
          <Faq items={[
              { q: "What types of clients does IBC Studio work with?", a: "We work with brands, corporations, SMEs, and government entities across the UAE and wider GCC. Our portfolio spans real estate, finance, hospitality, healthcare, retail, and government communications." },
              { q: "Do you offer multilingual production services?", a: "Absolutely. We offer voice-overs, dubbing, and localization in Arabic, English, Hindi, Urdu, French, and more — essential for the diverse markets across the region." },
              { q: "How long does a typical video production project take?", a: "A standard corporate video typically takes 2–4 weeks from briefing to delivery. Larger productions may take 4–8 weeks. We always agree on timelines upfront during the proposal stage." },
              { q: "What is IBC Intelligence?", a: "IBC Intelligence is the AI consultancy and insights division of IBC Studio, focused on helping businesses solve modern challenges through strategy, research, analytics, and intelligent technology-driven solutions." },
              { q: "How do I get a quote for my project?", a: "Reach out via our Contact page or WhatsApp. We'll schedule a free consultation to understand your project and provide a detailed proposal within 48 hours." },
            ]} />
        </section>
      </main>
    </div>
    <PageEffects />
    </>
  );
}
