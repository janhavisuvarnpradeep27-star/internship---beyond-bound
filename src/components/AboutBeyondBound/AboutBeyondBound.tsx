const features = [
  { icon: "🌿", label: "100% Natural Ingredients" },
  { icon: "🔬", label: "Third-Party Lab Tested" },
  { icon: "🏆", label: "WHO-GMP Certified Facility" },
  { icon: "💊", label: "No Artificial Additives" },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "4.8★", label: "Average Rating" },
  { value: "200+", label: "Studies Backed" },
];

export default function AboutBeyondBound() {
  return (
    <section
      aria-labelledby="about-beyond-bound-heading"
      className="w-full bg-white py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image block ── */}
          <div className="group relative flex items-center justify-center">
            {/* Radial glow behind the bottle */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(42,124,124,0.13),transparent_70%)]" />
            <div className="relative w-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[380px] lg:min-h-[480px]">
              <img
                src="/glycomics-bottle.png"
                alt="Beyond Bound Glycomics supplement bottle"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "50% 42%" }}
              />
            </div>

            {/* Floating stat pills */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center px-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center bg-white border border-gray-100 shadow-md rounded-xl px-5 py-3 min-w-[90px]"
                >
                  <span className="text-xl font-bold text-[#2a7c7c] leading-none">{s.value}</span>
                  <span className="text-[11px] text-gray-500 mt-0.5 text-center">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Content block ── */}
          <div className="space-y-7 pt-8 lg:pt-0">
            {/* Label badge */}
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[#2a7c7c] bg-[#2a7c7c]/10 px-4 py-1.5 rounded-full">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Rooted in Ayurveda
            </span>

            {/* Heading */}
            <div className="space-y-4">
              <h2
                id="about-beyond-bound-heading"
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
              >
                About Beyond Bound
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Beyond Bound is formulated with premium Ayurvedic herbs, carefully selected for their ability to support
                your body&apos;s natural balance. Each ingredient is sourced from trusted suppliers and undergoes rigorous
                quality testing to ensure consistent purity, potency, and safety in every serving.
              </p>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-[#2a7c7c]/5 border border-gray-100 rounded-xl px-4 py-3 transition-colors duration-200"
                >
                  <span className="text-xl leading-none shrink-0">{f.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{f.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#2a7c7c] hover:bg-[#1e5f5f] hover:scale-105 active:scale-95 text-white text-[15px] font-semibold px-7 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[15px] font-medium text-[#2a7c7c] hover:underline underline-offset-4 transition-all duration-200"
              >
                View All Products →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
