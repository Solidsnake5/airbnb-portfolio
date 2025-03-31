import Image from "next/image"
import Link from "next/link"

interface AboutPropertiesSectionProps {
  image?: string
}

export default function AboutPropertiesSection({
  image = "/placeholder.svg?height=600&width=800",
}: AboutPropertiesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#c7b975]">
              Luxury Airbnb Properties with Premium Amenities
            </h2>
            <p className="text-lg mb-6">
              We have properties in Miami, FL, and Aspen, CO, but our collection extends far beyond. No matter what
              destination you're seeking, we're equipped and ready to provide the premier vacation rentals you deserve.
              Each property is carefully selected for its exceptional location, design, and amenities.
            </p>
            <p className="text-lg mb-8">
              Reach us at{" "}
              <a href="tel:+1234567890" className="text-[#c7b975] font-medium hover:underline">
                +123 456 7890
              </a>{" "}
              or email us at{" "}
              <a href="mailto:bookings@himara.com" className="text-[#c7b975] font-medium hover:underline">
                bookings@himara.com
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c7b975] text-white px-8 py-4 rounded font-medium hover:bg-[#d8c983] transition-colors"
            >
              VIEW PROPERTIES
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src={image || "/placeholder.svg"} alt="Luxury Airbnb Property" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

