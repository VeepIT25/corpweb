
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CarFront, Fuel, Calendar } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Toyota Noah",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff431cf2?q=80&w=800&auto=format&fit=crop",
    description: "A spacious and fuel-efficient 6-seater MPV perfect for families and ride-sharing.",
    features: ["6 Seats", "Fuel Efficient", "Spacious Storage", "Latest Model"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2023
    },
    best: true
  },
  {
    id: 2,
    name: "Honda Spada",
    image: "https://images.unsplash.com/photo-1631385058128-f5c00d14e037?q=80&w=800&auto=format&fit=crop",
    description: "Comfort meets style in this premium 6-seater with excellent fuel economy.",
    features: ["6 Seats", "Premium Interior", "Fuel Efficient", "Excellent Comfort"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023
    },
    best: false
  },
  {
    id: 3,
    name: "Honda Air",
    image: "/lovable-uploads/38fd4da8-119e-4379-b692-6414676865c0.png",
    description: "Innovative and spacious 6-seater with modern design and premium features.",
    features: ["6 Seats", "Modern Design", "Advanced Safety", "Comfort-Driven"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2024
    },
    best: false
  }
];

const VehicleShowcase = () => {
  return (
    <section id="vehicles" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Our Premium 6-Seater Fleet
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600">
          Choose from our selection of premium 6-seater vehicles, perfect for maximizing your earning potential.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-veep-orange">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover object-center"
                />
                {vehicle.best && (
                  <Badge className="absolute right-3 top-3 bg-veep-orange">Most Popular</Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                <CardDescription>{vehicle.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.seats} Seats</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="mr-2 h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.fuelType}</span>
                  </div>
                  <div className="flex items-center">
                    <CarFront className="mr-2 h-5 w-5 text-veep-orange" />
                    <span>{vehicle.color}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.year}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-veep-orange hover:bg-veep-orange-dark">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
