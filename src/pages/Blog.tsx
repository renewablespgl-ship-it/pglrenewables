import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[96px] md:pt-[108px] lg:pt-[124px]">
        <section className="py-16 md:py-20 bg-gradient-to-b from-solar-navy/5 to-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-4 md:mb-6 leading-tight">
                  Why Solar Energy Is the Smartest Investment in 2025 – PGL Solar Blog
                </h1>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              </div>

              {/* Section 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Top Reasons Why Solar Power Is the Smartest Investment for Homes & Businesses in 2025
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  Solar energy is growing rapidly in India as electricity prices continue to rise. With strong government support, subsidies, and an increasing need for clean energy, solar power has become the most reliable and cost-effective solution for homes, businesses, and industries.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Solar Energy is the Future of Power in India
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  Solar power demand is increasing every year. More people are choosing renewable energy due to its long-term savings, sustainability, and environment-friendly nature.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Huge Reduction in Electricity Bills
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  A properly installed solar system can reduce bills by 60–90%. Commercial units save even more due to higher consumption.
                </p>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Government Subsidies Make Solar More Affordable
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  The PM Surya Ghar Yojana provides subsidies up to ₹78,000, reducing installation cost and making solar affordable for households.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Fast ROI & Long-Term Returns
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  Most solar systems recover their cost within 3–5 years and continue producing free energy for 25 years or more.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Solar Improves Property Value
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  Homes with a solar system have higher property value due to reduced electricity expenses and eco-friendly infrastructure.
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 mb-6 md:mb-8 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Eco-Friendly and Zero Maintenance
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  Solar energy produces zero pollution and requires only basic cleaning, making it a hassle-free investment.
                </p>
              </div>

              {/* Section 8 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 border border-secondary/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-solar-navy mb-6">
                  Why Choose PGL Solar?
                </h2>
                <p className="text-lg text-solar-navy/90 leading-relaxed">
                  PGL Solar provides complete solar EPC services including rooftop installations, commercial and industrial solar plants, agricultural solar solutions, subsidy assistance, and professional maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
