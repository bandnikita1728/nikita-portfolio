export type Proficiency = 'Primary' | 'Proficient' | 'Familiar'

export interface SkillGroup {
  group: string
  skills: { name: string; level: Proficiency }[]
}

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    skills: [
      { name: 'C++', level: 'Primary' },
      { name: 'JavaScript', level: 'Primary' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'C', level: 'Proficient' },
      { name: 'SQL', level: 'Familiar' },
    ],
  },
  {
    group: 'Frontend',
    skills: [
      { name: 'React', level: 'Primary' },
      { name: 'Next.js', level: 'Primary' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'Framer Motion', level: 'Familiar' },
      { name: 'HTML/CSS', level: 'Proficient' },
    ],
  },
  {
    group: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Primary' },
      { name: 'Express', level: 'Primary' },
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Familiar' },
      { name: 'Socket.IO', level: 'Proficient' },
      { name: 'REST APIs', level: 'Primary' },
    ],
  },
  {
    group: 'AI & ML Integration',
    skills: [
      { name: 'OpenAI API', level: 'Proficient' },
      { name: 'Prompt Engineering', level: 'Proficient' },
      { name: 'Embeddings & RAG', level: 'Familiar' },
      { name: 'LangChain', level: 'Familiar' },
    ],
  },
  {
    group: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub', level: 'Primary' },
      { name: 'Vercel', level: 'Proficient' },
      { name: 'Docker', level: 'Familiar' },
      { name: 'Linux', level: 'Proficient' },
      { name: 'Postman', level: 'Proficient' },
    ],
  },
]

export const skillsNote =
  "Proficiency is self-rated and honest, not inflated for a resume scan — 'Familiar' means I've shipped with it at least once, not just read the docs."
