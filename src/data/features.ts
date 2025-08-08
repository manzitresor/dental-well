import type { Feature } from "@/utils/interface"
import { Calendar, Users, Shield, Clock } from "lucide-react"

export const FEATURES_DATA:Feature[] = [
  {
    icon: Calendar,
    title: "Easy Appointment Booking",
    description: "Book appointments online 24/7 with our simple scheduling system",
  },
  {
    icon: Users,
    title: "Expert Dental Care",
    description: "Our experienced team provides comprehensive dental services",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your medical information is protected with industry-standard security",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Extended hours and weekend appointments available",
  },
]
