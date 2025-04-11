
import { CheckCircle2 } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="brand-story" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          VEEP Brand Story — Drive Big, Live Bigger
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-veep-orange text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">1</span>
              VEEP Believes 6-Seaters Are the Future
            </h3>
            <p className="pl-11 text-lg">
              VEEP champions 6-seaters as the future of point-to-point transport. A mainstream and ideal space-luxurious choice for both passengers and drivers. Perfect for families, group rides, airport trips, and daily commuting – driving for higher earning potential.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-veep-orange text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">2</span>
              VEEP Puts Drivers at the Heart of Everything
            </h3>
            <p className="pl-11 text-lg">
              More than just leasing, VEEP is driver-first. From offering the best 6-seaters to career growth to wellness and lifestyle support, every decision is made with the driver in mind. VEEP exists to uplift and empower drivers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-veep-orange text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">3</span>
              Big for Work, Perfect for Family
            </h3>
            <p className="pl-11 text-lg">
              VEEP's 6-seater is a dual-purpose vehicle — a high-earning platform during work hours and a comfortable, family-ready car after hours. This enables drivers to earn more with fewer hours, giving them more quality time with their loved ones.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">The VEEP Difference</h3>
          
          <div className="space-y-4">
            {[
              "Premium new vehicles with full manufacturer warranty",
              "Competitive pricing - lowest in Singapore",
              "Islandwide workshop network with minimal downtime",
              "Comprehensive driver benefits package",
              "Flexible leasing terms to suit your needs",
              "Higher earning potential with multi-purpose vehicles"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-veep-orange flex-shrink-0 mr-2" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
