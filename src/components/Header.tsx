
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "/veep-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={Logo} 
              alt="VEEP Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#vehicles" className="text-gray-700 transition-colors hover:text-veep-orange">
            Vehicles
          </a>
          <a href="#why-veep" className="text-gray-700 transition-colors hover:text-veep-orange">
            Why VEEP
          </a>
          <a href="#pricing" className="text-gray-700 transition-colors hover:text-veep-orange">
            Pricing
          </a>
          <a href="#brand-story" className="text-gray-700 transition-colors hover:text-veep-orange">
            Our Story
          </a>
          <Button className="flex items-center gap-2 bg-veep-orange text-white hover:bg-veep-orange-dark">
            <Phone size={18} />
            Contact Us
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full animate-fade-in bg-white shadow-md md:hidden">
            <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
              <a
                href="#vehicles"
                className="py-2 text-gray-700 transition-colors hover:text-veep-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </a>
              <a
                href="#why-veep"
                className="py-2 text-gray-700 transition-colors hover:text-veep-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Why VEEP
              </a>
              <a
                href="#pricing"
                className="py-2 text-gray-700 transition-colors hover:text-veep-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#brand-story"
                className="py-2 text-gray-700 transition-colors hover:text-veep-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <Button
                className="flex w-full items-center justify-center gap-2 bg-veep-orange text-white hover:bg-veep-orange-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
