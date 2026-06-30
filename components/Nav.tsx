'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Honors', href: '#honors' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = '#home'
      for (const link of links) {
        const el = document.querySelector(link.href)
        if (el) {
          const rect = (el as HTMLElement).getBoundingClientRect()
          if (rect.top <= 120) current = link.href
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-4 sm:mx-6">
      <div className="glass mx-auto max-w-5xl rounded-[20px] px-5 py-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleClick('#home')}
            className="flex items-center gap-2 font-poppins font-bold text-white text-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent-grad" />
            NB
          </button>

          {/* diagonal divider accent */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent rotate-12" />

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative font-inter text-sm font-medium pb-1 transition-colors ${
                  active === link.href ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent-grad rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 flex flex-col gap-1 pb-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-left px-2 py-2 rounded-lg text-sm font-inter ${
                  active === link.href ? 'text-white bg-white/10' : 'text-white/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
