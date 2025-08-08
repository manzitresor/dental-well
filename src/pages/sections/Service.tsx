import { Button } from "@/components/ui/button";
import  { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Service() {
      const services = [
            { name: "General Dentistry", price: "From $120" },
            { name: "Teeth Cleaning", price: "From $100" },
            { name: "Root Canal", price: "From $850" },
            { name: "Dental Crowns", price: "From $1,200" },
            { name: "Teeth Whitening", price: "From $300" },
            { name: "Orthodontics", price: "From $3,500" },
        ]
  return (
     <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for the whole family with transparent pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-green-800 text-white cursor-pointer">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
