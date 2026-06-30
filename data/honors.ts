export interface Scholarship {
  title: string
  org: string
  type: 'honor' | 'scholarship' | 'certificate' | 'patent'
  year: string
  description: string
  level: string
  score?: string
  grade?: string
  rollNo?: string
  filingNumber?: string
  certNo?: string
  partner?: string
}

export const scholarships: Scholarship[] = [
  {
    title: 'Amazon Future Engineer Scholar',
    org: 'Amazon',
    type: 'scholarship',
    year: '2025',
    description: '', // intentionally empty, no description
    level: 'National',
  },
  {
    title: 'Foundation for Excellence Scholar',
    org: 'Foundation for Excellence',
    type: 'scholarship',
    year: '2024',
    description: 'Financial support and mentorship.',
    level: 'National',
  },
  {
    title: 'Amazon Future Engineer Bootcamp Phase 2 — Basics of Java and DSA',
    org: 'Amazon Future Engineer, in partnership with NavGurukul and Zuvy',
    type: 'certificate',
    year: 'Feb 2026',
    description: 'Completed a 10-month course covering Java fundamentals and DSA.',
    level: 'National',
  },
  {
    title: 'Amazon Future Engineer Bootcamp — Basics of Python and AI',
    org: 'Amazon Future Engineer, in partnership with NavGurukul and Zuvy',
    type: 'certificate',
    year: 'March 2025',
    description: 'Completed a 2-month course covering Python fundamentals and AI basics.',
    level: 'National',
  },
  {
    title: 'NPTEL Elite — Programming in Java',
    org: 'IIT Kharagpur',
    type: 'certificate',
    year: '2025',
    score: '90%',
    grade: 'Elite (Gold)',
    rollNo: 'NPTEL25CS110S458500344',
    description: '',
    level: 'National',
  },
  {
    title: 'NPTEL Elite — Privacy and Security in Online Social Media',
    org: 'IIIT Hyderabad',
    type: 'certificate',
    year: '2024',
    score: '76%',
    grade: 'Elite (Silver)',
    rollNo: 'NPTEL25CS79S547300356',
    description: '',
    level: 'National',
  },
  {
    title: 'FLY-Scholar (Finding the Leader in You)',
    org: 'Competitiveness Mindset Institute (CMI), USA',
    partner: 'Foundation for Excellence',
    type: 'certificate',
    year: 'July 2024',
    certNo: '299137228',
    description:
      'Completed a program developing conscientiousness, innovativeness, initiative-taking, perseverance, and problem-solving.',
    level: 'International',
  },
  {
    title: 'CSRL National Super 100, Delhi',
    org: 'CSRL',
    type: 'scholarship',
    year: '2023',
    description: 'Selected among top 100 students nationally for intensive preparation.',
    level: 'National',
  },
  {
    title: 'Dakshana Scholar',
    org: 'Dakshana Foundation',
    type: 'scholarship',
    year: '2020',
    description: 'Merit-based scholarship providing IIT/NIT preparation support.',
    level: 'National',
  },
  {
    title: 'Jawahar Navodaya Vidyalaya (JNV) Selection',
    org: 'Navodaya Vidyalaya Samiti, Govt. of India',
    type: 'honor',
    year: 'Jan 2015',
    description: 'National-level entrance examination, Class 6.',
    level: 'National',
  },
  {
    title: 'Patent Filed (IPR Submitted)',
    org: 'IIITDM Jabalpur IIC',
    type: 'patent',
    year: '2026',
    filingNumber: '', // TODO: fill in when available
    description:
      'Co-inventor of an automated vertical burger-making machine using Raspberry Pi, servo motors, and ultrasonic sensors. IPR form submitted, not yet granted.',
    level: 'Patent Filing (Pending)',
  },
]
