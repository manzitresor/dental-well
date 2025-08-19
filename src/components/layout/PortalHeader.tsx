import { LogOut } from "lucide-react";
import { TbDental } from "react-icons/tb";
import { Button } from "../ui/button";

export default function PortalHeader() {
  return (
    <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-green-800 rounded-lg flex items-center justify-center">
              <TbDental className="text-4xl text-lime-100" />
            </div>
            <h1 className="text-xl font-semibold">Patient Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="cursor-pointer hover:bg-lime-100 hover:text-black">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
  )
}
