import { useState } from 'react'
import { Home, Briefcase, FolderGit2, Server, Route, Mail } from 'lucide-react'
import { contact, offers } from '../data/portfolio'
import { scrollToSection } from '../lib/scroll'

const side = [
  { icon: Home, name: 'Inicio', href: '#inicio', on: true },
  { icon: Briefcase, name: 'Servicios', href: '#servicios' },
  { icon: FolderGit2, name: 'Proyectos', href: '#proyectos' },
  { icon: Server, name: 'ERP industrial', href: '#erp' },
  { icon: Route, name: 'Cómo trabajo', href: '#proceso' },
  { icon: Mail, name: 'Contacto', href: '#contacto' },
]

const etapas = [
  ['st--live', 'Acordamos el alcance', 'por escrito, con anticipo del 40%'],
  ['st--live', 'Entrega por etapas', 'ves el sistema funcionando en cada una'],
  ['st--live', 'Publicación y soporte', '3 meses de soporte sin cargo'],
]

export function Hero() {
  const [active, setActive] = useState(0)
  const o = offers[active]
  const go = (e, href) => { e.preventDefault(); scrollToSection(href) }

  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <h1>Punto de venta, stock y paneles a medida para tu pyme</h1>
        <div className="hero__row">
          <p className="hero__sub">
            Soy Franco, desarrollador en Reconquista con más de 6 años programando. Si tu negocio todavía vive en Excel y mensajes sueltos, te armo un sistema a tu medida, a distancia o en persona. Hablás directo conmigo y el precio de referencia está a la vista: desde $1.600.000.
          </p>
          <p className="hero__new">
            <b>Caso real</b>
            <a href="#proyectos" onClick={(e) => go(e, '#proyectos')}>ViciosBurger: de 8 a 50+ pedidos por semana →</a>
          </p>
        </div>
        <div className="hero__cta">
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribime por WhatsApp<span className="sr"> (abre en una pestaña nueva)</span></a>
          <a className="btn btn--lg" href="#precios" onClick={(e) => go(e, '#precios')}>Ver planes y precios</a>
        </div>

        <div className="stage" data-fx>
          <div className="app" role="group" aria-label="Vista previa: elegí un servicio en la barra lateral">
            <p className="sr" aria-live="polite">{o.title}</p>
            <div className="app__side">
              <div className="app__ws"><i /> Frannkode</div>
              {side.map((s) => {
                const Icon = s.icon
                return (
                  <a key={s.name} href={s.href} className={`app__item${s.on ? ' is-on' : ''}`} onClick={(e) => go(e, s.href)}>
                    <Icon size={15} aria-hidden="true" /> {s.name}
                  </a>
                )
              })}
              <div className="app__group">Mi trabajo</div>
              {offers.map((x, i) => (
                <button
                  key={x.id}
                  type="button"
                  className={`app__item app__btn${i === active ? ' is-on' : ''}`}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  <span className="st st--live" aria-hidden="true" /> {x.name}
                </button>
              ))}
            </div>
            <div className="app__main" key={o.id}>
              <div className="app__top"><span className="st st--live" aria-hidden="true" /> {o.code} · {o.title}</div>
              <div className="app__body fade">
                <p className="app__h">{o.title}</p>
                <p>{o.text}</p>
                <p className="app__h app__h--sm">Cómo trabajo</p>
                <ul className="feed">
                  {etapas.map(([st, t, d]) => (
                    <li key={t}><span className={`st ${st}`} aria-hidden="true" /> <span><b>{t}</b> · {d}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="app__props fade" key={`p-${o.id}`}>
              <span className="k">Estado</span><p><span className="st st--live" aria-hidden="true" /> {o.status}</p>
              <span className="k">Frontend</span><p>{o.stack.join(', ')}</p>
              <span className="k">Backend</span><p>{o.back}</p>
              <span className="k">Datos</span><p>{o.data}</p>
              <span className="k">Responsable</span><p>Franco · Reconquista, Santa Fe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
