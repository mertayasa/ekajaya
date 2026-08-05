import React from 'react';
import { CalendarCheck, Ship, Users, LifeBuoy, MessageSquareText } from 'lucide-react';

const benefits = [
  {
    title: "Fixed Daily Schedules",
    description: "Reliable and punctual daily departures you can count on for your travel plans.",
    icon: <CalendarCheck size={32} className="text-primary" />
  },
  {
    title: "Luxury & Comfortable Ferries",
    description: "Modern luxury fast ferries with premium seating and spacious interiors.",
    icon: <Ship size={32} className="text-primary" />
  },
  {
    title: "Experienced Crew",
    description: "Friendly and highly trained local crew ensuring a smooth journey.",
    icon: <Users size={32} className="text-primary" />
  },
  {
    title: "Safe Crossing",
    description: "Fully equipped with life jackets, rafts, and standard safety equipment.",
    icon: <LifeBuoy size={32} className="text-primary" />
  },
  {
    title: "Easy Booking",
    description: "Quick and hassle-free booking process directly via WhatsApp.",
    icon: <MessageSquareText size={32} className="text-primary" />
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Ekajaya</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the best luxury fast ferry service from Lembongan to Gili, Lombok, Padang Bai, and Nusa Dua with our top-tier facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
