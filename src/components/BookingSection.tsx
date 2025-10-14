import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Video, 
  Sparkles,
  ArrowRight,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import BookingAdmin from './BookingAdmin';
import { BookingData, fetchOccupiedSlotsFromSheet } from '../services/googleSheets';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('');
  const [isTimezoneOpen, setIsTimezoneOpen] = useState<boolean>(false);
  const [showBookingNotification, setShowBookingNotification] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [occupiedByDate, setOccupiedByDate] = useState<Record<string, string[]>>({});
  const timezoneRef = useRef<HTMLDivElement>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  // Available time slots (you can customize these)
  const availableSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // All timezones with their offsets
  const timezones = [
    { value: 'Pacific/Midway', label: 'Midway Island (SST)', offset: '-11:00' },
    { value: 'Pacific/Honolulu', label: 'Hawaii (HST)', offset: '-10:00' },
    { value: 'America/Anchorage', label: 'Alaska (AKST)', offset: '-09:00' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST)', offset: '-08:00' },
    { value: 'America/Denver', label: 'Denver (MST)', offset: '-07:00' },
    { value: 'America/Chicago', label: 'Chicago (CST)', offset: '-06:00' },
    { value: 'America/New_York', label: 'New York (EST)', offset: '-05:00' },
    { value: 'America/Caracas', label: 'Caracas (VET)', offset: '-04:00' },
    { value: 'America/Sao_Paulo', label: 'São Paulo (BRT)', offset: '-03:00' },
    { value: 'Atlantic/South_Georgia', label: 'South Georgia (GST)', offset: '-02:00' },
    { value: 'Atlantic/Azores', label: 'Azores (AZOT)', offset: '-01:00' },
    { value: 'Europe/London', label: 'London (GMT)', offset: '+00:00' },
    { value: 'Europe/Paris', label: 'Paris (CET)', offset: '+01:00' },
    { value: 'Europe/Berlin', label: 'Berlin (CET)', offset: '+01:00' },
    { value: 'Europe/Rome', label: 'Rome (CET)', offset: '+01:00' },
    { value: 'Europe/Madrid', label: 'Madrid (CET)', offset: '+01:00' },
    { value: 'Europe/Amsterdam', label: 'Amsterdam (CET)', offset: '+01:00' },
    { value: 'Europe/Brussels', label: 'Brussels (CET)', offset: '+01:00' },
    { value: 'Europe/Vienna', label: 'Vienna (CET)', offset: '+01:00' },
    { value: 'Europe/Zurich', label: 'Zurich (CET)', offset: '+01:00' },
    { value: 'Europe/Stockholm', label: 'Stockholm (CET)', offset: '+01:00' },
    { value: 'Europe/Oslo', label: 'Oslo (CET)', offset: '+01:00' },
    { value: 'Europe/Copenhagen', label: 'Copenhagen (CET)', offset: '+01:00' },
    { value: 'Europe/Warsaw', label: 'Warsaw (CET)', offset: '+01:00' },
    { value: 'Europe/Prague', label: 'Prague (CET)', offset: '+01:00' },
    { value: 'Europe/Budapest', label: 'Budapest (CET)', offset: '+01:00' },
    { value: 'Europe/Athens', label: 'Athens (EET)', offset: '+02:00' },
    { value: 'Europe/Helsinki', label: 'Helsinki (EET)', offset: '+02:00' },
    { value: 'Europe/Riga', label: 'Riga (EET)', offset: '+02:00' },
    { value: 'Europe/Tallinn', label: 'Tallinn (EET)', offset: '+02:00' },
    { value: 'Europe/Vilnius', label: 'Vilnius (EET)', offset: '+02:00' },
    { value: 'Europe/Bucharest', label: 'Bucharest (EET)', offset: '+02:00' },
    { value: 'Europe/Sofia', label: 'Sofia (EET)', offset: '+02:00' },
    { value: 'Europe/Kiev', label: 'Kiev (EET)', offset: '+02:00' },
    { value: 'Europe/Minsk', label: 'Minsk (MSK)', offset: '+03:00' },
    { value: 'Europe/Moscow', label: 'Moscow (MSK)', offset: '+03:00' },
    { value: 'Europe/Istanbul', label: 'Istanbul (TRT)', offset: '+03:00' },
    { value: 'Asia/Dubai', label: 'Dubai (GST)', offset: '+04:00' },
    { value: 'Asia/Tbilisi', label: 'Tbilisi (GET)', offset: '+04:00' },
    { value: 'Asia/Yerevan', label: 'Yerevan (AMT)', offset: '+04:00' },
    { value: 'Asia/Baku', label: 'Baku (AZT)', offset: '+04:00' },
    { value: 'Asia/Karachi', label: 'Karachi (PKT)', offset: '+05:00' },
    { value: 'Asia/Tashkent', label: 'Tashkent (UZT)', offset: '+05:00' },
    { value: 'Asia/Kolkata', label: 'Mumbai (IST)', offset: '+05:30' },
    { value: 'Asia/Kathmandu', label: 'Kathmandu (NPT)', offset: '+05:45' },
    { value: 'Asia/Dhaka', label: 'Dhaka (BST)', offset: '+06:00' },
    { value: 'Asia/Almaty', label: 'Almaty (ALMT)', offset: '+06:00' },
    { value: 'Asia/Bangkok', label: 'Bangkok (ICT)', offset: '+07:00' },
    { value: 'Asia/Jakarta', label: 'Jakarta (WIB)', offset: '+07:00' },
    { value: 'Asia/Ho_Chi_Minh', label: 'Ho Chi Minh (ICT)', offset: '+07:00' },
    { value: 'Asia/Shanghai', label: 'Shanghai (CST)', offset: '+08:00' },
    { value: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)', offset: '+08:00' },
    { value: 'Asia/Singapore', label: 'Singapore (SGT)', offset: '+08:00' },
    { value: 'Asia/Taipei', label: 'Taipei (CST)', offset: '+08:00' },
    { value: 'Asia/Manila', label: 'Manila (PHT)', offset: '+08:00' },
    { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur (MYT)', offset: '+08:00' },
    { value: 'Asia/Seoul', label: 'Seoul (KST)', offset: '+09:00' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)', offset: '+09:00' },
    { value: 'Australia/Adelaide', label: 'Adelaide (ACST)', offset: '+09:30' },
    { value: 'Australia/Darwin', label: 'Darwin (ACST)', offset: '+09:30' },
    { value: 'Australia/Sydney', label: 'Sydney (AEST)', offset: '+10:00' },
    { value: 'Australia/Melbourne', label: 'Melbourne (AEST)', offset: '+10:00' },
    { value: 'Australia/Brisbane', label: 'Brisbane (AEST)', offset: '+10:00' },
    { value: 'Australia/Perth', label: 'Perth (AWST)', offset: '+08:00' },
    { value: 'Pacific/Port_Moresby', label: 'Port Moresby (PGT)', offset: '+10:00' },
    { value: 'Pacific/Noumea', label: 'Noumea (NCT)', offset: '+11:00' },
    { value: 'Pacific/Auckland', label: 'Auckland (NZST)', offset: '+12:00' },
    { value: 'Pacific/Fiji', label: 'Fiji (FJT)', offset: '+12:00' },
    { value: 'Pacific/Tongatapu', label: 'Tongatapu (TOT)', offset: '+13:00' },
    { value: 'Africa/Cairo', label: 'Cairo (EET)', offset: '+02:00' },
    { value: 'Africa/Johannesburg', label: 'Johannesburg (SAST)', offset: '+02:00' },
    { value: 'Africa/Lagos', label: 'Lagos (WAT)', offset: '+01:00' },
    { value: 'Africa/Casablanca', label: 'Casablanca (WET)', offset: '+00:00' },
    { value: 'Africa/Nairobi', label: 'Nairobi (EAT)', offset: '+03:00' },
    { value: 'Africa/Tunis', label: 'Tunis (CET)', offset: '+01:00' },
    { value: 'Africa/Algiers', label: 'Algiers (CET)', offset: '+01:00' },
    { value: 'Africa/Tripoli', label: 'Tripoli (EET)', offset: '+02:00' },
    { value: 'America/Toronto', label: 'Toronto (EST)', offset: '-05:00' },
    { value: 'America/Vancouver', label: 'Vancouver (PST)', offset: '-08:00' },
    { value: 'America/Mexico_City', label: 'Mexico City (CST)', offset: '-06:00' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires (ART)', offset: '-03:00' },
    { value: 'America/Santiago', label: 'Santiago (CLT)', offset: '-03:00' },
    { value: 'America/Lima', label: 'Lima (PET)', offset: '-05:00' },
    { value: 'America/Bogota', label: 'Bogota (COT)', offset: '-05:00' },
    { value: 'America/Caracas', label: 'Caracas (VET)', offset: '-04:00' },
    { value: 'America/Havana', label: 'Havana (CST)', offset: '-05:00' },
    { value: 'America/Santo_Domingo', label: 'Santo Domingo (AST)', offset: '-04:00' },
    { value: 'America/Puerto_Rico', label: 'Puerto Rico (AST)', offset: '-04:00' },
    { value: 'America/Guatemala', label: 'Guatemala (CST)', offset: '-06:00' },
    { value: 'America/Honduras', label: 'Honduras (CST)', offset: '-06:00' },
    { value: 'America/El_Salvador', label: 'El Salvador (CST)', offset: '-06:00' },
    { value: 'America/Nicaragua', label: 'Nicaragua (CST)', offset: '-06:00' },
    { value: 'America/Costa_Rica', label: 'Costa Rica (CST)', offset: '-06:00' },
    { value: 'America/Panama', label: 'Panama (EST)', offset: '-05:00' },
    { value: 'America/Jamaica', label: 'Jamaica (EST)', offset: '-05:00' },
    { value: 'America/Cayman', label: 'Cayman Islands (EST)', offset: '-05:00' },
    { value: 'America/Nassau', label: 'Nassau (EST)', offset: '-05:00' },
    { value: 'America/Bermuda', label: 'Bermuda (AST)', offset: '-04:00' },
    { value: 'America/St_Johns', label: 'St. Johns (NST)', offset: '-03:30' },
    { value: 'America/Halifax', label: 'Halifax (AST)', offset: '-04:00' },
    { value: 'America/Winnipeg', label: 'Winnipeg (CST)', offset: '-06:00' },
    { value: 'America/Edmonton', label: 'Edmonton (MST)', offset: '-07:00' },
    { value: 'America/Whitehorse', label: 'Whitehorse (MST)', offset: '-07:00' },
    { value: 'America/Yellowknife', label: 'Yellowknife (MST)', offset: '-07:00' },
    { value: 'America/Inuvik', label: 'Inuvik (MST)', offset: '-07:00' },
    { value: 'America/Dawson', label: 'Dawson (MST)', offset: '-07:00' },
    { value: 'America/Iqaluit', label: 'Iqaluit (EST)', offset: '-05:00' },
    { value: 'America/Goose_Bay', label: 'Goose Bay (AST)', offset: '-04:00' },
    { value: 'America/Moncton', label: 'Moncton (AST)', offset: '-04:00' },
    { value: 'America/Thunder_Bay', label: 'Thunder Bay (EST)', offset: '-05:00' },
    { value: 'America/Nipigon', label: 'Nipigon (EST)', offset: '-05:00' },
    { value: 'America/Rainy_River', label: 'Rainy River (CST)', offset: '-06:00' },
    { value: 'America/Resolute', label: 'Resolute (CST)', offset: '-06:00' },
    { value: 'America/Rankin_Inlet', label: 'Rankin Inlet (CST)', offset: '-06:00' },
    { value: 'America/Cambridge_Bay', label: 'Cambridge Bay (MST)', offset: '-07:00' },
    { value: 'America/Creston', label: 'Creston (MST)', offset: '-07:00' },
    { value: 'America/Dawson_Creek', label: 'Dawson Creek (MST)', offset: '-07:00' },
    { value: 'America/Fort_Nelson', label: 'Fort Nelson (MST)', offset: '-07:00' },
    { value: 'America/Vancouver', label: 'Vancouver (PST)', offset: '-08:00' },
    { value: 'America/Whitehorse', label: 'Whitehorse (PST)', offset: '-08:00' },
    { value: 'America/Dawson', label: 'Dawson (PST)', offset: '-08:00' },
    { value: 'America/Sitka', label: 'Sitka (AKST)', offset: '-09:00' },
    { value: 'America/Juneau', label: 'Juneau (AKST)', offset: '-09:00' },
    { value: 'America/Yakutat', label: 'Yakutat (AKST)', offset: '-09:00' },
    { value: 'America/Nome', label: 'Nome (AKST)', offset: '-09:00' },
    { value: 'America/Adak', label: 'Adak (HST)', offset: '-10:00' },
    { value: 'America/Metlakatla', label: 'Metlakatla (AKST)', offset: '-09:00' },
    { value: 'Pacific/Honolulu', label: 'Honolulu (HST)', offset: '-10:00' },
    { value: 'Pacific/Midway', label: 'Midway Island (SST)', offset: '-11:00' },
    { value: 'Pacific/Wake', label: 'Wake Island (WAKT)', offset: '+12:00' },
    { value: 'Pacific/Kwajalein', label: 'Kwajalein (MHT)', offset: '+12:00' },
    { value: 'Pacific/Chatham', label: 'Chatham Islands (CHAST)', offset: '+12:45' },
    { value: 'Pacific/Apia', label: 'Apia (WST)', offset: '+13:00' },
    { value: 'Pacific/Kiritimati', label: 'Kiritimati (LINT)', offset: '+14:00' }
  ];

  // Generate calendar days for current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const handleDateSelect = (day: number) => {
    const selectedDateObj = new Date(currentYear, currentMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
    
    // Don't allow selection of past dates
    if (selectedDateObj < today) {
      return;
    }
    
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateString);
    setSelectedTime(''); // Reset time when date changes
  };

  // Load occupied slots and detect user timezone once on mount
  useEffect(() => {
    (async () => {
      const occupied = await fetchOccupiedSlotsFromSheet();
      console.log('[Booking] Loaded occupied slots:', occupied);
      setOccupiedByDate(occupied);
    })();

    // Auto-detect user's timezone
    const detectUserTimezone = () => {
      try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('[Booking] Detected user timezone:', userTimezone);
        
        // Find matching timezone in our list
        const foundTimezone = timezones.find(tz => tz.value === userTimezone);
        if (foundTimezone) {
          setSelectedTimezone(userTimezone);
          console.log('[Booking] Set timezone to:', foundTimezone.label);
        } else {
          // Fallback to a common timezone if not found
          setSelectedTimezone('Africa/Cairo');
          console.log('[Booking] Timezone not found, using fallback: Africa/Cairo');
        }
      } catch (error) {
        console.error('[Booking] Error detecting timezone:', error);
        setSelectedTimezone('Africa/Cairo');
      }
    };

    detectUserTimezone();
  }, []);

  // Get current timezone info
  const getCurrentTimezone = () => {
    return timezones.find(tz => tz.value === selectedTimezone) || timezones[0];
  };

  // Format time with timezone
  const formatTimeWithTimezone = (time: string) => {
    const timezone = getCurrentTimezone();
    return `${time} ${timezone.label}`;
  };

  const handleTimezoneSelect = (timezone: string) => {
    setSelectedTimezone(timezone);
    setIsTimezoneOpen(false);
  };

  const handleNameChange = (value: string) => {
    // Disallow numbers; allow letters, spaces, apostrophes, and hyphens
    if (/\d/.test(value)) {
      setNameError('Please provide a normal name (letters only).');
      return; // do not update state if contains numbers
    }
    setNameError('');
    setCustomerName(value);
  };

  const handleEmailChange = (value: string) => {
    setCustomerEmail(value);
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (value: string) => {
    setCustomerPhone(value);
    // Allow digits, spaces, hyphens, parentheses, and plus sign
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    const digitsOnlyLength = value.replace(/\D/g, '').length;
    if (!value) {
      setPhoneError('Phone number is required.');
    } else if (!phoneRegex.test(value)) {
      setPhoneError('Please enter a valid phone number.');
    } else if (digitsOnlyLength < 10) {
      setPhoneError('Phone number must be at least 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  // Build a Google Calendar link for the booked slot
  const buildGoogleCalendarLink = (booking: BookingData) => {
    try {
      const startDate = new Date(`${booking.date} ${booking.time}`);
      const endDate = new Date(startDate.getTime() + 40 * 60 * 1000);
      const pad = (n: number) => String(n).padStart(2, '0');
      const fmt = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
      const text = encodeURIComponent('HERAGLYPH Free Discovery Call');
      const details = encodeURIComponent(`Call with HERAGLYPH. Timezone: ${booking.timezone}. Booking ID: ${booking.id}`);
      const location = encodeURIComponent('Online Meeting');
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}&dates=${fmt(startDate)}/${fmt(endDate)}`;
    } catch (e) {
      return 'https://calendar.google.com/calendar/';
    }
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(''); // Clear selection when changing months
    setSelectedTime('');
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(''); // Clear selection when changing months
    setSelectedTime('');
  };

  const handleBooking = async () => {
    if (selectedDate && selectedTime && customerName && customerEmail && customerPhone && !phoneError) {
      setIsSubmitting(true);
      
      const timezone = getCurrentTimezone();
      const booking: BookingData = {
        id: `HERAGLYPH-${Date.now()}`,
        date: selectedDate,
        time: selectedTime,
        timezone: timezone.label,
        timestamp: new Date().toISOString(),
        status: 'pending',
        customerName,
        customerEmail,
        customerPhone: customerPhone,
        notes: `Booked via website - Timezone: ${timezone.label}`
      };
      
      try {
        // Store booking in localStorage
        const existingBookings = JSON.parse(localStorage.getItem('heraglyph_bookings') || '[]');
        existingBookings.push(booking);
        localStorage.setItem('heraglyph_bookings', JSON.stringify(existingBookings));

        // Send booking data to n8n webhook
        const webhookUrl = 'https://primary-production-e937.up.railway.app/webhook/7f4ef36d-02e7-4ef9-8863-02aa220c1cbb';
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'saifkeyauthentication': 'YWRtaW46c2VjcmV0'
          },
          body: JSON.stringify({
            source: 'booking',
            payload: {
              ...booking
            }
          })
        });

        if (response.ok) {
          // Success: store booking details and show confirmation (disable popup)git 
          setBookingDetails(booking);
          setShowConfirmation(true);

          // Reset form
          setSelectedDate('');
          setSelectedTime('');
          setCustomerName('');
          setCustomerEmail('');
          setCustomerPhone('');

          // (Popup disabled) No auto-hide timeout needed
        } else {
          const errorText = await response.text();
          throw new Error(errorText || 'Webhook responded with an error');
        }
      } catch (error) {
        console.error('Error processing booking:', error);
        alert('There was an error processing your booking. Please try again or contact us directly.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert('Please fill in all required fields (Name, Email, and Phone are required).');
    }
  };

  // Close timezone dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timezoneRef.current && !timezoneRef.current.contains(event.target as Node)) {
        setIsTimezoneOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Admin panel access (Ctrl + Shift + A)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        setShowAdminPanel(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="booking-section" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heraglyph-accent/5 via-transparent to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,215,0,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-heraglyph-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heraglyph-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">

        {/* Call to Action Text */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Book A{' '}
            <span className="bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light bg-clip-text text-transparent">
              Free Call
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Every business is unique, so is our pricing. Schedule a{' '}
            <span className="text-heraglyph-accent font-semibold">free discovery call</span>, 
            and we'll design a tailored solution that delivers maximum impact at the most competitive value.
          </motion.p>
        </motion.div>

        {/* Booking Card */}
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-visible"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Call Details */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                {/* Logo */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-heraglyph-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-white text-xl font-bold">HERAGLYPH</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Free Discovery Call
                </h3>

                <div className="flex items-center gap-2 text-gray-300 mb-6">
                  <Clock className="w-5 h-5" />
                  <span>40 min</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Web conferencing details provided upon confirmation.
                </p>

                <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This call is designed for business owners and brands looking to transform their operations. 
                    We'll analyze your current workflow, identify automation opportunities, and show you how 
                    our AI systems can boost sales, improve customer experience, and save manual work hours 
                    without extra costs.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Available in multiple languages</span>
                </div>
              </div>
            </div>

            {/* Right Side - Calendar */}
            <div className="p-8 lg:p-12 relative">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">
                {showConfirmation ? 'Meeting Booked' : 'Select a Date & Time'}
              </h4>

              {showConfirmation && bookingDetails ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-700 font-semibold">Your meeting is booked!</p>
                      <p className="text-green-700/80 text-sm">We have sent a confirmation and will be in touch.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <p className="text-gray-500 text-xs mb-1">Date</p>
                      <p className="text-gray-900 font-semibold">{bookingDetails.date}</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <p className="text-gray-500 text-xs mb-1">Time</p>
                      <p className="text-gray-900 font-semibold">{bookingDetails.time}</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <p className="text-gray-500 text-xs mb-1">Timezone</p>
                      <p className="text-gray-900 font-semibold">{bookingDetails.timezone}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildGoogleCalendarLink(bookingDetails)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-3 rounded-xl font-semibold bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-black hover:shadow-lg hover:shadow-heraglyph-accent/25 transition-all"
                    >
                      Add to Google Calendar
                    </a>
                    <button
                      onClick={() => setShowConfirmation(false)}
                      className="flex-1 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* Calendar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={goToPreviousMonth}
                        className="p-2 rounded-lg border border-gray-300 hover:border-heraglyph-accent/50 hover:bg-heraglyph-accent/5 transition-colors duration-200"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      
                      <h5 className="text-lg font-semibold text-gray-900">
                        {monthNames[currentMonth]} {currentYear}
                      </h5>
                      
                      <button
                        onClick={goToNextMonth}
                        className="p-2 rounded-lg border border-gray-300 hover:border-heraglyph-accent/50 hover:bg-heraglyph-accent/5 transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {dayNames.map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, index) => {
                        const isSelected = selectedDate && day && selectedDate === `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const today = new Date();
                        const isToday = day && 
                          currentYear === today.getFullYear() && 
                          currentMonth === today.getMonth() && 
                          day === today.getDate();
                        const isPastDate = day && new Date(currentYear, currentMonth, day) < new Date(new Date().setHours(0, 0, 0, 0));
                        
                        return (
                          <button
                            key={index}
                            onClick={() => day && handleDateSelect(day)}
                            disabled={!day || isPastDate}
                            className={`
                              aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 relative
                              ${!day 
                                ? 'cursor-default' 
                                : isPastDate
                                  ? 'text-gray-400 cursor-not-allowed opacity-50'
                                  : isSelected
                                    ? 'bg-heraglyph-accent text-black font-bold'
                                    : isToday
                                      ? 'bg-blue-100 text-blue-700 font-bold border-2 border-blue-300 hover:bg-blue-200'
                                      : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                              }
                            `}
                          >
                            {day}
                            {isToday && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h6 className="text-lg font-semibold text-gray-900 mb-4">
                        Available Times
                      </h6>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {availableSlots.map((time) => {
                          const times = occupiedByDate[selectedDate] || [];
                          // Normalize time formats for comparison (e.g., "09:00 AM" vs "9:00 AM")
                          const normalizedTime = time.replace(/^0/, ''); // Remove leading zero
                          const normalizedOccupiedTimes = times.map(t => t.replace(/^0/, ''));
                          const isOccupied = normalizedOccupiedTimes.includes(normalizedTime);
                          
                          return (
                            <button
                              key={time}
                              onClick={() => !isOccupied && setSelectedTime(time)}
                              disabled={isOccupied}
                              className={`
                                p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium relative overflow-hidden
                                ${isOccupied
                                  ? 'border-red-200 bg-red-50 text-red-400 cursor-not-allowed shadow-inner'
                                  : selectedTime === time
                                    ? 'border-heraglyph-accent bg-heraglyph-accent/10 text-heraglyph-accent shadow-md'
                                    : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'
                                }
                              `}
                            >
                              <span className={`relative z-10 ${isOccupied ? 'opacity-70' : ''}`}>
                                {time}
                              </span>
                              {isOccupied && (
                                <>
                                  {/* Diagonal line overlay */}
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-0.5 bg-red-300 transform rotate-12"></div>
                                  </div>
                                  {/* Subtle pattern overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-transparent"></div>
                                  {/* Crossed out indicator */}
                                  <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-200 flex items-center justify-center">
                                    <div className="w-2 h-0.5 bg-red-400 transform rotate-45"></div>
                                  </div>
                                </>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Time Zone Selector */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Your Timezone
                    </label>
                    <div className="relative" ref={timezoneRef}>
                      <button
                        onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                        className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white hover:border-heraglyph-accent/50 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">{getCurrentTimezone().label}</span>
                        </div>
                        <ChevronDown 
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            isTimezoneOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {isTimezoneOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] max-h-80 overflow-y-auto"
                        >
                          {timezones.map((timezone) => (
                            <button
                              key={timezone.value}
                              onClick={() => handleTimezoneSelect(timezone.value)}
                              className={`w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors duration-200 ${
                                selectedTimezone === timezone.value ? 'bg-heraglyph-accent/10' : ''
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-700">{timezone.label}</span>
                              </div>
                              <span className="text-xs text-gray-500">{timezone.offset}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Customer Information */}
                  {selectedDate && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-8"
                    >
                      <h6 className="text-lg font-semibold text-gray-900 mb-4">
                        Your Information
                      </h6>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) => handleNameChange(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-heraglyph-accent/50 focus:ring-2 focus:ring-heraglyph-accent/20 bg-white text-gray-900 placeholder-gray-400"
                            required
                            autoComplete="name"
                            inputMode="text"
                          />
                          {nameError && (
                            <p className="mt-2 text-sm text-red-600">{nameError}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-heraglyph-accent/50 focus:ring-2 focus:ring-heraglyph-accent/20 bg-white text-gray-900 placeholder-gray-400"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                      {emailError && (
                        <p className="mt-2 text-sm text-red-600">{emailError}</p>
                      )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-heraglyph-accent/50 focus:ring-2 focus:ring-heraglyph-accent/20 bg-white text-gray-900 placeholder-gray-400"
                        autoComplete="tel"
                            required
                        inputMode="tel"
                      />
                      {phoneError && (
                        <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                      )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Book Button */}
              <motion.button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !customerName || !!nameError || !customerEmail || !!emailError || !customerPhone || !!phoneError || isSubmitting}
                className={`
                  w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                  ${selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && customerPhone && !phoneError && !isSubmitting
                    ? 'bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-black hover:shadow-lg hover:shadow-heraglyph-accent/25'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
                whileHover={selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && customerPhone && !phoneError && !isSubmitting ? { scale: 1.02 } : {}}
                whileTap={selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && customerPhone && !phoneError && !isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Discovery Call
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Booking Notification */}
        {showBookingNotification && bookingDetails && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed top-4 right-4 z-50 max-w-sm"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-heraglyph-accent/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">New Booking!</h4>
                  <p className="text-sm text-gray-600">Someone just booked a call</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{bookingDetails.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium">{bookingDetails.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    Pending
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Booking ID: #{bookingDetails.id}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(bookingDetails.timestamp).toLocaleString()}
                </p>
              </div>
              
              <button
                onClick={() => setShowBookingNotification(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}

        {/* Admin Panel Modal */}
        {showAdminPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">Booking Admin Panel</h2>
                  <button
                    onClick={() => setShowAdminPanel(false)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="max-h-[80vh] overflow-y-auto">
                  <BookingAdmin />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
