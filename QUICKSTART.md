# ⚡ Quick Start Guide

Get your portfolio website running in **5 minutes**!

## 🚀 Step 1: Install (1 min)

```bash
cd onkar-portfolio
npm install
```

## 📝 Step 2: Add Your Info (2 min)

Edit `data/resume.js` and replace with your details:

```javascript
name: "Your Name Here",
title: "Your Job Title",
email: "your.email@example.com",
// ... etc
```

## 🎨 Step 3: Run Locally (30 seconds)

```bash
npm run dev
```

Open: http://localhost:3000

## ✅ That's It!

Your website is now running locally!

---

## 🌐 Want to Deploy? (Extra 5 minutes)

### Deploy to Vercel (FREE)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

3. **Done!** Your site is live at: `https://yourname.vercel.app`

---

## 💬 Enable Chat Widget

### Option 1: Local Testing
```bash
# Terminal 1: Start RAG API
cd ../RAG
python3 -m uvicorn api.main:app --host 0.0.0.0 --port 8000

# Terminal 2: Portfolio already running
# Chat widget will work automatically!
```

### Option 2: Production
1. Deploy your RAG API to Render.com
2. Create `.env.local`:
```
NEXT_PUBLIC_RAG_API_URL=https://your-rag-api.render.com
```
3. Restart your dev server or redeploy

---

## 🎯 Checklist

- [ ] Installed dependencies
- [ ] Updated `data/resume.js`
- [ ] Running locally
- [ ] Looks good?
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Share with recruiters! 🎉

---

**Need help?** Check the full [README.md](./README.md)

