import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LeadForm from "@/components/LeadForm";
import BrandStory from "@/components/BrandStory";
import VehicleShowcase from "@/components/VehicleShowcase";
import ComparisonTable from "@/components/ComparisonTable";
import WorkshopSection from "@/components/WorkshopSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroBanner />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Singapore's Premier 6-Seater Leasing Company
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                At VEEP, we believe in empowering drivers with premium 6-seater vehicles that maximize your earning potential while providing comfort for you and your family. Our fleet of Toyota Noah Hybrid, Honda Stepwagon Spada, Honda Stepwagon Air vehicles are perfect for ride-sharing, family use, and more.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                With the lowest leasing rates in Singapore and a comprehensive support system, we're committed to helping you go big and earn big.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-veep-orange text-white font-bold">
                    6+
                  </div>
                  <span className="ml-2">Seat Capacity</span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-veep-orange text-white font-bold">
                    24/7
                  </div>
                  <span className="ml-2">Support</span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-veep-orange text-white font-bold">
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
      
      <BrandStory />
      
      <VehicleShowcase />
      
      <ComparisonTable />
      
      <WorkshopSection />
      
      <section className="bg-veep-orange py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey with VEEP?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Contact us today to learn more about our leasing options and take the first step towards maximizing your earning potential.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href="https://wa.me/+6589556969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-md bg-white px-8 py-3 font-medium text-veep-orange hover:bg-gray-100"
            >
              Call Us Now
            </a>
            <a href="#vehicles" className="rounded-md border-2 border-white bg-transparent px-8 py-3 font-medium text-white hover:bg-white hover:text-veep-orange">
              View Vehicles
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
