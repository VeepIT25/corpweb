
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden" style={{ height: "600px" }}>
      <div className="absolute inset-0 bg-gray-700">
        {/* Fallback background color */}
      </div>
      
      {/* Using a background image for the hero section */}
      <img 
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        alt="Luxury car background" 
        className="absolute inset-0 h-full w-full object-cover opacity-70"
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
            <Button className="bg-veep-orange px-8 py-6 text-lg text-white hover:bg-veep-orange-dark">
              View Our Fleet
            </Button>
            <Button variant="outline" className="border-white px-8 py-6 text-lg text-orange hover:bg-white hover:text-veep-orange">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
