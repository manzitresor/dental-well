import PortalHeader from "@/components/layout/PortalHeader"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { Appointment } from "@/utils/interface"
import { Calendar, Clock, Mail, Phone, UserIcon } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import BookingDialog from "@/components/layout/BookingDialog"
import { getStatusColor } from "@/utils/helpers"
import { availableTimes, treatments } from "@/data/patient"

export default function PatientPortal() {
  const user = localStorage.getItem('user')
    const fullName = JSON.parse(user as string).fullName
    
    const [isBookingOpen, setIsBookingOpen] = useState(false)
     const [newAppointment, setNewAppointment] = useState({
        date: "",
        time: "",
        treatment: "",
        notes: "",
      })
    const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      date: "2025-09-15",
      time: "10:00",
      treatment: "Dental Cleaning",
      status: "Confirmed",
      notes: "Regular checkup and cleaning",
    },
    {
      id: "2",
      date: "2025-08-20",
      time: "14:30",
      treatment: "Consultation",
      status: "Completed",
      notes: "Initial consultation completed",
    },
  ])
 

   const handleBookAppointment = () => {
    const appointment: Appointment = {
      id: (appointments.length + 1).toString(),
      ...newAppointment,
      status: "Scheduled",
    }
    setAppointments([...appointments, appointment])
    setNewAppointment({ date: "", time: "", treatment: "", notes: "" })
    setIsBookingOpen(false)
  }
    const upcomingAppointments = appointments.filter((apt) => apt.status === "Scheduled" || apt.status === "Confirmed")
  return (
        <div className="min-h-screen bg-background">
          <PortalHeader/>
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome, {fullName}!</h2>
              <p className="text-gray-600">Manage your appointments and view your dental care history.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="h-5 w-5 mr-2 text-green-800" />
                    Next Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div>
                      <div className="text-lg font-semibold">
                        {new Date(upcomingAppointments[0].date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {upcomingAppointments[0].time} - {upcomingAppointments[0].treatment}
                      </div>
                      <Badge className={getStatusColor(upcomingAppointments[0].status)}>
                        {upcomingAppointments[0].status}
                      </Badge>
                    </div>
                  ) : (
                    <p className="text-gray-500">No upcoming appointments</p>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="mr-2 text-green-800" />
                    Quick Book
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BookingDialog
                    isOpen={isBookingOpen}
                    onOpenChange={setIsBookingOpen}
                    availableTimes={availableTimes}
                    treatments={treatments}
                    newAppointment={newAppointment}
                    setNewAppointment={setNewAppointment}
                    handleBookAppointment={handleBookAppointment}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <UserIcon className="h-5 w-5 mr-2 text-green-800" />
                    Contact Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-green-800" />
                    (250) 788-363-207
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-green-800" />
                    info@dentalwellpro.com
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
      </div>
  )
}
