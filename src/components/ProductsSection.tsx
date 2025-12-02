import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Building2, Store, Wrench, Check, ArrowRight, DollarSign } from "lucide-react";
import productResidential from "@/assets/product-residential.jpg";
import productCommercial from "@/assets/product-commercial.jpg";
import productFranchise from "@/assets/product-franchise.jpg";
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
      description: "Your Own PGL Power Station - Transform your home into an energy-generating powerhouse. Reduce your electricity bill from ₹2,500 to just ₹100-200/month!",
      image: productResidential,
      icon: Home,
      features: [
        "FREE Site Survey",
        "FREE Documentation & Subsidy Process",
        "Monitoring Mobile App",
        "Loan & EMI Facility (All Government Banks)",
        "Installation in 1 Day After Payment"
      ],
      badge: "Most Popular",
      badgeColor: "bg-primary",
      pricing: {
        starting: "₹1.90 Lakh",
        typical: "₹1.90L - ₹3.00L",
        details: [
          "3KW: ₹1.90 Lakh (Normal ₹2.10L) - Subsidy Available",
          "4KW: ₹2.40 Lakh (Normal ₹2.60L) - Subsidy Available",
          "5KW: ₹3.00 Lakh (Normal ₹3.20L) - Subsidy Available",
          "ROI: 3.5 to 5 Years",
          "After ROI: FREE ELECTRICITY FOR LIFE",
          "EMI Available on All Systems"
        ]
      },
      detailedInfo: "💡 Example: If your home electricity bill is ₹2,500, installing a 3KW PGL Solar System reduces it to only ₹100-200/month. With ROI in just 3.5 to 5 years, you'll enjoy FREE ELECTRICITY FOR LIFE after that! From today your home becomes a PGL Power Station. Prathi Illu – PGL Solar Illu! We handle everything end-to-end including site survey, installation, subsidy documentation, monitoring app setup, and loan facility through all government banks."
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
      title: "Franchise Opportunity",
      description: "Join the PGL Solar family and build a thriving solar business in your area. We provide comprehensive support, training, and proven systems for success.",
      image: productFranchise,
      icon: Store,
      features: [
        "Proven business model",
        "Comprehensive training",
        "Marketing support",
        "Territory protection",
        "Ongoing mentorship"
      ],
      badge: "Business Opportunity",
      badgeColor: "bg-accent",
      pricing: {
        starting: "$75,000",
        typical: "$75,000 - $150,000",
        details: [
          "Initial franchise fee included",
          "Complete training program",
          "Marketing materials & branding",
          "CRM and business software",
          "Protected territory rights",
          "Average ROI: 18-24 months"
        ]
      },
      detailedInfo: "PGL Solar is expanding nationwide and seeking motivated entrepreneurs to join our network. As a franchisee, you'll benefit from our established brand, proprietary systems, and comprehensive support. We provide everything you need to succeed: from initial training and marketing materials to ongoing technical support and lead generation. Our proven business model has helped franchisees achieve profitability within 18-24 months. Join us in revolutionizing the solar industry while building a sustainable, profitable business in your community."
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
