import { motion } from 'framer-motion'
import { Palette, Circle } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isColor = theme === 'color'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={isColor ? 'Cambiar a modo mono' : 'Cambiar a modo color'}
      title={isColor ? 'Modo Mono' : 'Modo Color'}
      className="p-2.5 rounded-full border border-border text-text-secondary hover:text-primary bg-white/[0.02] hover:bg-accent-soft transition-colors"
    >
      {isColor ? <Palette size={16} /> : <Circle size={16} />}
    </motion.button>
  )
}
