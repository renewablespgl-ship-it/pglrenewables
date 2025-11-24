import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-solar-navy/70 via-solar-navy/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-32 text-center">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Large Logo */}
          <div className="flex justify-center mb-5 md:mb-7">
            <img 
              src="/logo.png" 
              alt="PGL Solar - Powering a sustainable future" 
              className="w-full max-w-3xl h-auto"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transform your home or business with sustainable solar solutions. 
            Join thousands who've made the switch to renewable energy.
          </p>

          <div className="flex justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-strong text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>

          <button
            onClick={scrollToContact}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to contact"
          >
            <ArrowDown className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
