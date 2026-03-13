/* ================================================================
   TrustStandards — Certification logo strip (reference style)
   ================================================================ */

interface Certification {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
}

const certifications: Certification[] = [
  {
    id: "who-gmp",
    label: "WHO-GMP",
    imageSrc: "/WHO-GMP.png",
    imageAlt: "WHO-GMP certification logo",
  },
  {
    id: "iso",
    label: "ISO 9001:2015",
    imageSrc: "/ISO.png",
    imageAlt: "ISO certification logo",
  },
  {
    id: "haccp",
    label: "HACCP",
    imageSrc: "/HACCP.png",
    imageAlt: "HACCP certification logo",
  },
  {
    id: "non-gmo",
    label: "NON-GMO",
    imageSrc: "/NON-GMO.png",
    imageAlt: "Non-GMO certification logo",
  },
];

export default function TrustStandards() {
  return (
    <section aria-labelledby="trust-heading" className="w-full bg-white py-20 border-y border-gray-100">
      <div className="container mx-auto max-w-[1200px] px-6">

        <div className="text-center mb-14 space-y-4">
          <p className="text-sm font-medium text-[#2a7c7c]">Certified Quality</p>
          <h2
            id="trust-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Trusted Standards, Premium Results
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 items-start justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 text-[#2a7c7c] transition-transform duration-300 group-hover:scale-105">
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
    </section>
  );
}
