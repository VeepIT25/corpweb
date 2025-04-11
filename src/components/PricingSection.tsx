
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    vehicle: "Toyota Noah",
    price: "$85",
    period: "per day",
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
    price: "$90",
    period: "per day",
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
    vehicle: "Toyota Alphard",
    price: "$110",
    period: "per day",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Competitive Leasing Pricing
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Lowest rates in Singapore guaranteed. No hidden fees, transparent pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex flex-col h-full ${plan.popular ? 'border-veep-orange shadow-lg relative' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-veep-orange">Best Value</Badge>
              )}
              
              <CardHeader className={plan.popular ? 'bg-veep-orange text-white rounded-t-lg' : ''}>
                <CardTitle className="text-2xl text-center">{plan.vehicle}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pt-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-veep-orange flex-shrink-0 mr-2 mt-0.5" />
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
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-center">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Leasing Terms:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Minimum lease period: 6 months</li>
                <li>Weekly, bi-weekly, or monthly payment options</li>
                <li>Security deposit: 2 weeks of rental</li>
                <li>Early termination fee applies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's Included:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comprehensive insurance</li>
                <li>Regular maintenance services</li>
                <li>Road tax</li>
                <li>24/7 roadside assistance</li>
                <li>Replacement vehicle during servicing</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              *Prices listed are starting rates. Contact us for detailed quotations and special promotions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
