import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { Home, Layers, Zap, Mail, Github, Linkedin, Palette, Circle, CornerDownLeft, Boxes, UserRound, Sparkles } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { scrollToSection } from '../lib/scroll'

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const { theme, toggleTheme } = useTheme()

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const commands = useMemo(() => [
    { id: 'hero', label: 'Ir a Inicio', icon: Home, action: () => scrollToSection('#hero') },
    { id: 'projects', label: 'Ir a Soluciones', icon: Layers, action: () => scrollToSection('#projects') },
    { id: 'engineering', label: 'Ir a Ventaja Competitiva', icon: Zap, action: () => scrollToSection('#engineering') },
    { id: 'stack', label: 'Ir a Stack', icon: Boxes, action: () => scrollToSection('#stack') },
    { id: 'about', label: 'Ir a Sobre mí', icon: UserRound, action: () => scrollToSection('#about') },
    { id: 'contact', label: 'Ir a Contacto', icon: Mail, action: () => scrollToSection('#contact') },
    { id: 'theme', label: theme === 'color' ? 'Cambiar a modo Mono' : 'Cambiar a modo Color', icon: theme === 'color' ? Circle : Palette, action: toggleTheme },
    { id: 'github', label: 'Abrir GitHub', icon: Github, action: () => window.open('https://github.com/frannkode', '_blank') },
    { id: 'linkedin', label: 'Abrir LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/tecfrancoponce', '_blank') },
    { id: 'email', label: 'Enviar Email', icon: Mail, action: () => window.open('mailto:poncefrancomiguel@gmail.com', '_blank') },
  ], [theme, toggleTheme])

  const easterEgg = query.trim().toLowerCase() === 'whoami'

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q))
  }, [commands, query])

  const run = useCallback((cmd) => {
    if (!cmd) return
    cmd.action()
    close()
  }, [close])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((v) => !v)
        return
      }
      if (e.key === 'Escape' && isOpen) {
        close()
        return
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setActiveIndex((i) => Math.max(i - 1, 0))
        } else if (e.key === 'Enter') {
          e.preventDefault()
          run(filtered[activeIndex])
        }
      }
    }

    const handleOpenEvent = () => setIsOpen(true)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-palette', handleOpenEvent)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-palette', handleOpenEvent)
    }
  }, [isOpen, filtered, activeIndex, close, run])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 md:pt-32 px-4 bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl mac-glass-card overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <span className="font-mono text-text-secondary text-sm">/</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActiveIndex(0)
                }}
                placeholder="Buscar una acción..."
                className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-secondary/60 text-base"
              />
              <kbd className="hidden sm:inline text-[10px] font-mono text-text-secondary border border-border rounded-md px-1.5 py-0.5">esc</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {easterEgg ? (
                <div className="px-5 py-6 flex items-start gap-3">
                  <Sparkles size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-text-primary font-semibold">Franco Ponce</span> — construyo software que resuelve problemas de negocio reales. Si llegaste hasta acá escribiendo <code className="font-mono text-primary">whoami</code>, probablemente también vas a disfrutar trabajar conmigo. 👋
                  </p>
                </div>
              ) : filtered.length === 0 ? (
                <p className="px-5 py-6 text-sm text-text-secondary text-center">Sin resultados.</p>
              ) : filtered.map((cmd, i) => {
                const Icon = cmd.icon
                const active = i === activeIndex
                return (
                  <button
                    key={cmd.id}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => run(cmd)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      active ? 'bg-accent-soft text-primary' : 'text-text-secondary hover:bg-white/[0.03]'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                    {active && <CornerDownLeft size={14} className="opacity-60" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
