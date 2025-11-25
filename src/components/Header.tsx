import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ContactDialog } from "./ContactDialog";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
  ];

  const handleContactClick = () => {
    setContactDialogOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      } py-2 md:py-3 lg:py-3.5`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="PGL Solar - Powering a sustainable future" 
                className="h-16 w-auto md:h-20 lg:h-20 object-contain transition-all duration-300"
                loading="eager"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2.5 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium"
                  activeClassName="text-secondary font-semibold bg-secondary/10"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                onClick={handleContactClick}
                className="px-5 py-2.5 ml-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                variant="default"
              >
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-solar-navy hover:text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2.5 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium active:bg-secondary/10"
                  activeClassName="text-secondary font-semibold bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                onClick={handleContactClick}
                className="px-4 py-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                variant="default"
              >
                Contact
              </Button>
            </nav>
          )}
        </div>
      </header>
      
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </>
  );
};

export default Header;
