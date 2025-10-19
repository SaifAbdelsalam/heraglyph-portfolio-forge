// Google Sheets integration for storing booking data
// You'll need to set up a Google Apps Script web app to handle the requests

export interface BookingData {
  id: string;
  date: string;
  time: string;
  timezone: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  notes?: string;
}

export const submitBookingToGoogleSheets = async (bookingData: BookingData): Promise<boolean> => {
  try {
    // Replace with your Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });

    if (response.ok) {
      console.log('Booking submitted to Google Sheets successfully');
      return true;
    } else {
      console.error('Failed to submit booking to Google Sheets');
      return false;
    }
  } catch (error) {
    console.error('Error submitting booking to Google Sheets:', error);
    return false;
  }
};

// Alternative: Email notification service
export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  try {
    // Using EmailJS for email notifications
    const emailData = {
      to_email: 'info@heraglyph.com', // Your email
      subject: `New Booking - ${bookingData.date} at ${bookingData.time}`,
      message: `
        New booking received:
        
        Date: ${bookingData.date}
        Time: ${bookingData.time}
        Timezone: ${bookingData.timezone}
        Booking ID: ${bookingData.id}
        Status: ${bookingData.status}
        Booked at: ${new Date(bookingData.timestamp).toLocaleString()}
        
        Customer Details:
        Name: ${bookingData.customerName || 'Not provided'}
        Email: ${bookingData.customerEmail || 'Not provided'}
        Phone: ${bookingData.customerPhone || 'Not provided'}
        
        Notes: ${bookingData.notes || 'None'}
      `
    };

    // You can integrate with EmailJS or any email service
    console.log('Email notification data:', emailData);
    return true;
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
};








