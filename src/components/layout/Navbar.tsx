"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Logo placeholder - replace with actual image later */}
            <div className="flex items-center gap-2 text-primary-dark font-bold text-2xl tracking-tighter">
              <span>EKAJAYA LEMBONGAN</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#routes" className="text-foreground hover:text-primary transition-colors font-medium">Routes & Schedule</Link>
            <Link href="#why-us" className="text-foreground hover:text-primary transition-colors font-medium">Why Us</Link>
            <Link href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">Gallery</Link>
            <Link href="#contact" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link
              href="#routes"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
            >
              Routes & Schedule
            </Link>
            <Link
              href="#why-us"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
            >
              Why Us
            </Link>
            <Link
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center mt-4 bg-primary text-white px-3 py-3 rounded-md text-base font-semibold shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
