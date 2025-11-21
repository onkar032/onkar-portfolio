# 🚀 Onkar's Portfolio Website

Beautiful Apple-style portfolio website with embedded RAG-powered AI chat assistant.

## ✨ Features

- 🎨 **Apple-Inspired Design** - Clean, minimal, and professional
- 💬 **AI Chat Widget** - Embedded RAG system for instant Q&A
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Lightning Fast** - Built with Next.js 14
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌐 **SEO Optimized** - Ready for production

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** FastAPI RAG System (separate repo)
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📋 Quick Start

### 1. Install Dependencies

```bash
cd onkar-portfolio
npm install
```

### 2. Configure Environment

Create a `.env.local` file:

```bash
# For local development
NEXT_PUBLIC_RAG_API_URL=http://localhost:8000

# For production (after deploying RAG API)
# NEXT_PUBLIC_RAG_API_URL=https://your-rag-api.render.com
```

### 3. Update Your Information

Edit `data/resume.js` with your actual resume details:

```javascript
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... more details
  },
  // ... rest of the data
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🎯 Customization Guide

### Personal Information

Update all personal details in `data/resume.js`:
- Name, title, tagline
- Contact information
- Social media links

### Experience

Add your work experience:

```javascript
experience: [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2023 - Present",
    description: "What you did",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

### Skills

Organize your skills by category:

```javascript
skills: {
  "Languages": ["Python", "JavaScript"],
  "Frontend": ["React", "Next.js"],
  // ... more categories
}
```

### Projects

Showcase your best work:

```javascript
projects: [
  {
    title: "Project Name",
    description: "Brief description",
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/yourrepo",
    demo: "https://your-demo.com",
    highlights: ["Feature 1", "Feature 2"]
  }
]
```

## 💬 Chat Widget Configuration

The embedded chat widget connects to your RAG API.

### Local Testing

1. Start your RAG API:
```bash
cd ../RAG
python3 -m uvicorn api.main:app --host 0.0.0.0 --port 8000
```

2. The chat widget will automatically connect to `http://localhost:8000`

### Production Setup

1. Deploy your RAG API to Render.com (see deployment guide below)
2. Update `.env.local` with your production API URL
3. Redeploy your Next.js site

## 🚀 Deployment

### Deploy Frontend to Vercel (FREE)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Key: `NEXT_PUBLIC_RAG_API_URL`
   - Value: Your RAG API URL
6. Click "Deploy"

**Your site will be live at:** `https://yourname.vercel.app`

### Deploy Backend (RAG API) to Render.com

1. Go to [render.com](https://render.com)
2. Create new "Web Service"
3. Connect your RAG GitHub repository
4. Configure:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn api.main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables if needed
6. Click "Create Web Service"

## 📱 Sections

- **Hero** - Eye-catching introduction
- **About** - Personal summary and highlights
- **Experience** - Work history with achievements
- **Skills** - Technical skills organized by category
- **Projects** - Portfolio of your best work
- **Contact** - Get in touch form and information
- **Chat Widget** - AI-powered Q&A about you

## 🎨 Customizing Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  apple: {
    blue: '#0071e3',      // Primary color
    gray: '#1d1d1f',      // Text color
    lightgray: '#f5f5f7', // Background color
  },
}
```

## 📝 Adding Resume PDF

To let the chat widget answer questions from your resume:

1. Put your resume PDF in the RAG system's `documents/` folder
2. Ingest it through the RAG UI or API
3. The chat widget will now be able to answer questions about your experience!

## 🐛 Troubleshooting

### Chat widget not working?

- Check if RAG API is running (`curl http://localhost:8000/health`)
- Verify `NEXT_PUBLIC_RAG_API_URL` is set correctly
- Check browser console for errors

### Styling issues?

- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

### Build errors?

- Check all imports in component files
- Verify all data in `resume.js` is properly formatted
- Run `npm run build` to see specific errors

## 📚 Project Structure

```
onkar-portfolio/
├── components/          # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Experience.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── ChatWidget.js   # RAG chat integration
├── data/
│   └── resume.js       # Your resume data
├── pages/
│   ├── _app.js
│   └── index.js        # Main page
├── styles/
│   └── globals.css     # Global styles
├── public/             # Static files
├── package.json
└── README.md
```

## 🎯 Next Steps

1. ✅ Customize `data/resume.js` with your info
2. ✅ Update colors in `tailwind.config.js`
3. ✅ Add your resume to RAG system
4. ✅ Test locally
5. ✅ Deploy to Vercel
6. ✅ Share with recruiters!

## 🤝 Support

Need help? Feel free to:
- Open an issue on GitHub
- Contact me via email
- Check the documentation

## 📄 License

MIT License - feel free to use this template!

---

Built with ❤️ using Next.js, Tailwind CSS, and FastAPI

**Live Demo:** [Coming Soon]
**RAG System Repo:** https://github.com/onkar032/enterprise-rag-system


