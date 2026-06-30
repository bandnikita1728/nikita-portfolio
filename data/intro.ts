export const personal = {
  name: 'Nikita Band',
  tagline: 'Building systems that ship.',
  gradientWord: 'ship.',
  role: 'Full-Stack & AI Systems Developer',
  college: 'PDPM IIITDM Jabalpur',
  branch: 'Electronics & Communication Engineering',
  batch: '2023–2027',
  class10: { percentage: '98', board: 'CBSE' },
  class12: { percentage: '91', board: 'CBSE' },
  cgpa: '', // TODO: fill in
  school: 'Jawahar Navodaya Vidyalaya',
  email: 'nikitaband635@gmail.com',
  github: 'https://github.com/bandnikita1728',
  linkedin: 'https://linkedin.com/in/nikita-band-122550289',
  resume: '/resume.pdf',

  avatarVideo: {
    url: '/avatar-loop.mp4', // TODO: replace with your AI avatar video
    type: 'mp4' as const, // "mp4" | "youtube" | "loom"
    loop: true,
    autoplay: true,
    muted: true,
    hasAudioToggle: true,
  },

  shortBio:
    'A self-taught and formally trained full-stack developer building production-grade AI systems. I focus on real deployment, clean architecture, and shipping things that work.',

  myJourney: {
    heading: 'My Journey',
    paragraphs: [
      "My journey has always been shaped by earning opportunities through merit. I began at Jawahar Navodaya Vidyalaya, where I was selected through a national-level entrance examination in Class 6. During high school, I qualified as a Dakshana Foundation Scholar, and later earned a place in CSRL National Super 100, Delhi, where I prepared in a highly competitive environment alongside some of India's most dedicated JEE aspirants. I have also been an Amazon Future Engineer (AFE) Scholar, an experience that broadened my perspective and strengthened my adaptability.",
      'These experiences taught me resilience, discipline, and the ability to thrive in challenging environments long before I started writing code. Today, I bring that same mindset to software engineering—building scalable full-stack applications, solving real-world problems, and continuously learning new technologies. I believe that consistent growth, curiosity, and execution are what transform opportunities into impact.',
    ],
  },
}

export const meritTimeline = [
  { label: 'JNV Selected', year: 'Jan 2015' },
  { label: 'Dakshana Scholar', year: '2020' },
  { label: 'Foundation for Excellence Scholar', year: '2024' },
  { label: 'CSRL Super 100, Delhi', year: '2023' },
  { label: 'IIITDM Jabalpur', year: '2023' },
  { label: 'Amazon Future Engineer Scholar', year: '2025' },
]

export const aboutHighlights = [
  {
    icon: 'GraduationCap',
    title: 'Amazon Future Engineer Scholar',
    subtitle: 'National scholarship',
  },
  {
    icon: 'Trophy',
    title: 'IIT Roorkee Cognizance Finalist',
    subtitle: 'Hackathon 2024',
  },
  {
    icon: 'FileText',
    title: 'Patent Filing in Progress',
    subtitle: 'IIITDM IIC · Co-inventor',
  },
  {
    icon: 'Rocket',
    title: 'DEF-Space Winter Intern',
    subtitle: 'BSERC · ISRO-affiliated',
  },
]
