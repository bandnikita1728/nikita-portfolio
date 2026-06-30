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
    title: 'FLY-Scholar (Finding the Leader in You)',
    org: 'Competitiveness Mindset Institute (CMI), USA · Foundation for Excellence',
    duration: 'Issued July 2024',
    points: [
      'Completed a structured leadership program developing conscientiousness, innovativeness, initiative-taking, perseverance, and problem-solving through a mindset-change framework.',
      'Certificate No. 299137228',
    ],
  },
  {
    title: 'FLY Internship',
    org: 'Competitiveness Mindset Institute (CMI), USA',
    duration: 'May 2025 · Remote',
    points: [
      'Outreach internship practicing leadership and non-cognitive skills — taking initiative, innovativeness, perseverance, and problem solving through community and social media outreach.',
      'Certificate of Experience',
    ],
  },
]

export const activityChips: ActivityChip[] = [
  { icon: 'Trophy', name: 'Cognizance Hackathon, IIT Roorkee', result: 'Finalist', year: '2024' },
  { icon: 'Code2', name: 'Smart India Hackathon', result: 'Participant', year: '2024' },
]
