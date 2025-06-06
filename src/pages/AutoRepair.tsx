
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Palette, Settings, Phone, MessageCircle } from "lucide-react";

const AutoRepair = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Panel Beating",
      description: "Expert dent removal and body work restoration. We restore your vehicle's original shape and structural integrity using modern techniques and quality materials.",
      features: ["Dent removal", "Body reshaping", "Structural repairs", "Frame alignment"]
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Spray Painting",
      description: "Professional automotive painting services with color matching and protective coatings. We ensure a perfect finish that protects and beautifies your vehicle.",
      features: ["Color matching", "Primer application", "Professional spray booth", "Clear coat protection"]
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Auto Spare Parts",
      description: "Quality genuine and compatible spare parts for all vehicle makes and models. We stock essential parts and can source specialized components quickly.",
      features: ["Engine parts", "Body panels", "Electrical components", "Brake systems"]
    }
  ];

  const beforeAfter = [
    {
      title: "Panel Beating Results",
      before: "Damaged front bumper with deep dents",
      after: "Fully restored to original condition"
    },
    {
      title: "Spray Painting Excellence",
      before: "Faded and scratched paint surface",
      after: "Professional finish with perfect color match"
    },
    {
      title: "Complete Restoration",
      before: "Multiple damage points on vehicle body",
      after: "Like-new appearance and protection"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Auto Repair Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional car repair services in Lusaka. From panel beating to spray painting, 
              we restore your vehicle to its best condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get a Quote
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  const phone = "260XXXXXXXXX";
                  const message = "Hi! I need auto repair services. Can you help?";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Auto Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive automotive repair services with skilled technicians and quality materials.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        {service.icon}
                        <h3 className="text-2xl font-bold text-dark ml-4">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center text-gray-500">
                        {service.icon}
                        <p className="mt-4 text-lg font-medium">{service.title}</p>
                        <p className="text-sm">Professional Service Photo</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Before & After Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformation we achieve with our professional auto repair services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-4">{item.title}</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm font-medium text-red-700">Before:</p>
                      <p className="text-sm text-red-600">{item.before}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-700">After:</p>
                      <p className="text-sm text-green-600">{item.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Our Auto Repair?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Skilled professionals with years of automotive repair experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Quality Materials</h3>
              <p className="text-gray-600">We use only high-quality paints, parts, and materials for lasting results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Competitive rates with transparent pricing and no hidden costs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Quick Service</h3>
              <p className="text-gray-600">Efficient repairs to get you back on the road as soon as possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Auto Repair Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your car repair needs. We're here to help restore your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-orange-600">
              <Link to="/contact">Request Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoRepair;
