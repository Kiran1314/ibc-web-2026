import ContactForm from '@/components/ContactForm';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: 'Contact Our Production Studio | Book Your Dubai Session',
  description: 'Ready to upscale your brand&apos;s digital presence? Get in touch with us to book a pro recording studio session or consult on high-end commercial video shoots.',
  keywords: 'best audio recording studio in dubai, photo studio in dubai, cheap website design dubai, commercial video production dubai, corporate video production uae, professional photography dubai, corporate photography dubai, corporate video production dubai, corporate video production abu dhabi, corporate video production sharjah, corporate video production ajman, corporate video production fujairah, corporate video production ras al khaimah, corporate video production umm al quwain',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/contact',
    title: 'Contact Our Production Studio | Book Your Dubai Session',
    description: 'Ready to upscale your brand&apos;s digital presence? Get in touch with us to book a pro recording studio session or consult on high-end commercial video shoots.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/contact",
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

export default function ContactPage() {
  return (
    <>
    <div className="page active" id="pg-contact">
      <main className="pw" id="main-content">
        <div className="cwrap">
          <div className="cinfo">
            <div className="lbl ph-eyebrow">
              Get In Touch
            </div>
            <h1 className="ph-title">
              Let's Create Something Great Together.
            </h1>
            <p className="ph-desc">
              Whether you have a brief ready or just an idea, we'd love to hear from you. Our team will respond within 24 hours.
            </p>
            <div className="cdet reveal">
              <div className="cion">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ctxt">
                <h4>
                  Location
                </h4>
                <p>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
            <div className="cdet reveal">
              <div className="cion">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="ctxt">
                <h4>
                  Phone
                </h4>
                <p>
                  +971 55 291 2810
                </p>
              </div>
            </div>
            <div className="cdet reveal">
              <div className="cion">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="ctxt">
                <h4>
                  Email
                </h4>
                <p>
                  info@ibcstudio.com
                </p>
              </div>
            </div>
            <div className="cdet reveal">
              <div className="cion">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <div className="ctxt">
                <h4>
                  WhatsApp
                </h4>
                <p>
                  +971 55 995 8905
                </p>
              </div>
            </div>
            <div className="cblock">
              <div className="cblock-title">
                Working Hours
              </div>
              <div className="trow">
                <span className="td">
                  Monday – Friday
                </span>
                <span className="th">
                  9:00 AM – 6:00 PM
                </span>
              </div>
              <div className="trow">
                <span className="td">
                  Saturday
                </span>
                <span className="th">
                  10:00 AM – 4:00 PM
                </span>
              </div>
              <div className="trow">
                <span className="td">
                  Sunday
                </span>
                <span className="tcl">
                  Closed
                </span>
              </div>
            </div>
            <div className="cblock">
              <div className="cblock-title">
                Follow Us
              </div>
              <div className="ft-social">
                <a href="https://www.facebook.com/profile.php?id=61575559854140" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
                  <svg className="social-ico fb" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M14 8.6V6.9c0-.8.2-1.3 1.4-1.3H17V2.3c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v2H7.2V12h2.9v9.9H14V12h2.8l.4-3.4H14z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/ibcstudio_uae/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
                  <svg className="social-ico ig" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="igContact" x1="3" y1="21" x2="21" y2="3">
                        <stop stopColor="#f58529" />
                        <stop offset=".35" stopColor="#dd2a7b" />
                        <stop offset=".7" stopColor="#8134af" />
                        <stop offset="1" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#igContact)" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2" />
                    <circle cx="17.4" cy="6.6" r="1.35" fill="#fff" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ibcstudiouae/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                  <svg className="social-ico in" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M6.7 8.9H3.2v11.4h3.5V8.9zM5 3.3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1zm15.8 10.5c0-3.1-1.7-5.2-4.4-5.2-1.7 0-2.7.9-3.1 1.7h-.1V8.9H9.9v11.4h3.5v-5.6c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1v5.5h3.5v-6.5z" />
                  </svg>
                </a>
                <a href="https://wa.me/971559958905" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
                  <svg className="social-ico wa" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.4 21.9l5.2-1.2A9.7 9.7 0 1 0 12 2.2zm0 17.7c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .7.7-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <ContactForm className="cform reveal" id="contact-form" action="mailto:info@ibcstudio.com" method="post" encType="text/plain">
            <h2>
              Send an Enquiry
            </h2>
            <p>
              Fill in the form and we'll be in touch within 24 hours.
            </p>
            <div className="frow">
              <div className="fg">
                <label htmlFor="first-name">
                  First Name
                </label>
                <input id="first-name" name="first_name" type="text" autoComplete="given-name" placeholder="Your first name" required />
              </div>
              <div className="fg">
                <label htmlFor="last-name">
                  Last Name
                </label>
                <input id="last-name" name="last_name" type="text" autoComplete="family-name" placeholder="Your last name" required />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="email">
                Email Address
              </label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
            </div>
            <div className="fg">
              <label htmlFor="phone">
                Phone / WhatsApp
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 55 291 2810" required />
            </div>
            <div className="fg">
              <label htmlFor="company">
                Company Name
              </label>
              <input id="company" name="company" type="text" autoComplete="organization" placeholder="Your company" />
            </div>
            <div className="fg">
              <label htmlFor="service">
                Service of Interest
              </label>
              <select id="service" name="service" required>
                <option value="">
                  Select a service
                </option>
                <option>
                  Audio Production
                </option>
                <option>
                  Video Production
                </option>
                <option>
                  Photography
                </option>
                <option>
                  AI Production
                </option>
                <option>
                  {"Digital & Development"}
                </option>
                <option>
                  Motion Graphics / VR / AR
                </option>
                <option>
                  IBC Intelligence
                </option>
                <option>
                  Multiple Services
                </option>
                <option>
                  General Enquiry
                </option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="project">
                Tell Us About Your Project
              </label>
              <textarea id="project" name="project" rows="4" placeholder="Describe your project, goals, timeline, and any specific requirements..." required />
            </div>
            <button className="fsub" type="submit">
              Send Enquiry →
            </button>
            <p className="form-status" role="status" aria-live="polite" />
          </ContactForm>
        </div>
      </main>
    </div>
    <PageEffects />
    </>
  );
}
