
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
    name: "Toyota Alphard",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=800&auto=format&fit=crop",
    description: "Luxury 6-seater with premium features for an exceptional riding experience.",
    features: ["6 Seats", "Luxury Interior", "Premium Features", "Executive Style"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023
    },
    best: false
  },
  {
    id: 4,
    name: "Toyota Vellfire",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop",
    description: "A premium luxury MPV with advanced features and spacious interior.",
    features: ["6 Seats", "Luxury Interior", "Advanced Technology", "Spacious Cabin"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2023
    },
    best: false
  },
  {
    id: 5,
    name: "Nissan Landy",
    image: "https://images.unsplash.com/photo-1567273703372-d93d435a1554?q=80&w=800&auto=format&fit=crop",
    description: "Reliable and comfortable 6-seater with excellent fuel efficiency.",
    features: ["6 Seats", "Reliability", "Fuel Efficient", "Comfortable Interior"],
    color: "Multiple Colors Available",
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023
    },
    best: false
  }
];

const VehicleShowcase = () => {
  return (
    <section id="vehicles" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Our Premium 6-Seater Fleet
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose from our selection of premium 6-seater vehicles, perfect for maximizing your earning potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden flex flex-col h-full border-2 border-transparent hover:border-veep-orange transition-all duration-300">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-48 object-cover"
                />
                {vehicle.best && (
                  <Badge className="absolute top-3 right-3 bg-veep-orange">Most Popular</Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                <CardDescription>{vehicle.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-veep-orange" />
                    <span>{vehicle.specifications.seats} Seats</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 mr-2 text-veep-orange" />
                    <span>{vehicle.specifications.fuelType}</span>
                  </div>
                  <div className="flex items-center">
                    <CarFront className="h-5 w-5 mr-2 text-veep-orange" />
                    <span>{vehicle.color}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-veep-orange" />
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
