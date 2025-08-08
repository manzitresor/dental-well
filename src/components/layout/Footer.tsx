import { TbDental } from "react-icons/tb";

export default function Footer() {
  return (
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center mb-4">
                <TbDental className="text-4xl text-lime-100" />
                <h1 className="text-2xl font-bold text-white">DentalWell Pro</h1>
            </div>
              <p className="text-gray-300 ">
                Providing exceptional dental care with modern technology and personalized service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Oral Surgery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-lime-100 mt-8 pt-8 text-center text-gray-300 font-semibold">
            <p>&copy; 2025 DentalWell Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
