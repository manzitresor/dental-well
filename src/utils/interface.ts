import type { LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface Testimonial {
  name: string
  rating: number
  comment: string
}

export enum UserRole {
    DOCTOR = 'DOCTOR',
    PATIENT = 'PATIENT',
}

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface User {
    id: number
    fullName: string
    email: string
    roles: UserRole
}

export interface AuthState {
  user: User | null,
  token: string | null,
  loading: boolean | false ,
  error: unknown
}

export interface Appointment {
  id: string
  date: string
  time: string
  treatment: string
  status: AppointmentStatus
  notes?: string
}

export interface BookingDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  availableTimes: string[]
  treatments: string[]
  newAppointment: {
    date: string
    time: string
    treatment: string
    notes: string
  }
  setNewAppointment: React.Dispatch<React.SetStateAction<{
    date: string
    time: string
    treatment: string
    notes: string
  }>>
  handleBookAppointment: () => void
}