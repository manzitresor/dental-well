// BookingDialog.tsx
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import type { BookingDialogProps } from "@/utils/interface"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/redux/store"
import { clearError } from "@/redux/slices/authSlice"
import { createAppointment, fetchAppointments } from "@/redux/slices/appointmentSlice"
import toast from "react-hot-toast"
import { handleAxiosError } from "@/utils/helpers"
import type { AxiosError } from "axios"



export default function BookingDialog({
  isOpen,
  onOpenChange,
  availableTimes,
  treatments,
  newAppointment,
  setNewAppointment,
}: BookingDialogProps) {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    if (isOpen) {
      dispatch(clearError())
    }
  }, [isOpen,dispatch]);

  const handleBookAppointment = async () => {
    try {
      await dispatch(createAppointment({
        date: newAppointment.date,
        time: newAppointment.time,
        service: newAppointment.service,
        notes: newAppointment.notes,
      }))
      await dispatch(fetchAppointments());
      onOpenChange(false);
      toast.success("Appointment booked successfully!");
    } catch (error) {
      console.error('Login error:', error)
        handleAxiosError(error as AxiosError)
        toast.error('An unexpected error occurred')
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer text-xl bg-green-800 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-800 focus:ring-offset-2">
          <Plus className="h-6 w-6 mr-2" />
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book New Appointment</DialogTitle>
          <DialogDescription>
            Schedule your next dental appointment with us.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <input
              id="date"
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
              className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
                file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Select onValueChange={(value) => setNewAppointment({ ...newAppointment, time: value })}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="treatment" className="text-right">
              Service
            </Label>
            <Select onValueChange={(value) => setNewAppointment({ ...newAppointment, service: value })}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {treatments.map((treatment) => (
                  <SelectItem key={treatment} value={treatment}>
                    {treatment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Any specific concerns or notes..."
              value={newAppointment.notes}
              onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleBookAppointment}
            className="bg-green-800 cursor-pointer text-white hover:bg-green-700 focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
          >
            Book Appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
