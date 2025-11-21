import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Sun, Award, Shield, Zap, Leaf, Battery } from "lucide-react";

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    { icon: Sun, text: "Solar Excellence" },
    { icon: Award, text: "ISO Certified" },
    { icon: Shield, text: "25 Year Warranty" },
    { icon: Zap, text: "High Efficiency" },
    { icon: Leaf, text: "Eco Friendly" },
    { icon: Battery, text: "Energy Storage" },
    { icon: Sun, text: "Premium Quality" },
    { icon: Award, text: "Industry Leader" },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (!isPaused && emblaApi) {
        emblaApi.scrollNext();
      }
    };

    autoplayRef.current = setInterval(autoplay, 2000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [emblaApi, isPaused]);

  return (
    <section 
      className="w-full bg-white py-8 border-t border-border/10"
      aria-label="Partners and certifications"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-border/20 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#FF6A00]/30 h-32">
                  <partner.icon className="w-10 h-10 text-[#FF6A00] mb-2" />
                  <p className="text-sm font-semibold text-foreground text-center">
                    {partner.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
