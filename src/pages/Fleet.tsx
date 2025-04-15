import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CarFront, Users, Fuel, Calendar } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Toyota Noah",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff431cf2?q=80&w=800&auto=format&fit=crop",
    description: "A spacious and fuel-efficient 6-seater MPV perfect for families and ride-sharing.",
    features: ["Advanced Safety", "Fuel Efficient", "Spacious Storage", "Latest Model"],
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2023,
      transmission: "Automatic",
      engine: "2.0L",
      fuelEconomy: "20km/L"
    }
  },
  {
    id: 2,
    name: "Honda Spada",
    image: "/lovable-uploads/3a6f7227-dfcc-4a2f-871c-b0b7f7c1dcf1.png",
    description: "Premium comfort meets style in this elegant 6-seater vehicle.",
    features: ["Premium Interior", "Advanced Safety", "Smooth Ride", "Excellent Comfort"],
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023,
      transmission: "Automatic",
      engine: "1.8L",
      fuelEconomy: "16km/L"
    }
  },
  {
    id: 3,
    name: "Honda Air",
    image: "/lovable-uploads/38fd4da8-119e-4379-b692-6414676865c0.png",
    description: "Innovative and spacious 6-seater with modern design and premium features.",
    features: ["Modern Design", "Advanced Safety", "Comfort-Driven", "Spacious Interior"],
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2024,
      transmission: "Automatic",
      engine: "2.2L",
      fuelEconomy: "18km/L"
    }
  }
];

const Fleet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Fleet</h1>
              <p className="text-lg text-gray-600">
                Explore our selection of premium 6-seater vehicles designed for maximum comfort and earning potential.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow grid gap-6">
                    <p className="text-gray-600">{vehicle.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="text-veep-orange" size={20} />
                        <span>{vehicle.specifications.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="text-veep-orange" size={20} />
                        <span>{vehicle.specifications.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CarFront className="text-veep-orange" size={20} />
                        <span>{vehicle.specifications.engine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="text-veep-orange" size={20} />
                        <span>{vehicle.specifications.year}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Fleet;
