import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer7 from "@/assets/customer-7.jpg";

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const customers = [
    { image: customer3, name: "Customer in Nandigama" },
    { image: customer4, name: "Customer in Gudivada" },
    { image: customer7, name: "K. Rama Babu - Solar Installation" },
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
      className="w-full py-12 mb-8"
      aria-label="Our Happy Customers"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Our Happy Customers
        </h3>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FF6A00]/50">
                  <img 
                    src={customer.image} 
                    alt={customer.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
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
