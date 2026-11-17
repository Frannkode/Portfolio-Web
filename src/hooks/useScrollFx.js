import { useEffect } from 'react'

// Efectos ligados al scroll: cada [data-fx] recibe --p (0 a 1) según cuánto avanzó por la pantalla.
// El CSS decide qué hace con ese número. Sin JS o con "menos movimiento" queda en el estado final (--p: 1).
export function useScrollFx() {
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-fx]')]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.style.setProperty('--p', '1'))
      return
    }
    let raf = 0
    const clamp = (n) => Math.min(1, Math.max(0, n))
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      for (const el of els) {
        const r = el.getBoundingClientRect()
        if (r.bottom < -vh * 0.2 || r.top > vh * 1.2) continue
        // 0 cuando entra por abajo (95% de la pantalla), 1 cuando llega al 25%.
        el.style.setProperty('--p', clamp((vh * 0.95 - r.top) / (vh * 0.7)).toFixed(3))
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
