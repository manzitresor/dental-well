import PortalHeader from "@/components/layout/PortalHeader"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AppointmentStatus } from "@/utils/interface"
import { Calendar, Clock, Mail, Phone, UserIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import BookingDialog from "@/components/layout/BookingDialog"
import { getStatusColor } from "@/utils/helpers"
import { availableTimes, treatments } from "@/data/patient"
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import type { AppDispatch, RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchAppointments } from "@/redux/slices/appointmentSlice"

export default function PatientPortal() {
    const user = localStorage.getItem('user')
    const fullName = JSON.parse(user as string).fullName
    const dispatch = useDispatch<AppDispatch>()
    
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [newAppointment, setNewAppointment] = useState({
        date: "",
        time: "",
        service: "",
        notes: "",
      })
    const appointments = useSelector((state: RootState) => state.appointment.appointments); 

    useEffect(() => {
          dispatch(fetchAppointments());
    }, [dispatch]);

    const upcomingAppointments = appointments.filter((apt) => apt.status === AppointmentStatus.PENDING || apt.status === AppointmentStatus.CONFIRMED)

    
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
                        {upcomingAppointments[0].time} - {upcomingAppointments[0].service}
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
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-green-800 font-bold">Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.service}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                        </TableCell>
                        <TableCell>{appointment.notes || "N/A"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
      </div>
  )
}
