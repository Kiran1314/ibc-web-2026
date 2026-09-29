import WorkExplorer from '@/components/WorkExplorer';
import PageEffects from '@/components/PageEffects';

export const metadata = {
  title: "Work Samples - IBC Studio",
  description: "Explore IBC Studio work samples across video, audio, photography, drone, AI production and digital projects for UAE brands.",
};

export default function WorkPage() {
  return (
    <>
    <div className="page active" id="pg-work">
      <main className="pw" id="main-content">
        <div className="sec reveal" style={{ paddingTop: "130px", paddingBottom: "36px" }}>
          <div className="lbl ph-eyebrow">
            Portfolio
          </div>
          <h1 className="title ph-title" style={{ marginBottom: "28px" }}>
            Work That Speaks
          </h1>
          <p className="desc ph-desc" style={{ marginBottom: "0" }}>
            A curated selection of projects across our core service areas.
          </p>
        </div>
        <WorkExplorer />
      </main>
    </div>
    <PageEffects />
    </>
  );
}
