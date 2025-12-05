import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "400+ KW Installations Completed",
    "Residential: 3KW to 10KW & Above",
    "Commercial / Industrial: 5KW to Megawatts",
    "Dedicated Survey, Engineering, Installation & Service Teams",
    "FREE Site Survey & Bill Analysis",
    "Subsidy Letter & Pre-Approval Support",
    "Mobile App Monitoring for All Customers",
    "Emergency Service Support – Problem Solved in 1–2 Days",
    "Installation Completed in 2-3 Days After Payment"
  ];

  const brands = {
    "Solar Panels": "Waaree | Tata | Adani | Rayzon",
    "Inverters": "Waaree | Polycab",
    "Cables": "Polycab | Finolex"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[96px] md:pt-[108px] lg:pt-[124px]">
        <section className="py-16 md:py-20 bg-gradient-to-b from-solar-navy/5 to-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-solar-navy mb-4 md:mb-6">
                  About PGL Solar
                </h1>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              </div>

              {/* Introduction */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-8 md:mb-10 border border-secondary/10">
                <p className="text-lg md:text-xl text-solar-navy/90 leading-relaxed mb-6">
                  <span className="font-semibold text-solar-navy">PGL Solar was established in June 2025</span>, but we come with <span className="font-semibold text-secondary">25+ years of electrical contracting experience</span> under APCPDCL Special Class Contractor Licence.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                  We are not just an EPC solar company — we are your power partner.
                </p>
                <p className="text-lg text-solar-navy/80 leading-relaxed">
                  From site survey to installation, subsidy, documentation, monitoring app, loan facility, and after-service support — we handle <span className="font-semibold text-solar-navy">EVERYTHING end-to-end</span>.
                </p>
              </div>

              {/* Features Grid */}
              <div className="bg-gradient-to-br from-solar-navy to-solar-navy/90 rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Why Choose PGL Solar?
                </h2>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-200">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-white text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-8 md:mb-10 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-bold text-solar-navy mb-8 flex items-center gap-3">
                  <span className="text-3xl">📜</span>
                  Certifications & Legal Compliance
                </h2>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {[
                    "APCPDCL Special Class Electrical Contractor Licence",
                    "MSME Registered",
                    "ISO Certified",
                    "Udyam & Startup India Registered",
                    "Eastern Power Vendor Licence",
                    "GST Compliant",
                    "Nredcap Approved",
                    "APCPDCL, APEPDCL & APSPDCL Vendor"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-solar-navy font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
                
                {/* Tax Benefits */}
                <div className="bg-gradient-to-r from-solar-navy/5 to-secondary/5 rounded-xl p-6 border border-secondary/20">
                  <h3 className="text-lg md:text-xl font-semibold text-solar-navy mb-4 flex items-center gap-2">
                    <span>💼</span> Tax Benefits
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Depreciation under Income Tax Section 32 (for businesses)",
                      "Loans from all Nationalised Banks",
                      "Solar Insurance available at additional cost"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-solar-navy/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brands Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-bold text-solar-navy mb-8 flex items-center gap-3">
                  <span className="text-3xl">🔧</span>
                  Brands We Use
                </h2>
                <div className="space-y-6">
                  {Object.entries(brands).map(([category, brandList]) => (
                    <div key={category} className="border-l-4 border-secondary pl-6">
                      <h3 className="text-lg md:text-xl font-semibold text-solar-navy mb-2">
                        {category}
                      </h3>
                      <p className="text-base md:text-lg text-solar-navy/80">
                        {brandList}
                      </p>
                    </div>
                  ))}
                  
                  {/* Warranty Info */}
                  <div className="mt-8 bg-secondary/5 rounded-xl p-6 border-2 border-secondary/20">
                    <h3 className="text-lg md:text-xl font-semibold text-solar-navy mb-4">
                      Warranty Coverage
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-lg">•</span>
                        <p className="text-base md:text-lg text-solar-navy/90">
                          <span className="font-semibold">Panels</span> – 30 Years Performance Warranty
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-lg">•</span>
                        <p className="text-base md:text-lg text-solar-navy/90">
                          <span className="font-semibold">Inverter</span> – 7–10 Years Warranty
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
