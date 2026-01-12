# Quick Setup Guide

## 📋 Requirements Checklist

Before starting, ensure you have:

- [ ] **Node.js** installed (v16+) - [Download here](https://nodejs.org/)
- [ ] **npm** (comes with Node.js)
- [ ] **Git** installed - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit the URL shown in terminal (usually `http://localhost:5173`)

## 📦 What Gets Installed

When you run `npm install`, these packages are installed:

**Dependencies:**
- `react` - UI library
- `react-dom` - React DOM rendering

**Dev Dependencies:**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `@types/react` & `@types/react-dom` - TypeScript types
- `gh-pages` - GitHub Pages deployment tool

## 🌐 GitHub Pages Deployment - Quick Steps

### Initial Setup (One Time)

1. **Create GitHub Repository**
   - Go to github.com → New repository
   - Name it `myPortfolio` (or your choice)
   - Make it **public**

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repo → Settings → Pages
   - Source: `gh-pages` branch, `/ (root)` folder
   - Save

5. **Your site is live at:**
   ```
   https://YOUR_USERNAME.github.io/myPortfolio/
   ```

### Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## ✏️ Customization Checklist

- [ ] Update bio in `src/components/About.jsx`
- [ ] Add your photo (replace image placeholder)
- [ ] Update skills and interests
- [ ] Replace placeholder projects in `src/components/Projects.jsx`
- [ ] Update contact info in `src/components/Contact.jsx`
- [ ] Update email, GitHub, and LinkedIn links
- [ ] Change repo name in `vite.config.js` if different from `myPortfolio`

## 🎨 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode toggle (saves preference)
✅ Smooth scrolling navigation
✅ Contact form (frontend only - customize for backend)
✅ Project showcase cards
✅ Modern, clean design
✅ Fast performance with Vite

## 📝 Notes

- The contact form currently shows a success message but doesn't send emails. You'll need to add backend functionality or use a service like Formspree.
- Replace placeholder content with your actual information.
- The dark mode preference is saved in browser localStorage.

---

For detailed instructions, see [README.md](./README.md)
