import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import {Link, useNavigate} from 'react-router-dom'
import { TbDental } from "react-icons/tb"
import { loginSchema } from "@/utils/schema"
import z from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginUser } from "@/redux/slices/authSlice"
import { UserRole } from "@/utils/interface"
import  { AxiosError } from "axios"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/redux/store"
import toast from "react-hot-toast"
import { handleAxiosError } from "@/utils/helpers"

type LoginSchema = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
        const result = await dispatch(loginUser(data))
        if (result.meta.requestStatus === 'fulfilled') {
            const userData = result.payload.user;            
            toast.success('Successfully logged in!')

            if (userData.roles === UserRole.DOCTOR) {
                navigate('/dashboard')
            } else {
              navigate('/patient-portal')
            }
        } else if (result.meta.requestStatus === 'rejected') {
            const errorMessage = result.payload as string || 'Login failed'
            toast.error(errorMessage)
            console.log('Login rejected:', errorMessage)
        }
    } catch (error) {
        console.error('Login error:', error)
        handleAxiosError(error as AxiosError)
        toast.error('An unexpected error occurred')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-gray-700 text-lg hover:text-white cursor-pointer hover:bg-green-800"
        >
          <ArrowLeft/>
          Back
        </Button>
        <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-800 rounded-full mb-4">
            <TbDental className="text-4xl text-lime-100" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DentalWell pro</h1>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">Sign in to your account</CardTitle>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  disabled={loading}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password")}
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                   {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-lime-700 hover:text-blue-800 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-800 hover:bg-green-700 cursor-pointer" 
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {"Don't have an account? "}
                <Link 
                  to="/signup" 
                  className="text-green-800 hover:underline font-medium hover:text-blue-800"
                >
                  Create account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  )
}