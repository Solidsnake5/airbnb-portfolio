import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, HotelIcon as Airbnb, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Contact Info */}
          <div>
            <h2 className="text-[#c7b975] text-2xl font-bold mb-6">Himara.</h2>

            <div className="space-y-3">
              <p>
                <span className="font-semibold block">Address</span>
                123 Beachfront Avenue, Miami, FL
              </p>

              <p>
                <span className="font-semibold block">Phone</span>
                <a href="tel:+1002444932434" className="hover:text-[#c7b975] transition-colors">
                  +100 244432434
                </a>
              </p>

              <p>
                <span className="font-semibold block">Email</span>
                <a href="mailto:contact@himara.com" className="hover:text-[#c7b975] transition-colors">
                  contact@himara.com
                </a>
              </p>

              <p>
                <span className="font-semibold block">Website</span>
                <a href="https://www.himara.com" className="hover:text-[#c7b975] transition-colors">
                  www.himara.com
                </a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white text-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-[#c7b975] hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-[#c7b975] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-[#c7b975] hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-[#c7b975] hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-[#c7b975] hover:text-white transition-colors"
              >
                <Airbnb size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="hover:text-[#c7b975] transition-colors">
                  Our Properties
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#c7b975] transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#c7b975] transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#c7b975] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c7b975] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="hover:text-[#c7b975] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c7b975] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#c7b975] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-[#c7b975] transition-colors">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-[#c7b975] transition-colors">
                  Booking Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Latest News */}
          <div>
            <h3 className="text-xl font-bold mb-6">Latest News</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/new-miami-property" className="hover:text-[#c7b975] transition-colors">
                  New Miami Beachfront Property
                </Link>
              </li>
              <li>
                <Link href="/blog/luxury-amenities" className="hover:text-[#c7b975] transition-colors">
                  Top 10 Luxury Amenities
                </Link>
              </li>
              <li>
                <Link href="/blog/travel-tips" className="hover:text-[#c7b975] transition-colors">
                  Travel Tips for Miami
                </Link>
              </li>
              <li>
                <Link href="/blog/best-beaches" className="hover:text-[#c7b975] transition-colors">
                  Best Beaches Near Our Properties
                </Link>
              </li>
              <li>
                <Link href="/blog/summer-deals" className="hover:text-[#c7b975] transition-colors">
                  Summer Special Deals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-gray-400">
            © 2022 Himara. Designed and built by Whatever Web Solutions
          </div>

          <div className="flex space-x-4 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-[#c7b975] transition-colors">
              About Us
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/contact" className="text-gray-400 hover:text-[#c7b975] transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/terms" className="text-gray-400 hover:text-[#c7b975] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#c7b975] rounded-full flex items-center justify-center text-white hover:bg-[#d8c983] transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}

