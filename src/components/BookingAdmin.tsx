import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Globe, 
  CheckCircle, 
  XCircle,
  Trash2,
  Eye,
  Download
} from 'lucide-react';

interface Booking {
  id: number;
  date: string;
  time: string;
  timezone: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const BookingAdmin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('heraglyph_bookings') || '[]');
    setBookings(storedBookings);
  };

  const updateBookingStatus = (id: number, status: 'pending' | 'confirmed' | 'cancelled') => {
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('heraglyph_bookings', JSON.stringify(updatedBookings));
  };

  const deleteBooking = (id: number) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('heraglyph_bookings', JSON.stringify(updatedBookings));
  };

  const exportBookings = () => {
    const csvContent = [
      ['ID', 'Date', 'Time', 'Timezone', 'Status', 'Booked At'].join(','),
      ...bookings.map(booking => [
        booking.id,
        booking.date,
        booking.time,
        booking.timezone,
        booking.status,
        new Date(booking.timestamp).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `heraglyph-bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' || booking.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            HERAGLYPH{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Bookings
            </span>
          </h1>
          <p className="text-gray-300">Manage and view all booking requests</p>
        </motion.div>

        {/* Stats and Controls */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">{bookings.length}</div>
            <div className="text-gray-300 text-sm">Total Bookings</div>
          </div>
          <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {bookings.filter(b => b.status === 'pending').length}
            </div>
            <div className="text-gray-300 text-sm">Pending</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {bookings.filter(b => b.status === 'confirmed').length}
            </div>
            <div className="text-gray-300 text-sm">Confirmed</div>
          </div>
          <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-400">
              {bookings.filter(b => b.status === 'cancelled').length}
            </div>
            <div className="text-gray-300 text-sm">Cancelled</div>
          </div>
        </motion.div>

        {/* Filters and Export */}
        <motion.div
          className="flex flex-wrap gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex gap-2">
            {['all', 'pending', 'confirmed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          
          <button
            onClick={exportBookings}
            className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </motion.div>

        {/* Bookings List */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No bookings found</h3>
              <p className="text-gray-400">No bookings match your current filter.</p>
            </div>
          ) : (
            filteredBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">Date:</span>
                        <span className="text-white font-medium">{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">Time:</span>
                        <span className="text-white font-medium">{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">Timezone:</span>
                        <span className="text-white font-medium">{booking.timezone}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>ID: #{booking.id}</span>
                      <span>•</span>
                      <span>Booked: {new Date(booking.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                    
                    <div className="flex gap-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                            className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                            title="Confirm"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                            title="Cancel"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingAdmin;

