import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";

const STORAGE_KEY = "pglsolar_popup_shown";

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem(STORAGE_KEY);
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
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
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={handleOverlayClick}
      >
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-[360px] sm:max-w-[420px] md:max-w-[520px] animate-in zoom-in-95 fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8 text-center">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-2xl" />

            {/* Icon/Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-montserrat mb-3 sm:mb-4">
              Switch to Solar, Save More!
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed">
              Get a <span className="text-secondary font-semibold">FREE site visit</span> and personalized solar proposal. 
              Discover how much you can save on electricity bills!
            </p>

            {/* Primary CTA */}
            <Button
              onClick={handleBookConsultation}
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
            >
              Book Free Solar Consultation
            </Button>

            {/* Secondary Link */}
            <button
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors underline-offset-4 hover:underline"
            >
              Continue without offer
            </button>
          </div>
        </div>
      </div>

      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </>
  );
};
