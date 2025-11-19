import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Main Headline */}
          <h1 className="font-montserrat font-bold text-[42px] text-[#111111] leading-tight mb-12">
            Why Solar Energy Is the Smartest Investment in 2025 – PGL Solar Blog
          </h1>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Top Reasons Why Solar Power Is the Smartest Investment for Homes & Businesses in 2025
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Solar energy is growing rapidly in India as electricity prices continue to rise. With strong government support, subsidies, and an increasing need for clean energy, solar power has become the most reliable and cost-effective solution for homes, businesses, and industries.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Solar Energy is the Future of Power in India
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Solar power demand is increasing every year. More people are choosing renewable energy due to its long-term savings, sustainability, and environment-friendly nature.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Huge Reduction in Electricity Bills
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              A properly installed solar system can reduce bills by 60–90%. Commercial units save even more due to higher consumption.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Government Subsidies Make Solar More Affordable
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              The PM Surya Ghar Yojana provides subsidies up to ₹78,000, reducing installation cost and making solar affordable for households.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Fast ROI & Long-Term Returns
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Most solar systems recover their cost within 3–5 years and continue producing free energy for 25 years or more.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Solar Improves Property Value
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Homes with a solar system have higher property value due to reduced electricity expenses and eco-friendly infrastructure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Eco-Friendly and Zero Maintenance
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Solar energy produces zero pollution and requires only basic cleaning, making it a hassle-free investment.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-poppins font-semibold text-[28px] text-[#222222] mb-6">
              Why Choose PGL Solar?
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              PGL Solar provides complete solar EPC services including rooftop installations, commercial and industrial solar plants, agricultural solar solutions, subsidy assistance, and professional maintenance.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
