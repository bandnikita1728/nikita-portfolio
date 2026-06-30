'use client'

import { useState } from 'react'
import { Github, ExternalLink, Play, Film } from 'lucide-react'
import FadeIn from './FadeIn'
import ProjectModal from './ProjectModal'
import { projects, type Project, type ProjectStatus } from '@/data/projects'

const statusMeta: Record<ProjectStatus, { label: string; dot: string }> = {
  live: { label: 'Live', dot: 'bg-green-400' },
  building: { label: 'Building', dot: 'bg-bg-blue animate-pulse' },
  hackathon: { label: 'Hackathon', dot: 'bg-bg-blue' },
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [toast, setToast] = useState(false)

  const showToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 2200)
  }

  return (
    <section id="work" className="relative py-24 px-6 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="section-label mb-4">
            <span className="dot" /> WHAT I&apos;VE BUILT
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-4 mb-12">
            Projects
          </h2>
        </FadeIn>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {projects.map((p, i) => {
            const meta = statusMeta[p.status]
            return (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video w-full">
                    {p.demoVideoThumbnail ? (
                      <button
                        onClick={() => setActive(p)}
                        className="group relative w-full h-full block"
                        aria-label={`Play ${p.name} demo`}
                      >
                        <img
                          src={p.demoVideoThumbnail}
                          alt={`${p.name} demo thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                          <span className="w-12 h-12 rounded-full glass flex items-center justify-center">
                            <Play size={18} className="text-white ml-0.5" />
                          </span>
                        </div>
                        <span className="absolute bottom-3 left-3 glass rounded-full px-2.5 py-1 flex items-center gap-1 text-[10px] font-mono text-white/80">
                          ▶ Demo
                        </span>
                      </button>
                    ) : (
                      <button
                        onClick={showToast}
                        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/[0.03]"
                        aria-label="Demo video coming soon"
                      >
                        <Film size={20} className="text-white/30" />
                        <span className="font-inter text-white/40 text-xs">Demo coming soon</span>
                      </button>
                    )}

                    <div className="absolute top-3 left-3">
                      <span className="glass rounded-full px-3 py-1 flex items-center gap-1.5 text-[11px] font-mono text-white/70">
                        <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                        {meta.label}
                      </span>
                    </div>
                    {p.rating && (
                      <div className="absolute top-3 right-3">
                        <span className="glass rounded-full px-2.5 py-1 font-mono text-xs gradient-text font-semibold">
                          {p.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-poppins font-semibold text-white text-[18px] mb-2">{p.name}</h3>
                  <p className="font-inter text-white/60 text-[13px] mb-4 flex-grow">{p.pitch}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] text-white/70 bg-white/[0.05] border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.06]">
                    <button
                      onClick={() => setActive(p)}
                      className="font-inter text-sm font-medium gradient-text"
                    >
                      Details →
                    </button>
                    <div className="flex items-center gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} GitHub`}
                          className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} live link`}
                          className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} initialSection="demo" />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] glass rounded-full px-5 py-2.5 font-inter text-sm text-white shadow-xl">
          Demo video coming soon
        </div>
      )}
    </section>
  )
}
