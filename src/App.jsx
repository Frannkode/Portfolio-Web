import { useEffect } from 'react'
import { Header } from './components/Header'
import { CommandPalette } from './components/CommandPalette'
import { ScrollProgress } from './components/ScrollProgress'
import { CustomCursor } from './components/CustomCursor'
import { Loader } from './components/Loader'
import { useLenis } from './hooks/useLenis'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Engineering } from './sections/Engineering'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  useLenis()

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
      <Loader />
      <CustomCursor />
      <div className="spotlight" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <CommandPalette />
      <main>
        <Hero />
        <Metrics />
        <Engineering />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
