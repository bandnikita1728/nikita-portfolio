'use client'

import FadeIn from './FadeIn'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> WHERE I&apos;VE WORKED
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {experience.map((e, i) => (
            <FadeIn key={e.role + e.org} delay={i * 0.08}>
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-poppins font-semibold text-white text-[17px]">{e.role}</h3>
                  <span className="font-mono text-[11px] text-white/40">{e.duration}</span>
                </div>
                <p className="font-inter text-white/55 text-[13px] mb-4">
                  {e.org} · {e.location}
                </p>
                <ul className="space-y-2">
                  {e.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 font-inter text-white/70 text-[13.5px] leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-grad flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
