let lenisInstance = null

export function setLenisInstance(instance) {
  lenisInstance = instance
}

export function getLenisInstance() {
  return lenisInstance
}

export function scrollToSection(selector, options = {}) {
  const target = typeof selector === 'string' ? document.querySelector(selector) : selector
  if (!target) return

  // El foco viaja con el scroll: el próximo Tab sale desde la sección, no desde el menú.
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -88, duration: 1.2, ...options })
  } else {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }
}
