import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Engineering } from './sections/Engineering'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-primary/30 selection:text-primary">
      <Header />
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
