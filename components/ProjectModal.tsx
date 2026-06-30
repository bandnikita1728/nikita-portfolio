'use client'

import { X, Github, ExternalLink, FileText, Film } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectModal({
  project,
  onClose,
  initialSection,
}: {
  project: Project
  onClose: () => void
  initialSection?: 'demo'
}) {
  // demo video is rendered first regardless of initialSection, so no scroll logic is needed
  void initialSection
  return (
    <div
      className="fixed inset-0 z-[100] bg-[rgba(10,5,20,0.75)] backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[700px] my-8 rounded-[24px] border border-white/15 bg-[#1f1230] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-colors"
        >
          <X size={16} />
        </button>

        <h3 className="font-poppins font-bold text-2xl text-white mb-2 pr-10">{project.name}</h3>
        <p className="font-inter text-white/65 text-sm mb-6">{project.pitch}</p>

        {project.demoVideo ? (
          <div className="mb-6 rounded-2xl overflow-hidden glass aspect-video">
            <video src={project.demoVideo} controls className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="mb-6 rounded-2xl overflow-hidden glass aspect-video flex flex-col items-center justify-center gap-2">
            <Film size={24} className="text-white/40" />
            <p className="font-inter text-white/40 text-sm">Demo coming soon</p>
          </div>
        )}

        <p className="font-inter text-white/75 text-[13px] leading-relaxed mb-6 glass-card p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
            Problem
          </span>
          {project.problem}
        </p>

        {project.loomUrl && (
          <div className="mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
              Architect&apos;s tour
            </span>
            <a
              href={project.loomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Watch walkthrough →
            </a>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <Github size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <FileText size={15} /> Docs
            </a>
          )}
        </div>

        <div className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
            Architecture
          </span>
          <div className="glass-card p-4 border-l-2 border-l-transparent relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ backgroundImage: 'linear-gradient(180deg, #4FACFE, #A78BFA)' }}
            />
            <p className="font-mono text-[12.5px] text-white/70 leading-relaxed pl-2">
              {project.architecture}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
            What I learned
          </span>
          <ul className="space-y-2">
            {project.learned.map((l, i) => (
              <li key={i} className="flex items-start gap-2.5 font-inter text-white/70 text-[13px]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-grad flex-shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </div>

        {project.knownLimitations && (
          <div className="mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
              // known limitations
            </span>
            <p className="font-inter text-white/55 text-[13px] leading-relaxed">
              {project.knownLimitations}
            </p>
          </div>
        )}

        {project.wouldDoDifferently && (
          <div className="mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-2">
              // if I rebuilt this
            </span>
            <p className="font-inter text-white/60 text-[13px] italic leading-relaxed">
              {project.wouldDoDifferently}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-white/70 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {project.rating && (
          <p className="mt-4 font-poppins font-bold text-3xl gradient-text">{project.rating}</p>
        )}
      </div>
    </div>
  )
}
