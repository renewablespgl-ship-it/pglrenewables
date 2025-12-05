import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solar-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/footer-logo.png" 
              alt="PGL Solar Renewables Logo" 
              className="h-28 w-auto"
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61584561877245"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-secondary transition-all"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/pglrenewables/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-secondary transition-all"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/pgl-solar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-secondary transition-all"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@pglrenewables-323?si=l-uVnzYVyRivJrYx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-secondary transition-all"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/pglrenewables"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-secondary transition-all"
              aria-label="Visit our X page"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-white/90">Email: info@pglrenewables.com</p>
            <p className="text-white/90">Phone: 6303161129</p>
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
