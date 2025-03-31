import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutPropertiesSection from "@/components/about-properties-section"
import FeaturesSection from "@/components/features-section"
import PropertyListingSection from "@/components/property-listing-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection
        title="Experience Luxury Living in Our Premium Properties"
        subtitle="Discover handpicked Airbnb properties that combine comfort, style, and exceptional locations for your perfect getaway."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />
      <AboutPropertiesSection image="/placeholder.svg?height=600&width=800" />
      <PropertyListingSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

