# Rachit Kale — Portfolio

A modern, interactive portfolio website showcasing product design and software development work. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**.

---

## ✨ Features

- **Fluid Smooth Scrolling:** Powered by [Lenis](https://lenis.darkroom.engineering/) for seamless vertical scroll inertia.
- **Micro-Interactions & Motion:** High-performance animations and reactive components built with Framer Motion and GSAP.
- **Dynamic Routing:** Single-page navigation powered by React Router v7 (`/`, `/work`, `/contact`, `/project/:id`).
- **Interactive Componentry:** Custom halftone reveal effect, flowing marquee menus, gradual blurs, and interactive custom cursor.
- **Responsive & Modern Design:** Tailored typography with Space Grotesk & Inter, dark-mode styling, and mobile-optimized layouts.
- **Production-Ready & Vercel Optimized:** Configured with `vercel.json` SPA rewrites to ensure seamless page reloads on deep routes.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://motion.dev/) & [GSAP](https://gsap.com/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### 1. Installation

Clone your repository and install dependencies:

```bash
npm install
```

### 2. Local Development

Start the local Vite development server:

```bash
npm run dev
```

Visit `http://localhost:3000` (or the port output in your terminal) in your browser.

### 3. Production Build

Create an optimized, minified production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deploying to Vercel

This project is fully configured and ready for 1-click deployment on [Vercel](https://vercel.com/).

### Method 1: Deploy with Git (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "feat: initial commit for Vercel deployment"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect the settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `vite build` (or `npm run build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your portfolio will be live with automatic HTTPS and global edge CDN!

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

> **Note on SPA Routing:** The included `vercel.json` ensures that deep links (e.g. `/work`, `/contact`, `/project/1`) rewrite to `/index.html` so client-side routing works smoothly without 404 errors on page reload.
