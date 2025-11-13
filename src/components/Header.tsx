import pglLogo from "@/assets/pgl-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={pglLogo} 
              alt="PGL Solar Renewables Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
