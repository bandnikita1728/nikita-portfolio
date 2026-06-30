'use client'

import FadeIn from './FadeIn'
import { cpPlatforms, cpTopics, cpLanguage, currentlyMastering } from '@/data/cp'

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> COMPETITIVE PROGRAMMING
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            CP Profile
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="grid sm:grid-cols-2 gap-5">
            {cpPlatforms.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <p className="font-poppins font-bold text-4xl gradient-text mb-1">{p.stat}</p>
                  <p className="font-inter text-white/55 text-[12.5px] mb-1">{p.statLabel}</p>
                  <p className="font-mono text-[12px] text-white/50 mb-4">Rating: {p.rating}</p>
                  <p className="font-poppins font-semibold text-white text-[15px] mb-1">{p.name}</p>
                  {p.handle && (
                    <p className="font-mono text-[12px] text-white/50 mb-1">{p.handle}</p>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-sm font-medium gradient-text"
                    >
                      View profile →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* RIGHT */}
          <FadeIn delay={0.16}>
            <div className="glass-card p-6 h-full">
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/50 mb-4">
                Strong Topics
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {cpTopics.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11.5px] text-white/75 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between py-3 border-t border-white/10">
                <span className="font-inter text-white/55 text-[13px]">Primary language</span>
                <span className="font-mono text-[12.5px] text-white/85">{cpLanguage}</span>
              </div>

              <div className="flex items-center gap-2 py-3 border-t border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-grad flex-shrink-0" />
                <span className="font-inter text-white/55 text-[13px]">Currently mastering:</span>
                <span className="font-inter text-white/85 text-[13px]">{currentlyMastering}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
