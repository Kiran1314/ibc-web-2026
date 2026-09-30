import Go from '@/components/Go';
import PageEffects from '@/components/PageEffects';
import Image from 'next/image';

export const metadata = {
  title: 'Corporate AI Workflow Automation Tools | IBC Studio',
  description: 'We analyze your corporate processes to find workflow issues. Leverage advanced AI workflow automation tools and enterprise AI integrations to optimize ROI.',
  keywords: 'AI workflow automation tools, business process automation tools, AI operations consulting, corporate workflow optimization, corporate AI integrations, workplace automation platforms, enterprise AI agent orchestration, AI Consultancy, AI Advisory, AI Consulting, Business AI Solutions, AI Strategy, AI Implementation, AI Integration, AI Solutions, AI Transformation, Workflow Optimization, Process Automation, Business Process Optimization, Operational Efficiency, Workflow Automation, Productivity Improvement, Decision Support Systems, Knowledge Management, Knowledge Retrieval Systems, Business Intelligence, Process Improvement, Operational Intelligence, Workflow Analysis, AI Assistants, AI Chatbots, Internal Knowledge Systems, Semantic Search, Enterprise Search, Intelligent Document Retrieval, AI-Powered Analytics, Custom AI Solutions, AI Automation Systems, Generative AI Solutions, Lead Qualification Automation, Sales Process Automation, Customer Support Automation, AI Content Workflows, Marketing Automation, AI Content Generation, AI Consultancy Dubai, AI Consulting UAE, Business AI Consulting Dubai, AI Advisory Services UAE, Digital Transformation Dubai, Enterprise AI Solutions UAE, Knowledge Management Systems, Operational Efficiency Solutions, AI-Driven Decision Support, AI Integration Services, AI Implementation Dubai, AI Strategy Consulting UAE, AI Transformation Services Dubai, Workflow Optimization Tools UAE, Process Automation Solutions Dubai, Business Process Optimization UAE, Intelligent Document Retrieval Systems, AI-Powered Analytics Solutions, Custom AI Solutions Dubai, Generative AI Solutions UAE, Lead Qualification Automation Tools Dubai, Sales Process Automation UAE, Customer Support Automation Solutions Dubai, AI Content Workflows UAE, Marketing Automation Tools Dubai',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/ibc-intelligence',
    title: 'Corporate AI Workflow Automation Tools | IBC Studio',
    description: 'We work closely with teams to understand their workflows and implement custom AI solutions that solve real business challenges and deliver measurable results.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Intelligence",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/ibc-intelligence",
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

export default function IbcIntelligencePage() {
  return (
    <>
    <main className="page active" id="pg-intel">
      <div className="ih">
        <div className="ig" />
        <div className="igl1" />
        <div className="igl2" />
        <div className="ibdg ph-eyebrow reveal">
           
            <div className="intel-container">
                          <div className="logo" style={{ cursor: 'default' }}>
                              <Image 
                                src="/assets/images/logo/intel4.webp" 
                                alt="IBC Studio Logo" 
                                width={100}
                                height={100}
                                style={{ 
                                  width: 'clamp(110px, 15vw, 100px)', 
                                  height: 'clamp(110px, 15vw, 100px)', 
                                  objectFit: 'contain',
                                  display: 'block',
                                  
                                  
                                }} 
                              />
                            </div>
                  
          </div>
          <div className="ibdn">
            IBC{" "}
            <em>
              Intelligence
            </em>
          </div>
          <span className="ibdp">
            AI Advisory
          </span>
        </div>
        <div className="ihg">
          <div className="reveal">
            <h1 className="ph-title">
              AI Advisory for
              <br />
              Real Business Workflows.
            </h1>
            <p className="ph-desc">
              We help businesses identify where AI creates measurable operational leverage across productivity, speed, decision support, reporting, and execution.
            </p>
            <div style={{ display: "flex", gap: "11px", flexWrap: "wrap" }}>
              <Go as="button" to="/contact" className="ibb reveal" style={{ padding: "12px 20px", fontSize: "13px" }}>
                Book a Consultancy →
              </Go>
              <span className="intel-operator-pill">
                Business led Advisory
              </span>
            </div>
            <div className="itgs">
              <span className="itg reveal">
                19+ Years in Dubai
              </span>
              <span className="itg reveal">
                Advisory + Execution
              </span>
              <span className="itg reveal">
                Workflow Optimization
              </span>
              <span className="itg reveal">
                Decision Support
              </span>
              
            </div>
          </div>
          <div className="ivp reveal">
            <div className="ipl">
              <svg viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="ivl">
              Business-First AI Opportunity Review
            </span>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is">
        <div className="il reveal">
          The Problem
        </div>
        <h2 className="it reveal">
          Most businesses are applying AI to the wrong workflows.
        </h2>
        <p className="id reveal">
          Visible AI use cases are not always the ones that improve productivity, margin, turnaround time, or decision quality. The real challenge is knowing where AI creates leverage and where human context still matters.
        </p>
        <div className="ics">
          <div className="ic reveal">
            <div className="icn">
              01
            </div>
            <h3>
              AI without operational context
            </h3>
            <p>
              Teams adopt tools before understanding where workflow inefficiencies actually exist.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              02
            </div>
            <h3>
              Automation replacing visibility
            </h3>
            <p>
              Processes become fragmented when automation is added without improving operational clarity.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              03
            </div>
            <h3>
              High-impact workflows stay manual
            </h3>
            <p>
              Important bottlenecks often remain slow, repetitive, and resource-intensive.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              04
            </div>
            <h3>
              Decision quality suffers
            </h3>
            <p>
              AI outputs without business context can reduce clarity instead of improving it.
            </p>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is isd">
        <div className="il reveal">
          Our Approach
        </div>
        <h2 className="it reveal">
          AI creates value when applied with business context.
        </h2>
        <p className="id reveal">
          We study how teams actually operate, identify high-leverage bottlenecks, and design practical AI systems that fit the real process instead of forcing disruption.
        </p>
        <div className="ics">
          <div className="ic reveal">
            <div className="icn">
              01
            </div>
            <h3>
              Understand the Workflow
            </h3>
            <p>
              We analyze how teams collaborate, retrieve information, execute tasks, and make decisions.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              02
            </div>
            <h3>
              Identify Bottlenecks
            </h3>
            <p>
              We focus on workflows affecting productivity, reporting, turnaround time, efficiency, and decision support.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              03
            </div>
            <h3>
              Design Practical AI Systems
            </h3>
            <p>
              We build AI solutions around the business process, not around hype or unnecessary complexity.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              04
            </div>
            <h3>
              Improve Execution
            </h3>
            <p>
              The outcome is faster workflows, reduced manual overhead, stronger visibility, and better information access.
            </p>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is">
        <div className="il reveal">
          Proof / Case Study
        </div>
        <h2 className="it reveal">
          Accelerating due diligence through AI-assisted comparative analysis.
        </h2>
        <p className="id reveal">
          For a blockchain funding platform evaluating a large number of projects, analysts needed to manually retrieve, compare, and evaluate similar projects and market performance data.
        </p>
        <div className="iwk">
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Solution
            </span>
            <h3>
              Telegram-integrated AI assistant
            </h3>
            <p>
              We built an AI-powered comparative analysis assistant using semantic retrieval to identify and compare relevant projects and token intelligence beyond rigid tag-based filtering.
            </p>
            <div className="ipf">
              <span>
                Existing workflow
              </span>
              <em>
                AI-assisted
              </em>
            </div>
          </div>
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Impact
            </span>
            <h3>
              50% faster due diligence
            </h3>
            <p>
              Comparative analysis workflows were completed substantially faster while keeping analyst-driven decision quality intact.
            </p>
            <div className="ipf">
              <span>
                Speed gain
              </span>
              <em>
                50%
              </em>
            </div>
          </div>
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Efficiency
            </span>
            <h3>
              ~8 hours saved per analyst / week
            </h3>
            <p>
              Relevant market intelligence became instantly accessible, reducing repetitive research overhead without increasing headcount.
            </p>
            <div className="ipf">
              <span>
                Weekly saving
              </span>
              <em>
                ~8 hrs
              </em>
            </div>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is isd">
        <div className="il reveal">
          Trust / Team
        </div>
        <h2 className="it reveal">
          Built by operators, creators, and technical teams.
        </h2>
        <p className="id reveal">
          IBC Intelligence combines strategic thinking with in-house execution capability across media, systems, content, and digital infrastructure.
        </p>
        <div className="itm">
          <div className="imc reveal">
            <div className="ima">
              AB
            </div>
            <h3>
              Abhishek Banerjee
            </h3>
            <span className="imr">
              CEO
            </span>
            <p>
              Leads company strategy, business growth, and cross-functional execution across media, digital, and operational initiatives.
            </p>
          </div>
          <div className="imc reveal">
            <div className="ima">
              AA
            </div>
            <h3>
              Atif Amjad
            </h3>
            <span className="imr">
              COO / AI Consultancy Lead
            </span>
            <p>
              Built the internal comparative analysis system and leads workflow-focused AI advisory and implementation.
            </p>
          </div>
          <div className="imc reveal">
            <div className="ima">
              KS
            </div>
            <h3>
              Kabir Saigal
            </h3>
            <span className="imr">
              CPO
            </span>
            <p>
              Oversees product direction, workflow systems, digital infrastructure, and implementation strategy.
            </p>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is">
        <div className="il reveal">
          Engagement Areas
        </div>
        <h2 className="it reveal">
          Common areas where we support clients.
        </h2>
        <p className="id reveal">
          We focus on operational improvement and workflow outcomes, not AI hype.
        </p>
        <div className="ics">
          <div className="ic reveal">
            <div className="icn">
              01
            </div>
            <h3>
              {"Internal Knowledge & Retrieval"}
            </h3>
            <p>
              Helping teams access, compare, and retrieve operational information faster.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              02
            </div>
            <h3>
              {"Workflow & Process Optimization"}
            </h3>
            <p>
              Reducing repetitive manual work and improving operational speed.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              03
            </div>
            <h3>
              {"Content & Production Workflows"}
            </h3>
            <p>
              Improving creative and production efficiency using AI-assisted systems.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              04
            </div>
            <h3>
              {"Reporting & Decision Support"}
            </h3>
            <p>
              Enhancing visibility, analysis, and operational decision-making.
            </p>
          </div>
          <div className="ic reveal">
            <div className="icn">
              05
            </div>
            <h3>
              {"Lead & Sales Workflow Support"}
            </h3>
            <p>
              Supporting qualification, routing, and communication workflows.
            </p>
          </div>
        </div>
      </div>
      <div className="idv" />
      <div className="is isd">
        <div className="il reveal">
          Consultation
        </div>
        <h2 className="it reveal">
          Book a business-first AI opportunity review.
        </h2>
        <p className="id reveal">
          We will review your current workflows, identify where AI may create operational leverage, and discuss practical opportunities aligned with how your business actually operates.
        </p>
        <div className="iwk">
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Step 1
            </span>
            <h3>
              Workflow Review
            </h3>
            <p>
              Understanding operational bottlenecks, inefficiencies, team handoffs, and information access issues.
            </p>
            <div className="ipf">
              <span>
                Focus
              </span>
              <em>
                Operations
              </em>
            </div>
          </div>
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Step 2
            </span>
            <h3>
              AI Opportunity Identification
            </h3>
            <p>
              Identifying where AI can improve productivity, speed, reporting, retrieval, or decision support.
            </p>
            <div className="ipf">
              <span>
                Focus
              </span>
              <em>
                Leverage
              </em>
            </div>
          </div>
          <div className="ipj reveal">
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg,#46b7b7,#244f7d)", borderRadius: "2px", marginBottom: "14px" }} />
            <span className="ipt">
              Step 3
            </span>
            <h3>
              Practical Recommendations
            </h3>
            <p>
              Business-aligned ideas tailored to your operational workflow and implementation reality.
            </p>
            <div className="ipf">
              <span>
                Focus
              </span>
              <em>
                Execution
              </em>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "34px" }}>
          <Go as="button" to="/contact" className="ibb reveal" style={{ padding: "13px 22px", fontSize: "13px" }}>
            Schedule a Consultation →
          </Go>
        </div>
      </div>
      <div className="ift">
        <p>
          © 2026 IBC Intelligence — Business led Advisory by IBC Studio. Dubai, UAE.
        </p>
      </div>
    </main>
    <PageEffects />
    </>
  );
}
