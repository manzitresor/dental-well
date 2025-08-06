import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FEATURES_DATA } from "@/data/features";

export default function Features() {

  return (
   <section className="relative h-screen pt-20">
     <div className="container mx-auto px-4 relative h-full">
    <div className="absolute top-80 bottom-0 left-0 right-0 bg-green-800 z-0"></div>

    <div className="text-center mb-16 relative z-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
        Why Choose DentalWell Pro?
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We combine cutting-edge technology with personalized care to deliver exceptional dental services.
      </p>
    </div>

    <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {FEATURES_DATA.map((feature, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
          <CardHeader>
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-8 w-8 text-green-800" />
            </div>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  )
}
