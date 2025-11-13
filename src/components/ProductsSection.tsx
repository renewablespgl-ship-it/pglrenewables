import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Battery, Wrench, Check, ArrowRight } from "lucide-react";
import productResidential from "@/assets/product-residential.jpg";
import productCommercial from "@/assets/product-commercial.jpg";
import productStorage from "@/assets/product-storage.jpg";
import productMaintenance from "@/assets/product-maintenance.jpg";

interface Product {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  features: string[];
  badge: string;
  badgeColor: string;
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      title: "Residential Solar",
      description: "Transform your home with clean, renewable energy. Our residential solar solutions reduce your electricity bills while increasing your property value.",
      image: productResidential,
      icon: Home,
      features: [
        "Custom system design",
        "Premium solar panels",
        "25-year warranty",
        "Smart monitoring app",
        "Professional installation"
      ],
      badge: "Most Popular",
      badgeColor: "bg-primary"
    },
    {
      title: "Commercial Solar",
      description: "Power your business with sustainable energy solutions. Reduce operational costs and demonstrate your commitment to environmental responsibility.",
      image: productCommercial,
      icon: Building2,
      features: [
        "Large-scale installations",
        "ROI analysis included",
        "Tax incentive assistance",
        "Fleet monitoring system",
        "Dedicated support team"
      ],
      badge: "For Business",
      badgeColor: "bg-secondary"
    },
    {
      title: "Battery Storage",
      description: "Store excess energy for use anytime. Our battery systems provide backup power during outages and maximize your solar investment.",
      image: productStorage,
      icon: Battery,
      features: [
        "Energy independence",
        "Backup power supply",
        "Peak shaving capability",
        "10-year warranty",
        "Scalable capacity"
      ],
      badge: "Energy Freedom",
      badgeColor: "bg-accent"
    },
    {
      title: "Maintenance & Support",
      description: "Keep your solar system running at peak performance. Our comprehensive maintenance plans ensure maximum energy production year-round.",
      image: productMaintenance,
      icon: Wrench,
      features: [
        "Regular inspections",
        "Performance optimization",
        "Quick repairs",
        "System cleaning",
        "24/7 support hotline"
      ],
      badge: "Peace of Mind",
      badgeColor: "bg-primary"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential installations to commercial projects, we provide comprehensive 
            solar energy solutions tailored to your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-strong transition-all duration-300 border-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge 
                  className={`absolute top-4 right-4 ${product.badgeColor} text-white border-0`}
                >
                  {product.badge}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group/btn"
                  onClick={scrollToContact}
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-white border-0">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Go Solar?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of satisfied customers who've made the switch to clean, 
                renewable energy. Get your free consultation today.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                className="text-lg px-8 py-6"
              >
                Start Your Solar Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
