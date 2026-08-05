import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function detectEnabled() {
  if (typeof window === 'undefined') return false
  const isFinePointer = window.matchMedia('(pointer: fine)').matches
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return isFinePointer && !prefersReduced
}

export function CustomCursor() {
  const [enabled] = useState(detectEnabled)
  const [isHovering, setIsHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('custom-cursor-active')
    return () => document.documentElement.classList.remove('custom-cursor-active')
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const handleOver = (e) => {
      setIsHovering(Boolean(e.target.closest('a, button, [data-cursor-hover]')))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 z-[90] pointer-events-none -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ scale: isHovering ? 2.2 : 1, opacity: isHovering ? 0.5 : 0.9 }}
        transition={{ duration: 0.2 }}
        className="w-2.5 h-2.5 rounded-full bg-primary"
      />
    </motion.div>
  )
}
