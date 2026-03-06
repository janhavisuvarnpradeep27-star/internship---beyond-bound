import AdsSection from "./components/AdsSection/AdsSection";
import TrustStandards from "./components/TrustStandards/TrustStandards";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f4f1]">
      {/* ── Ads: off-white bg ── */}
      <AdsSection />
      {/* ── Trust Standards: white bg ── */}
      <TrustStandards />
    </div>
  );
}
