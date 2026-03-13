import AdsSection from "./components/AdsSection/AdsSection";
import AboutBeyondBound from "./components/AboutBeyondBound/AboutBeyondBound";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TrustStandards from "./components/TrustStandards/TrustStandards";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f4f1]">
      {/* ── Ads: off-white bg ── */}
      <AdsSection />
      {/* ── About Beyond Bound: off-white bg ── */}
      <AboutBeyondBound />
      {/* ── How It Works: white bg ── */}
      <HowItWorks />
      {/* ── Trust Standards: white bg ── */}
      <TrustStandards />
    </div>
  );
}
