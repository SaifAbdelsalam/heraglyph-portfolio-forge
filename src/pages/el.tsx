import {
  GreekHeroSection,
  GreekServicesSection,
  GreekAboutSection,
  GreekTeamSection,
  GreekFAQSection,
  GreekTestimonialsSection,
  GreekContactSection,
  GreekFooter,
  GreekNavbar
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
      <GreekFAQSection />
      <GreekTestimonialsSection />
      <GreekContactSection />
    </main>
    <GreekFooter />
  </div>
);

export default GreekPage;
