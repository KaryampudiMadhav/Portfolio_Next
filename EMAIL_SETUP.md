# Email Configuration Setup Guide

This guide will help you set up email functionality for your portfolio contact form.

## Prerequisites

- A Gmail account (or any other email provider)
- Node.js installed
- Access to your project's environment variables

## Setup Steps

### 1. Create Environment Variables File

Create a `.env.local` file in the root of your project (copy from `.env.example`):

```bash
cp .env.example .env.local
```

### 2. Configure Gmail App Password (Recommended for Gmail)

If you're using Gmail, you need to create an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Search for "App passwords" or go to: https://myaccount.google.com/apppasswords
5. Select "Mail" and "Other (Custom name)" - name it "Portfolio Website"
6. Click **Generate**
7. Copy the 16-character password (you won't be able to see it again)

### 3. Update .env.local File

Open `.env.local` and update the email configuration:

```bash
# Email Configuration (Gmail Service)
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
EMAIL_TO=karyampudimadhav@gmail.com
```

**Important Notes:**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: The 16-character App Password you generated (NO SPACES, NOT your regular Gmail password!)
- `EMAIL_TO`: The email address where you want to receive contact form submissions

### 4. For Other Email Providers

If you're not using Gmail, update the `EMAIL_SERVICE` accordingly:

#### Outlook/Hotmail:
```bash
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Yahoo:
```bash
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

#### Custom SMTP Server:
You can also use a custom SMTP server by modifying the `pages/api/sendEmail.ts` file:

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.your-provider.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

### 5. Restart Your Development Server

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

## Testing

1. Navigate to your contact page
2. Fill out the contact form
3. Click Submit
4. Check your email inbox (specified in `EMAIL_TO`)
5. You should receive an email with the contact form details

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify that 2-Step Verification is enabled on your Google account

### "Connection timeout" error
- Check your internet connection
- Verify that your email provider allows SMTP connections
- Some networks block SMTP ports (587, 465)

### Email not received
- Check your spam/junk folder
- Verify the `EMAIL_TO` address is correct
- Check the terminal/console for error messages

### "Missing required fields" error
- Make sure all form fields are filled out
- Check that the email address is valid

## Security Notes

- **Never commit `.env.local` to version control** - it's already in `.gitignore`
- Use App Passwords instead of your actual email password
- Keep your environment variables secure
- For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)

## Production Deployment

When deploying to production (e.g., Vercel):

1. Go to your project settings
2. Navigate to Environment Variables
3. Add each variable:
   - `EMAIL_SERVICE`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_TO`
4. Redeploy your application

## Features

✅ Email validation
✅ Form validation
✅ Loading states
✅ Success/error messages
✅ Beautiful HTML email templates
✅ Reply-to functionality (emails can reply directly to the sender)
✅ Form reset after successful submission

## Support

If you encounter any issues, please check:
- Console logs in your browser
- Terminal output where your dev server is running
- Nodemailer documentation: https://nodemailer.com/

---

**Note:** Make sure your `.env.local` file is listed in `.gitignore` to keep your credentials secure!
