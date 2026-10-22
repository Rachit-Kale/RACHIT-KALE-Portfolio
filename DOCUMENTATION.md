# Project Documentation & Setup Guide

This document provides a detailed explanation of the codebase structure, individual files, and step-by-step instructions on how to run the project locally.

## 📁 Codebase Overview

The project is a modern, interactive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **GSAP**. It features advanced UI techniques like neumorphism, custom cursor masks, and flowing marquee animations.

## 📂 Root Directory Configurations

Files at the root of the project handle the configuration, dependency management, and build steps for the application.

*   **`package.json`** & **`package-lock.json`**
    *   **What it does:** Lists all project metadata, scripts (`dev`, `build`, `lint`), and dependencies (React, Motion, Tailwind CSS, Lucide icons, GSAP, etc.). The lock file ensures exact dependency versions are consistent across all environments.
    *   **Why it is important:** It is the core blueprint for Node.js projects, dictating how the project runs and what external packages are necessary.
*   **`index.html`**
    *   **What it does:** The main entry point served in the browser. It contains the `<div id="root"></div>` where the entire React application is injected during execution.
    *   **Why it is important:** Without it, the browser doesn't know how to bootstrap the React application or what title and meta tags to use.
*   **`vite.config.ts`**
    *   **What it does:** Configuration file for Vite, the extremely fast development server and build tool.
    *   **Why it is important:** Handles how TypeScript files are compiled, how Tailwind CSS is processed, and how the final static bundle is built.
*   **`tsconfig.json`**
    *   **What it does:** Configures the TypeScript compiler rules, specifying how strict the typings should be.
    *   **Why it is important:** Prevents runtime bugs by enforcing safe variable and component types during development.
*   **`install.sh`**
    *   **What it does:** A simple bash script wrapper around `npm install`.
    *   **Why it is important:** Acts as a convenient 1-click install alternative for developers not accustomed to the standard npm ecosystem.
*   **`.env.example`**
    *   **What it does:** A template showcasing the required environment variables.
    *   **Why it is important:** Keeps sensitive keys or API endpoints documented without exposing actual secrets to source control.
    *   **Why do you have it right now?** Right now, your portfolio is a static frontend site—meaning you aren't currently using any external databases or secret keys! However, the file is included by default as part of the foundational architecture.If you later decide to say, "Make the Contact form actually send me an email using EmailJS" or "Add a backend database," this file will become immediately necessary to safely hold those integration keys!
*   **`.gitignore`**
    *   **What it does:** Specifies which files and directories (like `node_modules` or `dist`) Git should ignore.
    *   **Why it is important:** Keeps the repository clean of auto-generated binaries or dependencies.
*   **`metadata.json`**
    *   **What it does:** Manages AI Studio applet capabilities, application name, generic naming, and platform-specific permissions.
    *   **Why it is important:** Required by the deployment and build pipeline internal environments to set permissions (like microphone, camera, etc.).

---

## 📂 `src/` (Source Directory)

This is the central logic directory where all React code, routing, styling, and static data reside.

*   **`main.tsx`**
    *   **What it does:** The primary React DOM entry point. It imports `App.tsx` and mounts it directly to `index.html`'s `<div id="root">` element.
    *   **Why it is important:** Bridges the gap between the static HTML file and the interactive React ecosystem.
*   **`App.tsx`**
    *   **What it does:** The core application wrapper. It manages:
        1. **Routing:** Uses `BrowserRouter` from `react-router-dom` to switch paths (`/` for Home, `/work` for AllWork).
        2. **Smooth Scrolling:** Initializes `Lenis` to provide a buttery-smooth scrolling experience globally.
        3. **Loading Sequence:** Manages the `AnimatePresence` logic that transitions smoothly from the Preloader to the main Content.
    *   **Why it is important:** Serves as the top-level orchestrator of global user experience, navigation, and loading states.
*   **`index.css`**
    *   **What it does:** Injects Tailwind CSS styles and configures custom typography/fonts (Display fonts, sans-serif, and Inter). Sets core theme utility classes.
    *   **Why it is important:** The central hub for styling. Since Tailwind is used, this file turns on all the utility classes consumed by the React components.
*   **`data.ts`**
    *   **What it does:** A centralized module mapping out all static content arrays (projects list, service capabilities, experience timeline).
    *   **Why it is important:** Separating static data from the UI components allows you to rapidly update your portfolio (adding a new project, changing a service) by modifying this single file rather than hunting through specific React components.

---

## 📂 `src/pages/` (Page Components)

Pages represent the major route-level views mapping the URLs.

