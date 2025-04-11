
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";

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
    <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
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
            className="mt-1"
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
            className="mt-1"
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
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="vehicleInterest">Vehicle Interest</Label>
          <Select 
            onValueChange={handleVehicleChange}
            value={formData.vehicleInterest}
          >
            <SelectTrigger id="vehicleInterest" className="mt-1">
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
          className="w-full bg-veep-orange text-white hover:bg-veep-orange-dark"
        >
          Request Information
        </Button>
        
        <div className="mt-4 flex justify-center">
          <a href="tel:+6561234567" className="flex items-center gap-2 text-veep-orange hover:underline">
            <Phone size={18} />
            Call Us Directly: +65 6123 4567
          </a>
        </div>
        
        <p className="mt-4 text-center text-xs text-gray-500">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
