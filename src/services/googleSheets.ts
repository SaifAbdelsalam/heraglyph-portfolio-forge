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
    // For now, we'll skip Google Sheets and just use EmailJS
    // You can set up Google Apps Script later if needed
    console.log('Booking data (Google Sheets disabled):', bookingData);
    
    // Return true to indicate "success" so the booking flow continues
    return true;
  } catch (error) {
    console.error('Error submitting booking to Google Sheets:', error);
    return false;
  }
};

// Email notification service using EmailJS
export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  try {
    // Import EmailJS dynamically to avoid issues
    const emailjs = await import('@emailjs/browser');
    
    // EmailJS configuration
    const serviceId = 'service_866bl86';
    const templateId = 'template_fm7s90q';
    const publicKey = 'T_MaEfPL4Kf782Lc-';
    
    // Prepare template parameters to match your existing template
    const templateParams = {
      name: bookingData.customerName || 'Website Visitor',
      email: bookingData.customerEmail || 'no-reply@heraglyph.com',
      phone: bookingData.customerPhone || 'Not provided',
      subject: `Booking Confirmation - HERAGLYPH`,
      time: new Date(bookingData.timestamp).toLocaleString(),
      message: `Dear ${bookingData.customerName || 'Valued Customer'},

Thank you for scheduling a meeting with HERAGLYPH. We're excited to discuss how our AI-driven solutions can elevate your brand and accelerate your growth.

📅 Meeting Details
Date: ${bookingData.date}
Time: ${bookingData.time}
Type: ${bookingData.notes?.includes('consultation') ? 'Free Consultation' : 'Project Discussion'}
Booking ID: ${bookingData.id}
Status: ${bookingData.status}

👤 Your Information
Name: ${bookingData.customerName || 'Not provided'}
Email: ${bookingData.customerEmail || 'Not provided'}
Phone: ${bookingData.customerPhone || 'Not provided'}

�� Your Message
${bookingData.notes || 'No additional notes provided'}

What happens next?
1. We'll review your request within 24 hours
2. You'll receive a confirmation email with meeting details
3. We'll send you a calendar invite with the meeting link

Have any questions? Reach out to us at info@heraglyphs.com

— The HERAGLYPH Team`,
      // CC the email to your team
      cc_email: 'heraglyphs@gmail.com,saifrayan.3010@gmail.com,Adamshawky2323@gmail.com'
    };
    
    console.log('Sending booking email with params:', templateParams);
    
    const result = await emailjs.default.send(serviceId, templateId, templateParams, publicKey);
    console.log('Booking email sent successfully:', result.text);
    return true;
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
};





