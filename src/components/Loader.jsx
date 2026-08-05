import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(() => setIsVisible(false), prefersReduced ? 0 : 650)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-display font-bold tracking-tight text-text-primary"
          >
            FRANN<span className="text-text-secondary font-light">KODE</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
