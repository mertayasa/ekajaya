import React from 'react';
import { Clock, MapPin, CreditCard } from 'lucide-react';

import Papa from 'papaparse';

type RouteData = {
  destination: string;
  time: string;
  price: number;
};

const fallbackRoutes: RouteData[] = [
  { destination: "Senggigi (Lombok)", time: "09:00", price: 685000 },
  { destination: "Gili Trawangan", time: "09:00", price: 685000 },
  { destination: "Gili Meno", time: "09:00", price: 685000 },
  { destination: "Gili Air", time: "09:00", price: 685000 },
  { destination: "Bangsal (Lombok)", time: "09:00", price: 685000 },
  { destination: "Padang Bai", time: "14:45", price: 285000 },
  { destination: "Nusa Dua", time: "15:15", price: 385000 },
];

async function getRoutesData(): Promise<RouteData[]> {
  const url = process.env.GOOGLE_SHEET_CSV_URL;
  if (!url) {
    return fallbackRoutes;
  }

  try {
    const res = await fetch(url, { next: { revalidate: 3600, tags: ['routes-schedule'] } });
    if (!res.ok) {
      throw new Error(`Failed to fetch routes, status: ${res.status}`);
    }
    const text = await res.text();
    const parsed = Papa.parse<{ Destination: string; Time: string; Price: string }>(text, { header: true, skipEmptyLines: true });

    const routes = parsed.data.map(row => ({
      destination: row.Destination,
      time: row.Time,
      price: parseInt(row.Price, 10) || 0,
    })).filter(route => route.destination && route.time && route.price > 0);

    return routes.length > 0 ? routes : fallbackRoutes;
  } catch (error) {
    console.error("Error fetching or parsing routes data:", error);
    return fallbackRoutes;
  }
}

export default async function RoutesSchedule() {
  const routes = await getRoutesData();
  const phoneNumber = "6281337230430";

  const getWhatsAppLink = (destination: string) => {
    const message = `Hi Ekajaya, I want to book Lembongan to ${destination} on [date].`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="routes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Routes & Schedule</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose your destination. We offer daily, reliable transfers from Nusa Lembongan to the most popular destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-sand rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full group"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    Lembongan <span className="text-slate-400">→</span><br />{route.destination}
                  </h3>
                  <div className="bg-primary/10 text-primary p-2 rounded-full mt-1 shrink-0">
                    <MapPin size={20} />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600 gap-3">
                    <Clock size={18} className="text-slate-400" />
                    <span>Departs at <strong className="text-slate-800">{route.time}</strong></span>
                  </div>
                  <div className="flex items-center text-slate-600 gap-3">
                    <CreditCard size={18} className="text-slate-400" />
                    <span className="font-semibold text-primary">{formatPrice(route.price)} <span className="text-sm font-normal text-slate-500">/ pax</span></span>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppLink(route.destination)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 group-hover:bg-primary text-white text-center py-3 rounded-xl font-medium transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
