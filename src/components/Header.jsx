import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Soluciones', href: '#projects' },
    { name: 'Ventaja', href: '#engineering' },
    { name: 'Contacto', href: '#contact' }
  ]

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-4 md:px-8 py-3 max-w-4xl mx-auto transition-all duration-500 ${
            isScrolled
              ? 'bg-bg-secondary border border-border shadow-[0_20px_40px_rgba(0,0,0,0.8)]'
              : 'bg-white/[0.02] border border-border backdrop-blur-md'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-xl font-bold font-display tracking-tight text-text-primary"
          >
            FRANN<span className="text-text-secondary font-light">KODE</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.href)
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary px-6 py-2 rounded-full text-sm font-bold text-on-primary shadow-[0_0_20px_var(--primary-glow)] transition-shadow hover:shadow-[0_0_25px_var(--primary-glow)]"
              onClick={() => scrollTo('#contact')}
            >
              Agendar Llamada
            </motion.button>

            <button
              className="md:hidden p-2.5 rounded-full border border-border text-text-primary"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 max-w-4xl mx-auto mac-glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:text-primary hover:bg-accent-soft transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-2 bg-primary px-4 py-3 rounded-xl text-sm font-bold text-on-primary text-center"
              >
                Agendar Llamada
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
