interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

/* ── Icons ──────────────────────────────────────────────────── */
const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M22 12h-4l-3 7-4-14-3 7H2" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────── */
const steps: StepItem[] = [
  {
    id: "activate-pathway",
    number: "01",
    title: "Activates Metabolic Pathway",
    description:
      "Berberine triggers AMPK, your cellular energy sensor that regulates glucose uptake and keeps metabolism running efficiently.",
    icon: <SparkIcon />,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: "liver-regulation",
    number: "02",
    title: "Supports Liver Glucose Regulation",
    description:
      "Reduces excess glucose production in the liver while improving insulin receptor sensitivity for balanced blood sugar.",
    icon: <PulseIcon />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "cellular-utilization",
    number: "03",
    title: "Enhances Cellular Glucose Utilization",
    description:
      "Increases glucose transport into cells, helping maintain healthy blood sugar levels throughout the day.",
    icon: <TargetIcon />,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

/* ── Connector line between steps ───────────────────────────── */
function StepConnector() {
  return (
    <div className="hidden sm:flex justify-start pl-[23px] h-8">
      <div className="w-0.5 h-full bg-linear-to-b from-[#2a7c7c]/30 to-[#2a7c7c]/10 rounded-full" />
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="w-full bg-gray-50 py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 space-y-4">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a7c7c] bg-[#2a7c7c]/10 px-4 py-1.5 rounded-full">
            The Science
          </span>
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            How It Works
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            A clinically validated 3-step metabolic mechanism — backed by over 200 peer-reviewed studies.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.id}>
              <article className="group flex items-start gap-5 md:gap-7 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 p-6 md:p-7 transition-all duration-300">

                {/* Step number circle */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#2a7c7c] text-white flex items-center justify-center text-sm font-bold tracking-wide shadow-sm">
                  {step.number}
                </div>

                {/* Icon + Text */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${step.iconBg} ${step.iconColor}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed pl-12">
                    {step.description}
                  </p>
                </div>

              </article>
              {idx < steps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Backed by{" "}
            <span className="font-bold text-gray-900">200+ peer-reviewed studies</span>{" "}
            on berberine&apos;s metabolic effects
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2a7c7c] hover:bg-[#1e5f5f] hover:scale-105 active:scale-95 text-white text-lg font-semibold px-9 py-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
          >
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
