'use client'

import FadeIn from './FadeIn'
import { scholarships } from '@/data/honors'

export default function Honors() {
  return (
    <section id="honors" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> RECOGNITION
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            Honors &amp; Scholarships
          </h2>
        </FadeIn>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {scholarships.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.06}>
              <div className="glass-card p-5 h-full relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundImage: 'linear-gradient(90deg, #4FACFE, #A78BFA)' }}
                />
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-poppins font-semibold text-white text-[15px] pr-2">
                    {h.title}
                  </h3>
                  <span className="font-mono text-[11px] text-white/40 flex-shrink-0">{h.year}</span>
                </div>
                <p className="font-inter text-white/60 text-[13px] mb-2">{h.org}</p>
                {h.description && (
                  <p className="font-inter text-white/65 text-[13px] leading-relaxed">{h.description}</p>
                )}

                {(h.score || h.grade || h.rollNo) && (
                  <p className="font-mono text-[11px] text-white/50 mt-3">
                    {[h.grade, h.score, h.rollNo].filter(Boolean).join(' · ')}
                  </p>
                )}

                {h.certNo && (
                  <p className="font-mono text-[11px] text-white/50 mt-3">
                    Certificate No. {h.certNo}
                    {h.partner ? ` · ${h.partner}` : ''}
                  </p>
                )}

                {h.type === 'patent' && (
                  <p className="font-mono text-[11px] text-white/50 mt-3">
                    {h.level}
                    {h.filingNumber ? ` · Filing No. ${h.filingNumber}` : ''}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
