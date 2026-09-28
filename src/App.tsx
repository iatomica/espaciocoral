import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { AboutDoctor } from './components/AboutDoctor';
import { ObrasSocialesSection } from './components/ObrasSocialesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#0C7C7B] selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <AboutDoctor />
        <ObrasSocialesSection />
        <ReviewsSection />
        <LocationSection />
        <AppointmentForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
