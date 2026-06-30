export interface ExperienceItem {
  role: string
  org: string
  duration: string
  location: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'DEF-Space Winter Intern — Space Entrepreneurship Track',
    org: 'Bharat Space Education Research Centre (BSERC), affiliated with ISRO',
    duration: 'Dec 19, 2025 – Jan 19, 2026',
    location: 'Remote / On-site',
    points: [
      'Selected for the DEF-Space Winter Internship, aligned with the Viksit Bharat Abhiyan @2047 vision of delivering STEM technology at the grassroots level.',
      'Completed training sessions under the Space Entrepreneurship track, covering business opportunities and innovative solutions within the space sector.',
      // TODO: project report summary — fill in once details shared
    ],
  },
  {
    role: 'Full-Stack Developer (Self-directed projects)',
    org: 'Independent',
    duration: '2023 – Present',
    location: 'Jabalpur, India',
    points: [
      'Designed and shipped ResumeRadar AI, a recruiter-facing resume screening tool using LLM-based matching.',
      'Built a real-time video conferencing platform from scratch using WebRTC and Socket.IO.',
      'Maintained a public GitHub presence with consistent commit history across multiple production-style projects.',
    ],
  },
]
