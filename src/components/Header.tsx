import { Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">PGL Solar</h1>
              <p className="text-xs text-muted-foreground">Clean Energy Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
