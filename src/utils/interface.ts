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
  status: "Scheduled" | "Confirmed" | "Completed" | "Cancelled"
  notes?: string
}