'use client'

import FadeIn from './FadeIn'
import { skillGroups, skillsNote, type Proficiency } from '@/data/skills'

const badgeClass: Record<Proficiency, string> = {
  Primary: 'bg-accent-grad text-white',
  Proficient: 'border border-white/30 text-white/80',
  Familiar: 'border border-white/15 text-white/50',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> WHAT I WORK WITH
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            Skills
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((g, gi) => (
            <FadeIn key={g.group} delay={gi * 0.08}>
              <div>
                <h3 className="gradient-text font-mono text-xs uppercase tracking-wider font-semibold mb-4">
                  {g.group}
                </h3>
                <div className="flex flex-col gap-2">
                  {g.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between glass rounded-full pl-4 pr-1.5 py-1.5"
                    >
                      <span className="font-mono text-[12.5px] text-white/80">{s.name}</span>
                      <span
                        className={`font-mono text-[9.5px] uppercase tracking-wide rounded-full px-2.5 py-1 ${badgeClass[s.level]}`}
                      >
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="font-inter italic text-white/40 text-xs mt-10 max-w-xl">{skillsNote}</p>
      </div>
    </section>
  )
}
