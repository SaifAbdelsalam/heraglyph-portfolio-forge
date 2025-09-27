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
import { submitBookingToGoogleSheets, sendBookingEmail, BookingData } from '../services/googleSheets';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('Africa/Cairo');
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
  const timezoneRef = useRef<HTMLDivElement>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  // Available time slots (you can customize these)
  const availableSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Popular timezones
  const timezones = [
    { value: 'Europe/London', label: 'London (GMT)', offset: '+00:00' },
    { value: 'Europe/Paris', label: 'Paris (CET)', offset: '+01:00' },
    { value: 'Europe/Berlin', label: 'Berlin (CET)', offset: '+01:00' },
    { value: 'Europe/Rome', label: 'Rome (CET)', offset: '+01:00' },
    { value: 'Europe/Madrid', label: 'Madrid (CET)', offset: '+01:00' },
    { value: 'Europe/Amsterdam', label: 'Amsterdam (CET)', offset: '+01:00' },
    { value: 'Europe/Athens', label: 'Athens (EET)', offset: '+02:00' },
    { value: 'America/New_York', label: 'New York (EST)', offset: '-05:00' },
    { value: 'America/Chicago', label: 'Chicago (CST)', offset: '-06:00' },
    { value: 'America/Denver', label: 'Denver (MST)', offset: '-07:00' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST)', offset: '-08:00' },
    { value: 'America/Toronto', label: 'Toronto (EST)', offset: '-05:00' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)', offset: '+09:00' },
    { value: 'Asia/Shanghai', label: 'Shanghai (CST)', offset: '+08:00' },
    { value: 'Asia/Dubai', label: 'Dubai (GST)', offset: '+04:00' },
    { value: 'Asia/Kolkata', label: 'Mumbai (IST)', offset: '+05:30' },
    { value: 'Asia/Singapore', label: 'Singapore (SGT)', offset: '+08:00' },
    { value: 'Australia/Sydney', label: 'Sydney (AEST)', offset: '+10:00' },
    { value: 'Australia/Melbourne', label: 'Melbourne (AEST)', offset: '+10:00' },
    { value: 'Africa/Cairo', label: 'Cairo (EET)', offset: '+02:00' },
    { value: 'Africa/Johannesburg', label: 'Johannesburg (SAST)', offset: '+02:00' },
    { value: 'America/Sao_Paulo', label: 'São Paulo (BRT)', offset: '-03:00' },
    { value: 'America/Mexico_City', label: 'Mexico City (CST)', offset: '-06:00' },
    { value: 'Pacific/Auckland', label: 'Auckland (NZST)', offset: '+12:00' }
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
    if (value && !phoneRegex.test(value)) {
      setPhoneError('Please enter a valid phone number.');
    } else if (value && value.replace(/\D/g, '').length < 7) {
      setPhoneError('Phone number is too short.');
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
    if (selectedDate && selectedTime && customerName && customerEmail) {
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
        customerPhone: customerPhone || '',
        notes: `Booked via website - Timezone: ${timezone.label}`
      };
      
      try {
        // Store booking in localStorage
        const existingBookings = JSON.parse(localStorage.getItem('heraglyph_bookings') || '[]');
        existingBookings.push(booking);
        localStorage.setItem('heraglyph_bookings', JSON.stringify(existingBookings));
        
        // Submit to Google Sheets
        const sheetsSuccess = await submitBookingToGoogleSheets(booking);
        
        // Send email notification
        const emailSuccess = await sendBookingEmail(booking);
        
        if (sheetsSuccess || emailSuccess) {
          // Show success notification
          setBookingDetails(booking);
          setShowBookingNotification(true);
          setShowConfirmation(true);
          
          // Reset form
          setSelectedDate('');
          setSelectedTime('');
          setCustomerName('');
          setCustomerEmail('');
          setCustomerPhone('');
          
          // Auto-hide notification after 5 seconds
          setTimeout(() => {
            setShowBookingNotification(false);
            setBookingDetails(null);
          }, 5000);
        } else {
          alert('Booking saved locally, but failed to send notification. Please contact us directly.');
        }
      } catch (error) {
        console.error('Error processing booking:', error);
        alert('There was an error processing your booking. Please try again or contact us directly.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert('Please fill in all required fields (Name and Email are required).');
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
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
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
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
            <div className="p-8 lg:p-12">
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
                        {availableSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                              ${selectedTime === time
                                ? 'border-heraglyph-accent bg-heraglyph-accent/10 text-heraglyph-accent'
                                : 'border-gray-200 text-gray-700 hover:border-gray-300'
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
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
                          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
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
                            Phone Number (Optional)
                          </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-heraglyph-accent/50 focus:ring-2 focus:ring-heraglyph-accent/20 bg-white text-gray-900 placeholder-gray-400"
                        autoComplete="tel"
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
                disabled={!selectedDate || !selectedTime || !customerName || !!nameError || !customerEmail || !!emailError || !!phoneError || isSubmitting}
                className={`
                  w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                  ${selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && !phoneError && !isSubmitting
                    ? 'bg-gradient-to-r from-heraglyph-accent to-heraglyph-accent-light text-black hover:shadow-lg hover:shadow-heraglyph-accent/25'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
                whileHover={selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && !phoneError && !isSubmitting ? { scale: 1.02 } : {}}
                whileTap={selectedDate && selectedTime && customerName && !nameError && customerEmail && !emailError && !phoneError && !isSubmitting ? { scale: 0.98 } : {}}
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
