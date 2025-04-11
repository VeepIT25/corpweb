
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">VEEP</h3>
            <p className="mb-4">
              Singapore's premier 6-seater leasing company offering the lowest rates in the market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vehicles" className="text-gray-400 transition-colors hover:text-white">
                  Our Vehicles
                </a>
              </li>
              <li>
                <a href="#why-veep" className="text-gray-400 transition-colors hover:text-white">
                  Why Choose VEEP
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#brand-story" className="text-gray-400 transition-colors hover:text-white">
                  Brand Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-veep-orange" />
                <span>123 Orchard Road, #01-01<br />Singapore 123456</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-veep-orange" />
                <a href="tel:+6561234567" className="hover:text-veep-orange">+65 6123 4567</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-veep-orange" />
                <a href="mailto:info@veep.sg" className="hover:text-veep-orange">info@veep.sg</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
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
        
        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VEEP. All rights reserved.
            </p>
            <p className="mt-2 text-gray-400 md:mt-0">
              Designed & Developed with ❤️ in Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
