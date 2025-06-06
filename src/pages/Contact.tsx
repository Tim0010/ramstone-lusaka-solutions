
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      details: "23A Great East Road, Avondale, Lusaka, Zambia",
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: "+260 XXX XXX XXX",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: "info@ramstonecreative.co.zm",
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM, Saturday: 8AM-4PM",
      action: "View Schedule"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with Ramstone Creative Solutions for quotes, product information, or any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{info.details}</p>
                  <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your needs - auto repair, supplies, or general inquiry"
                        rows={5}
                        className="border-gray-300"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-orange-600">
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600 mb-4">Or contact us directly:</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1 bg-green-500 hover:bg-green-600"
                        onClick={() => {
                          const phone = "260XXXXXXXXX";
                          const message = "Hello! I'd like to know more about your services.";
                          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        className="flex-1 bg-secondary hover:bg-blue-700"
                        onClick={() => window.location.href = "tel:+260XXXXXXXXX"}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map & Location Info */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Find Us</h2>
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary to-secondary h-64 rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Google Maps Integration</p>
                      <p className="text-sm opacity-90">23A Great East Road, Avondale, Lusaka</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark mb-3">Visit Our Location</h3>
                    <p className="text-gray-600 mb-4">
                      We're conveniently located on Great East Road in Avondale, easily accessible 
                      from all parts of Lusaka. Parking is available on-site.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Address:</strong> 23A Great East Road, Avondale, Lusaka</p>
                      <p><strong>Landmark:</strong> Near Avondale Shopping Center</p>
                      <p><strong>Parking:</strong> Free on-site parking available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-orange-800">
                      <strong>Note:</strong> For emergency auto repairs, please call ahead to confirm availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">Do you provide free quotes?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Yes! We provide free estimates for all auto repair services. Contact us for a detailed quote.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">Do you offer bulk discounts?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Absolutely. We offer special pricing for bulk orders and regular business customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We accept cash, mobile money, and bank transfers for your convenience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">Do you deliver supplies?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Yes, we offer delivery services within Lusaka for large orders. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
