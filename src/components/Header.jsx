import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'
import { Logo } from './Logo'
import { contact } from '../data/portfolio'

const links = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Precios', href: '#precios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#erp' },
  { name: 'Cómo trabajo', href: '#proceso' },
  { name: 'Quién soy', href: '#quien-soy' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const burger = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); burger.current?.focus() } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(href)
  }

  return (
    <header className="header">
      <div className="wrap header__in">
        <a className="brand" href="#inicio" onClick={(e) => go(e, '#inicio')}>
          <Logo /> Frannkode
        </a>
        <nav className="nav" aria-label="Principal">
          {links.map((l) => <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.name}</a>)}
          <span className="nav__sep" aria-hidden="true" />
          <a href="#contacto" onClick={(e) => go(e, '#contacto')}>Contacto</a>
          <a className="btn btn--nav" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribime</a>
        </nav>
        <button
          type="button"
          className="burger"
          ref={burger}
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>
      <nav id="menu-movil" aria-label="Menú móvil" className={`mnav${open ? ' is-open' : ''}`} hidden={!open}>
        <div className="wrap">
          {[...links, { name: 'Contacto', href: '#contacto' }].map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.name}</a>
          ))}
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribime por WhatsApp<span className="sr"> (abre en una pestaña nueva)</span></a>
        </div>
      </nav>
    </header>
  )
}
