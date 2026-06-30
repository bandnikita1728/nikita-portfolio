import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Honors from '@/components/Honors'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import CoCurricular from '@/components/CoCurricular'
import CompetitiveProgramming from '@/components/CompetitiveProgramming'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Honors />
      <Skills />
      <Experience />
      <CompetitiveProgramming />
      <CoCurricular />
      <Contact />
      <Footer />
    </main>
  )
}
