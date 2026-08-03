import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import HeroSection from '@/components/sections/HeroSection';
import RoutesSchedule from '@/components/sections/RoutesSchedule';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import HowToBook from '@/components/sections/HowToBook';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <div className="flex flex-col w-full">
        <HeroSection />
        <RoutesSchedule />
        <WhyChooseUs />
        <Gallery />
        <HowToBook />
        <Contact />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
