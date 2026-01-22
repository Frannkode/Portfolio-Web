import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-5 h-5" />
      case 'light':
        return <Sun className="w-5 h-5" />
      default:
        return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300">Frann</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kode</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Tecnologías
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              Contacto
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Cambiar tema"
            >
              {getThemeIcon()}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Cambiar tema"
            >
              {getThemeIcon()}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                >
                  Sobre mí
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                >
                  Tecnologías
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                >
                  Contacto
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
