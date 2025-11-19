import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Facebook, Instagram, Mail, Phone, Sun } from "lucide-react";

interface ContactMethod {
  name: string;
  icon: React.ElementType;
  action: () => void;
  color: string;
  description: string;
}

const ContactSection = () => {
  const contactMethods: ContactMethod[] = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      action: () => window.open("https://wa.me/1234567890", "_blank"),
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]",
      description: "Chat with us instantly"
    },
    {
      name: "Facebook",
      icon: Facebook,
      action: () => window.open("https://www.facebook.com/profile.php?id=61583279493428", "_blank"),
      color: "hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]",
      description: "Follow our updates"
    },
    {
      name: "Instagram",
      icon: Instagram,
      action: () => window.open("https://instagram.com/pglsolar", "_blank"),
      color: "hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:border-[#E4405F]",
      description: "See our projects"
    },
    {
      name: "Email",
      icon: Mail,
      action: () => window.open("mailto:info@pglsolar.com", "_blank"),
      color: "hover:bg-primary/10 hover:text-primary hover:border-primary",
      description: "Send us a message"
    },
    {
      name: "Phone",
      icon: Phone,
      action: () => window.open("tel:+1234567890", "_blank"),
      color: "hover:bg-secondary/10 hover:text-secondary hover:border-secondary",
      description: "Call us directly"
    },
  ];

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

        {/* Contact Methods - Desktop: horizontal, Mobile: vertical */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactMethods.map((method) => (
              <Card 
                key={method.name}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-strong border-2 ${method.color}`}
                onClick={method.action}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-muted group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full group-hover:bg-current group-hover:text-background transition-colors"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose PGL Solar?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">5000+</div>
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
