'use client'

import FadeIn from './FadeIn'
import { skillGroups } from '@/data/skills'

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
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s.name}
                      className="glass rounded-full px-4 py-1.5 font-mono text-[12.5px] text-white/80"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
