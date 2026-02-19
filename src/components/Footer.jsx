import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Sparkles, Star } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-24 bg-white overflow-hidden">
      {/* Background Magical Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />

      {/* Floating Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute hidden md:block text-primary/20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`
          }}
        >
          <Star size={12} fill="currentColor" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-display font-black tracking-tighter mb-4">
                  <span className="text-text-primary uppercase tracking-[0.15em]">FRANN</span>
                  <span className="text-primary italic tracking-normal">KODE</span>
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-blue rounded-full" />
              </motion.div>

              <p className="text-xl text-text-primary leading-relaxed max-w-sm font-medium">
                Arquitectura digital inspirada en la <span className="text-primary">luz</span> y la <span className="text-primary">precisión</span>.
              </p>

              <div className="flex items-center gap-5">
                {[
                  { icon: Github, href: "https://github.com/frannkode" },
                  { icon: Linkedin, href: "https://linkedin.com/in/tecfrancoponce" },
                  { icon: Mail, href: "mailto:poncefrancomiguel@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -5, backgroundColor: 'rgba(167, 139, 250, 0.1)' }}
                    className="p-4 premium-glass rounded-2xl text-text-primary border-primary/20 shadow-sm transition-all"
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Section */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-[0.4em] text-primary/60 font-bold mb-10">Explora el Cosmos</h4>
              <ul className="space-y-5">
                {['Inicio', 'Proyectos', 'Arquitectura', 'Contacto'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.querySelector(`#${item.toLowerCase() === 'arquitectura' ? 'engineering' : item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-text-primary/70 hover:text-primary transition-all font-semibold text-lg flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all overflow-hidden" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mindset Section */}
            <div className="flex flex-col justify-end">
              <motion.div
                whileHover={{ rotate: [-1, 1, -1] }}
                className="p-8 celestial-card rounded-[2.5rem] border-primary/30 relative group shadow-xl shadow-primary/5"
              >
                <div className="absolute -top-6 -right-6 p-4 bg-primary text-white rounded-2xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  <Sparkles size={24} />
                </div>
                <p className="text-sm text-text-primary leading-relaxed font-mono font-medium italic">
                  "Todo sistema complejo que funciona se basa invariablemente en un sistema simple que funcionó."
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
                  <div className="w-8 h-px bg-primary/30" />
                  Engineering Ethics
                </div>
              </motion.div>
            </div>
          </div>

          <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="text-sm text-text-primary/50 font-mono font-medium tracking-tight">
              © {currentYear} — <span className="text-text-primary">Frannkode</span> — Fullstack Universe Architect
            </div>
            <div className="flex items-center gap-3 text-sm text-text-primary/50 font-medium">
              Conceptualizado con <Heart size={16} className="text-primary fill-primary/30 animate-pulse" /> por Frannkode
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
