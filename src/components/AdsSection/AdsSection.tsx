/* ================================================================
   AdsSection — Featured & Sponsored ads section
   ================================================================
   Layout  : 1 large featured banner + 2 small cards in a 2-col grid
   Design  : minimal text, small images, teal brand colors
   ================================================================ */

/* ── Types ──────────────────────────────────────────────────── */
interface Ad {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
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
  imageSrc:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  imageAlt: "Glycomics supplement bottle",
  ctaText: "Shop Now",
  ctaHref: "#",
  sponsorLabel: "Sponsored",
  tag: "New Arrival",
};

const smallAds: Ad[] = [
  {
    id: "berberine",
    title: "Berberine HCl 500mg — Clinical Strength",
    imageSrc:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80",
    imageAlt: "Berberine supplement",
    ctaText: "Learn More",
    ctaHref: "#",
    sponsorLabel: "Partner",
    badge: "🌿",
  },
  {
    id: "karela",
    title: "Karela Extract — Ayurvedic Blood Sugar Support",
    imageSrc:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    imageAlt: "Karela (bitter gourd) extract",
    ctaText: "Learn More",
    ctaHref: "#",
    sponsorLabel: "Sponsored",
    badge: "🍃",
  },
];

/* ── Sub-components ──────────────────────────────────────────── */
function SponsoredChip({ label = "Sponsored" }: { label?: string }) {
  return (
    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
      {label}
    </span>
  );
}

function CtaButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-[#2a7c7c] hover:bg-[#1e5f5f] active:scale-[0.97] text-white text-[14px] font-semibold px-5 py-2.5 rounded-[10px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a7c7c]"
    >
      {text}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
      className="relative bg-white rounded-[10px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07),0_8px_32px_rgba(0,0,0,0.06)] flex flex-col md:flex-row min-h-[340px]"
    >
      {/* ── Content side ── */}
      <div className="flex-1 flex flex-col justify-center gap-5 p-8 md:p-12 order-2 md:order-1">
        {/* Top meta row */}
        <div className="flex items-center gap-3">
          {ad.tag && (
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2a7c7c] bg-[#2a7c7c]/10 px-2.5 py-1 rounded-full">
              {ad.tag}
            </span>
          )}
          <SponsoredChip label={ad.sponsorLabel} />
        </div>

        {/* Title */}
        <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-[1.2] tracking-tight max-w-[460px]">
          {ad.title}
        </h3>

        <div className="mt-2">
          <CtaButton href={ad.ctaHref} text={ad.ctaText} />
        </div>
      </div>

      {/* ── Image side ── */}
      <div className="relative w-full md:w-[36%] shrink-0 min-h-[200px] overflow-hidden order-1 md:order-2">
        <img
          src={ad.imageSrc}
          alt={ad.imageAlt}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* gradient overlay on mobile */}
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
      className="bg-white rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07),0_6px_24px_rgba(0,0,0,0.05)] flex flex-col hover:shadow-[0_4px_20px_rgba(0,0,0,0.10),0_10px_36px_rgba(0,0,0,0.08)] transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-[150px] overflow-hidden bg-gray-100">
        <img
          src={ad.imageSrc}
          alt={ad.imageAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Sponsored chip overlay */}
        <div className="absolute top-3 left-3">
          <SponsoredChip label={ad.sponsorLabel} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {ad.badge && (
          <span className="text-xl leading-none">{ad.badge}</span>
        )}

        <h3 className="text-[18px] font-bold text-gray-900 leading-snug tracking-tight">
          {ad.title}
        </h3>

        <div className="pt-1">
          <CtaButton href={ad.ctaHref} text={ad.ctaText} />
        </div>
      </div>
    </article>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export default function AdsSection() {
  return (
    <section aria-labelledby="ads-heading" className="w-full bg-[#f5f4f1] py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-[#2a7c7c] mb-3">
            Featured &amp; Sponsored
          </p>
          <h2
            id="ads-heading"
            className="text-[42px] md:text-[48px] font-bold text-gray-900 leading-[1.15] tracking-tight"
          >
            Handpicked For Your
            <br className="hidden sm:block" /> Wellness Journey
          </h2>
        </div>

        {/* ── Featured banner ── */}
        <div className="mb-8">
          <FeaturedBanner ad={featuredAd} />
        </div>

        {/* ── 2-column grid of smaller ads ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {smallAds.map((ad) => (
            <SmallAdCard key={ad.id} ad={ad} />
          ))}
        </div>

      </div>
    </section>
  );
}
