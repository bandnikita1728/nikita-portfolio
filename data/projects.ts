export type ProjectStatus = 'live' | 'building' | 'hackathon'

export interface Project {
  slug: string
  name: string
  pitch: string
  problem: string
  status: ProjectStatus
  rating?: string
  demoVideoThumbnail: string // path/URL to thumbnail or first-frame image; "" if not yet available
  tech: string[]
  github?: string
  live?: string
  docs?: string
  demoVideo?: string
  loomUrl?: string
  architecture: string
  learned: string[]
  wouldDoDifferently?: string
  knownLimitations?: string
}

export const projects: Project[] = [
  {
    slug: 'resume-radar-ai',
    name: 'ResumeRadar AI',
    pitch: 'AI-powered resume screening and ranking tool for recruiters.',
    problem:
      'Recruiters spend hours manually screening resumes against job descriptions — ResumeRadar AI parses, scores, and ranks candidates in seconds using LLM-based semantic matching.',
    status: 'building',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/bandnikita1728/ResumeRadar-AI',
    architecture:
      'Next.js frontend → API routes handle resume upload & parsing (pdf-parse) → embeddings generated via OpenAI → cosine similarity scoring against job description → ranked results stored in PostgreSQL and rendered in a recruiter dashboard.',
    learned: [
      'Designing prompt pipelines that stay reliable across messy, inconsistent resume formats',
      'Trade-offs between embedding-based matching and keyword-based ATS scoring',
      'Structuring a Next.js app to separate parsing logic from UI rendering cleanly',
    ],
    wouldDoDifferently:
      'Would add a streaming response for scoring feedback instead of a single blocking API call, to make the UX feel faster on large resume batches.',
  },
  {
    slug: 'linkup',
    name: 'LinkUp',
    pitch: 'Real-time video conferencing with AI translation and ML gesture detection',
    problem:
      'Production-grade video conferencing app built from scratch using WebRTC — peer-to-peer video with ICE candidate queuing, live Hindi↔English speech translation via Sarvam AI, MediaPipe-based hand gesture detection triggering particle effects, real-time speaking indicators, screen recording, and Gemini-powered AI meeting summaries. Most video call tools either skip translation entirely or bolt on generic, inaccurate translation APIs. LinkUp does real-time Hindi-English translation built specifically for Indian language patterns, including code-switched speech.',
    status: 'live',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    tech: ['React 18', 'Socket.IO', 'WebRTC', 'MediaPipe', 'Sarvam AI', 'Node.js', 'MongoDB Atlas', 'Gemini AI'],
    github: 'https://github.com/bandnikita1728/LinkUp',
    live: 'https://link-up-5r11.vercel.app/',
    docs: 'https://github.com/bandnikita1728/LinkUp#readme',
    demoVideo: '',
    loomUrl: '',
    architecture: `CLIENT (React)
 WebRTC Peer ─ MediaPipe Hands ─ AudioContext
        │            │                │
        └──────► Socket.IO Client ◄───┘
                    │
                 WebSocket
                    │
SERVER (Node.js + Express)
 Socket.IO Event Manager
   • offer/answer/ICE  • reactions
   • speaking          • captions
        │
   Sarvam AI (saaras:v3) ── MongoDB Atlas
   REST /translate-audio ── MyMemory API`,
    learned: [
      'Peer-to-peer WebRTC eliminates server-side video processing costs, but ICE candidate queuing is essential for restricted networks',
      'RMS energy VAD prevents Whisper-style hallucinated transcriptions on silence — far simpler than external VAD dependencies',
      "Sarvam AI's saaras:v3 handles Hindi-English code-switching dramatically better than generic translation APIs",
    ],
    knownLimitations:
      'Translation accuracy is strongest in quiet environments with clear speech; English-to-Indian-language translation via MyMemory API may occasionally mistranslate informal phrasing. Free-tier backend has a ~30s cold start on first load.',
  },
  {
    slug: 'devflow-ci',
    name: 'DevFlow CI',
    pitch: 'AI code reviewer posting inline GitHub PR comments in under 60 seconds',
    problem:
      'Code review is slow and inconsistent, and most AI review tools just dump generic comments. DevFlow CI gives structured, OWASP-referenced findings with severity levels and an AI-generated fix — inline, in under 60 seconds, as a real GitHub App bot. GitHub App that catches SQL injection, hardcoded secrets, unhandled promises, and OWASP-classified vulnerabilities — posting structured, severity-tagged inline comments directly on PR lines. TypeScript monorepo with async BullMQ processing, HMAC-validated webhooks, AES-256 encrypted OAuth tokens, and Grafana Cloud observability.',
    status: 'live',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    tech: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Redis', 'BullMQ', 'Gemini 2.5 Flash', 'Prisma', 'Grafana'],
    github: 'https://github.com/bandnikita1728/devflow_ci',
    live: 'https://devflow-ci-dashboard.onrender.com',
    docs: 'https://github.com/bandnikita1728/devflow_ci#readme',
    demoVideo: '',
    loomUrl: '',
    architecture: `GitHub PR Event
       │
       ▼
Webhook (HMAC-SHA256 validated)
       │
       ▼
API Gateway ──► Redis (BullMQ Queue)
  Auth + Webhook Handler   pr-review-queue
                            dead-letter-queue
       │                         │
       ▼                         ▼ consume
 PostgreSQL              Worker Service
 (Prisma)              1. Fetch diff (GitHub API)
                        2. Filter >50KB files
                        3. XML injection defense
                        4. Gemini 2.5 Flash
                        5. Post inline comments`,
    learned: [
      'Redis NX atomic idempotency locks prevent duplicate webhook processing without complex distributed locking',
      'Circuit breakers (opossum) and separate Redis instances for queue vs cache isolation were essential additions in v2 — not optional polish',
      'Wrapping AI input in XML boundary tags is a real, necessary defense against prompt injection in production LLM pipelines',
    ],
    wouldDoDifferently:
      "Circuit breakers, separate Redis instances, and per-user rate limiting were added in v2 after the fact. If I rebuilt this today, I'd design for graceful AI-provider failure and traffic isolation from day one instead of retrofitting them in.",
  },
  {
    slug: 'stock-trading',
    name: 'StockTradingPlatform',
    pitch: 'Full-stack Zerodha-style trading platform deployed end-to-end on AWS',
    problem:
      'Understanding trading platforms requires using one, not reading about one. Built a full Zerodha-style clone end-to-end — landing page, dashboard, backend, and live deployment — to learn the real architecture. Built to understand how real trading platforms work under the hood — React landing page through to a live Node.js backend on AWS EC2. Includes Holdings, Positions, Orders, Funds, live Indian stock prices via Alpha Vantage with 10-minute caching, JWT auth, and a full CloudFront/S3/EC2 deployment pipeline.',
    status: 'live',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'AWS S3', 'CloudFront', 'EC2', 'JWT', 'Jest'],
    github: 'https://github.com/bandnikita1728/StockTradingPlatform',
    live: 'https://d38jgk608zcs11.cloudfront.net',
    docs: 'https://github.com/bandnikita1728/StockTradingPlatform#readme',
    demoVideo: '',
    loomUrl: '',
    architecture: `React Frontend (S3 + CloudFront)
       │
React Dashboard (S3 + CloudFront)
       │  API calls (JWT)
       ▼
CloudFront (Backend HTTPS Proxy)
       │
   AWS EC2 (Node + Express, PM2)
       │
   MongoDB Atlas (Cluster0, ap-south-1)`,
    learned: [
      'JWT authentication flow end-to-end, including dynamic username extraction from token payload on the frontend',
      'Caching third-party API responses (Alpha Vantage, 10-min TTL) is necessary to avoid rate limits on free-tier financial data APIs',
      'Debugging CORS issues across three separately deployed CloudFront distributions taught more about production networking than any tutorial',
    ],
  },
  {
    slug: 'wanderlust',
    name: 'WanderLust',
    pitch: 'Airbnb-style vacation rental platform with live map search',
    problem:
      'First full-stack project combining auth, file uploads, geolocation, and real deployment in one app — the foundation that later projects built on. Full-stack platform for browsing and booking vacation properties — houses, villas, farmhouses — with user-submitted listings, Maptiler-based location search, Cloudinary image hosting, and Passport.js authentication. Custom teal/aqua beach-themed UI, MVC architecture, deployed on Render.',
    status: 'live',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    tech: ['Node.js', 'Express', 'MongoDB Atlas', 'EJS', 'Passport.js', 'Cloudinary', 'Maptiler', 'Bootstrap'],
    github: 'https://github.com/bandnikita1728/WanderLust_2',
    live: 'https://wanderlust-2-9w1e.onrender.com/',
    docs: 'https://github.com/bandnikita1728/WanderLust_2#readme',
    demoVideo: '',
    loomUrl: '',
    architecture: `EJS Templates (SSR, MVC)
       │
       ▼
 Express Router + Passport.js
       │
       ├──► MongoDB Atlas (listings + reviews + users)
       ├──► Cloudinary (image upload + hosting)
       └──► Maptiler (location search + mapping)`,
    learned: [
      'MVC architecture with EJS templating made server-side rendering faster to iterate on than a full SPA for a content-heavy site',
      'Cloudinary handles image optimization and hosting that would otherwise require significant custom infrastructure',
      'Session-based auth with Passport Local Mongoose simplified user management compared to building JWT auth from scratch',
    ],
  },
  {
    slug: 'portfolio-site',
    name: 'Personal Portfolio',
    pitch: 'This site — a gradient-studio styled portfolio built with Next.js and Framer Motion.',
    problem:
      'Needed a portfolio that reads as a confident, premium product rather than a static resume PDF, with an AI avatar as the centerpiece.',
    status: 'live',
    demoVideoThumbnail: '', // TODO: add demo video thumbnail
    live: 'https://nikitaband.dev',
    tech: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/bandnikita1728',
    architecture:
      'App Router-based Next.js site, fully static-renderable. Component-driven sections each own their data file. Framer Motion handles scroll-triggered entrance animations; Tailwind custom theme implements the glass/gradient design system.',
    learned: [
      'Implementing a consistent glass-morphism + gradient design system purely in Tailwind config',
      'Structuring data/content separately from presentation for easy future updates',
    ],
  },
]
