import { Sun } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solar-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">PGL Solar</h3>
              <p className="text-sm text-white/70">Clean Energy Solutions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-white/90">Email: info@pglsolar.com</p>
            <p className="text-white/90">Phone: +1 (234) 567-890</p>
            <p className="text-white/70 text-sm">Available 24/7 for solar emergencies</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 w-full text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} PGL Solar. All rights reserved. 
              <span className="block mt-2">Powering a sustainable future, one panel at a time.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
