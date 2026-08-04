import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter mb-4">
              <span>Ekajaya Fast ferry</span>
            </div>
            <p className="text-sm">
              Reliable daily fast ferry transfers from Nusa Lembongan to Gili Islands, Lombok, Padang Bai & Nusa Dua.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#routes" className="hover:text-white transition-colors">Routes & Schedule</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: +62 813-3723-0430</li>
              <li>Open Daily: 24 Hours Online Booking</li>
              <li>Location: Yellow Bridge, Nusa Lembongan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ekajaya Lembongan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
