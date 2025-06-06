
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Package, Star, Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Auto Repair Services",
      description: "Professional panel beating, spray painting, and auto spare parts",
      link: "/auto-repair",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&h=400&fit=crop"
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "General Supply",
      description: "Stationery, hardware, electrical, painting, and construction tools",
      link: "/general-supply",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "John Mwanza",
      text: "Excellent service! They fixed my car perfectly and the price was very fair.",
      rating: 5
    },
    {
      name: "Grace Banda",
      text: "Best place in Lusaka for construction tools. Always have what I need.",
      rating: 5
    },
    {
      name: "Moses Tembo",
      text: "Professional team with superb quality work. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Great Professionalism.<br />
              <span className="text-yellow-300">Superb Quality.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We offer trusted car repair services and a wide range of general supply items, based in Lusaka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                <Link to="/auto-repair">Auto Repair Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                <Link to="/general-supply">Supply Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From car repairs to general supplies, we provide quality solutions for individuals and businesses across Lusaka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button asChild className="bg-primary hover:bg-orange-600">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Ramstone?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Professional Quality</h3>
              <p className="text-gray-600">Expert technicians with years of experience in automotive repair and supply.</p>
            </div>
            
            <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Wide Selection</h3>
              <p className="text-gray-600">Comprehensive range of auto parts and general supplies for all your needs.</p>
            </div>
            
            <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Local Support</h3>
              <p className="text-gray-600">Proudly serving the Lusaka community with honest, reliable service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-dark">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-dark text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1200&h=800&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a quote or visit our location on Great East Road, Avondale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-orange-600">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Request a Quote
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-dark"
              onClick={() => {
                const phone = "260XXXXXXXXX";
                const message = "Hello! I need more information about your services.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
