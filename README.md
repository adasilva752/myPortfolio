# My Portfolio Website

A professional portfolio website built with React + Vite, featuring a modern design, dark mode, and responsive layout.

## Features

- ✨ **About Me Section** - Bio, photo placeholder, skills, and interests
- 🚀 **Projects Section** - Showcase your work with project cards
- 📧 **Contact Section** - Contact form and social links
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for optimal performance

## Requirements

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for version control and GitHub Pages deployment)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

## Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`:
   - React & React DOM
   - Vite (build tool)
   - React plugins

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Open this URL in your browser to see your portfolio

5. **Make changes**
   - Edit files in the `src` folder
   - Changes will automatically reload in the browser

## Project Structure

```
myPortfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Main styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Customization

### Update Your Information

1. **About Section** (`src/components/About.jsx`):
   - Update the bio text
   - Replace the image placeholder with your photo
   - Modify skills and interests arrays

2. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your real projects
   - Update project descriptions, technologies, and links

3. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Replace GitHub and LinkedIn URLs with your profiles

4. **Navbar** (`src/components/Navbar.jsx`):
   - Change the logo text if desired

### Styling

- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Color scheme can be modified in CSS variables (light/dark mode)

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deploying to GitHub Pages

Follow these steps to host your portfolio on GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. Name it `myPortfolio` (or your preferred name)
4. Make it **public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

1. **Initialize git** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Make your first commit**:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/myPortfolio.git
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

5. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 3: Install GitHub Pages Plugin

Install the plugin that helps deploy to GitHub Pages:

```bash
npm install --save-dev gh-pages
```

### Step 4: Update package.json

Add these scripts to your `package.json` (in the "scripts" section):

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 5: Update vite.config.js

Make sure your `vite.config.js` has the correct `base` path. It should match your repository name:

```javascript
export default defineConfig({
  plugins: [react],
  base: '/myPortfolio/'  // Change this to match your repo name
})
```

### Step 6: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the built files to GitHub

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### Step 8: Access Your Live Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/myPortfolio/
```

(Replace `YOUR_USERNAME` with your GitHub username and `myPortfolio` with your repo name)

**Note:** It may take a few minutes for the site to go live after deployment.

### Updating Your Site

Whenever you make changes:

1. **Make your changes** to the code
2. **Test locally**: `npm run dev`
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. **Deploy updates**:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will suggest another port. Use that instead.

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### GitHub Pages Not Loading
- Verify the `base` path in `vite.config.js` matches your repo name
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes after deployment
- Clear your browser cache

### Dark Mode Not Persisting
- Check browser console for errors
- Verify localStorage is enabled in your browser

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## License

This project is open source and available for educational purposes.

---

**Happy coding! 🚀**
