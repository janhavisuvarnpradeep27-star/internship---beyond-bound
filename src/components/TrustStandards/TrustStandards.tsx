/* ================================================================
   TrustStandards — Certification logo strip (reference style)
   ================================================================ */

interface Certification {
  id: string;
  imageSrc: string;
  imageAlt: string;
  sizeClass?: string;
}

const certifications: Certification[] = [
  {
    id: "who-gmp",
    imageSrc: "/trust-who.png",
    imageAlt: "WHO-GMP certification logo",
    sizeClass: "w-[120px] h-[92px]",
  },
  {
    id: "iso",
    imageSrc: "/trust-iso.png",
    imageAlt: "ISO certification logo",
    sizeClass: "w-[120px] h-[92px]",
  },
  {
    id: "ayush",
    imageSrc: "/trust-ayush.png",
    imageAlt: "AYUSH certification logo",
    sizeClass: "w-[126px] h-[98px]",
  },
  {
    id: "haccp",
    imageSrc: "/trust-haccp.png",
    imageAlt: "HACCP certification logo",
    sizeClass: "w-[128px] h-[92px]",
  },
  {
    id: "non-gmo",
    imageSrc: "/trust-non-gmo.png",
    imageAlt: "Non-GMO certification logo",
    sizeClass: "w-[122px] h-[92px]",
  },
];

export default function TrustStandards() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="w-full py-24 bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB]"
    >
      <div className="w-full max-w-[1558px] mx-auto px-6">

        <div className="flex flex-col items-center gap-[68px]">
          <div className="text-center space-y-4">
            <p className="text-[10px] leading-none text-[#94A3B8]">Certified Quality</p>
            <h2
              id="trust-heading"
              className="text-4xl md:text-5xl tracking-tight text-gray-900"
            >
              Trusted Standards, Premium Results
            </h2>
          </div>

          <div className="w-full flex flex-wrap md:flex-nowrap items-end justify-center gap-[47px]">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group flex items-end justify-center shrink-0"
              >
                <div className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${cert.sizeClass ?? "w-[120px] h-[92px]"}`}>
                  <img
                    src={cert.imageSrc}
                    alt={cert.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
