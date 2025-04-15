import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CarFront, Fuel, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const vehicles = [
  {
    id: 1,
    name: "Toyota Noah",
    image: "/lovable-uploads/5feae213-5fd6-4782-b5b7-ea40bfcc5af6.png",
    description: "A spacious and fuel-efficient 6-seater MPV perfect for families and ride-sharing.",
    features: ["6 Seats", "Fuel Efficient", "Spacious Storage", "Latest Model"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2023
    },
    best: false // Keeping this field in case it's used elsewhere, but removing the badge rendering
  },
  {
    id: 2,
    name: "Honda Spada",
    image: "/lovable-uploads/3a6f7227-dfcc-4a2f-871c-b0b7f7c1dcf1.png",
    description: "Comfort meets style in this premium 6-seater with excellent fuel economy.",
    features: ["6 Seats", "Premium Interior", "Fuel Efficient", "Excellent Comfort"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Gasoline",
      year: 2023
    },
    best: false
  },
  {
    id: 3,
    name: "Honda STEPWGN Air", 
    image: "/lovable-uploads/38fd4da8-119e-4379-b692-6414676865c0.png",
    description: "Innovative and spacious 6-seater with modern design and premium features.",
    features: ["6 Seats", "Modern Design", "Advanced Safety", "Comfort-Driven"],
    color: "Black colour available",
    specifications: {
      seats: 6,
      fuelType: "Hybrid",
      year: 2024
    },
    best: false
  }
];

const VehicleShowcase = () => {
  const getVehicleSlug = (name: string) => {
    return name.toLowerCase().replace(/ /g, '-');
  };

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
            <Card 
              key={vehicle.id} 
              className="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-veep-orange"
            >
              <div className="relative w-full p-4">
                <AspectRatio ratio={16 / 9} className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className={`h-full w-full object-contain transform transition-transform duration-[3000ms] hover:scale-105 ${
                        vehicle.name === 'Toyota Noah' ? 'scale-125' : 
                        vehicle.name === 'Honda STEPWGN Air' ? 'scale-105' : 
                        vehicle.name === 'Honda Spada' ? 'scale-110' : 
                        'scale-100'
                      }`}
                    />
                  </div>
                </AspectRatio>
              </div>
              
              <CardHeader className="flex-none space-y-2">
                <CardTitle className="text-2xl font-bold">{vehicle.name}</CardTitle>
                <CardDescription className="text-base">
                  {vehicle.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-veep-orange" />
                    <span className="text-sm">{vehicle.specifications.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-veep-orange" />
                    <span className="text-sm">{vehicle.specifications.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CarFront className="h-5 w-5 text-veep-orange" />
                    <span className="text-sm">{vehicle.color}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-veep-orange" />
                    <span className="text-sm">{vehicle.specifications.year}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gray-100 text-sm"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex-none pt-6">
                <Link to={`/vehicle/${getVehicleSlug(vehicle.name)}`} className="w-full">
                  <Button className="w-full bg-veep-orange hover:bg-veep-orange-dark">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
