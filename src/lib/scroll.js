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

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -88, duration: 1.2, ...options })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
