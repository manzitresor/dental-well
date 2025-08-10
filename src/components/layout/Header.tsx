import { TbDental } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-[#1C352D] backdrop-blur text-white supports-[backdrop-filter]:bg-green-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center">
                <TbDental className="text-4xl text-lime-100" />
                <h1 className="text-2xl font-bold text-white">DentalWell Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
                <Link to="#services" className="text-sm font-medium hover:text-lime-100 transition-colors">
                Services
                </Link>
                <Link to="#about" className="text-sm font-medium hover:text-lime-100 transition-colors">
                About
                </Link>
                <Link to="#contact" className="text-sm font-medium hover:text-lime-100 transition-colors">
                Contact
                </Link>
                <Button className="bg-white text-black cursor-pointer hover:bg-lime-50 hover:text-black" >
                <Link to='/login'>Login</Link>
                </Button>
                <Button className="bg-white text-black cursor-pointer hover:bg-lime-50 hover:text-black">Book Appointment</Button>
            </nav>
        </div>
    </header>
  )
}
