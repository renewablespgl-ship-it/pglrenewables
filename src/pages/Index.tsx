import { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load components below the fold to reduce unused JavaScript
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const PromoPopup = lazy(() => import("@/components/PromoPopup").then(m => ({ default: m.PromoPopup })));

const Index = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links with header offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      e.preventDefault();
      
      // Use requestAnimationFrame to batch DOM reads and avoid forced reflow
      requestAnimationFrame(() => {
        const headerHeight = 100; // Use fixed value to avoid DOM measurement
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Defer PromoPopup loading until after initial paint to break critical request chain
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>PGL Renewables - Your Trusted Solar Partner in Andhra Pradesh</title>
        <meta name="description" content="Expert solar installation with 400+ KW completed. Free site survey, subsidy support & 2-3 day installation. Switch to solar today!" />
        <link rel="canonical" href="https://pglrenewables.com/" />
        <meta property="og:title" content="PGL Renewables - Your Trusted Solar Partner in Andhra Pradesh" />
        <meta property="og:description" content="Expert solar installation with 400+ KW completed. Free site survey, subsidy support & 2-3 day installation. Switch to solar today!" />
        <meta property="og:url" content="https://pglrenewables.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pglrenewables.com/og-cover.png" />
      </Helmet>
      <Header />
      <main className="pt-[60px] md:pt-[70px] lg:pt-[80px]">
        <Hero />
        <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64 bg-background" />}>
        <Footer />
      </Suspense>
      {showPromo && (
        <Suspense fallback={null}>
          <PromoPopup />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
