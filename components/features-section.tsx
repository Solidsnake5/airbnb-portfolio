import Image from "next/image"
import { Award, Home, Shield } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Features background" fill className="object-cover" />
          {/* Theme color overlay */}
          <div className="absolute inset-0 bg-[#c7b975]/85"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-white text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Award size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Top-rated Properties</h3>
            <p className="text-lg">
              We pride ourselves on maintaining the highest-rated vacation rentals with exceptional guest reviews and
              ratings.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Home size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Luxury Amenities</h3>
            <p className="text-lg">
              Each property is equipped with premium amenities and thoughtful touches to ensure a comfortable and
              memorable stay.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Shield size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p className="text-lg">
              We offer round-the-clock support for all our guests, ensuring any concerns are addressed promptly during
              your stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

