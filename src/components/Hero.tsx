import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import heroLogo from "@/assets/pgl-hero-main-logo.png";

const Hero = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-[600px]:pt-0 max-[600px]:mt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          // @ts-ignore - fetchpriority is valid but not in React types yet
          fetchpriority="high"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-solar-navy/70 via-solar-navy/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20 text-center">
      <div className="max-w-5xl mx-auto space-y-2 animate-fade-in">
          {/* Hero Logo */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-[90%] max-w-[280px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[650px] xl:max-w-[750px]">
              <img 
                src={heroLogo} 
                alt="PGL Renewables - Powering a sustainable future" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transform your home or business with sustainable solar solutions. 
            Join thousands who've made the switch to renewable energy.
          </p>

          <div className="flex justify-center items-center pt-2">
            <Button 
              size="lg" 
              onClick={() => setContactDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-strong text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Arrow - positioned relative to section */}
      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to contact"
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </button>
      
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </section>
  );
};

export default Hero;
