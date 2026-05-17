import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export function Hero() {
  const { name, role, tagline, cta } = portfolioData.hero

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 animate-grid opacity-30" />
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 mac-glass rounded-full border-border"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-text-secondary uppercase tracking-widest font-semibold">
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight text-text-primary"
          >
            Ingeniería que <br className="hidden md:block" />
            <span className="text-gradient italic font-light">escala ventas.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-text-secondary font-display font-medium mb-6 md:mb-8 tracking-tight">
              {role}
            </h2>
            <p className="text-base md:text-xl text-text-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-bg rounded-xl font-semibold text-base md:text-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all w-full sm:w-auto"
            >
              {cta.primary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-border text-text-primary rounded-xl font-semibold text-base md:text-lg mac-glass transition-all w-full sm:w-auto"
            >
              {cta.secondary}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/60">Descubrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-secondary/60 to-transparent" />
      </motion.div>
    </section>
  )
}
