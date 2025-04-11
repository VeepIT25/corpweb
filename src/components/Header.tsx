
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-veep-orange">VEEP</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#vehicles" className="text-gray-700 hover:text-veep-orange transition-colors">
            Vehicles
          </a>
          <a href="#why-veep" className="text-gray-700 hover:text-veep-orange transition-colors">
            Why VEEP
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-veep-orange transition-colors">
            Pricing
          </a>
          <a href="#brand-story" className="text-gray-700 hover:text-veep-orange transition-colors">
            Our Story
          </a>
          <Button className="bg-veep-orange hover:bg-veep-orange-dark text-white">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#vehicles" 
                className="text-gray-700 hover:text-veep-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </a>
              <a 
                href="#why-veep" 
                className="text-gray-700 hover:text-veep-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why VEEP
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-veep-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#brand-story" 
                className="text-gray-700 hover:text-veep-orange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <Button 
                className="bg-veep-orange hover:bg-veep-orange-dark text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
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
