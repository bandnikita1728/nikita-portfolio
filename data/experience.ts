export interface ExperienceItem {
  role: string
  org: string
  duration: string
  location: string
  points: string[]
  tags?: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack MERN Developer Intern',
    org: 'Wallpull Solution Pvt. Ltd.',
    duration: 'Nov 2025 – Jan 2026',
    location: 'Remote',
    points: [
      'Architected 6+ reusable React component libraries with Context API-driven state management, cutting prop-drilling by ~60% across 3 sustainability research dashboards',
      'Integrated 12 RESTful API endpoints enabling real-time data sync; reduced client-server round-trips by 35% through request batching and debounced calls',
      'Engineered Node.js/Express middleware pipeline with JWT authentication, role-based access control, and input validation — eliminating a critical auth bypass vulnerability',
      'Refactored 8 class components to React Hooks + memoization, reducing unnecessary re-renders by ~40% and improving Lighthouse performance score from 64 to 89',
      'Shipped 4 full-stack features end-to-end in 2-week sprints collaborating with a cross-functional team of 5 engineers using Git-based code review workflows',
    ],
    tags: ['React', 'Context API', 'Node.js', 'Express', 'JWT', 'REST APIs', 'Performance Optimization'],
  },
  {
    role: 'DEF-Space Winter Intern — Space Entrepreneurship Track',
    org: 'Bharat Space Education Research Centre (BSERC), affiliated with ISRO',
    duration: 'Dec 19, 2025 – Jan 19, 2026',
    location: 'Remote / On-site',
    points: [
      'Selected for the DEF-Space Winter Internship, aligned with the Viksit Bharat Abhiyan @2047 vision of delivering STEM technology at the grassroots level.',
      'Completed training sessions under the Space Entrepreneurship track, covering business opportunities and innovative solutions within the space sector.',
    ],
  },
  {
    role: 'Full-Stack Developer (Self-directed projects)',
    org: 'Independent',
    duration: '2023 – Present',
    location: 'Jabalpur, India',
    points: [
      'Designed and shipped LinkUp, a real-time video conferencing platform with AI translation and ML gesture detection using WebRTC and Socket.IO.',
      'Built DevFlow CI, an AI code reviewer posting inline GitHub PR comments in under 60 seconds using Gemini 2.5 Flash and BullMQ.',
      'Maintained a public GitHub presence with consistent commit history across multiple production-style projects.',
    ],
  },
]
