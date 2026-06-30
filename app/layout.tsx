import type { Metadata } from 'next'
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jbmono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nikitaband.dev'),
  title: 'Nikita Band — Full-Stack & AI Systems Developer',
  description:
    'Nikita Band is a full-stack and AI systems developer at PDPM IIITDM Jabalpur, building production-grade systems that ship.',
  openGraph: {
    title: 'Nikita Band — Full-Stack & AI Systems Developer',
    description:
      'Building systems that ship. Full-stack and AI systems developer at PDPM IIITDM Jabalpur.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikita Band — Full-Stack & AI Systems Developer',
    description: 'Building systems that ship.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="bg-bg-deep font-inter antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
