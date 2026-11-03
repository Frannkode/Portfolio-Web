import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenisInstance } from '../lib/scroll'

export function useLenis() {
  useEffect(() => {
    // Sin scroll suave si el usuario pidió menos movimiento, ni en navegadores automatizados.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.webdriver) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    setLenisInstance(lenis)

    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [])
}
