function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <article className="h-[350px] bg-[#F0F0F0]/35 backdrop-blur-[20px] border border-[#DEDEDE]/50 rounded-[8px] p-[48px] flex flex-col justify-between">
      <h3 className="text-[50px] leading-none text-[#3F3F3F]">{step}</h3>
      <div className="w-full max-w-[389px] flex flex-col gap-[10.34px]">
        <p className="text-[#0D7377] font-semibold text-[24px] leading-[32.31px] tracking-[-0.26px]">{title}</p>
        <p className="text-[#545454] text-[18px] leading-[25.2px] tracking-[0px]">{description}</p>
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="w-full bg-[#f3f4f4] py-20">
      <div className="w-full max-w-[1558px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 id="how-it-works-heading" className="text-4xl md:text-5xl tracking-tight text-gray-900">
            How it works
          </h2>
        </div>

        <div className="space-y-3 max-w-[1440px] mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 lg:grid-cols-[604px_minmax(0,1fr)] gap-3">
            {/* Step 1 + Step 2 column */}
            <div className="flex flex-col gap-3">
              <StepCard
                step="Step 1"
                title="Activates Metabolic Pathway"
                description="Berberine triggers AMPK, your cellular energy sensor 1"
              />
              <StepCard
                step="Step 2"
                title="Supports Liver Glucose Regulation"
                description="Reduces excess glucose production in the liver while improving insulin receptor sensitivity"
              />
            </div>

            {/* Step 3 big card */}
            <article className="relative bg-[#f6f6f6] border border-gray-200 rounded-[8px] p-8 md:p-12 min-h-[620px] lg:min-h-[712px] overflow-hidden">
              <h3 className="text-[36px] leading-none text-gray-700 mb-3">Step 3</h3>
              <div className="space-y-2 max-w-[95%]">
                <p className="text-[#0f7f87] font-semibold text-[24px] leading-tight">Enhances Cellular Glucose Utilization</p>
                <p className="text-gray-600 text-[18px] leading-relaxed">
                  Increases glucose transport into cells, helping maintain healthy blood sugar levels
                </p>
              </div>

              <img
                src="/hiw-doctor.png"
                alt="Doctor portrait"
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[310px] lg:w-[330px] object-contain"
              />

              <img
                src="/hiw-label.png"
                alt="Doctor Approved"
                loading="lazy"
                decoding="async"
                className="absolute bottom-20 left-10 w-[180px] md:w-[220px] lg:w-[245px] object-contain"
              />
            </article>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_662px] gap-3">
            <article className="relative bg-[#f6f6f6] border border-gray-200 rounded-[8px] overflow-hidden min-h-[280px] lg:min-h-[350px]">
              <img
                src="/hiw-bottom-image.png"
                alt="Clinical validation visual"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-6 right-6 bottom-6 max-w-[669px] h-[255px] rounded-[12px] p-6 flex items-end bg-black/15 backdrop-blur-[2px]">
                <p className="text-white text-[50px] leading-[1.12]">
                  A clinically validated
                  <br />
                  mechanism broken down into
                  <br />
                  three simple steps
                </p>
              </div>
            </article>

            <article className="h-[350px] bg-[#F0F0F0]/35 backdrop-blur-[20px] border border-[#DEDEDE]/50 rounded-[8px] p-[48px]">
              <div className="w-full max-w-[556px] h-full flex flex-col gap-[118px]">
                <div className="w-full max-w-[556px] min-h-[51px]">
                  <p className="text-[#545454] text-[18px] leading-[25.2px] font-medium tracking-[0px]">
                    Backed by 200+ peer-reviewed studies on berberine&apos;s metabolic effects
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex w-[241.17px] items-center justify-center gap-[12.5px] bg-[#0D7377] hover:bg-[#0b676e] text-white text-[18px] font-semibold px-[16.24px] py-[23.74px] rounded-[10.6px] shadow-[0_0_9.5px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-[1.02]"
                >
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
