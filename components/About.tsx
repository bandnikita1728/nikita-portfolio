'use client'

import { GraduationCap, Trophy, FileText, Rocket } from 'lucide-react'
import FadeIn from './FadeIn'
import { personal, meritTimeline, aboutHighlights } from '@/data/intro'

const icons: Record<string, React.ElementType> = {
  GraduationCap,
  Trophy,
  FileText,
  Rocket,
}

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
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

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {aboutHighlights.map((h, i) => {
              const Icon = icons[h.icon] || GraduationCap
              return (
                <FadeIn key={h.title} delay={0.1 + i * 0.08}>
                  <div className="glass-card p-5 h-full">
                    <div className="w-10 h-10 rounded-full bg-accent-grad flex items-center justify-center mb-4">
                      <Icon size={18} className="text-white" />
                    </div>
                    <p className="font-poppins font-semibold text-white text-[15px] mb-1">
                      {h.title}
                    </p>
                    <p className="font-inter text-white/55 text-[13px]">{h.subtitle}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
