import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import {Link, useNavigate} from 'react-router-dom'
import { TbDental } from "react-icons/tb"
import { singupSchema } from "@/utils/schema"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

type SingupSchema = z.infer<typeof singupSchema>


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SingupSchema>({
    resolver: zodResolver(singupSchema),
  })

  const onSubmit = (data: SingupSchema) => {
    console.log("Form submitted with data:", data);
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
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                />
                {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>
              {/* Phone number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="text"
                  placeholder="(250) 783 4567"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
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
              {/* Confirm password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("confirmPassword")}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                   {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-800 hover:bg-green-700 cursor-pointer" 
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {"Have an account? "}
                <Link 
                  to="/login" 
                  className="text-green-800 hover:underline font-medium hover:text-blue-800"
                >
                  Login
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
