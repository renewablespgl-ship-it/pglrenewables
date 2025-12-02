import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links with header offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      e.preventDefault();
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 100;
      const targetPosition = targetElement.offsetTop - headerHeight - 16;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[96px] md:pt-[108px] lg:pt-[124px]">
        <Hero />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
