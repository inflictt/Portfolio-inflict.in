<div align="center">

# 🚀 Saksham Lodha — Portfolio

### Full Stack Developer | React · Node.js · Django · Python

A modern, animated personal portfolio showcasing my projects, coding journey, GitHub activity, and LeetCode stats — built with React, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Live Demo](#) · [Report Bug](https://github.com/inflictt/Portfolio-inflict.in/issues) · [Request Feature](https://github.com/inflictt/Portfolio-inflict.in/issues)

</div>

---

## ✨ Features

- 🎨 **Modern Dark UI** — Sleek space-themed design with animated snowfall/star background
- 🏠 **Home Page** — Hero section with animated intro and tech stack marquee
- 👤 **About Section** — Personal bio, journey, and interests
- 📊 **Live GitHub Activity** — Real-time contributions graph
- 💻 **LeetCode Stats** — Live problem-solving stats (Total Solved, Acceptance, Global Rank, Difficulty breakdown)
- 📧 **Contact Form** — Powered by EmailJS with name, phone, email, and message fields
- 🎵 **Music Player** — Custom MyPlayer component
- 🖱️ **Custom Cursor** — Interactive custom cursor
- 🧭 **Smooth Routing** — React Router for seamless navigation
- 📱 **Responsive Design** — Works across all devices

---

## 🛠️ Tech Stack

**Frontend**
- React 18
- Vite
- Tailwind CSS
- React Router DOM

**Integrations**
- EmailJS — Contact form
- GitHub API — Contributions graph
- LeetCode API — Coding stats

**Tools**
- ESLint
- Git & GitHub

---

## 📁 Project Structure

```
Portfolio-Inflict/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Images, SVGs, sprites
│   ├── components/
│   │   ├── Cursor.jsx       # Custom cursor
│   │   ├── Footer.jsx
│   │   ├── Github.jsx       # GitHub contributions graph
│   │   ├── Header.jsx
│   │   ├── Leetcode.jsx     # LeetCode stats
│   │   └── Snowfall.jsx     # Animated background
│   ├── layout/
│   │   └── RootLayout.jsx   # Main layout wrapper
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Projects.jsx
│   │   ├── Grind.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Blogs.jsx
│   │   ├── BlogOverview.jsx
│   │   ├── MyPlayer.jsx
│   │   └── TechMarquee.jsx
│   ├── router/
│   │   └── Router.jsx       # App routing
│   ├── index.css
│   └── main.jsx
├── .env                     # Environment variables (not committed)
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
- npm or yarn
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

   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Get these from your [EmailJS Dashboard](https://www.emailjs.com/).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🗺️ Roadmap

- [x] Home page with hero and tech marquee
- [x] About section
- [x] GitHub contributions integration
- [x] LeetCode stats integration
- [x] Contact form with EmailJS
- [x] Custom cursor and snowfall background
- [x] Routing setup
- [ ] Complete Projects page with project cards
- [ ] Build out Achievements page
- [ ] Write and publish Blogs
- [ ] Populate Grind page (DSA journey tracker)
- [ ] Add resume download button
- [ ] Deploy to Vercel
- [ ] Add analytics
- [ ] SEO optimization
- [ ] Add page transitions and micro-interactions

---

## 📸 Screenshots

> Add screenshots of your portfolio here once deployed

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/inflictt/Portfolio-inflict.in/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**Saksham Lodha**

- GitHub: [@inflictt](https://github.com/inflictt)
- Portfolio: [Live Demo](#)
- Email: Reach out via the contact form on the site

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

### ⭐ If you like this portfolio, give it a star!

Made with ❤️ and lots of ☕ by **Saksham Lodha**

</div>
