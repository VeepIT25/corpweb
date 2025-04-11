
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VEEP</h3>
            <p className="mb-4">
              Singapore's premier 6-seater leasing company offering the lowest rates in the market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vehicles" className="text-gray-400 hover:text-white transition-colors">
                  Our Vehicles
                </a>
              </li>
              <li>
                <a href="#why-veep" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose VEEP
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#brand-story" className="text-gray-400 hover:text-white transition-colors">
                  Brand Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-veep-orange flex-shrink-0 mt-0.5" />
                <span>123 Orchard Road, #01-01<br />Singapore 123456</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-veep-orange flex-shrink-0" />
                <a href="tel:+6561234567" className="hover:text-veep-orange">+65 6123 4567</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-veep-orange flex-shrink-0" />
                <a href="mailto:info@veep.sg" className="hover:text-veep-orange">info@veep.sg</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 11am - 4pm</li>
              <li>Public Holidays: 11am - 4pm</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              24/7 Support Available for Existing Customers
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VEEP. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Designed & Developed with ❤️ in Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
