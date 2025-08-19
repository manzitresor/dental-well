import { AxiosError } from 'axios'
import { AppointmentStatus } from './interface'

export const handleAxiosError = (error: AxiosError) => {
    if (error.response) {
        return (error.response.data as { message?: string }).message
    } else {
        return error.message
    }
}

 export const getStatusColor = (status: string) => {
    switch (status) {
      case AppointmentStatus.PENDING:
        return "bg-yellow-100 text-yellow-800"
      case AppointmentStatus.CONFIRMED:
        return "bg-green-100 text-green-800"
      case AppointmentStatus.COMPLETED:
        return "bg-blue-100 text-blue-800"
      case AppointmentStatus.CANCELLED:
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }