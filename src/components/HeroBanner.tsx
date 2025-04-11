
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-orange overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Go Big, Earn Big
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Singapore's premier 6-seater leasing company offering the lowest rates in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-veep-orange hover:bg-gray-100 text-lg px-8 py-6">
              View Our Fleet
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-veep-orange text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
