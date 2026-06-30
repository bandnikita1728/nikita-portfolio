'use client'

import FadeIn from './FadeIn'
import { personal, meritTimeline } from '@/data/intro'

const sortedMeritTimeline = [...meritTimeline].sort((a, b) => {
  const yearA = parseInt(a.year.match(/\d{4}/)?.[0] || '0', 10)
  const yearB = parseInt(b.year.match(/\d{4}/)?.[0] || '0', 10)
  return yearA - yearB
})

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> WHO I AM
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            {personal.myJourney.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-5 max-w-3xl">
            {personal.myJourney.paragraphs.map((p, i) => (
              <p key={i} className="font-inter text-white/75 text-base leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          {/* merit ladder */}
          <div className="mt-10 relative">
            <div className="absolute top-[7px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="flex justify-between gap-2">
              {sortedMeritTimeline.map((node) => (
                <div key={node.label} className="flex flex-col items-center text-center flex-1">
                  <span className="w-[10px] h-[10px] rounded-full bg-accent-grad mb-3 z-10" />
                  <span className="font-mono text-[10px] text-white/60 uppercase tracking-wide leading-tight">
                    {node.label}
                  </span>
                  <span className="font-mono text-[9px] text-white/35 mt-1 leading-tight hidden sm:block">
                    {node.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
