
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Honesty",
      description: "We believe in transparent pricing and honest communication with all our customers."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality",
      description: "Every service we provide meets the highest standards of craftsmanship and reliability."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Local Support",
      description: "Committed to supporting our Zambian community with reliable, professional services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ramstone Creative Solutions</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for car repair services and general supplies in Lusaka, Zambia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ramstone Creative Solutions was founded with a simple mission: to provide Zambians with 
                reliable, professional services they can trust. Based in the heart of Lusaka, we've built 
                our reputation on great professionalism and superb quality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need expert car repair services or quality general supplies for your business 
                or home, we're here to serve you with integrity and excellence. Our team understands the 
                unique needs of the Zambian market and we're committed to providing solutions that work 
                for our community.
              </p>
              <p className="text-lg text-gray-600">
                From panel beating and spray painting to construction tools and stationery, we've become 
                a one-stop solution for individuals, mechanics, garages, and businesses across Lusaka.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To serve the Zambian community with reliable, professional services that enhance 
                daily life and support local businesses.
              </p>
              <div className="flex items-center text-sm">
                <MapPin className="w-5 h-5 mr-2" />
                <span>23A Great East Road, Avondale, Lusaka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Ramstone Creative Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-dark mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Find Us in Lusaka</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're conveniently located on Great East Road in Avondale, making it easy for 
                customers across Lusaka to access our services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span className="text-lg">23A Great East Road, Avondale, Lusaka</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <span className="text-lg">Serving car owners, mechanics, and businesses</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Google Maps Integration</p>
                <p className="text-sm">23A Great East Road, Avondale, Lusaka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            At Ramstone Creative Solutions, every customer is treated like family. We take pride in 
            building lasting relationships with the people and businesses we serve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">For Individual Customers</h3>
              <p className="text-gray-300">
                Whether you need car repairs or household supplies, we provide personalized 
                service with competitive pricing.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">For Businesses</h3>
              <p className="text-gray-300">
                We understand the needs of local businesses and offer reliable supply solutions 
                to keep your operations running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
