# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically store and receive notifications for booked calls.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "HERAGLYPH Bookings" or similar
4. Note the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Set up Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the code from `google-apps-script.js`
4. Replace `'info@heraglyph.com'` with your actual email address
5. Save the project and give it a name like "HERAGLYPH Bookings"

## Step 3: Deploy the Script

1. Click "Deploy" → "New Deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the web app URL (you'll need this for the next step)

## Step 4: Update the Service Configuration

1. Open `src/services/googleSheets.ts`
2. Replace `YOUR_SCRIPT_ID` with the web app URL from Step 3
3. The URL should look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 5: Test the Integration

1. Start your development server
2. Go to the booking section
3. Fill out a test booking
4. Check your Google Sheet - you should see the booking data
5. Check your email - you should receive a notification

## Step 6: Production Deployment

When you deploy to production:
1. Make sure the Google Apps Script URL is correct
2. Test the booking flow on your live site
3. Verify that bookings are being stored in your Google Sheet
4. Check that email notifications are working

## Troubleshooting

### If bookings aren't being stored:
- Check the browser console for errors
- Verify the Google Apps Script URL is correct
- Make sure the script is deployed as a web app
- Check that the script has permission to access your Google Sheet

### If email notifications aren't working:
- Check that Gmail API is enabled in your Google Apps Script
- Verify your email address is correct in the script
- Check your spam folder for notifications

### If you get CORS errors:
- Make sure the Google Apps Script is deployed with "Anyone" access
- Check that the script URL is correct and accessible

## Data Structure

The Google Sheet will contain the following columns:
- Booking ID
- Date
- Time
- Timezone
- Status
- Customer Name
- Customer Email
- Customer Phone
- Timestamp

## Security Notes

- The Google Apps Script is set to "Anyone" access for simplicity
- For production, consider implementing authentication
- The script includes error handling and logging
- All data is stored securely in your Google account

## Alternative: Email-Only Notifications

If you prefer not to use Google Sheets, you can:
1. Set up EmailJS or another email service
2. Update the `sendBookingEmail` function in `googleSheets.ts`
3. Remove the Google Sheets integration
4. Bookings will still be stored locally and you'll receive email notifications

