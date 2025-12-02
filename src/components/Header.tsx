import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ContactDialog } from "./ContactDialog";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
    { label: "Services", path: "/#products" },
  ];

  const handleContactClick = () => {
    setContactDialogOpen(true);
    setMobileMenuOpen(false);
  };

  const servicesSubmenu = [
    { label: "Residential Solar", path: "/#residential-solar" },
    { label: "Commercial Solar", path: "/#commercial-solar" },
    { label: "Maintenance & Support", path: "/#maintenance-and-support" },
    { label: "Franchise Opportunity", path: "/#franchise-opportunity" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      } py-0 md:py-0.5 lg:py-0.5`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img 
              src="/logo.png" 
              alt="PGL Solar - Powering a sustainable future" 
              className="h-24 w-auto md:h-28 lg:h-32 object-contain transition-all duration-300"
              loading="eager"
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3 lg:gap-4">
              {navItems.map((item) => (
                item.label === "Services" ? (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className="px-4 py-2 text-secondary bg-secondary/10 hover:bg-secondary/20 transition-all duration-200 rounded-full font-medium text-sm lg:text-base"
                      activeClassName="text-secondary font-semibold bg-secondary/20"
                    >
                      {item.label}
                    </NavLink>
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {servicesSubmenu.map((subItem) => (
                          <NavLink
                            key={subItem.path + subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-solar-navy hover:text-secondary hover:bg-secondary/5 transition-all duration-200 font-medium text-sm"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium text-sm lg:text-base"
                    activeClassName="text-secondary font-semibold bg-secondary/10"
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <Button
                onClick={handleContactClick}
                className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm lg:text-base"
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
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {navItems.map((item) => (
                item.label === "Services" ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-left px-4 py-2.5 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium"
                    >
                      {item.label}
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-200">
                        {servicesSubmenu.map((subItem) => (
                          <NavLink
                            key={subItem.path + subItem.label}
                            to={subItem.path}
                            className="px-4 py-2 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium text-sm"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2.5 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium active:bg-secondary/10"
                    activeClassName="text-secondary font-semibold bg-secondary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
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
