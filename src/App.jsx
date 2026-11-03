import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useLenis } from './hooks/useLenis'
import { Hero } from './sections/Hero'
import { Statement } from './sections/Statement'
import { Pillars } from './sections/Pillars'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Erp } from './sections/Erp'
import { Process } from './sections/Process'
import { Contact } from './sections/Contact'

function App() {
  useLenis()

  useEffect(() => {
    // Entrada suave, una vez, cuando cada parte aparece en pantalla.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('[data-reveal]').forEach((n) => io.observe(n))

    // Brillo tenue que sigue al cursor dentro de los paneles.
    const move = (e) => {
      const p = e.target.closest?.('.panel--spot')
      if (!p) return
      const r = p.getBoundingClientRect()
      p.style.setProperty('--mx', `${e.clientX - r.left}px`)
      p.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('mousemove', move) }
  }, [])

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Statement />
        <Pillars />
        <Services />
        <Projects />
        <Erp />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
