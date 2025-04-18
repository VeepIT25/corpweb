import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroBanner = () => {
  const isMobile = useIsMobile();
  
  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById('vehicles');
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden" style={{ height: "600px" }}>
      <div className="absolute inset-0 bg-gray-700">
        {/* Fallback background color */}
      </div>
      
      <img 
        src="/lovable-uploads/ec4680db-bb4f-467d-89c4-47fdfc49e90b.png" 
        alt="Honda steering wheel close-up" 
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        loading="eager"
        decoding="async"
        onError={(e) => {
          console.error("Background image load error:", e);
          e.currentTarget.style.display = "none";
        }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 py-16 md:px-8">
        <div className="max-w-3xl text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Go Big, Earn Big
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Singapore's premier 6-seater leasing company offering the lowest rates in the market.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              onClick={scrollToVehicles} 
              className="bg-veep-orange px-8 py-6 text-lg text-white hover:bg-veep-orange-dark"
            >
              View Our Fleet
            </Button>
            <Button 
              variant="outline" 
              className="border-white px-8 py-6 text-lg text-veep-orange hover:bg-white hover:text-veep-orange-dark"
              onClick={() => window.open('https://wa.me/6589556969', '_blank')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
