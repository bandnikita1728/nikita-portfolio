'use client'

import { Mail, Github, Linkedin, FileDown } from 'lucide-react'
import FadeIn from './FadeIn'
import { personal } from '@/data/intro'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-70 blur-3xl"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 35%, #C13584 0%, #5B2A86 35%, #1A0E2E 70%)',
        }}
      />

      <FadeIn className="max-w-2xl mx-auto">
        <div className="glass rounded-[28px] p-10 sm:p-14 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
            Let&apos;s build <span className="gradient-text">something.</span>
          </h2>
          <p className="font-inter text-white/65 text-base mb-8 max-w-md mx-auto">
            Open to internships, collaborations, and interesting full-stack or AI systems
            problems. I usually respond within a day.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              <Mail size={16} /> Email me
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
            <a href={personal.resume} download className="btn-secondary">
              <FileDown size={16} /> Resume
            </a>
          </div>

          <p className="font-mono text-[11px] text-white/40 uppercase tracking-wide">
            Currently available · Jabalpur, India · Batch {personal.batch}
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
