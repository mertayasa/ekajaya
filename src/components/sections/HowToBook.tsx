import React from 'react';
import { Map, MessageCircle, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Map size={40} className="text-white" />,
    title: "1. Choose Your Route",
    description: "Check our schedules and select your desired destination and date."
  },
  {
    icon: <MessageCircle size={40} className="text-white" />,
    title: "2. Chat on WhatsApp",
    description: "Click any 'Book Now' button to message us directly on WhatsApp."
  },
  {
    icon: <CheckCircle size={40} className="text-white" />,
    title: "3. Get Confirmation",
    description: "Receive your booking confirmation and meeting point details."
  }
];

export default function HowToBook() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Book</h2>
          <p className="text-lg text-primary-light max-w-2xl mx-auto opacity-90">
            Booking your fast boat transfer is as simple as sending a text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-white/20 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-primary-dark border-4 border-white/20 rounded-full flex items-center justify-center mb-6 shadow-xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/80 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
