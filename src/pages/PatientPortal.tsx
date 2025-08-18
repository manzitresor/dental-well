import PortalHeader from "@/components/layout/PortalHeader"

export default function PatientPortal() {
  const user = localStorage.getItem('user')
    const fullName = JSON.parse(user as string).fullName
  return (
        <div className="min-h-screen bg-background">
          <PortalHeader/>
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome, {fullName}!</h2>
              <p className="text-gray-600">Manage your appointments and view your dental care history.</p>
            </div>
            </div>
      </div>
  )
}
