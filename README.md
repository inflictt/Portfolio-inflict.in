# inflict.in

Personal developer portfolio of **Saksham Lodha**. Designed, broken and rebuilt by hand. No templates, no UI kits, no page builders.

**Live:** [www.inflict.in](https://www.inflict.in)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&labelColor=20232a)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&labelColor=20232a)
![WebGL](https://img.shields.io/badge/WebGL-hand--written_GLSL-990000?labelColor=20232a)

---

## What makes it different

Everything you see is computed, not pasted in:

- **Living cloud background.** The entire site background is a real-time WebGL shader. Every pixel of sky is generated each frame from layered value noise (fbm), with fake sunlight computed by sampling cloud density slightly higher up. No images, no video.
- **Press and hold the sky.** The footer strip is a switch. It sleeps in desaturated gray; hold it for about 2.5 seconds and color spreads out from your fingertip (a circular reveal computed inside the shader) until the whole site's weather goes live. Hold again to dim it from the edges.
- **Ink-blob intro.** A percentage counter, then an SVG gooey metaball blob (blur + color matrix threshold + turbulence displacement) reveals a photo. It leaves on scroll and returns at the top.
- **Falling project deck.** The Work section pins while each project card drops from above, scroll-scrubbed with its own tilt and landing offset. Hovering fires a lime shutter wipe with metrics.
- **Snaking journey timeline.** An SVG route drawn with `getTotalLength` and scroll progress. Checkpoints light up only when the route actually reaches them.
- **Circle theme sweep.** Dark and light mode switch via the View Transitions API: a circle expands from the toggle button and repaints the page inside it.
- **Goku.** A pixel-sprite companion chases your cursor around the site, flips to face where he runs, and powers up when he stands still.
- **Live proof of work.** GitHub contribution heatmap and LeetCode stats pulled from public APIs at load time.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 (functional components + hooks) |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4, utilities inline in JSX |
| Graphics | Hand-written WebGL 1 (GLSL), one shader, two canvases |
| Forms | react-hook-form + EmailJS (mailto fallback) |
| Animation | CSS transforms, scroll-scrubbed rAF, View Transitions API, SVG filters |
| Data | GitHub contributions API, LeetCode stats API |

No animation libraries. No GSAP, no Framer Motion, no Three.js. The motion is math.

## Sections

1. **Hero.** Serif wordmark, floating polaroids, live IST clock.
2. **Work.** Six projects in the falling deck, including AI-FinOps (internship project at Kansoft), Typebeat and Docsy IQ (in construction, UI finalised).
3. **Experience.** AI/ML Intern at Kansoft Solutions (May 2026 to Jul 2026), with the AI-FinOps platform built end to end during it.
4. **Stack.** 15 tools extracted from the resume, filterable by category, each cell flips to a one-line take.
5. **Journey.** School to B.Tech CSE at BML Munjal University, hackathon podium, the 45-Day Striver SDE Sheet challenge, the daily DSA grind.
6. **Grind.** Live GitHub heatmap and LeetCode numbers. If the graph is green, the site is telling the truth.
7. **Contact.** Glass cards, validated form, direct email and socials.
8. **The sky.** Hold it. You'll see.

## Project structure

```
├── index.html                  entry, fonts preconnect
├── vite.config.js              react + tailwind plugins
├── public/
│   └── assets/                 images, sprites, resume pdf
└── src/
    ├── main.jsx                react root
    ├── App.jsx                 composition + shared state
    ├── index.css               theme variables, keyframes, view transitions
    ├── data.js                 all content: projects, chapters, tools, experience
    └── components/
        ├── BlobIntro.jsx       gooey SVG intro overlay
        ├── Nav.jsx             glass pill nav + burger menu
        ├── ThemeToggle.jsx     circle-sweep dark/light switch
        ├── Hero.jsx            wordmark, polaroids, clock
        ├── WorkDeck.jsx        pinned falling project cards
        ├── Experience.jsx      internship card
        ├── StackGrid.jsx       filterable tool grid
        ├── Journey.jsx         snaking SVG timeline
        ├── Grind.jsx           GitHub + LeetCode live stats
        ├── Contact.jsx         form + contact cards
        ├── SkyStrip.jsx        the WebGL sky: background + hold switch
        ├── Goku.jsx            cursor-chasing sprite
        └── AboutModal.jsx      frosted about panel
```

## Getting started

```bash
git clone https://github.com/inflictt/Portfolio-inflict.in.git
cd Portfolio-inflict.in
npm install
npm run dev
```

Open `http://localhost:5173`.

### Contact form (optional)

The form sends through EmailJS and falls back to a plain `mailto:` link if keys are missing. To enable it, create a `.env` in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the build locally
```

Deploy `dist/` to any static host.

## Notes on the WebGL

- One fragment shader draws both the full-screen background and the footer strip through a small `createSky()` factory.
- Precision is auto-detected (`highp` when available, `mediump` otherwise) and the noise hash is 16-bit safe, so it runs correctly on Apple Silicon and mobile GPUs.
- A black-frame self-test reads back one pixel after boot; if a browser shield or driver silently kills the shader, the canvas hides itself so the theme background is never covered. If clouds are missing, check the console for `[webgl]` messages and your browser's fingerprinting protection.
- Both canvases render at reduced resolution and let the browser upscale, which keeps the GPU cost low.

## Author

**Saksham Lodha**, B.Tech CSE at BML Munjal University (2024 to 2028)

- Website: [inflict.in](https://www.inflict.in)
- GitHub: [@inflictt](https://github.com/inflictt)
- LinkedIn: [sakshamlodha](https://linkedin.com/in/sakshamlodha)
- LeetCode: [Saksham_lodha](https://leetcode.com/u/Saksham_lodha)
- Email: realsaksham06@gmail.com

---

Written, broken and rewritten by me. If you borrow ideas from this repo, a star is a nice way to say thanks.
