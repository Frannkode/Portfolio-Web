import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'
import { MagneticButton } from './MagneticButton'

const RESUME_AVAILABLE = false

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/frannkode' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/tecfrancoponce' },
    { icon: Mail, label: 'Email', href: 'mailto:poncefrancomiguel@gmail.com' },
  ]

  return (
    <footer id="contact-footer" className="relative pt-24 md:pt-32 pb-10 bg-bg overflow-hidden border-t border-border/50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[700px] max-h-[400px] rounded-full bg-primary/[0.05] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mac-glass rounded-full text-sm mb-8 border border-border"
          >
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="status-ping absolute inset-0 rounded-full bg-success" />
              <span className="relative w-2 h-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-text-secondary">
              Disponible para nuevos proyectos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-text-primary mb-8 leading-[1.05] tracking-tight"
          >
            ¿Construimos algo <span className="text-gradient italic">increíble?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MagneticButton
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-base md:text-lg shadow-[0_0_40px_var(--primary-glow)] hover:opacity-90 transition-opacity"
            >
              Escribime <ArrowUpRight size={18} />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}

          {RESUME_AVAILABLE ? (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              <FileText size={16} />
              Resume
            </a>
          ) : (
            <span
              className="flex items-center gap-2 text-text-secondary/40 text-sm font-medium cursor-not-allowed"
              title="Resume próximamente"
            >
              <FileText size={16} />
              Resume
            </span>
          )}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-lg font-display font-bold tracking-tight text-text-primary">
            FRANN<span className="text-text-secondary font-light">KODE</span>
          </div>
          <div className="text-xs md:text-sm text-text-secondary font-medium tracking-tight">
            © {currentYear} Frannkode. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
