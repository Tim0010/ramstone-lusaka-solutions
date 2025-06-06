
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Hammer, Zap, Paintbrush, Building, MessageCircle } from "lucide-react";

const GeneralSupply = () => {
  const categories = [
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Stationery",
      description: "Complete range of office and school supplies for businesses, schools, and personal use.",
      items: ["Pens & Pencils", "Paper & Notebooks", "Folders & Files", "Office Equipment"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Hardware Tools",
      description: "Quality tools for construction, repair, and maintenance work. Professional and DIY solutions.",
      items: ["Hand Tools", "Power Tools", "Measuring Equipment", "Safety Gear"],
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Electrical Equipment",
      description: "Electrical supplies for residential, commercial, and industrial applications.",
      items: ["Wiring & Cables", "Switches & Sockets", "Circuit Breakers", "Lighting Solutions"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-primary" />,
      title: "Paint Supplies",
      description: "Quality paints and painting supplies for interior, exterior, and specialized applications.",
      items: ["Interior Paints", "Exterior Paints", "Brushes & Rollers", "Primers & Sealers"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Construction Materials",
      description: "Essential building materials and supplies for construction and renovation projects.",
      items: ["Cement & Concrete", "Roofing Materials", "Plumbing Supplies", "Building Hardware"],
      color: "from-red-500 to-red-600"
    }
  ];

  const customerTypes = [
    {
      title: "Small Businesses",
      description: "Complete office supplies and equipment for your business operations",
      icon: "🏢"
    },
    {
      title: "Construction Contractors",
      description: "Professional tools and materials for construction and renovation projects",
      icon: "🏗️"
    },
    {
      title: "Schools & Offices",
      description: "Bulk stationery supplies and educational materials",
      icon: "🎓"
    },
    {
      title: "Home Owners",
      description: "DIY tools, paints, and supplies for home improvement projects",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">General Supply Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your one-stop shop for stationery, hardware, electrical, painting, and construction supplies in Lusaka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/contact">Get Product List</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  const phone = "260XXXXXXXXX";
                  const message = "Hi! I need supplies for my project. What do you have available?";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stock a comprehensive range of quality supplies to meet all your business and personal needs.
            </p>
          </div>
          
          <div className="space-y-8">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        {category.icon}
                        <h3 className="text-2xl font-bold text-dark ml-4">{category.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {category.items.map((item, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br ${category.color} flex items-center justify-center min-h-[250px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center text-white">
                        {category.icon}
                        <p className="mt-4 text-lg font-medium">{category.title}</p>
                        <p className="text-sm opacity-90">Quality Products Available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small businesses to large contractors, we provide supplies for every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerTypes.map((customer, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{customer.icon}</div>
                  <h3 className="text-xl font-semibold text-dark mb-3">{customer.title}</h3>
                  <p className="text-gray-600 text-sm">{customer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Popular Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Some of our most requested items by customers across Lusaka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Office Paper Reams", category: "Stationery", price: "Competitive pricing" },
              { name: "Power Drill Sets", category: "Hardware", price: "Professional quality" },
              { name: "LED Light Bulbs", category: "Electrical", price: "Energy efficient" },
              { name: "Interior Wall Paint", category: "Paint", price: "Multiple colors" },
              { name: "PVC Pipes", category: "Construction", price: "Various sizes" },
              { name: "Filing Cabinets", category: "Office", price: "Durable steel" }
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary to-secondary h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.price}</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-primary hover:bg-orange-600"
                    onClick={() => {
                      const phone = "260XXXXXXXXX";
                      const message = `Hi! I'm interested in ${product.name}. Can you provide more details?`;
                      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                    }}
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Supplies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Our Supply Services?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Wide Selection</h3>
              <p className="text-gray-600">Comprehensive inventory covering all your supply needs in one location.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Quality Brands</h3>
              <p className="text-gray-600">We stock reputable brands and quality products that you can trust.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Bulk Discounts</h3>
              <p className="text-gray-600">Special pricing for bulk orders and regular business customers.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Local Service</h3>
              <p className="text-gray-600">Based in Lusaka with understanding of local business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Supplies for Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for product availability, pricing, and bulk order discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-orange-600">
              <Link to="/contact">Request Product List</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
              <Link to="/about">Visit Our Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralSupply;
