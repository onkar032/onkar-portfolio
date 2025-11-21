# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your Google account
   - **Outlook**: Select Outlook/Office 365
   - **Other**: Select your provider
4. Click **"Create Service"**
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Body:**
```
You have a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key
1. Click **"Account"** in the sidebar
2. Go to **"API Keys"** tab
3. **Copy your Public Key** (looks like a long string)

### Step 5: Add to Your Project

#### Option A: Using Environment Variables (Recommended for Production)

1. Create a file named `.env.local` in your project root:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. **For Vercel Deployment:**
   - Go to your Vercel project dashboard
   - Click **Settings** → **Environment Variables**
   - Add all three variables above
   - Redeploy your site

#### Option B: Direct Configuration (Quick Testing)

Edit `components/Contact.js` and replace these lines:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'  // Replace with your actual Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'  // Replace with your actual Template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'  // Replace with your actual Public Key
```

## ✅ Testing

1. Go to your portfolio contact form
2. Fill in name, email, and message
3. Click **"Send Message"**
4. You should see **"Message Sent Successfully!"** (green button)
5. Check your email inbox (might take 1-2 minutes)

## 🔒 Security Notes

- EmailJS free tier: **200 emails/month** (plenty for a portfolio)
- Your email is never exposed to users
- All API calls are secure and tracked in EmailJS dashboard
- No credit card required for free tier

## 🆘 Troubleshooting

### "Failed - Please try email link above"
- Double-check your Service ID, Template ID, and Public Key
- Make sure you activated the email service in EmailJS dashboard
- Check browser console for detailed error messages

### Not receiving emails?
- Check your spam folder
- Verify the email template uses correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Make sure your EmailJS service is connected and active

### Rate limit reached?
- Free tier allows 200 emails/month
- Upgrade to paid plan if needed (starts at $7/month for 1000 emails)

## 📞 Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**That's it!** Your contact form will now send emails directly to your inbox! 🎉

