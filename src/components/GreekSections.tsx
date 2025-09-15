// Greek-translated sections for the /el page
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2, Star, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Database, Shield, Cloud, Code } from 'lucide-react';
import { Bot, Cpu, SatelliteDish, BrainCircuit, Users, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone } from 'lucide-react';
import { useRef } from 'react';
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

// Animation variants (copied from AboutSection)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

// Greek-translated Hero Section
export const GreekHeroSection = () => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showTrust, setShowTrust] = useState(false);

  useEffect(() => {
    const headlineTimer = setTimeout(() => setShowHeadline(true), 900);
    const subheadlineTimer = setTimeout(() => setShowSubheadline(true), 1600);
    const trustTimer = setTimeout(() => setShowTrust(true), 2000);
    return () => {
      clearTimeout(headlineTimer);
      clearTimeout(subheadlineTimer);
      clearTimeout(trustTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-heraglyph-black">
      {/* Background video and effects */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/uploads/background vid heraglyph.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-heraglyph-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent via-heraglyph-accent/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-heraglyph-accent/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-heraglyph-gradient-end/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="section-container w-full relative z-10 pt-32 md:pt-40 h-screen flex items-center">
        <div className="max-w-[1280px] my-auto hero-mobile-fix">
          <div className={`transition-all duration-700 ${showHeadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} hero-mobile-text`}>
            <p className="text-heraglyph-accent text-base md:text-lg font-medium mb-2">Υπηρεσίες Αυτοματισμού AI</p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading mb-3">
              Αποκτήστε ένα <span className="gradient-text">Άδικο Πλεονέκτημα</span> με την Τεχνητή Νοημοσύνη
            </h2>
          </div>
          <div className={`transition-all duration-700 ${showSubheadline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mb-8 hero-mobile-text`}>
            <p className="text-heraglyph-gray text-base md:text-lg mb-6">
              Σας καθοδηγούμε προς βιώσιμη ανάπτυξη ενσωματώνοντας την τεχνητή νοημοσύνη και τον αυτοματισμό στις ροές εργασίας σας, αυξάνοντας την αποδοτικότητα και μειώνοντας το κόστος.
            </p>
          </div>
          <div className={`transition-all duration-700 ${showTrust ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
              <div className="opacity-0 animate-fade-in-delayed hero-mobile-btns">
                <a href="#contact" className="relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-8 py-4 rounded-md font-medium text-center group inline-block">
                  <span className="relative z-10">Ξεκινήστε το Έργο σας</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </div>
              <div className="flex items-center gap-8 hero-mobile-trust">
                <div className="flex items-center gap-2 text-heraglyph-gray"><span className="text-heraglyph-accent"><CheckCircle2 size={20} /></span><span>35+ Έργα</span></div>
                <div className="flex items-center gap-2 text-heraglyph-gray"><span className="text-heraglyph-accent"><Star size={20} /></span><span>100% Εγγύηση</span></div>
                <div className="flex items-center gap-2 text-heraglyph-gray"><span className="text-heraglyph-accent"><Zap size={20} /></span><span>Άμεση Παράδοση</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 w-full flex justify-center animate-bounce">
        <a href="#services" className="text-heraglyph-white/50 hover:text-heraglyph-accent transition-colors duration-300 flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">Δείτε τις Υπηρεσίες</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

// Greek-translated Services Section (same structure, Greek text)
const greekServices = [
  {
    icon: <Database size={32} />,
    title: 'AI Chatbots & Αυτοματισμοί',
    description: 'Εξατομικευμένα AI chatbots και αυτοματισμοί ροών εργασίας για αύξηση αποδοτικότητας και αλληλεπίδρασης.',
    details: [
      'Συνομιλητικά AI για ιστοσελίδες & εφαρμογές',
      'Αυτοματοποιημένη διαχείριση leads & υποστήριξη',
      'Ενσωμάτωση με CRM και εργαλεία επιχείρησης',
      '24/7 εξυπηρέτηση πελατών'
    ],
    gradient: 'from-amber-500/20 to-amber-700/20'
  },
  {
    icon: <Code size={32} />,
    title: 'Συστήματα Cold Email AI',
    description: 'Συστήματα cold email με AI για αυτοματοποιημένη προσέγγιση και παρακολούθηση πωλήσεων.',
    details: [
      'Εξατομικευμένη δημιουργία email',
      'Αυτοματοποιημένα follow-ups & προγραμματισμός',
      'Διαχείριση inbox & αναλύσεις',
      'Εύκολη ενσωμάτωση με email πλατφόρμες'
    ],
    gradient: 'from-amber-600/20 to-amber-800/20'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Βελτιστοποίηση Διαδικασιών με AI',
    description: 'Αυτοματοποιήστε λειτουργίες με AI για ανάλυση δεδομένων, αναφορές και αυτοματοποίηση εργασιών.',
    details: [
      'Αυτόματη καταχώρηση & αναφορές δεδομένων',
      'Προγνωστική ανάλυση για ανάπτυξη',
      'Αυτοματισμοί εργασιών & ροών',
      'Custom AI ενσωματώσεις για κάθε ανάγκη'
    ],
    gradient: 'from-amber-500/20 to-amber-700/20'
  },
  {
    icon: <Shield size={32} />,
    title: 'AI Ασφάλεια & Συμμόρφωση',
    description: 'Προστατέψτε την επιχείρησή σας με λύσεις AI για ασφάλεια, παρακολούθηση και συμμόρφωση.',
    details: [
      'Ανίχνευση απειλών με AI',
      'Αυτοματοποιημένη παρακολούθηση συμμόρφωσης',
      'Ασφάλεια δεδομένων & κρυπτογράφηση',
      'Αυτοματοποιημένη απόκριση περιστατικών'
    ],
    gradient: 'from-amber-600/20 to-amber-800/20'
  }
];

export const GreekServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (!isAutoplay || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % greekServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoplay, isHovered]);
  const handleSlideMouseEnter = () => {
    setIsHovered(true);
    setIsAutoplay(false);
  };
  const handleSlideMouseLeave = () => {
    setIsHovered(false);
    setIsAutoplay(true);
  };
  return (
    <section id="services" className="bg-heraglyph-black py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-accent/5 to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent/10 via-transparent to-transparent opacity-30" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div className="text-center mb-20" initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">Λύσεις</span>
            <span className="text-heraglyph-white ml-3">Τεχνητής Νοημοσύνης</span>
          </h2>
          <p className="text-heraglyph-gray text-lg md:text-xl">
            Επιχειρησιακές λύσεις με τη δύναμη της σύγχρονης τεχνητής νοημοσύνης
          </p>
        </motion.div>
        <div className="relative h-[450px] w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait" initial={false}>
            {greekServices.map((service, index) => (
              index === activeIndex && (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95",
                    "rounded-2xl p-8 shadow-xl border border-heraglyph-accent/10",
                    "backdrop-blur-sm transition-all duration-300",
                    "hover:border-heraglyph-accent/30 hover:shadow-2xl"
                  )}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onMouseEnter={handleSlideMouseEnter}
                  onMouseLeave={handleSlideMouseLeave}
                >
                  <div className="max-w-2xl text-center">
                    <div className="mb-6 flex justify-center">
                      <div className={cn(
                        "p-4 rounded-xl bg-gradient-to-br",
                        service.gradient,
                        "shadow-inner text-heraglyph-accent"
                      )}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-heraglyph-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-heraglyph-gray text-lg mb-6">
                      {service.description}
                    </p>
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <ul className="text-heraglyph-gray/80 space-y-2">
                        {service.details.map((detail, i) => (
                          <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }} transition={{ delay: isHovered ? i * 0.1 : 0 }} className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-heraglyph-accent/50" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {greekServices.map((_, index) => (
            <button key={index} className={cn("w-2 h-2 rounded-full transition-all duration-300", index === activeIndex ? "bg-heraglyph-accent w-6" : "bg-heraglyph-gray/30 hover:bg-heraglyph-gray/50")} onClick={() => { setActiveIndex(index); setIsAutoplay(false); }} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Greek-translated About Us Section
export const GreekAboutSection = () => (
  <section id="about" className="bg-heraglyph-black py-20 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-heraglyph-accent/5 rounded-full filter blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-heraglyph-gradient-end/5 rounded-full filter blur-[100px] animate-pulse"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-heraglyph-black via-transparent to-heraglyph-black"></div>
    <div className="section-container max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
          <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
            Βελτιστοποίηση με Τεχνητή Νοημοσύνη
          </span>
          <span className="text-heraglyph-white ml-3">για Επιχειρήσεις</span>
        </h2>
        <p className="section-subtitle text-heraglyph-gray max-w-3xl mx-auto text-lg md:text-xl">
          Ενισχύουμε εταιρείες με chatbots AI, αυτοματοποιημένα συστήματα cold email και βελτιστοποίηση διαδικασιών για μέγιστη αποδοτικότητα.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            <p className="text-heraglyph-gray text-lg leading-relaxed">
              <span className="text-heraglyph-white font-semibold">HERAGLYPH</span> εξειδικεύεται στον ψηφιακό μετασχηματισμό με AI. Δημιουργούμε εξατομικευμένα chatbots, αυτοματοποιούμε cold outreach και βελτιστοποιούμε επιχειρησιακές διαδικασίες με την τελευταία λέξη της τεχνητής νοημοσύνης.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-heraglyph-white font-medium mb-2">AI Chatbots & Βοηθοί</h3>
                  <p className="text-heraglyph-gray">Συνομιλητική AI για υποστήριξη, πωλήσεις και leads</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-heraglyph-white font-medium mb-2">Αυτοματοποιημένο Outreach</h3>
                  <p className="text-heraglyph-gray">Συστήματα cold email και αυτοματισμοί για ανάπτυξη</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-heraglyph-accent/10 text-heraglyph-accent mt-1">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-heraglyph-white font-medium mb-2">Βελτιστοποίηση Διαδικασιών</h3>
                  <p className="text-heraglyph-gray">Ανάλυση και αυτοματοποίηση με AI για αποδοτικότητα</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95 rounded-xl p-6 shadow-lg border border-heraglyph-gray/10 backdrop-blur-sm hover:border-heraglyph-accent/20 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-heraglyph-accent/10 to-heraglyph-accent/5 shadow-inner text-heraglyph-accent">
                  <Code size={28} />
                </div>
                <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Έργα AI</h3>
              </div>
              <p className="text-heraglyph-accent text-3xl font-bold mb-2">50+</p>
              <p className="text-heraglyph-gray text-sm">Chatbots, αυτοματισμοί & βελτιστοποίηση</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95 rounded-xl p-6 shadow-lg border border-heraglyph-gray/10 backdrop-blur-sm hover:border-heraglyph-accent/20 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-heraglyph-accent/10 to-heraglyph-accent/5 shadow-inner text-heraglyph-accent">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Ειδικοί AI</h3>
              </div>
              <p className="text-heraglyph-accent text-3xl font-bold mb-2">15+</p>
              <p className="text-heraglyph-gray text-sm">Μηχανικοί & data scientists</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95 rounded-xl p-6 shadow-lg border border-heraglyph-gray/10 backdrop-blur-sm hover:border-heraglyph-accent/20 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-heraglyph-accent/10 to-heraglyph-accent/5 shadow-inner text-heraglyph-accent">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-medium ml-4 text-heraglyph-white">Διεθνής Παρουσία</h3>
              </div>
              <p className="text-heraglyph-accent text-3xl font-bold mb-2">10+</p>
              <p className="text-heraglyph-gray text-sm">Χώρες με λύσεις μας</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/95 rounded-xl p-6 shadow-lg border border-heraglyph-gray/10 backdrop-blur-sm hover:border-heraglyph-accent/20 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-heraglyph-accent/10 to-heraglyph-accent/5 shadow-inner text-heraglyph-accent">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-medium ml-4 text-heraglyph-white">AI Ασφάλεια</h3>
              </div>
              <p className="text-heraglyph-accent text-3xl font-bold mb-2">99.9%</p>
              <p className="text-heraglyph-gray text-sm">Διαθεσιμότητα & συμμόρφωση</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Greek-translated Team Section (only text translated)
export const GreekTeamSection = () => {
  const teamMembers = [
    {
      name: "Αδάμ Σαουκι",
      role: "Αρχιτέκτονας Λύσεων AI",
      bio: "Ειδικός στο σχεδιασμό και την υλοποίηση προηγμένων λύσεων AI, με εξειδίκευση στην επεξεργασία φυσικής γλώσσας και συστήματα μηχανικής μάθησης για επιχειρηματικές εφαρμογές.",
      initials: "ΑΣ",
    },
    {
      name: "Σαΐφ Ραγιάν",
      role: "Επικεφαλής Έρευνας & Ανάπτυξης AI",
      bio: "Ειδικεύεται στην ανάπτυξη πρωτοποριακών μοντέλων και αλγορίθμων AI, με εξειδίκευση στη βαθιά μάθηση, τα νευρωνικά δίκτυα και τα αυτοματοποιημένα συστήματα λήψης αποφάσεων.",
      initials: "ΣΡ",
    },
  ];
  return (
    <section id="team" className="bg-gradient-to-b from-heraglyph-dark-gray to-heraglyph-black py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-40 right-20 w-72 h-72 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-heraglyph-accent text-sm uppercase tracking-wider font-medium mb-2 opacity-0 animate-fade-in">Ηγέτες Καινοτομίας AI</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-heraglyph-white opacity-100 animate-none">
            Γνωρίστε τους <span className="gradient-text">Ειδικούς AI</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full mx-auto mb-6 opacity-0 animate-fade-in"></div>
          <p className="section-subtitle opacity-0 animate-fade-in-delayed max-w-2xl mx-auto">
            Η ομάδα των ειδικών μας στην AI συνδυάζει βαθιά τεχνική εξειδίκευση με καινοτόμο σκέψη για την ανάπτυξη προηγμένων λύσεων τεχνητής νοημοσύνης που μεταμορφώνουν τις επιχειρήσεις
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <Card key={member.name} className="glass-card bg-heraglyph-black/50 opacity-0 animate-fade-in-delayed border border-heraglyph-white/10 hover:border-heraglyph-accent/30 overflow-hidden group rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-heraglyph-accent/10">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 mt-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end rounded-full opacity-0 blur-xl group-hover:opacity-20 transition-all duration-500 -z-10 scale-[1.35]"></div>
                  <Avatar className="h-28 w-28 border-2 border-heraglyph-accent/20 bg-heraglyph-dark-gray group-hover:border-heraglyph-accent/50 transition-all duration-300 p-0.5">
                    {member.name === "Αδάμ Σαουκι" ? (
                      <img
                        src="/uploads/me.jpg"
                        alt={member.name}
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <img
                        src="/uploads/saif photo.jpeg"
                        alt={member.name}
                        className="h-full w-full object-cover rounded-full"
                        style={{ transform: 'scale(2)', objectPosition: 'center -10%' }}
                      />
                    )}
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white p-1.5 rounded-full shadow-lg">
                    <Users size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-heraglyph-white mb-1">{member.name}</h3>
                <p className="text-heraglyph-accent font-medium mb-2">{member.role}</p>
                <p className="text-heraglyph-gray text-base">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Greek-translated FAQ Section with animation
export const GreekFAQSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="faq" className="bg-heraglyph-black py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/20 to-transparent"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-64 h-64 rounded-full bg-heraglyph-gradient-end/5 blur-3xl"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">
          {[...Array(13)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-heraglyph-accent/20" 
                 style={{left: `${(i/12) * 100}%`}}></div>
          ))}
        </div>
      </div>

      <div className={`section-container max-w-4xl mx-auto px-6 relative z-10 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-heraglyph-accent rounded-full"></div>
            <span className="text-heraglyph-accent font-medium tracking-wide uppercase text-sm">FAQ</span>
            <div className="w-2 h-2 bg-heraglyph-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-heraglyph-white via-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              Συχνές Ερωτήσεις
            </span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-4 opacity-80"></div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-6 opacity-60"></div>
          <p className="text-heraglyph-gray text-lg md:text-xl max-w-2xl mx-auto">
            Απαντήσεις σε βασικές ερωτήσεις για τις λύσεις AI και τις υπηρεσίες μας.
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-4">
          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  Ποιες ολοκληρωμένες υπηρεσίες προσφέρει η HERAGLYPH;
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  Η HERAGLYPH παρέχει ολοκληρωμένες λύσεις AI, συμπεριλαμβανομένων chatbots επιχειρηματικής κλάσης, πολυγλωσσικών φωνητικών βοηθών, αυτοματοποιημένων συστημάτων email marketing, προηγμένων συστημάτων προσέλκυσης πελατών και εξειδικευμένου αυτοματισμού επιχειρηματικών διαδικασιών για τις ανάγκες του κλάδου σας.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  Πώς προσεγγίζει η HERAGLYPH την ανάπτυξη εξατομικευμένων λύσεων AI;
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  Ακολουθούμε μια ολοκληρωμένη συμβουλευτική προσέγγιση, ξεκινώντας με διεξοδική ανάλυση των επιχειρηματικών σας αναγκών. Οι λύσεις μας αναπτύσσονται χρησιμοποιώντας τεχνολογίες AI επιχειρηματικής κλάσης, διασφαλίζοντας κλιμάκωση, ασφάλεια και ομαλή ενσωμάτωση με τα υπάρχοντα συστήματά σας.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  Τι απόδοση επένδυσης (ROI) μπορούν να περιμένουν οι επιχειρήσεις από τις λύσεις AI της HERAGLYPH;
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  Οι πελάτες μας συνήθως βιώνουν σημαντικές βελτιώσεις στην επιχειρησιακή αποδοτικότητα και στην παραγωγή εσόδων. Μέσω των προηγμένων λύσεων AI, οι επιχειρήσεις παρατηρούν αυξημένα ποσοστά δέσμευσης πελατών, μειωμένο λειτουργικό κόστος και μετρήσιμες βελτιώσεις στα ποσοστά μετατροπής.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gradient-to-r from-heraglyph-dark-gray/40 to-heraglyph-dark-gray/20 rounded-2xl p-6 border border-heraglyph-accent/10 hover:border-heraglyph-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-heraglyph-accent/10 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heraglyph-accent mb-3 group-hover:text-heraglyph-accent-light transition-colors duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 bg-heraglyph-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  Ποια μέτρα ασφαλείας και πρότυπα συμμόρφωσης διατηρεί η HERAGLYPH;
                </h3>
                <p className="text-heraglyph-gray opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                  Διατηρούμε τα υψηλότερα πρότυπα ασφάλειας δεδομένων μέσω υποδομών επιχειρηματικής κλάσης, κρυπτογράφησης end-to-end και τακτικών ελέγχων ασφαλείας. Οι λύσεις μας συμμορφώνονται με διεθνείς κανονισμούς προστασίας δεδομένων, συμπεριλαμβανομένων των GDPR και CCPA. Εφαρμόζουμε ισχυρούς ελέγχους πρόσβασης, συνεχή παρακολούθηση και αυτοματοποιημένα συστήματα backup.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg className="w-5 h-5 text-heraglyph-accent group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// TestimonialsSection (English version, as in original)
const testimonials = [
  {
    quote: "HERAGLYPH's AI automation solutions transformed our customer service. Their custom chatbot handles 80% of our inquiries 24/7, reducing response times from hours to seconds while maintaining high customer satisfaction.",
    name: "David Chen",
    position: "Operations Director, TechFlow Solutions"
  },
  {
    quote: "The AI-powered workflow automation HERAGLYPH implemented has revolutionized our business processes. We've seen a 65% reduction in manual tasks and our team can now focus on strategic initiatives instead of repetitive work.",
    name: "Rachel Martinez",
    position: "CEO, InnovateAI Systems"
  },
  {
    quote: "Their expertise in integrating AI chatbots with our existing systems was impressive. The intelligent automation not only improved our customer engagement but also provided valuable insights through data analytics. A game-changer for our business.",
    name: "Mark Thompson",
    position: "Head of Digital Transformation, Future Corp"
  }
];

export const GreekTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="testimonials" className="min-h-screen py-20 relative overflow-hidden bg-heraglyph-black">
      <div className="section-container relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="section-title text-heraglyph-white">Τι Λένε οι Πελάτες μας</h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mt-3 mb-3 opacity-80"></div>
          <p className="section-subtitle">
            Ακούστε από επιχειρήσεις που βοηθήσαμε να μεταμορφώσουν την ψηφιακή τους παρουσία με την τεχνητή νοημοσύνη.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5 
                        transition-all duration-500 overflow-hidden relative
                        ${activeIndex === index ? 'scale-105 border-heraglyph-accent/40' : 'scale-100 hover:scale-102'}`}
            >
              <div className="p-8 flex flex-col h-full relative">
                <div className="mb-4 relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end flex items-center justify-center">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-heraglyph-black">
                      <path d="M6 10.8H0.2L4.2 0.799998H8L6 10.8ZM16 10.8H10.2L14.2 0.799998H18L16 10.8Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <p className="text-heraglyph-white/90 mb-6 flex-grow leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-heraglyph-accent/10">
                  <p className="font-bold text-heraglyph-white">{testimonial.name}</p>
                  <p className="text-sm text-heraglyph-accent">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              aria-label={`Προβολή μαρτυρίας ${index + 1}`}
              title={`Μαρτυρία ${index + 1}`}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${activeIndex === index 
                ? 'bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end' 
                : 'bg-heraglyph-gray/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Greek-translated Contact Section (full structure, all text in Greek)
export const GreekContactSection = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => {
    if (!phone) return true;
    return /^\+?[0-9]{10,}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^0-9+]/g, '');
      const formattedValue = sanitizedValue.replace(/\+/g, (match, offset) => offset === 0 ? match : '');
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
      if (!formattedValue) setPhoneError('');
    } else if (name === 'email') {
      setFormData(prev => ({ ...prev, [name]: value }));
      setEmailError('');
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Παρακαλώ εισάγετε ένα έγκυρο email');
      return;
    }
    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError('Παρακαλώ εισάγετε ένα έγκυρο τηλέφωνο (τουλάχιστον 10 ψηφία, + επιτρέπεται στην αρχή)');
      return;
    }
    setIsSubmitting(true);
    setIsError(false);
    const serviceId = 'service_8tjf30b';
    const templateId = 'template_hle784s';
    const publicKey = 'T_MaEfPL4Kf782Lc-';
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {
          setIsSubmitting(false);
          setSubmitMessage('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα.');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setSubmitMessage(''), 5000);
        }, () => {
          setIsSubmitting(false);
          setIsError(true);
          setSubmitMessage('Αποτυχία αποστολής. Δοκιμάστε ξανά ή επικοινωνήστε απευθείας μέσω email.');
          setTimeout(() => setSubmitMessage(''), 5000);
        });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-heraglyph-black">
      {/* Modern minimalist background (same as original) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-heraglyph-black/95"></div>
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-heraglyph-accent/15 to-transparent"></div>
        <div className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-64 h-64 rounded-full bg-heraglyph-accent/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 opacity-10">{/* ...svg... */}</div>
        <div className="absolute top-10 left-10 opacity-10">{/* ...svg... */}</div>
        <div className="absolute top-1/3 right-1/4 opacity-15 transform rotate-12">{/* ...svg... */}</div>
        <div className="absolute bottom-1/4 left-1/3 opacity-10 transform -rotate-15">{/* ...svg... */}</div>
        <div className="absolute top-2/3 right-1/2 opacity-8 transform rotate-45">{/* ...svg... */}</div>
        <div className="absolute top-1/4 right-1/5 opacity-12">{/* ...svg... */}</div>
        <div className="absolute inset-0 grid grid-cols-12 opacity-5">{[...Array(13)].map((_, i) => (<div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-heraglyph-accent/20" style={{left: `${(i/12) * 100}%`}}></div>))}</div>
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-heraglyph-accent/10 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/6 opacity-8">{/* ...svg... */}</div>
        <div className="absolute top-2/5 left-1/4 opacity-10 transform rotate-30">{/* ...svg... */}</div>
        <div className="absolute bottom-10 left-1/6 opacity-10">{/* ...svg... */}</div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-heraglyph-accent/5 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-heraglyph-gradient-end/5 to-transparent opacity-30"></div>
      </div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="section-title itext-heraglyph-white">Επικοινωνήστε μαζί μας</h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mt-3 mb-3 opacity-80"></div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mx-auto mb-8 opacity-60"></div>
          <p className="section-subtitle">Έτοιμοι για βελτιστοποίηση; Επικοινωνήστε για να ανακαλύψετε πώς οι λύσεις μας μπορούν να απογειώσουν την επιχείρησή σας.</p>
        </div>
        <div className="max-w-4xl mx-auto mb-12 flex items-center justify-center">
          <div className="py-3 px-4 border-l-2 border-heraglyph-accent flex items-center gap-4">
            <div className="text-2xl text-heraglyph-accent">𓂀</div>
            <div>
              <span className="font-medium text-heraglyph-white">Κλείστε την πρώτη σας συνεδρία δωρεάν —</span>
              <span className="ml-1 text-heraglyph-gray">Κλείστε το στρατηγικό σας ραντεβού σήμερα.</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-heraglyph-white mb-2 font-medium">Όνομα</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-heraglyph-dark-gray/80 border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all" placeholder="Το όνομά σας" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-heraglyph-white mb-2 font-medium">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full p-3 bg-heraglyph-dark-gray/80 border ${emailError ? 'border-red-500' : 'border-heraglyph-gray/30'} rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all`} placeholder="το@email.com" />
                  {emailError && (<p className="mt-2 text-sm text-red-400 min-h-[20px]">{emailError}</p>)}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-heraglyph-white mb-2 font-medium">Τηλέφωνο (προαιρετικό)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full p-3 bg-heraglyph-dark-gray/80 border ${phoneError ? 'border-red-500' : 'border-heraglyph-gray/30'} rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all`} placeholder="+3069..." />
                  {phoneError && (<p className="mt-2 text-sm text-red-400 min-h-[20px]">{phoneError}</p>)}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-heraglyph-white mb-2 font-medium">Μήνυμα</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 bg-heraglyph-dark-gray/80 border border-heraglyph-gray/30 rounded-md text-heraglyph-white focus:outline-none focus:border-heraglyph-accent focus:ring-1 focus:ring-heraglyph-accent/50 transition-all" placeholder="Πείτε μας για το έργο σας..." />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black py-3 px-6 rounded-md font-semibold hover:from-heraglyph-accent-dark hover:to-heraglyph-accent transition-all duration-300 disabled:opacity-70 group">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-heraglyph-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Αποστολή...
                    </div>
                  ) : (
                    <>
                      Αποστολή Μηνύματος
                      <span className="absolute right-0 top-0 h-full w-0 bg-white/20 transform skew-x-12 group-hover:animate-shimmer"></span>
                    </>
                  )}
                </button>
              </div>
              {submitMessage && (
                <div className={`mt-4 p-4 ${isError ? 'bg-red-800/30 border border-red-600 text-red-200' : 'bg-green-800/30 border border-green-600 text-green-200'} rounded-md animate-fade-in flex items-center`}>
                  {isError ? (
                    <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          <div className="lg:pl-12">
            <div className="glass-card p-8 rounded-lg border border-heraglyph-accent/20 shadow-lg shadow-heraglyph-accent/5 h-full bg-gradient-to-br from-heraglyph-dark-gray/90 to-heraglyph-black/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">{/* ...svg... */}</div>
              <h3 className="text-2xl font-bold mb-8 relative">
                <span className="gradient-text">Στοιχεία Επικοινωνίας</span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end mt-2"></div>
              </h3>
              <div className="space-y-8">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2 mr-4 mt-1">
                    <Mail className="text-heraglyph-black" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-heraglyph-white">Email</p>
                    <a href="mailto:info@heraglyphs.com" className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors">
                      info@heraglyphs.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2 mr-4 mt-1">
                    <Phone className="text-heraglyph-black" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-heraglyph-white">Τηλέφωνο</p>
                    <a href="tel:+306948677416" className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors">
                      +30 (694) 86 77416
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-heraglyph-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-heraglyph-white">WhatsApp</p>
                    <a href="https://wa.me/201120574501" target="_blank" rel="noopener noreferrer" className="text-heraglyph-gray hover:text-heraglyph-accent transition-colors">
                      +20 112 057 4501
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-heraglyph-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-gradient-to-br from-heraglyph-accent to-heraglyph-gradient-end p-2">
                    <svg className="w-4 h-4 text-heraglyph-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-heraglyph-white gradient-text">Διαθέσιμοι 24/7</h4>
                    <p className="text-heraglyph-gray">Είμαστε εδώ για να βοηθήσουμε οποιαδήποτε στιγμή</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">{/* ...svg... */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Greek-translated Footer Section
export const GreekFooter = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Παρακαλώ εισάγετε ένα έγκυρο email');
      return;
    }
    setNewsletterError('');
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscriptionSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscriptionSuccess(false), 5000);
    }, 1500);
  };
  return (
    <footer className="bg-gradient-to-b from-heraglyph-black to-heraglyph-dark-gray py-16 relative">
      <div className="absolute bottom-0 right-0 w-96 h-80 bg-heraglyph-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-heraglyph-gradient-end/5 rounded-full filter blur-3xl"></div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <a href="#" className="group flex items-center">
                <img src="./uploads/872dcae6-04ca-4497-a5fd-4c14b83f6a66.png" alt="HERAGLYPH Logo" className="h-12 mr-3 transition-transform duration-300 group-hover:scale-105" />
                <span className="text-xl font-bold font-heading transition-colors duration-300 group-hover:text-heraglyph-accent">
                  <span className="gradient-text">HERA</span>GLYPH
                </span>
              </a>
            </div>
            <p className="text-heraglyph-gray mb-6">
              Μετατρέπουμε οράματα σε ψηφιακές πραγματικότητες με ολοκληρωμένες λύσεις branding που αναβαθμίζουν την επιχείρησή σας.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Υπηρεσίες
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <ul className="space-y-3 text-heraglyph-gray">
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default"><span className="mr-2 text-xs">→</span>AI Chatbots & Αυτοματισμοί</div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default"><span className="mr-2 text-xs">→</span>Συστήματα Cold Email AI</div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default"><span className="mr-2 text-xs">→</span>Βελτιστοποίηση Διαδικασιών με AI</div></li>
              <li><div className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center cursor-default"><span className="mr-2 text-xs">→</span>AI Ασφάλεια & Συμμόρφωση</div></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Εταιρεία
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <ul className="space-y-3 text-heraglyph-gray">
              <li><a href="#about" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center"><span className="mr-2 text-xs">→</span>Σχετικά</a></li>
              <li><a href="#testimonials" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center"><span className="mr-2 text-xs">→</span>Μαρτυρίες</a></li>
              <li><a href="#contact" className="hover:text-heraglyph-accent transition-colors duration-300 flex items-center"><span className="mr-2 text-xs">→</span>Επικοινωνία</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-heraglyph-white mb-5 relative inline-block">
              Επικοινωνία
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-heraglyph-accent to-transparent"></span>
            </h3>
            <div className="flex space-x-5 mb-6">
              {/* Social links as in original */}
            </div>
            <div className="border border-heraglyph-white/10 p-4 rounded-lg bg-heraglyph-dark-gray/40 backdrop-blur-sm">
              <h4 className="text-sm font-medium mb-2 text-heraglyph-white">Εγγραφείτε στο newsletter μας</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input type="email" value={newsletterEmail} onChange={e => { setNewsletterEmail(e.target.value); setNewsletterError(''); }} placeholder="Το email σας" className={`bg-heraglyph-black/50 text-sm border ${newsletterError ? 'border-red-500' : 'border-heraglyph-white/10'} rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-heraglyph-accent focus:border-heraglyph-accent text-heraglyph-white`} />
                  <button type="submit" disabled={isSubscribing} className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-black rounded-r-md px-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                    {isSubscribing ? 'Εγγραφή...' : 'Εγγραφή'}
                  </button>
                </div>
                {newsletterError && (<p className="text-sm text-red-400">{newsletterError}</p>)}
                {subscriptionSuccess && (<p className="text-sm text-green-400">Επιτυχής εγγραφή στο newsletter!</p>)}
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-heraglyph-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-heraglyph-gray text-sm mb-4 md:mb-0">&copy; {currentYear} <span className="gradient-text font-medium">HERAGLYPH</span>. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex space-x-6 text-sm text-heraglyph-gray">
            <button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none">Πολιτική Απορρήτου</button>
            <button onClick={() => setShowTermsOfService(true)} className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none">Όροι Χρήσης</button>
            <button onClick={() => setShowCookiePolicy(true)} className="hover:text-heraglyph-accent transition-colors cursor-pointer bg-transparent border-none">Πολιτική Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Greek Navbar Component
function smoothScrollTo(element: HTMLElement, duration = 500) {
  if (!element) return;
  
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const GreekNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-heraglyph-black/95 backdrop-blur-md py-2 shadow-lg' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/el"
              aria-label="Go to top"
              className="flex items-center"
              onClick={e => {
                e.preventDefault();
                smoothScrollTo(document.body, 500);
                setIsMenuOpen(false);
              }}
            >
              <span className="text-heraglyph-white text-xl font-bold font-heading">
                <span className="gradient-text">HERA</span>GLYPH
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#services"
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('services') as HTMLElement, 500);
                  setIsMenuOpen(false);
                }}
              >
                Υπηρεσίες
              </a>
              <a 
                href="#about"
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('about') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Σχετικά
              </a>
              <a 
                href="#team" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('team') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Ομάδα
              </a>
              <a 
                href="#faq" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('faq') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                FAQ
              </a>
              <a 
                href="#testimonials" 
                className="text-heraglyph-gray hover:text-heraglyph-white hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('testimonials') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Μαρτυρίες
              </a>
              <a
                href="/index"
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow mr-2 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                style={{ minWidth: 36, padding: 0 }}
                aria-label="Switch to English"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                <img
                  src="/uploads/united-kingdom.png"
                  alt="English"
                  className="w-6 h-6 object-cover rounded-full"
                  style={{ display: 'block' }}
                />
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white px-5 py-2.5 rounded-md font-medium text-center hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('contact') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Επικοινωνία
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="relative z-50 p-2 rounded-lg text-heraglyph-gray hover:text-heraglyph-white focus:outline-none focus:ring-2 focus:ring-heraglyph-accent transition-all duration-300"
              aria-label="Εναλλαγή μενού"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-3 rotate-45 bg-heraglyph-white' 
                      : 'top-1 bg-heraglyph-gray'
                  }`}
                />
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen 
                      ? 'opacity-0' 
                      : 'top-3 bg-heraglyph-gray'
                  }`}
                />
                <span 
                  className={`absolute left-0 block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-3 -rotate-45 bg-heraglyph-white' 
                      : 'top-5 bg-heraglyph-gray'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-heraglyph-black/95 backdrop-blur-lg transform transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full'
        }`}
        style={{ 
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          height: 'calc(100vh - 64px)'
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-full px-6" style={{ marginTop: '-15vh' }}>
          <div className="w-full max-w-sm mx-auto">
            <div className="space-y-7">
              {[
                { href: '#services', text: 'Υπηρεσίες' },
                { href: '#about', text: 'Σχετικά' },
                { href: '#team', text: 'Ομάδα' },
                { href: '#faq', text: 'FAQ' },
                { href: '#testimonials', text: 'Μαρτυρίες' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="block text-center text-2xl font-medium text-heraglyph-white/90 hover:text-heraglyph-accent hover:scale-105 transform transition-all duration-300"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollTo(document.getElementById(item.href.slice(1)) as HTMLElement);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-6">
              <a
                href="/"
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-heraglyph-accent bg-heraglyph-black/80 shadow hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-heraglyph-accent"
                aria-label="Switch to English"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                <img
                  src="/uploads/united-kingdom.png"
                  alt="English"
                  className="w-8 h-8 object-cover rounded-full"
                />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-heraglyph-accent to-heraglyph-gradient-end text-heraglyph-white text-lg rounded-md font-medium hover:shadow-lg hover:shadow-heraglyph-accent/20 hover:scale-105 transition-all duration-300"
                onClick={e => {
                  e.preventDefault();
                  smoothScrollTo(document.getElementById('contact') as HTMLElement);
                  setIsMenuOpen(false);
                }}
              >
                Επικοινωνία
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export GreekNavbar from GreekSections for use in /el page
export { GreekNavbar };
