"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Fast Boat Transfers from <span className="text-primary-light text-teal-400">Nusa Lembongan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
              Reliable daily transfers to Gili Islands, Lombok, Padang Bai & Nusa Dua
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                href="#routes"
                className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book via WhatsApp
              </Link>
              <Link 
                href="#why-us"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold text-center transition-all"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Daily departures
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Comfortable boats
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Safe & punctual
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
