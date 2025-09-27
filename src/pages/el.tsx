import {
  GreekHeroSection,
  GreekServicesSection,
  GreekAboutSection,
  GreekTeamSection,
  GreekFAQSection,
  GreekTestimonialsSection,
  GreekContactSection,
  GreekFooter,
  GreekNavbar,
  GreekChatbotSection,
  GreekBookingSection
} from '@/components/GreekSections';

// NOTE: For a real project, you would use i18n or a translation library. Here, we will just show a placeholder Greek version.

const greekText = {
  heroHeadline: 'Αποκτήστε ένα Άδικο Πλεονέκτημα με την Τεχνητή Νοημοσύνη',
  heroSub: 'Σας καθοδηγούμε προς βιώσιμη ανάπτυξη ενσωματώνοντας την τεχνητή νοημοσύνη και τον αυτοματισμό στις ροές εργασίας σας.',
  servicesTitle: 'Λύσεις Τεχνητής Νοημοσύνης',
  aboutTitle: 'Βελτιστοποίηση με Τεχνητή Νοημοσύνη',
  teamTitle: 'Η Ομάδα μας',
  faqTitle: 'Συχνές Ερωτήσεις',
  testimonialsTitle: 'Τι λένε οι πελάτες',
  contactTitle: 'Επικοινωνήστε μαζί μας',
  chatbotTitle: 'Chatbot Τεχνητής Νοημοσύνης',
  chatbotSub: 'Ανακαλύψτε την επόμενη γενιά εξυπηρέτησης πελατών',
  bookingTitle: 'Κλείστε μια Συνάντηση',
  bookingSub: 'Συζητήστε μαζί μας για τις λύσεις AI που ταιριάζουν στην επιχείρησή σας',
  // ...add more as needed
};

const GreekPage = () => (
  <div className="min-h-screen overflow-x-hidden">
    <GreekNavbar />
    <main>
      <GreekHeroSection />
      <GreekServicesSection />
      <GreekAboutSection />
      <GreekTeamSection />
      <GreekChatbotSection />
      <GreekBookingSection />
      <GreekFAQSection />
      <GreekTestimonialsSection />
      <GreekContactSection />
    </main>
    <GreekFooter />
  </div>
);

export default GreekPage;
