import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Placeholder customer images - replace with actual customer photos
  const customers = [
    { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop", name: "Happy Customer 1" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop", name: "Happy Customer 2" },
    { image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop", name: "Happy Customer 3" },
    { image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop", name: "Happy Customer 4" },
    { image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop", name: "Happy Customer 5" },
    { image: "https://images.unsplash.com/photo-1564547477850-05d44c7d5dca?w=400&h=300&fit=crop", name: "Happy Customer 6" },
    { image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop", name: "Happy Customer 7" },
    { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop", name: "Happy Customer 8" },
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
