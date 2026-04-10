<div align="center">

# 🚀 Saksham Lodha — Portfolio

### Full Stack Developer | React · Node.js · Django · Python

A modern, animated personal portfolio built with React 19, Vite, and Tailwind CSS v4 — featuring GSAP scroll animations, live GitHub & LeetCode stats, and an EmailJS-powered contact form.

🌐 **Live at [inflict.in](https://inflict.in)**

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[Live Site](https://inflict.in) · [Report Bug](https://github.com/inflictt/Portfolio-inflict.in/issues) · [Request Feature](https://github.com/inflictt/Portfolio-inflict.in/issues)

</div>

---

## ✨ Features

- 🎨 **Dark space-themed UI** with animated snowfall background
- 🏠 **Hero section** with GSAP scroll-triggered sprite animation and rotating role titles
- 👤 **About section** with scroll-driven profile pic animation
- 🎞️ **Tech stack marquee** — smooth infinite scroll of all my tools
- 📊 **Live GitHub contributions graph** via `react-github-calendar`
- 💻 **Live LeetCode stats** (Total Solved, Acceptance, Global Rank, Difficulty breakdown)
- 📧 **Contact form** with `react-hook-form` validation + EmailJS integration, including loading and success states
- 📄 **One-click resume download** directly from the hero section
- 🧭 **React Router v7** with clean routing setup
- 📱 **Fully responsive** across mobile, tablet, and desktop
- 🌐 **Custom domain** (`inflict.in`) deployed on Vercel with auto-deploys on every push

---

## 🛠️ Tech Stack

**Core**
- React 19
- Vite 8
- Tailwind CSS v4
- React Router DOM v7

**Animations & UI**
- GSAP + @gsap/react (ScrollTrigger)
- react-fast-marquee
- react-snowfall
- react-icons

**Integrations**
- @emailjs/browser — Contact form
- react-github-calendar — GitHub contributions
- @uiw/react-heat-map — Heatmap visualizations
- react-hook-form — Form validation

**Deployment**
- Vercel (with custom domain via Hostinger DNS)

**Tools**
- ESLint
- Git & GitHub

---

## 📁 Project Structure

```
Portfolio-Inflict/
├── public/
│   ├── favicon.png                  # Custom pixel-sprite favicon (transparent bg)
│   ├── favicon.svg
│   ├── icons.svg
│   └── SAKSHAM_LODHA_RESUME.pdf     # Resume served at /SAKSHAM_LODHA_RESUME.pdf
├── src/
│   ├── assets/                      # Images, SVGs, sprites
│   ├── components/                  # Reusable shared components
│   │   ├── Cursor.jsx               # Custom cursor
│   │   ├── Footer.jsx
│   │   ├── Github.jsx               # GitHub contributions graph
│   │   ├── Header.jsx               # Nav bar
│   │   ├── Leetcode.jsx             # LeetCode stats
│   │   ├── Snowfall.jsx
│   │   └── TechMarquee.jsx          # Scrolling tech stack
│   ├── layout/
│   │   └── RootLayout.jsx           # Snowfall + Header + Outlet + Footer
│   ├── Pages/                       # Page sections composed in Portfolio.jsx
│   │   ├── Home.jsx                 # Hero with GSAP sprite animation
│   │   ├── About.jsx                # Bio with scroll-scrub pic animation
│   │   ├── Portfolio.jsx            # Main page composing all sections
│   │   ├── Grind.jsx                # Wraps GitHub + LeetCode components
│   │   ├── Contact.jsx              # EmailJS form
│   │   ├── Projects.jsx             # ⚠️ placeholder (in progress)
│   │   ├── Achievements.jsx         # ⚠️ placeholder (in progress)
│   │   ├── Blogs.jsx                # ⚠️ empty stub (planned)
│   │   ├── BlogOverview.jsx         # ⚠️ placeholder (planned)
│   │   ├── MyPlayer.jsx             # Custom audio player
│   │   └── MyPlayer.css
│   ├── router/
│   │   └── Router.jsx               # Routes: / and /blogs
│   ├── index.css                    # Tailwind + global styles + LeetCode tile styles
│   └── main.jsx
├── .env                             # (not committed)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/inflictt/Portfolio-inflict.in.git
   cd Portfolio-inflict.in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Get these from your [EmailJS Dashboard](https://www.emailjs.com/).

4. **Run the dev server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This site is deployed on **[Vercel](https://vercel.com/)** with the custom domain `inflict.in` connected via DNS records on Hostinger.

Every push to the `main` branch automatically triggers a new production deploy — no manual steps required.

---

## 🗺️ Roadmap

- [x] Build the responsive Hero, About, Grind, and Contact sections
- [x] Integrate live GitHub and LeetCode stats
- [x] Wire up EmailJS-powered contact form
- [x] Deploy on Vercel with `inflict.in` custom domain
- [x] Attach resume PDF to the Resume button
- [x] Custom transparent favicon
- [ ] Build out **Projects** page with project cards
- [ ] Build out **Achievements** page
- [ ] Write and publish **Blogs** (`Blogs.jsx` + `BlogOverview.jsx`)
- [ ] Add **Dark / Light mode toggle**
- [ ] Semantic HTML and accessibility pass

---

## 📬 Contact

**Saksham Lodha**

- 🌐 Portfolio: [inflict.in](https://inflict.in)
- 💻 GitHub: [@inflictt](https://github.com/inflictt)
- 🐦 Twitter / X: [@Saksham1172975](https://x.com/Saksham1172975)
- 💼 LinkedIn: [sakshamlodha](https://www.linkedin.com/in/sakshamlodha)
- 📧 Email: realsaksham06@gmail.com

---

<div align="center">

### ⭐ If you like this portfolio, give it a star!

Made with ❤️ and lots of ☕ by **Saksham Lodha**

</div>
