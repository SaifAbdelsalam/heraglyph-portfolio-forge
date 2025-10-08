import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import NewServicesSection from '@/components/NewServicesSection';
import ComparisonSection from '@/components/ComparisonSection';

import NewContactSection from '@/components/NewContactSection';
import BookingSection from '@/components/BookingSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <NewServicesSection />
      <ComparisonSection />
      
      <ChatbotSection />
      <BookingSection />
      <NewContactSection />
      <Footer />
    </div>
  );
};

export default Index;
