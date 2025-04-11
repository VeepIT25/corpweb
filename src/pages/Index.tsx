
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LeadForm from "@/components/LeadForm";
import BrandStory from "@/components/BrandStory";
import VehicleShowcase from "@/components/VehicleShowcase";
import ComparisonTable from "@/components/ComparisonTable";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HeroBanner />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Singapore's Premier 6-Seater Leasing Company
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At VEEP, we believe in empowering drivers with premium 6-seater vehicles that maximize your earning potential while providing comfort for you and your family. Our fleet of Toyota Noah, Honda Spada, Toyota Alphard, Vellfire, and Nissan Landy vehicles are perfect for ride-sharing, family use, and more.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With the lowest leasing rates in Singapore and a comprehensive support system, we're committed to helping you go big and earn big.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-veep-orange h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                    6+
                  </div>
                  <span className="ml-2">Seat Capacity</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-veep-orange h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                    24/7
                  </div>
                  <span className="ml-2">Support</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-veep-orange h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                    $$$
                  </div>
                  <span className="ml-2">Higher Earnings</span>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      <VehicleShowcase />
      
      <ComparisonTable />
      
      <BrandStory />
      
      <PricingSection />
      
      <section className="py-16 bg-veep-orange">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey with VEEP?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our leasing options and take the first step towards maximizing your earning potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+6561234567" className="bg-white text-veep-orange hover:bg-gray-100 px-8 py-3 rounded-md font-medium">
              Call Us Now
            </a>
            <a href="#vehicles" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-veep-orange px-8 py-3 rounded-md font-medium">
              View Vehicles
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
