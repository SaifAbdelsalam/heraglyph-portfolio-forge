import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewServicesSection from '@/components/NewServicesSection';
import ComparisonSection from '@/components/ComparisonSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import NewContactSection from '@/components/NewContactSection';
import BookingSection from '@/components/BookingSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';
import { FAQSection } from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <NewServicesSection />
      <ComparisonSection />
      {/* <AboutSection />
      <TeamSection />
      <FAQSection />
      <TestimonialsSection /> */}
      <ChatbotSection />
      <BookingSection />
      <NewContactSection />
      <Footer />
    </div>
  );
};

export default Index;
