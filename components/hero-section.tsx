import Image from "next/image"

interface HeroSectionProps {
  backgroundImage?: string
  title: string
  subtitle: string
}

export default function HeroSection({
  backgroundImage = "/placeholder.svg?height=1080&width=1920",
  title = "Experience Luxury Living in Our Premium Properties",
  subtitle = "Discover handpicked Airbnb properties that combine comfort, style, and exceptional locations for your perfect getaway.",
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>
        <div className="mt-10">
          <a
            href="#properties"
            className="inline-block bg-[#c7b975] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#d8c983] transition-colors"
          >
            View Properties
          </a>
        </div>
      </div>
    </section>
  )
}

