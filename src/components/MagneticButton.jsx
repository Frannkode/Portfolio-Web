import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function MagneticButton({ children, className, onClick, strength = 0.35 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 15, stiffness: 200, mass: 0.4 })
  const springY = useSpring(y, { damping: 15, stiffness: 200, mass: 0.4 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}
