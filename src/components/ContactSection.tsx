import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";
import PartnersCarousel from "./PartnersCarousel";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-contact">
      <div className="container mx-auto px-4">
        {/* Header with Logo */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="bg-gradient-hero p-4 rounded-2xl shadow-strong">
              <Sun className="w-16 h-16 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to harness the power of the sun? Reach out through any of our channels. 
              We're here to help you start your solar journey.
            </p>
          </div>
        </div>

        {/* Customer Images Carousel */}
        <PartnersCarousel />

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose PGL Solar?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Years of Electrical Contracting Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-muted-foreground">Customer Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
