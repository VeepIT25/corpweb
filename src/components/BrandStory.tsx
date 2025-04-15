
import { CheckCircle2 } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="brand-story" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          VEEP Brand Story — Drive Big, Live Bigger
        </h2>

        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h3 className="flex items-center text-2xl font-bold">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-veep-orange text-white">1</span>
              VEEP Believes 6-Seaters Are the Future
            </h3>
            <p className="pl-11 text-lg">
              VEEP champions 6-seaters as the future of point-to-point transport. A mainstream and ideal space-luxurious choice for both passengers and drivers. Perfect for families, group rides, airport trips, and daily commuting – driving for higher earning potential.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center text-2xl font-bold">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-veep-orange text-white">2</span>
              VEEP Puts Drivers at the Heart of Everything
            </h3>
            <p className="pl-11 text-lg">
              More than just leasing, VEEP is driver-first. From offering the best 6-seaters to career growth to wellness and lifestyle support, every decision is made with the driver in mind. VEEP exists to uplift and empower drivers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center text-2xl font-bold">
              <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-veep-orange text-white">3</span>
              Big for Work, Perfect for Family
            </h3>
            <p className="pl-11 text-lg">
              VEEP's 6-seater is a dual-purpose vehicle — a high-earning platform during work hours and a comfortable, family-ready car after hours. This enables drivers to earn more with fewer hours, giving them more quality time with their loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
