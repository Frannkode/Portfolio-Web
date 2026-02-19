import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export function Hero() {
  const { name, role, tagline, cta } = portfolioData.hero

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden animate-celestial">
      {/* Visual background elements - Floating Orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-accent-blue/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-64 h-64 bg-accent-pink/20 rounded-full blur-[80px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8 px-5 py-2 premium-glass rounded-full border-primary/10"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-[0.2em] font-bold">
              Universo Digital — v2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-display font-black mb-10 leading-[0.9] tracking-tight"
          >
            <span className="text-text-primary">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-blue to-primary animate-text-shimmer">
              {name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl text-text-secondary font-display font-medium mb-12 tracking-tight">
              {role}
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary/80 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              {tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(167, 139, 250, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-primary text-white rounded-[2rem] font-bold text-xl shadow-lg transition-all"
            >
              {cta.primary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(167, 139, 250, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border-2 border-primary/20 text-primary rounded-[2rem] font-bold text-xl backdrop-blur-sm transition-all"
            >
              {cta.secondary}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Ethereal scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-text-secondary/40">Desciende</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  )
}
