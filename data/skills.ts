export interface SkillGroup {
  group: string
  skills: { name: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    skills: [
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C' },
      { name: 'SQL' },
    ],
  },
  {
    group: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    group: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Socket.IO' },
      { name: 'REST APIs' },
    ],
  },
  {
    group: 'AI & ML Integration',
    skills: [
      { name: 'Gemini API' },
      { name: 'Sarvam AI' },
      { name: 'Prompt Engineering' },
      { name: 'Embeddings & RAG' },
    ],
  },
  {
    group: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub' },
      { name: 'Vercel' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Postman' },
    ],
  },
]
