import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1e1e1e] text-[#c7b975] py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center text-xs md:text-sm">
          <div>WELCOME TO HIMARA</div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+1002444932434" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone size={14} />
              <span>+100 244432434</span>
            </a>
            <a
              href="mailto:CONTACT@HIMARA.COM"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail size={14} />
              <span>CONTACT@HIMARA.COM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-[#18191b] text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-[#c7b975] text-3xl font-bold mb-4 md:mb-0">
            <Link href="/">Himara.</Link>
          </div>

          {/* Mobile menu button - will be implemented with state management */}
          <div className="md:hidden w-full flex justify-end mb-4">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <Link href="/contact" className="hover:text-[#c7b975] transition-colors">
              CONTACT US
            </Link>

            <Link
              href="/book"
              className="bg-[#c7b975] text-white px-6 py-3 rounded flex items-center justify-center hover:bg-[#d8c983] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              BOOK ONLINE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

