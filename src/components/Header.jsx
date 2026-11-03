import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'
import { Logo } from './Logo'
import { contact } from '../data/portfolio'

const links = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'ERP', href: '#erp' },
  { name: 'Cómo trabajo', href: '#proceso' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
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
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>
      <div id="menu-movil" className={`mnav${open ? ' is-open' : ''}`} hidden={!open}>
        <div className="wrap">
          {[...links, { name: 'Contacto', href: '#contacto' }].map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.name}</a>
          ))}
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer">Hablemos por WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
