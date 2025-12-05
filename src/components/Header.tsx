import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ContactDialog } from "./ContactDialog";
import headerLogo from "@/assets/pgl-new-header-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to product after navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash && location.pathname === "/") {
      const id = hash.replace("#", "");
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerHeight = 100;
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
            
            // Add highlight animation
            setTimeout(() => {
              element.classList.add('product-highlight');
              setTimeout(() => {
                element.classList.remove('product-highlight');
              }, 1500);
            }, 500);
          }
        });
      }, 100);
    }
  }, [location]);

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
    { label: "Residential Solar", id: "residential-solar" },
    { label: "Commercial Solar", id: "commercial-solar" },
    { label: "Maintenance & Support", id: "maintenance-and-support" },
    { label: "Franchise Opportunity", id: "franchise-opportunity" },
  ];

  const scrollToProduct = (id: string) => {
    // If not on home page, navigate to home with hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    
    // If on home page, just scroll using requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 100;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        
        // Add highlight animation after scroll completes
        setTimeout(() => {
          element.classList.add('product-highlight');
          setTimeout(() => {
            element.classList.remove('product-highlight');
          }, 1500);
        }, 500);
      }
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      } py-0`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            <img 
              src={headerLogo} 
              alt="PGL Renewables - Powering a sustainable future" 
              className={`h-auto object-contain transition-all duration-300 ${
                isScrolled 
                  ? 'w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px]' 
                  : 'w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px]'
              }`}
              width={240}
              height={74}
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
                    <button
                      className={`px-4 py-2 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium text-sm lg:text-base inline-flex items-center gap-1 ${
                        servicesDropdownOpen ? 'text-secondary bg-secondary/5' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {servicesSubmenu.map((subItem) => (
                          <button
                            key={subItem.id + subItem.label}
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              scrollToProduct(subItem.id);
                            }}
                            className="block w-full text-left px-4 py-3 text-solar-navy hover:text-secondary hover:bg-secondary/5 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-secondary mx-2 rounded-r-lg"
                          >
                            {subItem.label}
                          </button>
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
                          <button
                            key={subItem.id + subItem.label}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                              scrollToProduct(subItem.id);
                            }}
                            className="text-left px-4 py-2 text-solar-navy hover:text-secondary transition-all duration-200 rounded-lg hover:bg-secondary/5 font-medium text-sm"
                          >
                            {subItem.label}
                          </button>
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
