// Google Apps Script code to add to your Google Sheet
// Go to script.google.com, create a new project, and paste this code

function doPost(e) {
  try {
    // Get the data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add headers if they don't exist
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Booking ID',
        'Date',
        'Time',
        'Timezone',
        'Status',
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Timestamp'
      ]]);
    }
    
    // Add the booking data to the sheet
    const newRow = [
      data.id,
      data.date,
      data.time,
      data.timezone,
      data.status,
      data.customerName || '',
      data.customerEmail || '',
      data.customerPhone || '',
      new Date(data.timestamp).toLocaleString()
    ];
    
    sheet.appendRow(newRow);
    
    // Send email notification
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing booking:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(bookingData) {
  try {
    const subject = `New Booking - ${bookingData.date} at ${bookingData.time}`;
    const body = `
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
    `;
    
    // Replace with your email address
    GmailApp.sendEmail('info@heraglyph.com', subject, body);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Test function to verify the setup
function testFunction() {
  const testData = {
    id: 'test-' + Date.now(),
    date: '2024-01-15',
    time: '10:00 AM',
    timezone: 'Cairo (EET)',
    status: 'pending',
    customerName: 'Test Customer',
    customerEmail: 'test@example.com',
    customerPhone: '+20123456789',
    timestamp: new Date().toISOString()
  };
  
  doPost({postData: {contents: JSON.stringify(testData)}});
}








