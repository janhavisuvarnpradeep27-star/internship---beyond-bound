/* ================================================================
   TrustStandards — "Why Trust Beyond Bound" section
   ================================================================
   Layout: 3-column responsive grid (9 trust items)
   Content: certification badges, safety icons, customer proof
   ================================================================ */

/* ── SVG icons ────────────────────────────────────────────────── */
const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const CertifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    <polyline points="9 8 11 10 15.5 5.5" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 3h6v11l3.3 5.5A2 2 0 0 1 16.6 22H7.4a2 2 0 0 1-1.7-2.5L9 14V3z" />
    <line x1="9" y1="8" x2="15" y2="8" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const RefundIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const FactoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

const AyushIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 6v6l4 2" />
    <circle cx="18" cy="6" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

/* ── Trust items data ─────────────────────────────────────────── */
interface TrustItem {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const trustItems: TrustItem[] = [
  {
    id: "who-gmp",
    icon: <ShieldCheckIcon />,
    iconBg: "bg-teal-50 text-teal-600",
    title: "WHO-GMP Certified",
    description:
      "Manufactured in a WHO-GMP certified facility ensuring pharmaceutical-grade production standards and consistent quality.",
  },
  {
    id: "iso",
    icon: <CertifiedIcon />,
    iconBg: "bg-blue-50 text-blue-500",
    title: "ISO 22000 Certified",
    description:
      "ISO 22000 food safety management — internationally recognized standard for safe, controlled production processes.",
  },
  {
    id: "non-gmo",
    icon: <LeafIcon />,
    iconBg: "bg-green-50 text-green-600",
    title: "100% Non-GMO",
    description:
      "Every ingredient is sourced from non-genetically modified organisms, keeping our formulas natural and clean.",
  },
  {
    id: "lab-tested",
    icon: <FlaskIcon />,
    iconBg: "bg-amber-50 text-amber-500",
    title: "Third-Party Lab Tested",
    description:
      "Each batch is independently tested for purity, potency, and absence of heavy metals or contaminants.",
  },
  {
    id: "secure",
    icon: <LockIcon />,
    iconBg: "bg-slate-50 text-slate-500",
    title: "Secure Checkout",
    description:
      "256-bit SSL encryption on all transactions. Your personal and payment information is always fully protected.",
  },
  {
    id: "refund",
    icon: <RefundIcon />,
    iconBg: "bg-orange-50 text-orange-500",
    title: "30-Day Money Back",
    description:
      "Not satisfied? Return within 30 days for a full refund — no questions asked, no hassle.",
  },
  {
    id: "customers",
    icon: <StarIcon />,
    iconBg: "bg-yellow-50 text-yellow-500",
    title: "10,000+ Happy Customers",
    description:
      "Trusted by over ten thousand customers across India with an average rating of 4.8 out of 5 stars.",
  },
  {
    id: "haccp",
    icon: <FactoryIcon />,
    iconBg: "bg-indigo-50 text-indigo-500",
    title: "HACCP Compliant",
    description:
      "Hazard Analysis Critical Control Points protocols are applied throughout every stage of production to ensure safety.",
  },
  {
    id: "ayush",
    icon: <AyushIcon />,
    iconBg: "bg-rose-50 text-rose-500",
    title: "AYUSH Compliant",
    description:
      "Formulated in compliance with India's AYUSH Ministry guidelines — authentic, responsible, and regulatory-approved.",
  },
];

/* ── Main component ──────────────────────────────────────────── */
export default function TrustStandards() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="w-full bg-white py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-[#2a7c7c] mb-3">
            Our Commitment to You
          </p>
          <h2
            id="trust-heading"
            className="text-[42px] md:text-[48px] font-bold text-gray-900 leading-[1.15] tracking-tight"
          >
            Why Trust Beyond Bound?
          </h2>
        </div>

        {/* ── 3-column trust grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 bg-white border border-gray-100 rounded-[10px] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.09),0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0 ${item.iconBg}`}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#f5f4f1] rounded-[10px] px-8 py-6">
          <p className="text-[16px] text-gray-700 font-medium text-center sm:text-left">
            Questions about our quality standards or ingredients?
          </p>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#2a7c7c] hover:bg-[#1e5f5f] text-white text-[14px] font-semibold px-6 py-3 rounded-[10px] transition-colors duration-200"
          >
            Talk to Our Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
