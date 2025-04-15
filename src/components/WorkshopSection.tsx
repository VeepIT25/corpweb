
import { MapPin, Clock, Headphones } from "lucide-react";

const WorkshopSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Workshop
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Located in the heart of Sin Ming, our state-of-the-art workshop is equipped to handle all your vehicle maintenance needs.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-veep-orange">Why Choose Our Workshop?</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-veep-orange/10 rounded-lg">
                  <Clock className="w-6 h-6 text-veep-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">1-Hour Turnaround Time</h4>
                  <p className="text-gray-600">
                    We value your time. Most maintenance services are completed within 1 hour, getting you back on the road quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-veep-orange/10 rounded-lg">
                  <Headphones className="w-6 h-6 text-veep-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">24/7 Customer Support</h4>
                  <p className="text-gray-600">
                    Round-the-clock assistance whenever you need it. Our dedicated team is always ready to help you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-veep-orange/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-veep-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Strategic Location</h4>
                  <p className="text-gray-600">
                    Conveniently located at Sin Ming Lane, Singapore. Easy access and ample parking space available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] relative rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7055260674307!2d103.83433627578701!3d1.3516499617116925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17168b052f43%3A0x7d55654f8c9b8c30!2sSin%20Ming%20Ln%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1709661518895!5m2!1sen!2ssg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
