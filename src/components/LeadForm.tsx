
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleInterest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVehicleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, vehicleInterest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Form submitted!",
      description: "We'll contact you soon about your leasing options.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicleInterest: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Start Your Journey with VEEP
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="vehicleInterest">Vehicle Interest</Label>
          <Select onValueChange={handleVehicleChange}>
            <SelectTrigger id="vehicleInterest">
              <SelectValue placeholder="Select a vehicle model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota-noah">Toyota Noah</SelectItem>
              <SelectItem value="honda-spada">Honda Spada</SelectItem>
              <SelectItem value="toyota-alphard">Toyota Alphard</SelectItem>
              <SelectItem value="toyota-vellfire">Toyota Vellfire</SelectItem>
              <SelectItem value="nissan-landy">Nissan Landy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-veep-orange hover:bg-veep-orange-dark text-white"
        >
          Request Information
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
