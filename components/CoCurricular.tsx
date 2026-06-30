'use client'

import { Trophy, Code2, Users, Mic } from 'lucide-react'
import FadeIn from './FadeIn'
import { leadershipRoles, activityChips } from '@/data/cocurricular'

const icons: Record<string, React.ElementType> = { Trophy, Code2, Users, Mic }

export default function CoCurricular() {
  return (
    <section id="co-curricular" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> CAMPUS LIFE
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            Beyond the terminal
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {leadershipRoles.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.08}>
              <div className="glass-card p-6 relative overflow-hidden pl-7">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ backgroundImage: 'linear-gradient(180deg, #4FACFE, #A78BFA)' }}
                />
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-poppins font-semibold text-white text-[15px]">{r.title}</h3>
                  <span className="font-mono text-[11px] text-white/40">{r.duration}</span>
                </div>
                <p className="font-inter text-white/55 text-[13px] mb-3">{r.org}</p>
                <ul className="space-y-1.5">
                  {r.points.map((pt, j) => (
                    <li key={j} className="font-inter text-white/65 text-[12.5px] leading-relaxed">
                      • {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {activityChips.map((a) => {
              const Icon = icons[a.icon] || Trophy
              return (
                <div
                  key={a.name}
                  className="glass rounded-2xl px-5 py-4 flex items-center gap-3 flex-shrink-0 min-w-[220px]"
                >
                  <Icon size={18} className="text-bg-blue flex-shrink-0" />
                  <div>
                    <p className="font-inter text-white/85 text-[13px] font-medium leading-tight">
                      {a.name}
                    </p>
                    <p className="font-mono text-[10.5px] text-white/45 mt-1">
                      {a.result} · {a.year}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
