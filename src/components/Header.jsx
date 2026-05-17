import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav 
          className={`flex items-center justify-between rounded-full px-6 md:px-8 py-3 max-w-4xl mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'bg-[#050505] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' 
              : 'bg-white/[0.02] border border-white/5 backdrop-blur-md'
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
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary px-6 py-2 rounded-full text-sm font-bold text-bg shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Llamada
          </motion.button>
        </nav>
      </div>
    </header>
  )
}
