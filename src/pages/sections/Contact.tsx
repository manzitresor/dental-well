import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
   <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to schedule your appointment? Contact us today!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-green-800 mx-auto mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">(555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-green-800 mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@dentalwellpro.com</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-800 mx-auto mb-2" />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Makuza Peace Plaza Near Bank of Kigali Level, 2, Kigali</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
