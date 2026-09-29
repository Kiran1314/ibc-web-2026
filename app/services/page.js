import Go from '@/components/Go';
import ServicesTabs from '@/components/ServicesTabs';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: "Our Services - IBC Studio",
  description: "Audio production, video production, photography, AI production, digital development, motion graphics and VR/AR services from IBC Studio in Dubai.",
};

export default function ServicesPage() {
  return (
    <>
    <div className="page active" id="pg-services">
      <main className="pw" id="main-content">
        <div className="sec reveal" style={{ paddingTop: "130px", paddingBottom: "36px" }}>
          <div className="lbl ph-eyebrow">
            Our Services
          </div>
          <h1 className="title ph-title" style={{ marginBottom: "28px" }}>
            What We Create
          </h1>
          <p className="desc ph-desc" style={{ marginBottom: "0" }}>
            We provide professional audio production, video production, and post-production services for corporate films, commercials, YouTube content, exhibition videos, and a wide range of digital media projects tailored for modern businesses.
            <br />
            <br />
            Our services also include commercial photography, AI production, website and software development, e-product catalogues, and professional coverage for events, exhibitions, and corporate gatherings.
          </p>
        </div>
        <ServicesTabs
          tabs={[
            { id: "audio", label: "Audio Production", icon: (
              <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            ) },
            { id: "video", label: "Video Production", icon: (
              <svg viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg>
            ) },
            { id: "photo", label: "Photography", icon: (
              <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg> 
            ) },
            { id: "ai", label: "AI Production", icon: (
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
            ) },
            { id: "digital", label: "Digital & Dev", icon: (
              <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            ) },
            { id: "motion", label: "Motion & VR/AR", icon: (
             <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/></svg>
            ) },
          ]}
          panels={{
            "audio": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    Audio Production
                  </h2>
                  <p>
                    Sound shapes perception. Our audio team creates professional voiceovers, sound design, IVR systems, dubbing, and music productions that define how your brand sounds across every platform, audience, and language.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/audio.jpg')" }} role="img" aria-label="Audio production at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h1M14 12h1M9 16h1M14 16h1"/>
                    </svg>
                  </div>
                  <h4>
                    IVR Systems
                  </h4>
                  <p>
                    Professional interactive voice response for seamless customer experiences.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 12a8 8 0 0116 0"/><path d="M4 12v4a2 2 0 002 2h2v-6H4zM20 12v4a2 2 0 01-2 2h-2v-6h4z"/>
                    </svg>
                  </div>
                  <h4>
                    On-Hold Messaging
                  </h4>
                  <p>
                    Branded on-hold audio that communicates while customers wait.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/><circle cx="12" cy="12" r="8"/>
                    </svg>
                  </div>
                  <h4>
                    Multilingual Voice-Overs
                  </h4>
                  <p>
                    Native-quality talent across Arabic, English, Hindi, French and more.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>
                    </svg>
                  </div>
                  <h4>
                    Jingle Production
                  </h4>
                  <p>
                    Original brand jingles composed in our in-house studio.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h10v8H7l-3 3z"/><path d="M12 11h8v8h-5l-3 3z"/>
                    </svg>
                  </div>
                  <h4>
                    {"Dubbing & Localization"}
                  </h4>
                  <p>
                    Accurate, culturally sensitive dubbing across all markets.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 14v-4M8 17V7M12 20V4M16 17V7M20 14v-4"/>
                    </svg>
                  </div>
                  <h4>
                    Sound Design
                  </h4>
                  <p>
                    Bespoke audio environments and music for video productions.
                  </p>
                </div>
              </div>
              </>
            ),
            "video": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    Video Production
                  </h2>
                  <p>
                    From pre-production to post-production, our full-service team captures your brand’s story with cinematic precision, from commercial advertisements and corporate films to documentaries, digital campaigns, and branded content.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/video.jpg')" }} role="img" aria-label="Video production at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <rect x="3" y="6" width="14" height="12" rx="2"></rect><path d="M17 10l4-3v10l-4-3"/>
                    </svg>
                  </div>
                  <h4>
                    Corporate Films
                  </h4>
                  <p>
                    Brand stories, company profiles, and internal communications.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 14l10-5v10L4 14z"/><path d="M14 10h3a3 3 0 010 6h-3"/>
                    </svg>
                  </div>
                  <h4>
                    {"Commercials & Ads"}
                  </h4>
                  <p>
                    High-impact advertising for broadcast, digital, and out-of-home.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4M16 3v4M4 10h16"/>
                    </svg>
                  </div>
                  <h4>
                    Event Coverage
                  </h4>
                  <p>
                    Live filming, highlight reels, and multi-camera coverage.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 12h.01"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                    </svg>
                  </div>
                  <h4>
                    {"Drone & Aerial"}
                  </h4>
                  <p>
                    Licensed drone cinematography for real estate, events, and landscapes.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12M4 10h16M4 14h16"/>
                    </svg>
                  </div>
                  <h4>
                    Post-Production
                  </h4>
                  <p>
                    Editing, motion graphics, color grading, and sound design.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M8 13h8M8 17h5"/>
                    </svg>
                  </div>
                  <h4>
                    Corporate Documentaries
                  </h4>
                  <p>
                    Long-form storytelling for brands, leaders, and causes that matter.
                  </p>
                </div>
              </div>
              </>
            ),
            "photo": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    Photography
                  </h2>
                  <p>
                    A single powerful image can define a brand. Our photography team combines technical expertise with creative vision to deliver impactful visuals for brands, campaigns, events, products, and digital platforms across every medium.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/photography.jpg')" }} role="img" aria-label="Photography at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <h4>
                    Product Photography
                  </h4>
                  <p>
                    Clean imagery for e-commerce, catalogues, and advertising.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>
                    </svg>
                  </div>
                  <h4>
                    {"Real Estate & Architecture"}
                  </h4>
                  <p>
                    Property photography that showcases space, light, and design.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 20h18"/><path d="M5 20V9l5 3V9l5 3V7h4v13"/>
                    </svg>
                  </div>
                  <h4>
                    Industrial Photography
                  </h4>
                  <p>
                    Technical photography for manufacturing, energy, and construction.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>
                    </svg>
                  </div>
                  <h4>
                    Corporate Portraits
                  </h4>
                  <p>
                    Professional headshots and team photography done authentically.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M8 14h8"/>
                    </svg>
                  </div>
                  <h4>
                    Event Photography
                  </h4>
                  <p>
                    Live coverage of conferences, launches, galas, and corporate events.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12M4 10h16M4 14h16"/>
                    </svg>
                  </div>
                  <h4>
                    Post-Production
                  </h4>
                  <p>
                    Expert retouching, color grading, and compositing for every image.
                  </p>
                </div>
              </div>
              </>
            ),
            "ai": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    AI Production
                  </h2>
                  <p>
                    We combine creative direction, AI media tools, and workflow thinking to create high-quality visual production systems for brands, campaigns, and operational teams without losing creative control or business context.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/ai.jpg')" }} role="img" aria-label="AI production at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="6" width="14" height="12" rx="2"></rect><path d="M17 10l4-3v10l-4-3"/><path d="M8 3v3M12 3v3"/>
                    </svg>
                  </div>
                  <h4>
                    AI Video Generation
                  </h4>
                  <p>
                    Cinematic AI video for social, advertising, and brand campaigns.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><path d="M12 9v8M8 13h8"/>
                    </svg>
                  </div>
                  <h4>
                    AI Photography
                  </h4>
                  <p>
                    High-resolution AI imagery for product, lifestyle, and conceptual campaigns.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                    <rect x="6" y="5" width="12" height="14" rx="4"/><path d="M9 10h.01M15 10h.01M10 15h4"/>
                    </svg>
                  </div>
                  <h4>
                    Synthetic Media
                  </h4>
                  <p>
                    AI avatars, digital presenters, and synthetic voice and video at scale.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                   <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/>
                    </svg>
                  </div>
                  <h4>
                    AI Creative Direction
                  </h4>
                  <p>
                    Creative guidance, prompt systems, and brand controls that keep AI output visually consistent.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 12a8 8 0 0113-6"/><path d="M17 2v4h-4M20 12a8 8 0 01-13 6"/><path d="M7 22v-4h4"/>
                    </svg>
                  </div>
                  <h4>
                    AI Based Automation
                  </h4>
                  <p>
                    Workflow automation for repetitive operational tasks, routing, retrieval, reporting, and production handoffs.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 19V5h16v14z"/><path d="M8 15l3-3 2 2 4-5"/>
                    </svg>
                  </div>
                  <h4>
                    AI Strategy Consulting
                  </h4>
                  <p>
                    IBC Intelligence helps teams identify where AI creates measurable leverage across productivity, speed, decision support, and execution.
                  </p>
                </div>
              </div>
              </>
            ),
            "digital": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    {"Digital & Development"}
                  </h2>
                  <p>
                    Beyond production, we create the digital platforms your brand needs, including modern websites, interactive e-learning experiences, custom software, and tailored digital solutions designed for today’s businesses.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/digital.jpg')" }} role="img" aria-label="Digital and development work at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <polyline points="16 18 22 12 16 6"></polyline><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <h4>
                    {"Web Design & Dev"}
                  </h4>
                  <p>
                    Bespoke websites designed for impact and conversion.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z"/>
                    </svg>
                  </div>
                  <h4>
                    E-Learning Platforms
                  </h4>
                  <p>
                    Custom LMS solutions and interactive training programmes.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 22h8M12 18v4M9 11h6"/>
                    </svg>
                  </div>
                  <h4>
                    Custom Digital Tools
                  </h4>
                  <p>
                    Bespoke web apps, portals, and automation tools.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 8h8M8 12h5M8 16h8"/>
                    </svg>
                  </div>
                  <h4>
                    UI/UX Design
                  </h4>
                  <p>
                    User-centred design prioritizing clarity, beauty, and performance.
                  </p>
                </div>
              </div>
              </>
            ),
            "motion": (
              <>
              <div className="sphdr">
                <div className="reveal">
                  <h2>
                    {"Motion Graphics & VR/AR"}
                  </h2>
                  <p>
                    Captivating motion graphics and immersive visual experiences designed to help brands communicate creatively, engage audiences effectively, and stand out across digital platforms.
                  </p>
                  <Go as="button" to="/contact" className="btn-p">
                    Request a Quote →
                  </Go>
                </div>
                <div className="vidph vidph--photo" style={{ backgroundImage: "url('/assets/images/opt/services/motion-vr.jpg')" }} role="img" aria-label="Motion graphics and VR/AR at IBC Studio" />
              </div>
              <div className="sfeat-grid">
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/>
                    </svg>
                  </div>
                  <h4>
                    Motion Graphics
                  </h4>
                  <p>
                    Animated titles, infographics, and brand motion identities.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M3 12c0-3 2-5 5-5h8c3 0 5 2 5 5v3a3 3 0 01-3 3h-2l-2-3h-4l-2 3H6a3 3 0 01-3-3z"/>
                    </svg>
                  </div>
                  <h4>
                    Virtual Reality (VR)
                  </h4>
                  <p>
                    Immersive 360° VR experiences for events, real estate, and training.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 22V12M4 6l8 6 8-6"/>
                    </svg>
                  </div>
                  <h4>
                    Augmented Reality (AR)
                  </h4>
                  <p>
                    AR filters, overlays, and interactive experiences for marketing.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                      <rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="M9 9h6v6H9z"/>
                    </svg>
                  </div>
                  <h4>
                    2D Animation
                  </h4>
                  <p>
                    Explainer videos, whiteboard animation, and 2D character work.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 2v10l8-6M12 12l-8-6"/>
                    </svg>
                  </div>
                  <h4>
                    3D Visualization
                  </h4>
                  <p>
                    Architectural renders, product 3D, and environment visualization.
                  </p>
                </div>
                <div className="sfeat reveal">
                  <div className="sfi">
                    <svg viewBox="0 0 24 24">
                     <path d="M4 12a8 8 0 0114-5"/><path d="M18 3v4h-4M20 12a8 8 0 01-14 5"/><path d="M6 21v-4h4"/>
                    </svg>
                  </div>
                  <h4>
                    360° Video
                  </h4>
                  <p>
                    Immersive 360° video content for VR platforms and social media.
                  </p>
                </div>
              </div>
              </>
            ),
          }}
        />
      </main>
    </div>
    <PageEffects />
    </>
  );
}
