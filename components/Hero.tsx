'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, Volume2, VolumeX, Maximize2, X } from 'lucide-react'
import { personal } from '@/data/intro'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const academicParts = [personal.college, personal.branch, personal.batch].filter(Boolean)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* radial glow */}
      <div
        className="absolute inset-0 -z-10 opacity-80 blur-3xl"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 35%, #C13584 0%, #5B2A86 35%, #1A0E2E 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <p className="text-white/70 font-inter text-base mb-3">Hi, I&apos;m</p>
          <h1 className="font-poppins font-bold text-5xl sm:text-6xl text-white mb-4 leading-tight">
            {personal.name}
          </h1>
          <p className="font-poppins font-bold text-3xl sm:text-4xl mb-5 leading-snug">
            <span className="text-white">
              {personal.tagline.replace(personal.gradientWord, '')}
            </span>
            <span className="gradient-text">{personal.gradientWord}</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8 font-inter text-[13px] text-white/50">
            {academicParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/30">·</span>}
                {part}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#contact" className="btn-primary">
              Contact me
            </a>
            <a href="#work" className="btn-secondary">
              View work →
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.resume}
              download
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Download resume"
            >
              <FileDown size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-[420px] aspect-[4/5]"
        >
          <div className="relative w-full h-full rounded-[32px] overflow-hidden glass shadow-2xl">
            <video
              src="/avatar-loop.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls={false}
              className="w-full h-full object-cover rounded-[32px]"
            />

            {/* badge */}
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-bg-magenta animate-pulse" />
              <span className="font-mono text-[10px] text-white/80 tracking-wide">
                AI-generated avatar
              </span>
            </div>

            {/* audio toggle */}
            <button
              onClick={() => setIsMuted((m) => !m)}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* expand */}
            <button
              onClick={() => setExpanded(true)}
              aria-label="Expand video"
              className="absolute bottom-4 left-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setExpanded(false)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <video
              src="/avatar-loop.mp4"
              loop
              autoPlay
              muted={isMuted}
              playsInline
              controls
              className="w-full rounded-2xl"
            />
            <button
              onClick={() => setExpanded(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
