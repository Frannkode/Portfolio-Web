import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Counter({ value }) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const numericValue = parseInt(value, 10) || 0
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 60 })
  const rounded = useTransform(springValue, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return unsubscribe
  }, [rounded])

  const startAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
      motionValue.set(numericValue)
    }
  }

  return (
    <motion.span onViewportEnter={startAnimation} viewport={{ once: true }}>
      {display}
    </motion.span>
  )
}
