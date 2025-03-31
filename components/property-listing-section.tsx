import Image from "next/image"
import Link from "next/link"

// Sample property data
const properties = [
  {
    id: 1,
    name: "Beachfront Villa",
    location: "Miami Beach, FL",
    price: 299,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    location: "Aspen, CO",
    price: 349,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Downtown Loft",
    location: "New York, NY",
    price: 199,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Lakeside Cabin",
    location: "Lake Tahoe, CA",
    price: 249,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Desert Oasis",
    location: "Scottsdale, AZ",
    price: 179,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Oceanview Condo",
    location: "Malibu, CA",
    price: 329,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PropertyListingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c7b975]">Our Luxury Properties</h2>
        <p className="text-lg mb-12 max-w-3xl">
          Discover our collection of beautiful properties available for your next stay. Each property is carefully
          selected to provide an exceptional experience.
        </p>

        {/* Property listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Property Image with Hover Overlay */}
              <div className="relative h-64 w-full group">
                <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-xl font-bold text-[#c7b975] mb-2">{property.name}</h3>
                  <p className="text-lg font-medium text-[#c7b975]">${property.price} per night</p>
                  <Link
                    href={`/properties/${property.id}`}
                    className="mt-4 px-6 py-2 bg-[#c7b975] text-white rounded-md hover:bg-[#d8c983] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-[#c7b975]">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                <p className="font-medium text-[#c7b975]">
                  ${property.price} <span className="text-gray-600 text-sm">per night</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-block px-8 py-3 bg-[#c7b975] text-white rounded-md hover:bg-[#d8c983] transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}

