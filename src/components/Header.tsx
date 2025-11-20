import { useState } from "react";
import pglLogo from "@/assets/pgl-logo-new.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ContactDialog } from "./ContactDialog";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] border-b border-border/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img 
                src={pglLogo} 
                alt="PGL Solar Renewables Logo" 
                className="h-24 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 text-solar-navy hover:text-secondary transition-colors"
                  activeClassName="text-secondary font-semibold"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                onClick={handleContactClick}
                className="px-4 py-2 text-solar-navy hover:text-secondary transition-colors bg-transparent hover:bg-transparent"
                variant="ghost"
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
                  className="px-4 py-2 text-solar-navy hover:text-secondary transition-colors rounded-md hover:bg-accent"
                  activeClassName="text-secondary font-semibold bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                onClick={handleContactClick}
                className="px-4 py-2 text-solar-navy hover:text-secondary transition-colors rounded-md hover:bg-accent justify-start"
                variant="ghost"
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
