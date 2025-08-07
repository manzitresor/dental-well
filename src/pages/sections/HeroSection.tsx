import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dentalImg from '../../assets/Cosmetic-Dentistry.jpg'

export default function HeroSection() {
  return (
        <section className="py-5 bg-gradient-to-br from-green-1000 to-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge className="bg-blue-100 text-green-800  hover:bg-blue-100">✨ Modern Dental Care</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Your Smile is Our
                            <span className="text-green-800"> Priority</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Experience exceptional dental care with our state-of-the-art facility and expert team. Book your
                            appointment online and take the first step towards a healthier smile.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg px-8 bg-green-800">
                            Book Appointment
                            <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                            Learn More
                            </Button>
                        </div>
                        <div className="flex items-center space-x-6 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">1000+</div>
                                <div className="text-sm text-gray-600">Happy Patients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">15+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">4.9</div>
                                <div className="text-sm text-gray-600">Rating</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                    <img src={dentalImg} alt="Dental Care" className="rounded-2xl shadow-2xl" />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <div className="font-semibold">Next Available</div>
                            <div className="text-sm text-gray-600">Today 2:30 PM</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
