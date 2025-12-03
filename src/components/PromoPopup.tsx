import { useState, useEffect } from "react";
import { X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    // Show popup 1 second after page load on every visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleBookConsultation = () => {
    handleClose();
    setContactDialogOpen(true);
  };

  if (!isOpen) {
    return <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-300"
        onClick={handleOverlayClick}
      >
        {/* Modal */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors z-10 p-1 rounded-full hover:bg-muted/50"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Content */}
          <div className="p-5 sm:p-6 md:p-8 text-center">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-xl sm:rounded-t-2xl" />

            {/* Animated Sun Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 relative">
              <Sun 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-secondary animate-spin"
                style={{ animationDuration: '20s' }}
                strokeWidth={2.5}
              />
              <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>

            {/* Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary font-montserrat mb-2 sm:mb-3 md:mb-4 leading-tight">
              Switch to Solar, Save More!
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
              Get a <span className="text-secondary font-semibold">FREE site visit</span> and personalized solar proposal. 
              Discover how much you can save on electricity bills!
            </p>

            {/* Primary CTA */}
            <Button
              onClick={handleBookConsultation}
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-3 sm:mb-4"
            >
              Book Free Solar Consultation
            </Button>

            {/* Cancel Button */}
            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full py-3 sm:py-4 text-xs sm:text-sm rounded-lg sm:rounded-xl border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </>
  );
};