/* data.js - all content in one place: stack tools + filter categories,
   project cards, journey chapters, and the reusable film-grain data-URI. */
export const NOISE_URI = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.4'/></svg>")`;

export const TOOLS = [
  { n: "01", name: "Python", icon: "python/3776AB", tag: "The language I think in.", cat: "lang" },
  { n: "02", name: "JavaScript", icon: "javascript/F7DF1E", tag: "Makes the web move.", cat: "lang" },
  { n: "03", name: "TypeScript", icon: "typescript/3178C6", tag: "JavaScript, with a seatbelt.", cat: "lang" },
  { n: "04", name: "SQL", icon: null, tag: "Questions, answered in rows.", cat: "be" },
  { n: "05", name: "React", icon: "react/61DAFB", tag: "UI that thinks in components.", cat: "fe" },
  { n: "06", name: "Tailwind CSS", icon: "tailwindcss/06B6D4", tag: "Design at the speed of thought.", cat: "fe" },
  { n: "07", name: "Node.js / Express", icon: "nodedotjs/5FA04E", tag: "APIs with no ceremony.", cat: "be" },
  { n: "08", name: "Django REST", icon: "django/092E20", tag: "Batteries-included backends.", cat: "be" },
  { n: "09", name: "LangChain", icon: "langchain/52A88C", tag: "Chains, graphs, agents.", cat: "ai" },
  { n: "10", name: "RAG & AI Agents", icon: null, tag: "Retrieval before generation.", cat: "ai" },
  { n: "11", name: "AWS (EC2, S3)", icon: "amazonwebservices/FF9900", tag: "Where it all gets deployed.", cat: "be" },
  { n: "12", name: "PostgreSQL", icon: "postgresql/4169E1", tag: "Relational, reliable, proven.", cat: "be" },
  { n: "13", name: "MongoDB", icon: "mongodb/47A248", tag: "Documents over dogma.", cat: "be" },
  { n: "14", name: "Git", icon: "git/F05032", tag: "Every mistake, reversible.", cat: "lang" },
  { n: "15", name: "GitHub", icon: "github/8B949E", tag: "Where the work lives.", cat: "lang" },
];

export const TABS = [
  { id: "all", label: "All" },
  { id: "fe", label: "Frontend Development" },
  { id: "be", label: "Backend & Database" },
  { id: "ai", label: "AI & Data" },
  { id: "lang", label: "Languages & Tools" },
];

export const PROJECTS = [
  { title: "AI-FinOps", sub: "INTERNSHIP PROJECT · REACT · NODE · GEMINI", img: "/assets/aiFinops.webp",
    href: "https://github.com/inflictt/Ai-Finops", tag: "Internship project · Kansoft · Gemini",
    metric: "Live", metricSub: "",
    body: "AWS cost intelligence platform built end to end during my Kansoft internship. Gemini turns raw cloud-cost data into plain-English summaries; node-cron and pdf-lib ship branded weekly PDF reports." },
  { title: "Sneak Peak", sub: "REACT · NODE · MONGODB", img: "/assets/snp.webp",
    href: "https://github.com/inflictt/SneakPeak-BML", tag: "React · Node · MongoDB",
    metric: "Live", metricSub: "",
    body: "Curated sneaker marketplace - every pair authenticated. Selected for the university I&E Compendium." },
  { title: "Campus Circle", sub: "ANDROID · NODE · SQL", img: "/assets/im3.webp",
    href: "https://github.com/inflictt/CampusCircle_FullStack.git", tag: "Android · Node · SQL",
    metric: "Live", metricSub: "",
    body: "Built an Android app for buying and selling items within the campus, powered by a Node.js backend and SQL database." },
  { title: "Docsy IQ", sub: "UNDER CONSTRUCTION · UI FINALISED", img: "/assets/docsy.webp",
    href: "https://x.com/Saksham1172975/status/2072944639032869006?s=20", tag: "Work in progress · UI finalised",
    metric: "WIP", metricSub: "fully under construction, the UI is locked and building has begun",
    body: "Docsy IQ is in active development. The interface is finalised; watch the build unfold on X." },
  { title: "Typebeat", sub: "REACT · JAVASCRIPT", img: "/assets/typeBeat.webp",
    href: "https://github.com/inflictt/Typebeat", tag: "React · JavaScript",
    metric: "WIP", metricSub: "speed and accuracy tracked keystroke by keystroke",
    body: "A minimal typing trainer built in React. Clean UI, instant feedback, zero clutter." },
  { title: "This Site", sub: "REACT · TAILWIND · WEBGL", img: "/assets/portFolio.webp",
    href: "https://inflict.in", tag: "React · Tailwind · WebGL",
    metric: "Live", metricSub: "",
    body: "This portfolio - React, Tailwind and WebGL." },
];

export const CHAPTERS = [
  { num: "", title: "Class 10 - St. Paul’s School", meta: "2022 · 90% CBSE", img: "/assets/ten.webp",
    body: "Where the discipline started - a 90% board result and the first taste of doing things properly." },
  { num: "", title: "Class 12 - Central Public School", meta: "2024 · CBSE", img: "/assets/cps.webp",
    body: "Senior secondary done - and the decision made: build things for a living." },
  { num: "", title: "B.Tech CSE - BML Munjal University", meta: "2024-2028 · CGPA 8.48", img: "/assets/bml.webp",
    body: "Started coding in first year to build things that actually work - it stuck." },
  { num: "", title: "TechStorm Hackathon - built Ashrafi", meta: "2024 · 3rd place", img: "/assets/team.webp",
    body: "Whiteboard to working demo in one night - and it survived the judges." },
  { num: "", title: "45-Day SDE Sheet - Striver Challenge", meta: "2026 · Public accountability", img: "/assets/45Days.webp",
    href: "https://github.com/inflictt/45-DaySDESheetChallenge-Striver",
    body: "Striver's SDE sheet taken as a 45-day public challenge, with solutions pushed to GitHub every single day." },
  { num: "", title: "SneakPeak - I&E Compendium", meta: "2026 · Recognition", img: "/assets/snp.webp",
    body: "The sneaker marketplace that made it into the university’s Innovation & Entrepreneurship Compendium." },
];

/* internship experience shown in the Experience section */
export const EXPERIENCE = [
  { role: "AI/ML Intern", org: "Kansoft Solutions", when: "MAY 2026 - JUL 2026",
    points: [
      "Automated a 6 to 8 hour/week manual AWS cost-reporting workflow end to end, surfacing roughly 30% ($226 to 298/month) in potential cloud-cost savings for the organization.",
      "Engineered data science and NLP workflows in Python (Pandas, NumPy) to clean, transform and analyze datasets into analysis-ready dataframes and actionable insights.",
    ],
    project: { label: "Built end to end during this internship", title: "AI-FinOps: AWS Cost Intelligence Platform", href: "https://github.com/inflictt/Ai-Finops" } },
];
