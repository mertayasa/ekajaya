import React from 'react';
import Image from 'next/image';

const galleryImages = [
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
  "/hero-bg.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet MY EKA JAYA 26</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at our modern, comfortable, and well-equipped fast boats.
          </p>
        </div>

        {/* CSS Grid for Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
