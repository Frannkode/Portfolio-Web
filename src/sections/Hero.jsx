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
  ['st--live', 'Definimos qué necesitás', 'alcance claro y sin tecnicismos'],
  ['st--live', 'Entrega por etapas', 'ves avances reales'],
  ['st--live', 'Lanzamiento y soporte', 'te acompaño después de publicar'],
]

export function Hero() {
  const [active, setActive] = useState(0)
  const o = offers[active]
  const go = (e, href) => { e.preventDefault(); scrollToSection(href) }

  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <h1>Vendé online y ordená tu negocio, sin depender de terceros</h1>
        <div className="hero__row">
          <p className="hero__sub">
            Soy Franco, desarrollador web en Reconquista, Santa Fe. Armo tiendas online, sistemas de gestión y pedidos por WhatsApp para comercios y restaurantes. Hablás directo conmigo y te respondo al momento. Webs desde $80.000.
          </p>
          <p className="hero__new">
            <b>Experiencia en equipo</b>
            <a href="#erp" onClick={(e) => go(e, '#erp')}>ERP industrial (QA) →</a>
          </p>
        </div>
        <div className="hero__cta">
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribime por WhatsApp<span className="sr"> (abre en una pestaña nueva)</span></a>
          <a className="btn btn--lg" href="#proyectos" onClick={(e) => go(e, '#proyectos')}>Ver proyectos</a>
        </div>

        <div className="stage" data-fx>
          <div className="app" role="group" aria-label="Vista previa: elegí un servicio en la barra lateral">
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
            <div className="app__main" key={o.id} aria-live="polite">
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
