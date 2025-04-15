
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { Badge } from "@/components/ui/badge";
import { CarFront, Users, Fuel, Calendar } from "lucide-react";

const vehicles = {
  "toyota-noah": {
    name: "Toyota Noah",
    description: "A spacious and fuel-efficient 6-seater MPV perfect for families and ride-sharing.",
    mainImage: "/lovable-uploads/5feae213-5fd6-4782-b5b7-ea40bfcc5af6.png",
    features: ["6 Seats", "Fuel Efficient", "Spacious Storage", "Latest Model"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2023,
      engine: "2.0L",
      transmission: "Automatic",
      fuelEconomy: "20km/L"
    }
  },
  "honda-spada": {
    name: "Honda Spada",
    description: "Comfort meets style in this premium 6-seater with excellent fuel economy.",
    mainImage: "/lovable-uploads/3a6f7227-dfcc-4a2f-871c-b0b7f7c1dcf1.png",
    features: ["6 Seats", "Premium Interior", "Fuel Efficient", "Excellent Comfort"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023,
      engine: "1.8L",
      transmission: "Automatic",
      fuelEconomy: "16km/L"
    }
  },
  "honda-stepwgn-air": {
    name: "Honda STEPWGN Air",
    description: "Innovative and spacious 6-seater with modern design and premium features.",
    mainImage: "/lovable-uploads/38fd4da8-119e-4379-b692-6414676865c0.png",
    features: ["6 Seats", "Modern Design", "Advanced Safety", "Comfort-Driven"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2024,
      engine: "2.2L",
      transmission: "Automatic",
      fuelEconomy: "18km/L"
    }
  }
};

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles[id as keyof typeof vehicles];

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">{vehicle.name}</h1>
              <p className="text-xl text-gray-600">{vehicle.description}</p>
              
              <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={vehicle.mainImage} 
                  alt={vehicle.name}
                  className="object-contain w-full h-full transform scale-150" // Increased scale from 125 to 150
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CarFront className="h-5 w-5 text-veep-orange" />
                    <span>{vehicle.color}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-veep-orange" />
                    <span>{vehicle.specifications.year}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div><strong>Engine:</strong> {vehicle.specifications.engine}</div>
                  <div><strong>Transmission:</strong> {vehicle.specifications.transmission}</div>
                  <div><strong>Fuel Economy:</strong> {vehicle.specifications.fuelEconomy}</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-veep-orange hover:bg-veep-orange-dark py-6 text-lg"
                onClick={() => window.open('https://wa.me/6589556969', '_blank')}
              >
                Contact Us On WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Interested in this vehicle?</h2>
            <div className="max-w-2xl mx-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
