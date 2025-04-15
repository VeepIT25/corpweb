
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    vehicle: "Toyota Noah",
    popular: false,
    features: [
      "Brand new vehicle",
      "Comprehensive insurance",
      "24/7 roadside assistance",
      "Regular maintenance included",
      "Flexible leasing terms",
      "No hidden fees"
    ]
  },
  {
    id: 2,
    vehicle: "Honda Spada",
    popular: true,
    features: [
      "Brand new vehicle",
      "Comprehensive insurance",
      "24/7 roadside assistance",
      "Regular maintenance included",
      "Flexible leasing terms",
      "No hidden fees",
      "Driver benefits package"
    ]
  },
  {
    id: 3,
    vehicle: "Honda STEPWGN Air",
    popular: false,
    features: [
      "Premium luxury vehicle",
      "Comprehensive insurance",
      "24/7 roadside assistance",
      "Regular maintenance included",
      "Flexible leasing terms",
      "No hidden fees",
      "Driver benefits package",
      "Premium customer support"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Our Premium 6-Seater Fleet
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600">
          High-quality vehicles designed for comfort and efficiency
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex h-full flex-col ${plan.popular ? 'relative border-veep-orange shadow-lg' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute right-4 top-4 bg-veep-orange">Best Value</Badge>
              )}
              
              <CardHeader className={plan.popular ? 'rounded-t-lg bg-veep-orange text-white' : ''}>
                <CardTitle className="text-center text-2xl">{plan.vehicle}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-veep-orange" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${plan.popular ? 'bg-veep-orange hover:bg-veep-orange-dark' : 'border-veep-orange text-veep-orange hover:bg-veep-orange hover:text-white'}`}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">Vehicle Benefits:</h4>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Comprehensive insurance</li>
                <li>Regular maintenance services</li>
                <li>Road tax included</li>
                <li>24/7 roadside assistance</li>
                <li>Replacement vehicle during servicing</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Additional Support:</h4>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Dedicated support team</li>
                <li>Flexible leasing options</li>
                <li>No hidden fees</li>
                <li>Driver benefits package</li>
                <li>Quick onboarding process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

