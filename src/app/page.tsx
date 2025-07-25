'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
