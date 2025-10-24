# Email Configuration Troubleshooting Guide

## Error: "Username and Password not accepted"

This error occurs when Gmail rejects your credentials. Here are the solutions:

---

## ✅ Solution 1: Use Gmail App Password (RECOMMENDED)

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google," click on **2-Step Verification**
4. Follow the prompts to enable it (you'll need your phone)

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
   - OR search for "App passwords" in your Google Account settings
2. You might need to sign in again
3. Under "Select app," choose **Mail**
4. Under "Select device," choose **Other (Custom name)**
5. Type "Portfolio Website" or any name you prefer
6. Click **Generate**
7. Google will show you a 16-character password like: `abcd efgh ijkl mnop`
8. **IMPORTANT**: Copy this password immediately (you won't see it again!)

### Step 3: Update Your .env.local File
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
EMAIL_TO=karyampudimadhav@gmail.com
```

**Note**: 
- Remove all spaces from the app password (use `abcdefghijklmnop`, not `abcd efgh ijkl mnop`)
- Do NOT use your regular Gmail password
- The app password is 16 characters long

---

## ✅ Solution 2: Use a Different Email Service

If you can't use App Passwords, try these alternatives:

### Option A: Outlook/Hotmail (Easier Setup)

**Update your .env.local:**
```bash
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-outlook-password
EMAIL_TO=karyampudimadhav@gmail.com
```

**Note**: You can use your regular Outlook password (no app password needed)

### Option B: SendGrid (Professional - Free Tier Available)

1. Sign up at: https://sendgrid.com/ (Free: 100 emails/day)
2. Go to Settings → API Keys
3. Create an API Key
4. Update your .env.local:

```bash
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_TO=karyampudimadhav@gmail.com
```

### Option C: Mailgun (Professional - Free Tier Available)

1. Sign up at: https://www.mailgun.com/ (Free: 5,000 emails/month)
2. Go to Sending → Domain settings → SMTP credentials
3. Update your .env.local:

```bash
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-mailgun-smtp-username
EMAIL_PASSWORD=your-mailgun-smtp-password
EMAIL_TO=karyampudimadhav@gmail.com
```

---

## 🔍 Common Mistakes & Fixes

### ❌ Mistake 1: Using Regular Gmail Password
**Problem**: Using your normal Gmail login password
**Fix**: You MUST use an App Password (16 characters)

### ❌ Mistake 2: Spaces in App Password
**Problem**: App password looks like `abcd efgh ijkl mnop`
**Fix**: Remove spaces: `abcdefghijklmnop`

### ❌ Mistake 3: 2-Step Verification Not Enabled
**Problem**: Can't generate App Password
**Fix**: Enable 2-Step Verification first

### ❌ Mistake 4: Wrong Environment Variables
**Problem**: Changes not taking effect
**Fix**: 
- Restart your dev server: `npm run dev`
- Make sure file is named `.env.local` (not `.env.local.txt`)
- Check that `.env.local` is in the root directory

### ❌ Mistake 5: Email Variables Not Set
**Problem**: `EMAIL_USER` or `EMAIL_PASSWORD` is undefined
**Fix**: 
```bash
# Check your .env.local file exists
ls -la .env.local

# Verify it has correct values (no quotes needed)
EMAIL_USER=myemail@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

---

## 🧪 Test Your Configuration

### Method 1: Check Environment Variables
Create a test file `pages/api/test-email-config.ts`:

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER ? '✓ Set' : '✗ Missing',
    password: process.env.EMAIL_PASSWORD ? '✓ Set' : '✗ Missing',
    to: process.env.EMAIL_TO,
  });
}
```

Then visit: http://localhost:3000/api/test-email-config

### Method 2: Send Test Email
Try sending a test email from your contact form after making changes.

---

## 📝 Quick Checklist

- [ ] 2-Step Verification enabled on Google Account
- [ ] App Password generated (16 characters)
- [ ] `.env.local` file created (not `.env.local.txt`)
- [ ] All spaces removed from app password
- [ ] Development server restarted after changes
- [ ] Email variables set correctly (no quotes, no spaces)
- [ ] Using correct email host and port
- [ ] Firewall/antivirus not blocking SMTP ports

---

## 🆘 Still Not Working?

### Option 1: Use mailto (Temporary Solution)
If you need a quick temporary solution, revert to the simple mailto approach:

In `components/ContactMe.tsx`, change the `onSubmit` function:
```typescript
const onSubmit: SubmitHandler<Inputs> = (formData) => {
  window.location.href = `mailto:karyampudimadhav@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
};
```

### Option 2: Use Formspree (No Backend Required)
1. Sign up at: https://formspree.io/ (Free tier available)
2. Get your form endpoint
3. Update your form to post to Formspree

### Option 3: Contact Form Service
Use services like:
- **Formspree**: https://formspree.io/
- **Getform**: https://getform.io/
- **Form Submit**: https://formsubmit.co/

---

## 📧 Need More Help?

1. Check the terminal/console for exact error messages
2. Verify your Google Account security settings
3. Try a different email service (Outlook is easier)
4. Consider using a professional email service (SendGrid/Mailgun)

---

**Remember**: Gmail's security is very strict. Using an App Password is not optional—it's required!
