import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useEffect } from 'react'

export function Hero() {
  const { name, role, tagline, cta } = portfolioData.hero

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Map mouse movement to translation (reverse direction for cool parallax)
  const parallaxX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [40, -40])
  const parallaxY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [40, -40])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 animate-grid opacity-30" />
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Mouse Parallax Abstract Dashboard Decoration */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute right-[5%] md:right-[15%] top-[20%] md:top-[25%] pointer-events-none opacity-80 mix-blend-screen hidden md:block"
      >
        <div className="relative w-96 h-96">
          {/* Floating Card 1 - Chart */}
          <div className="absolute top-0 right-0 w-48 h-32 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform rotate-6">
            <div className="flex justify-between items-center mb-1">
              <div className="w-1/2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <div className="flex items-end gap-2 h-full pb-1">
              {[40, 70, 50, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Floating Card 2 - Stats */}
          <div className="absolute top-24 -left-12 w-40 h-40 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform -rotate-12">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <div className="w-3/4 h-3 bg-white/40 rounded-full mb-3" />
            <div className="w-1/2 h-2 bg-white/10 rounded-full" />
            <div className="absolute bottom-4 right-4 text-xs font-mono text-green-400 font-bold">+24%</div>
          </div>

          {/* Floating Card 3 - Code/Terminal */}
          <div className="absolute bottom-4 right-10 w-56 h-28 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform rotate-3">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="space-y-2">
              <div className="w-3/4 h-1.5 bg-primary/60 rounded-full" />
              <div className="w-1/2 h-1.5 bg-white/30 rounded-full" />
              <div className="w-5/6 h-1.5 bg-white/20 rounded-full" />
            </div>
          </div>
          
          {/* Connecting lines / nodes */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" viewBox="0 0 400 400">
             <path d="M150,150 L250,80 L280,250 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary/50" />
             <circle cx="150" cy="150" r="4" fill="currentColor" className="text-white" />
             <circle cx="250" cy="80" r="4" fill="currentColor" className="text-white" />
             <circle cx="280" cy="250" r="4" fill="currentColor" className="text-white" />
          </svg>
        </div>
      </motion.div>

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
