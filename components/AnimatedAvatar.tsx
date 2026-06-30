'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

const mouthShapes = {
  closed: 'M -16 0 Q 0 6 16 0',
  small: 'M -14 0 Q 0 10 14 0 Q 0 14 -14 0',
  open: 'M -15 -2 Q 0 16 15 -2 Q 0 20 -15 -2',
  wide: 'M -17 1 Q 0 9 17 1',
} as const

const talkCycle: (keyof typeof mouthShapes)[] = ['small', 'open', 'wide', 'small', 'open']

const scriptLines = [
  { t: 0, text: "Hi, I'm Nikita Band." },
  { t: 2200, text: 'Final-year ECE student at IIITDM Jabalpur.' },
  { t: 5200, text: 'I build full-stack, AI-powered systems,' },
  { t: 8000, text: "and I've solved 300+ problems on LeetCode along the way." },
  { t: 11500, text: "I'm looking for SDE and full-stack roles —" },
  { t: 14000, text: "take a look at what I've built." },
]

export default function AnimatedAvatar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentCaption, setCurrentCaption] = useState('')
  const [blinking, setBlinking] = useState(false)
  const [mouthPath, setMouthPath] = useState<string>(mouthShapes.closed)

  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const mouthIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    blinkIntervalRef.current = setInterval(() => {
      if (Math.random() < 0.6) {
        setBlinking(true)
        const t = setTimeout(() => setBlinking(false), 140)
        timeoutsRef.current.push(t)
      }
    }, 2600)

    return () => {
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current)
      if (mouthIntervalRef.current) clearInterval(mouthIntervalRef.current)
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

  const stopPlayback = () => {
    if (mouthIntervalRef.current) {
      clearInterval(mouthIntervalRef.current)
      mouthIntervalRef.current = null
    }
    setMouthPath(mouthShapes.closed)
    setCurrentCaption('')
    setIsPlaying(false)
  }

  const handlePlay = () => {
    if (isPlaying) return
    setIsPlaying(true)

    mouthIntervalRef.current = setInterval(() => {
      const shape = talkCycle[Math.floor(Math.random() * talkCycle.length)]
      setMouthPath(mouthShapes[shape])
    }, 130)

    scriptLines.forEach((line) => {
      const t = setTimeout(() => setCurrentCaption(line.text), line.t)
      timeoutsRef.current.push(t)
    })

    const endTimer = setTimeout(() => {
      stopPlayback()
    }, 16500)
    timeoutsRef.current.push(endTimer)
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="relative" style={{ aspectRatio: '3 / 4' }}>
        {/* glow */}
        <div
          className="absolute opacity-50 blur-[60px] z-0"
          style={{
            inset: '-50px',
            backgroundImage:
              'radial-gradient(circle at 50% 40%, #C13584 0%, #5B2A86 35%, #1A0E2E 70%)',
          }}
        />

        {/* frame */}
        <div
          className="relative z-10 w-full h-full rounded-[32px] overflow-hidden border-2 shadow-2xl"
          style={{
            borderColor: 'rgba(255,255,255,0.15)',
            backgroundImage: 'linear-gradient(160deg, #2A1B47, #1A0E2E)',
          }}
        >
          {/* badge */}
          <div className="absolute top-4 right-4 z-20 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-bg-magenta animate-pulse" />
            <span className="font-mono text-[10px] text-white/80 tracking-wide">
              Animated avatar
            </span>
          </div>

          {/* character */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[78%] avatar-bob">
            <svg
              viewBox="0 0 300 420"
              role="img"
              aria-label="Animated illustrated avatar of Nikita Band"
              className="w-full h-auto block"
            >
              <defs>
                <linearGradient id="blazerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3A2560" />
                  <stop offset="100%" stopColor="#1A0E2E" />
                </linearGradient>
                <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2C1B3D" />
                  <stop offset="100%" stopColor="#150C22" />
                </linearGradient>
                <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E8B594" />
                  <stop offset="100%" stopColor="#D89C78" />
                </linearGradient>
              </defs>

              {/* hair back layer */}
              <ellipse cx="150" cy="150" rx="92" ry="100" fill="url(#hairGrad)" />

              {/* shoulders / blazer */}
              <path
                d="M 40 420 Q 50 300 150 290 Q 250 300 260 420 Z"
                fill="url(#blazerGrad)"
              />
              {/* collar / inner top */}
              <path d="M 120 300 L 150 340 L 180 300 L 150 312 Z" fill="#F4ECE2" />

              {/* neck */}
              <rect x="132" y="240" width="36" height="60" rx="8" fill="url(#skinGrad)" />

              {/* ears */}
              <ellipse cx="98" cy="200" rx="9" ry="14" fill="url(#skinGrad)" />
              <ellipse cx="202" cy="200" rx="9" ry="14" fill="url(#skinGrad)" />

              {/* head */}
              <ellipse cx="150" cy="190" rx="70" ry="80" fill="url(#skinGrad)" />

              {/* hair top layer */}
              <path
                d="M 80 170 Q 70 90 150 80 Q 230 90 220 170 Q 220 130 150 120 Q 80 130 80 170 Z"
                fill="url(#hairGrad)"
              />

              {/* eyebrows */}
              <path d="M 112 158 Q 124 150 138 156" stroke="#2C1B22" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 162 156 Q 176 150 188 158" stroke="#2C1B22" strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* eyes */}
              <g>
                <ellipse cx="124" cy="178" rx="8" ry="8" fill="#2C1B22" />
                <circle cx="126" cy="175" r="2.4" fill="#fff" />
                <rect
                  x="114"
                  y="170"
                  width="20"
                  height={blinking ? 14 : 0}
                  fill="url(#skinGrad)"
                  style={{ transition: 'height 70ms ease' }}
                />
              </g>
              <g>
                <ellipse cx="176" cy="178" rx="8" ry="8" fill="#2C1B22" />
                <circle cx="178" cy="175" r="2.4" fill="#fff" />
                <rect
                  x="166"
                  y="170"
                  width="20"
                  height={blinking ? 14 : 0}
                  fill="url(#skinGrad)"
                  style={{ transition: 'height 70ms ease' }}
                />
              </g>

              {/* nose */}
              <path d="M 148 188 Q 144 204 150 208" stroke="#C98A66" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* mouth */}
              <g transform="translate(150,232)">
                <path d={mouthPath} fill="#A9504F" stroke="#7A332F" strokeWidth="1.5" />
              </g>

              {/* necklace */}
              <path d="M 130 305 Q 150 320 170 305" stroke="#E0C46C" strokeWidth="2.5" fill="none" />
              <circle cx="150" cy="320" r="4" fill="#E0C46C" />
            </svg>
          </div>

          {/* waveform */}
          <div
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6 transition-opacity duration-200 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-accent-grad waveform-bar"
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </div>

          {/* caption */}
          <div
            aria-live="polite"
            className="absolute bottom-5 left-0 right-0 px-5 text-center"
          >
            <p
              className="font-inter text-white text-[13px] leading-snug min-h-[1.5em]"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
            >
              {currentCaption}
            </p>
          </div>

          {/* play button */}
          <button
            onClick={handlePlay}
            aria-label="Play introduction"
            className={`absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="w-16 h-16 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors">
              <Play size={22} className="text-white ml-1" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .avatar-bob {
          animation: idleBob 3.2s ease-in-out infinite;
        }
        @keyframes idleBob {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -6px);
          }
        }
        .waveform-bar {
          height: 30%;
          animation: wavePulse 700ms ease-in-out infinite;
        }
        @keyframes wavePulse {
          0%,
          100% {
            height: 20%;
          }
          50% {
            height: 100%;
          }
        }
      `}</style>
    </div>
  )
}