*   **`Home.tsx`**
    *   **What it does:** The main landing page. It stacks all functional components together (`Navbar`, `Hero`, `SelectedWork`, `Services`, `Experience`, and `Contact`). Additionally, it wraps them internally in a `PageSectionParallax` utility.
    *   **Why it is important:** Creates the unique "stacked card" 3D parallax effect where sections seamlessly overlap each other dynamically when scrolling. 
*   **`AllWork.tsx`**
    *   **What it does:** The dedicated route (`/work`) page designed to display the entire portfolio grid for exhaustive portfolio scanning.
    *   **Why it is important:** Keeps the Home page highly curated and uncluttered by moving lengthy historical works to a separate, beautifully rendered grid.

---

## 📂 `src/components/` (UI Components)

These components are reusable, modular templates of the user interface forming the pages.

*   **`Hero.tsx`**
    *   **What it does:** The dramatic first impression section containing a large typography heading and an interactive photo. It reveals background high-saturation colors via a custom masking "spotlight" matching the user's cursor.
    *   **Why it is important:** Creates visual impact and introduces the creative capability of the designer. Sets the aesthetic tone using `motion/react` animations.
*   **`LoadingScreen.tsx`**
    *   **What it does:** A powerful image preloader. It scans `data.ts` and hero/contact sections for every image URL, pre-fetches them in the background via hidden DOM nodes, and tracks the exact byte-load progression to generate a 0–100% loading counter.
    *   **Why it is important:** Ensures that when the heavy graphical portfolio finally shows, no images are broken or "popping in" randomly. Makes the site feel extremely robust and intentionally crafted.
*   **`SelectedWork.tsx`**
    *   **What it does:** A highlight wheel of the best flagship projects displayed on the main page. Utilizes a striking "neumorphic" design—soft, extruded interactive 3D card shadows on light backgrounds.
    *   **Why it is important:** Curates the best work immediately effectively showcasing talent. It includes the routing link directing users to `AllWork.tsx`.
*   **`Services.tsx`**
    *   **What it does:** An expandable accordion showcasing the services (e.g. UI/UX Design, Strategy). 
    *   **Why it is important:** Communicates commercial offerings explicitly. Uses a slick active-state image reveal mechanic when items are expanded.
*   **`Experience.tsx`**
    *   **What it does:** A text-heavy timeline outlining past organizational work history, roles, and achievements.
    *   **Why it is important:** Builds the designer’s professional credibility, proving expertise visually without overwhelming the graphical space.
*   **`Contact.tsx`**
    *   **What it does:** The bottom-most Call To Action. Contains a visually rich aesthetic background and a big, bold contact mechanism and social footer navigation.
    *   **Why it is important:** Provides the ultimate conversion step for potential clients visiting the website.
*   **`Navbar.tsx`**
    *   **What it does:** A minimal, sticky top-navigation bar. Adapts from desktop rows to a mobile-friendly layout.
    *   **Why it is important:** Global persistent navigation letting users immediately access anchor links, home routers, or the primary email outreach anywhere dynamically across the scroll height.
*   **`FlowingMenu.tsx`**
    *   **What it does:** A highly advanced, custom interactive animated marquee component inside the experience or work views. 
    *   **Why it is important:** Leverages GSAP algorithms to calculate the directional proximity closest to the user cursor, creating floating responsive text boxes adding "wow-factor" visual depth.

---

## 📂 `src/lib/` (Utilities)

*   **`utils.ts`**
    *   **What it does:** Contains small reusable utility helper packages, the most crucial being `cn()`.
    *   **Why it is important:** This small package resolves Tailwind CSS specific collisions using `clsx` and `tailwind-merge` intelligently resolving overriding responsive tailwind styles.

---

## 🚀 How to Run the Project

Follow these steps to run the project on your local machine.

### Prerequisites
Ensure you have the following installed:
*   **Node.js** (v18 or higher recommended)
*   **npm** (comes with Node.js)

### Step 1: Install Dependencies
Open your terminal, navigate to the root directory of the project, and run the following command to install all required packages (React, Tailwind, Framer Motion, GSAP, Lucide React, etc.):

```bash
npm install
```

### Step 2: Start the Development Server
Once the dependencies are installed, start the Vite development server by running:

```bash
npm run dev
```

### Step 3: View the Application
After running the command, the terminal will output a local URL (usually `http://localhost:3000` or `http://localhost:5173`). Open this URL in your web browser to view and interact with the portfolio.

### Step 4: Build for Production (Optional)
If you want to build the project for production deployment, run:

```bash
npm run build
```
This will generate an optimized, minified bundle in the `dist/` directory, which can be deployed to hosting platforms like Vercel, Netlify, or GitHub Pages.
