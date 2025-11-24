# Email Setup Guide for Contact Form

Your contact form is already integrated with **EmailJS**. Follow these steps to start receiving emails:

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Your Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or your email provider
4. Click **"Connect Account"** and authorize Gmail
5. **Copy the Service ID** (e.g., `service_abc1234`) - you'll need this!

## Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Copy this template content:**

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. In the template settings:
   - **To Email**: `Onkar032@gmail.com` (your email)
   - Leave other settings as default

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **"Public Key"** (e.g., `AbCdEfGhIjKlMnOp`)
3. **Copy this key**

## Step 5: Create .env.local File

1. In your project root (`onkar-portfolio` folder), create a file named `.env.local`
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

## Step 6: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 7: Test the Form!

1. Go to http://localhost:3000
2. Scroll to the "Get In Touch" section
3. Fill out the form and click "Send Message"
4. Check your email (`Onkar032@gmail.com`) for the message!

---

## For Vercel Deployment

After setting up locally, add these environment variables to Vercel:

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add each of these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

---

## Troubleshooting

**"Failed to send email" error?**
- Check that all IDs in `.env.local` are correct
- Make sure you've authorized EmailJS to access your Gmail
- Check EmailJS dashboard for any service issues

**Not receiving emails?**
- Check your spam folder
- Verify the "To Email" in your EmailJS template is correct
- Test sending an email from EmailJS dashboard directly

**Questions?**
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

## Current Configuration

Your form will send emails with:
- **From Name**: Visitor's name
- **From Email**: Visitor's email
- **Message**: Visitor's message
- **To**: Onkar032@gmail.com
- **Reply-To**: Visitor's email (so you can reply directly)

