import Counter from '@/components/Counter';
import ClientGrid from '@/components/ClientGrid';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: "Our Clients - IBC Studio",
  description: "IBC Studio has produced media for 3,000+ satisfied clients across the UAE, from government entities to leading real estate, finance and aviation brands.",
};

export default function ClientsPage() {
  return (
    <>
    <div className="page active" id="pg-clients">
      <main className="pw" id="main-content">
        <div className="sec reveal" style={{ paddingTop: "130px", textAlign: "center" }}>
          <div className="lbl lbl-c ph-eyebrow">
            Our Clients
          </div>
          <h1 className="ph-title" style={{ fontSize: "clamp(38px,5vw,62px)", letterSpacing: "-.03em", marginBottom: "18px" }}>
            3,000+ Brands.
            <br />
            One Shared Standard.
          </h1>
          <p className="ph-desc" style={{ fontSize: "16px", color: "var(--mid)", maxWidth: "580px", margin: "0 auto" }}>
            From government entities to global corporations, IBC Studio has become a trusted media partner for thousands of organizations across the UAE, GCC, and beyond.
          </p>
        </div>
        <div className="client-stat-grid">
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "2px solid var(--navy)", borderRadius: "9px", padding: "26px", textAlign: "center" }}>
            <Counter value="3K" suffix="+" style={{ fontSize: "38px" }} />
            <span className="slbl">
              Total Clients
            </span>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "2px solid var(--green)", borderRadius: "9px", padding: "26px", textAlign: "center" }}>
            <Counter value="15" suffix="+" style={{ fontSize: "38px" }} />
            <span className="slbl">
              Industries Served
            </span>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "2px solid var(--sage)", borderRadius: "9px", padding: "26px", textAlign: "center" }}>
            <Counter value="UAE" suffix="+" style={{ fontSize: "38px" }} />
            <span className="slbl">
              {"GCC & Beyond"}
            </span>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "2px solid rgba(255,255,255,.1)", borderRadius: "9px", padding: "26px", textAlign: "center" }}>
            <Counter value="98" suffix="%" style={{ fontSize: "38px" }} />
            <span className="slbl">
              Retention Rate
            </span>
          </div>
        </div>
        <ClientGrid />
      </main>
    </div>
    <PageEffects />
    </>
  );
}
