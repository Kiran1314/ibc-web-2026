import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: "Terms of Service | IBC Studio",
  description: "The terms that apply when you use the IBC Studio website and contact us about our services.",
};

export default function TermsOfServicePage() {
  return (
    <>
    <main id="main-content" className="legal-page">
      <div className="legal-content">
        <div className="lbl reveal">
          Legal
        </div>
        <h1 className="reveal">
          Terms of Service
        </h1>
        <p className="legal-updated reveal">
          Last updated: 21 September 2026
        </p>
        <p className="reveal">
          These terms govern your use of the IBC Studio website. By using this website, you agree to these terms.
        </p>
        <h2 className="reveal">
          Website use
        </h2>
        <p className="reveal">
          You may use this website for lawful purposes and to learn about or enquire about IBC Studio’s services. You must not interfere with the website, attempt unauthorised access, or use its content in a way that infringes our rights or the rights of others.
        </p>
        <h2 className="reveal">
          Content and intellectual property
        </h2>
        <p className="reveal">
          Unless stated otherwise, the website’s text, branding, design, images, video, graphics, and other materials belong to IBC Studio or are used with permission. They may not be copied, republished, or commercially used without written permission.
        </p>
        <h2 className="reveal">
          Quotes and services
        </h2>
        <p className="reveal">
          Website information is provided for general guidance and does not create a binding offer. Project scope, fees, delivery dates, approvals, revisions, ownership, and payment terms will be set out in a separate written proposal or agreement.
        </p>
        <h2 className="reveal">
          Third-party links
        </h2>
        <p className="reveal">
          Our website may link to third-party websites or services. We do not control or endorse their content, policies, or availability.
        </p>
        <h2 className="reveal">
          Liability
        </h2>
        <p className="reveal">
          We aim to keep website information accurate and available, but provide it without warranties of any kind. To the extent permitted by law, IBC Studio is not liable for loss arising from use of, or inability to use, this website.
        </p>
        <h2 className="reveal">
          Changes and contact
        </h2>
        <p className="reveal">
          We may update these terms at any time by posting a revised version here. Questions can be sent to{" "}
          <a href="mailto:info@ibcstudio.com">
            info@ibcstudio.com
          </a>
          .
        </p>
      </div>
    </main>
    <PageEffects />
    </>
  );
}
