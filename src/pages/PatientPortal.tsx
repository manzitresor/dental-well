import PortalHeader from "@/components/layout/PortalHeader"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { Appointment } from "@/utils/interface"
import { Calendar} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function PatientPortal() {
  const user = localStorage.getItem('user')
    const fullName = JSON.parse(user as string).fullName
    
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
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-yellow-100 text-yellow-800"
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
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
                      <Badge className={getStatusColor(upcomingAppointments[0].status)} size="sm">
                        {upcomingAppointments[0].status}
                      </Badge>
                    </div>
                  ) : (
                    <p className="text-gray-500">No upcoming appointments</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
      </div>
  )
}
