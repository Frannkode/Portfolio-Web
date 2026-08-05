import { useEffect } from 'react'
import { Header } from './components/Header'
import { CommandPalette } from './components/CommandPalette'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Engineering } from './sections/Engineering'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const handleMouseMove = (e) => {
      root.style.setProperty('--mouse-x', `${e.clientX}px`)
      root.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-bg selection:bg-primary/30 selection:text-primary relative">
      <div className="spotlight" aria-hidden="true" />
      <Header />
      <CommandPalette />
      <main>
        <Hero />
        <Metrics />
        <Engineering />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
