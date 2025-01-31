// "use client";

import { useState } from "react";
// import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" >
            <div className="flex-shrink-0">
              <a className="text-2xl font-bold text-white" href="#home">Emasy</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "Features", "Portals", "Performance", "Pricing", "Testimonials", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace("/", "")}`}
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  {item}
                </a>
              ))}
              <button id="themeToggle" className="text-gray-300 hover:text-white pr-2 pt-1 ">
                <svg
                  className="w-6 h-7 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Features", "Portals", "Performance", "Pricing", "Testimonials", "Contact"].map((item, index) => (
              <a
              onClick={() => setMobileMenuOpen(false)}
                key={index}
                href={`#${item.toLowerCase().replace("/", "")}`}
                className="text-gray-300 hover:text-white block px-3 py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
