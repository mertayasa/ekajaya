import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const phoneNumber = "6281237675881";
  const defaultMessage = "Hi Ekajaya, I need some help.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand rounded-3xl p-8 md:p-16 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to set sail?</h2>
            <p className="text-lg text-slate-600 max-w-md">
              Our team is ready to assist you with your booking. Reach out to us directly on WhatsApp for the fastest response.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                  <p>+62 812-3767-5881</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Operating Hours</p>
                  <p>07:00 AM - 09:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white px-8 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full md:w-auto"
            >
              <MessageCircleIcon />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// Inline icon for the button to avoid extra import if not needed
function MessageCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  );
}
