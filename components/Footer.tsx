export default function Footer() {
  const now = new Date()
  const month = now.toLocaleString('en-US', { month: 'long' })
  const year = now.getFullYear()

  return (
    <footer className="bg-bg-deep py-8 px-6 text-center border-t border-white/[0.06]">
      <p className="font-inter text-white/40 text-[13px]">
        Nikita Band · ECE · PDPM IIITDM Jabalpur · 2023–2027 · Last updated: {month} {year}
      </p>
    </footer>
  )
}
