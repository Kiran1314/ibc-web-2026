import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: "Privacy Policy | IBC Studio",
  description: "How IBC Studio collects, uses and protects information submitted through its website and contact channels.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <main id="main-content" className="legal-page">
      <div className="legal-content">
        <div className="lbl reveal">
          Legal
        </div>
        <h1 className="reveal">
          Privacy Policy
        </h1>
        <p className="legal-updated reveal">
          Last updated: 21 September 2026
        </p>
        <p className="reveal">
          IBC Studio respects your privacy. This policy explains what information we collect when you use our website or contact us, why we collect it, and how we keep it safe.
        </p>
        <h2 className="reveal">
          Information we collect
        </h2>
        <p className="reveal">
          When you contact us, request a quote, subscribe to updates, or use our website, we may collect your name, business name, email address, phone number, project details, and any other information you choose to provide.
        </p>
        <h2 className="reveal">
          How we use information
        </h2>
        <p className="reveal">
          We use your information to respond to enquiries, prepare proposals, deliver requested services, improve our website and communications, and meet legal or contractual obligations. We do not sell your personal information.
        </p>
        <h2 className="reveal">
          Cookies and analytics
        </h2>
        <p className="reveal">
          Our website may use essential cookies and basic analytics to understand site performance and improve the experience. You can control cookies through your browser settings.
        </p>
        <h2 className="reveal">
          Sharing and security
        </h2>
        <p className="reveal">
          We share information only with trusted providers where needed to operate our website or deliver services, or where required by law. We take reasonable technical and organisational measures to protect information, though no online service can guarantee absolute security.
        </p>
        <h2 className="reveal">
          Your choices
        </h2>
        <p className="reveal">
          You may ask to access, correct, or delete personal information we hold about you, subject to applicable law. To make a request, email{" "}
          <a href="mailto:info@ibcstudio.com">
            info@ibcstudio.com
          </a>
          .
        </p>
        <h2 className="reveal">
          Updates to this policy
        </h2>
        <p className="reveal">
          We may update this policy from time to time. The latest version will always be published on this page.
        </p>
      </div>
    </main>
    <PageEffects />
    </>
  );
}
