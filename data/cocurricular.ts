export interface LeadershipRole {
  title: string
  org: string
  duration: string
  points: string[]
}

export interface ActivityChip {
  icon: string
  name: string
  result: string
  year: string
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: 'Technical Lead',
    org: 'IIITDM Jabalpur Coding Club',
    duration: '2024 – Present',
    points: [
      'Lead a team of 12 students organizing weekly DSA workshops and contests.',
      'Mentored juniors preparing for their first competitive programming contests.',
    ],
  },
  {
    title: 'Core Team Member',
    org: 'Innovation & Incubation Cell (IIC), IIITDM Jabalpur',
    duration: '2023 – Present',
    points: [
      'Supported patent filing process and early-stage student innovation projects.',
    ],
  },
  {
    title: 'FLY-Scholar (Finding the Leader in You)',
    org: 'Competitiveness Mindset Institute (CMI), USA · Foundation for Excellence',
    duration: 'Issued July 2024',
    points: [
      'Completed a structured leadership program developing conscientiousness, innovativeness, initiative-taking, perseverance, and problem-solving through a mindset-change framework.',
      'Certificate No. 299137228',
    ],
  },
]

export const activityChips: ActivityChip[] = [
  { icon: 'Trophy', name: 'Cognizance Hackathon, IIT Roorkee', result: 'Finalist', year: '2024' },
  { icon: 'Code2', name: 'Smart India Hackathon', result: 'Participant', year: '2024' },
  { icon: 'Users', name: 'Coding Club Workshops', result: 'Organizer', year: '2024' },
  { icon: 'Mic', name: 'Tech Fest — Technical Talk', result: 'Speaker', year: '2025' },
]
