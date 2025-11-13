import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Building2, Battery, Wrench, Check, ArrowRight, DollarSign } from "lucide-react";
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
  pricing: {
    starting: string;
    typical: string;
    details: string[];
  };
  detailedInfo: string;
}

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      badgeColor: "bg-primary",
      pricing: {
        starting: "$12,000",
        typical: "$15,000 - $25,000",
        details: [
          "Average 5-7 kW system",
          "Includes installation & permits",
          "Federal tax credit eligible (30%)",
          "Typical payback: 6-8 years",
          "Save up to $1,500/year on electricity"
        ]
      },
      detailedInfo: "Our residential solar systems are designed specifically for your home's energy needs. We conduct a thorough site assessment, considering your roof orientation, shading, and energy consumption patterns. Each system comes with tier-1 solar panels that maintain 85% efficiency after 25 years, coupled with premium inverters for optimal energy conversion."
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
      badgeColor: "bg-secondary",
      pricing: {
        starting: "$50,000",
        typical: "$75,000 - $500,000+",
        details: [
          "Scalable from 25 kW to multi-MW",
          "Turnkey project management",
          "Commercial tax benefits (ITC & MACRS)",
          "ROI typically 3-5 years",
          "Reduce operating costs by 50-75%"
        ]
      },
      detailedInfo: "Commercial solar installations require specialized expertise in large-scale energy production, structural engineering, and commercial electrical systems. We handle everything from initial feasibility studies and financing options to installation and ongoing maintenance. Our team works closely with your business to minimize disruption while maximizing energy production and cost savings."
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
      badgeColor: "bg-accent",
      pricing: {
        starting: "$8,500",
        typical: "$10,000 - $20,000",
        details: [
          "10-20 kWh capacity options",
          "Tesla Powerwall & LG Chem certified",
          "Seamless integration with solar",
          "Smart energy management",
          "30% federal tax credit eligible"
        ]
      },
      detailedInfo: "Battery storage systems provide energy security and maximize your solar investment. Store excess solar energy generated during the day for use at night or during power outages. Our intelligent battery management systems optimize charging and discharging cycles to extend battery life while ensuring you always have power when you need it most."
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
      badgeColor: "bg-primary",
      pricing: {
        starting: "$200/year",
        typical: "$300 - $800/year",
        details: [
          "Annual system inspection",
          "Panel cleaning (2x per year)",
          "Performance monitoring",
          "Priority repair service",
          "Inverter & electrical checks"
        ]
      },
      detailedInfo: "Regular maintenance is essential to keep your solar system operating at peak efficiency. Our comprehensive service plans include bi-annual cleaning, electrical testing, inverter inspections, and performance analysis. We proactively identify and resolve issues before they impact your energy production, ensuring your system delivers maximum return on investment year after year."
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
              className="group overflow-hidden hover:shadow-strong transition-all duration-300 border-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  View Details & Pricing
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

        {/* Product Details Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-hero p-2 rounded-lg">
                      <selectedProduct.icon className="w-6 h-6 text-white" />
                    </div>
                    <DialogTitle className="text-2xl">{selectedProduct.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Detailed Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">About This Solution</h3>
                    <p className="text-muted-foreground">{selectedProduct.detailedInfo}</p>
                  </div>

                  {/* Pricing Section */}
                  <div className="bg-muted/50 p-6 rounded-lg border-2 border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">Pricing & Investment</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                        <p className="text-3xl font-bold text-primary">{selectedProduct.pricing.starting}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Typical Range</p>
                        <p className="text-xl font-semibold text-foreground">{selectedProduct.pricing.typical}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground mb-2">What's Included:</p>
                      {selectedProduct.pricing.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      onClick={() => {
                        setSelectedProduct(null);
                        scrollToContact();
                      }}
                      className="flex-1 bg-gradient-hero hover:opacity-90"
                      size="lg"
                    >
                      Get a Free Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      onClick={() => setSelectedProduct(null)}
                      variant="outline"
                      size="lg"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductsSection;
