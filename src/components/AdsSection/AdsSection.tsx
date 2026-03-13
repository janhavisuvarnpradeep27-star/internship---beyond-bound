/* ================================================================
   AdsSection — Featured & Sponsored ads section
   ================================================================
   Layout  : 1 large featured banner + 2 small cards in a 2-col grid
   Design  : premium, lively, teal brand colors, subtle gradients
   ================================================================ */

/* ── Types ──────────────────────────────────────────────────── */
interface Ad {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  ctaText: string;
  ctaHref: string;
  sponsorLabel?: string;
  tag?: string;
  badge?: string;
}

/* ── Static ad data ─────────────────────────────────────────── */
const featuredAd: Ad = {
  id: "featured-glycomics",
  title: "Glycomics — Metabolic Wellness Supplement",
  subtitle: "Clinically formulated with premium Ayurvedic herbs to support healthy glucose metabolism naturally.",
  imageSrc: "/glycomics-bottle.png",
  imageAlt: "Glycomics supplement bottle — front view",
  imagePosition: "50% 42%",
  ctaText: "Shop Now",
  ctaHref: "#",
  sponsorLabel: "Sponsored",
  tag: "New Arrival",
};

const smallAds: Ad[] = [
  {
    id: "berberine",
    title: "Berberine HCl 500mg",
    subtitle: "Clinical strength metabolic support with proven AMPK activation.",
    imageSrc: "/glycomics-bottle.png",
    imageAlt: "Glycomics supplement bottle — left side",
    imagePosition: "18% 45%",
    ctaText: "Learn More",
    ctaHref: "#",
    sponsorLabel: "Partner",
    badge: "🌿",
  },
  {
    id: "karela",
    title: "Karela Extract",
    subtitle: "Ayurvedic bitter gourd formula for natural blood sugar balance.",
    imageSrc: "/glycomics-bottle.png",
    imageAlt: "Glycomics supplement bottle — right side",
    imagePosition: "82% 45%",
    ctaText: "Learn More",
    ctaHref: "#",
    sponsorLabel: "Sponsored",
    badge: "🍃",
  },
];

/* ── Sub-components ──────────────────────────────────────────── */
function SponsoredChip({ label = "Sponsored" }: { label?: string }) {
  return (
    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

function CtaButton({ href, text, size = "md" }: { href: string; text: string; size?: "sm" | "md" }) {
  const base =
    "inline-flex items-center gap-2 bg-[#2a7c7c] hover:bg-[#1e5f5f] hover:scale-105 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a7c7c] shadow-sm hover:shadow-md";
  const sizes = size === "sm" ? "text-[13px] px-4 py-2" : "text-[14px] px-5 py-2.5";
  return (
    <a href={href} className={`${base} ${sizes}`}>
      {text}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

/* ── Featured banner ────────────────────────────────────────── */
function FeaturedBanner({ ad }: { ad: Ad }) {
  return (
    <article
      aria-label={`Featured advertisement: ${ad.title}`}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row min-h-[360px]"
    >
      {/* ── Content side ── */}
      <div className="flex-1 flex flex-col justify-center gap-5 p-8 md:p-12 order-2 md:order-1">
        {/* Tags row */}
        <div className="flex items-center gap-3 flex-wrap">
          {ad.tag && (
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2a7c7c] bg-[#2a7c7c]/10 px-3 py-1 rounded-full">
              {ad.tag}
            </span>
          )}
          <SponsoredChip label={ad.sponsorLabel} />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight max-w-[480px]">
            {ad.title}
          </h3>
          {ad.subtitle && (
            <p className="text-gray-500 leading-relaxed max-w-[420px]">
              {ad.subtitle}
            </p>
          )}
        </div>

        <div className="mt-1">
          <CtaButton href={ad.ctaHref} text={ad.ctaText} />
        </div>
      </div>

      {/* ── Image side with radial glow ── */}
      <div className="relative w-full md:w-[38%] shrink-0 min-h-[220px] overflow-hidden order-1 md:order-2 bg-[radial-gradient(circle_at_center,rgba(42,124,124,0.12),transparent_70%)]">
        <img
          src={ad.imageSrc}
          alt={ad.imageAlt}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={ad.imagePosition ? { objectPosition: ad.imagePosition } : undefined}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent md:hidden pointer-events-none" />
      </div>
    </article>
  );
}

/* ── Small ad card ──────────────────────────────────────────── */
function SmallAdCard({ ad }: { ad: Ad }) {
  return (
    <article
      aria-label={`Advertisement: ${ad.title}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image with radial glow background */}
      <div className="relative w-full h-[200px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(42,124,124,0.10),transparent_70%)]">
        <img
          src={ad.imageSrc}
          alt={ad.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={ad.imagePosition ? { objectPosition: ad.imagePosition } : undefined}
        />
        <div className="absolute top-3 left-3">
          <SponsoredChip label={ad.sponsorLabel} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {ad.badge && <span className="text-xl leading-none">{ad.badge}</span>}

        <div className="space-y-1.5 flex-1">
          <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight">
            {ad.title}
          </h3>
          {ad.subtitle && (
            <p className="text-sm text-gray-500 leading-relaxed">{ad.subtitle}</p>
          )}
        </div>

        <div className="pt-2">
          <CtaButton href={ad.ctaHref} text={ad.ctaText} size="sm" />
        </div>
      </div>
    </article>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export default function AdsSection() {
  return (
    <section
      aria-labelledby="ads-heading"
      className="w-full bg-linear-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a7c7c] bg-[#2a7c7c]/8 px-4 py-1.5 rounded-full">
            Featured &amp; Sponsored
          </span>
          <h2
            id="ads-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            Handpicked For Your
            <br className="hidden sm:block" /> Wellness Journey
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[520px] mx-auto">
            Premium Ayurvedic supplements — trusted by thousands, backed by science.
          </p>
        </div>

        {/* ── Featured banner ── */}
        <div className="mb-8">
          <FeaturedBanner ad={featuredAd} />
        </div>

        {/* ── 2-column grid of smaller ads ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallAds.map((ad) => (
            <SmallAdCard key={ad.id} ad={ad} />
          ))}
        </div>

      </div>
    </section>
  );
}
