import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

const [featured, ...others] = projects

function host(url, fallback) {
  try { return new URL(url).host } catch { return fallback }
}

export function Projects() {
  return (
    <section id="proyectos" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>Tiendas y sistemas<br />a medida</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>Cada proyecto resuelve un problema concreto de un negocio. Podés ver la demo en vivo y el código, cuando está disponible.</p>
            <a className="more" href="https://github.com/Frannkode" target="_blank" rel="noreferrer">Ver el código en GitHub<span aria-hidden="true"> →</span><span className="sr"> (abre en una pestaña nueva)</span></a>
          </div>
        </div>

        {/* Proyecto destacado: app móvil, con capturas reales en celulares */}
        <article className="panel panel--spot fp" data-reveal>
          <div className="fp__text">
            <p className="fp__kind"><span className="st st--live" aria-hidden="true" /> App móvil · en producción</p>
            <h3>{featured.title}</h3>
            <p className="fp__sub">{featured.subtitle}</p>
            <p className="fp__body">{featured.text}</p>
            {featured.result && <p className="result"><b>Lo que cambió</b> {featured.result}</p>}
            <ul className="tags">{featured.tech.map((t) => <li className="tag" key={t}>{t}</li>)}</ul>
            <div className="fp__links">
              <a className="btn btn--invert" href={featured.links.live} target="_blank" rel="noreferrer">Ver en vivo <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a className="btn" href={featured.links.github} target="_blank" rel="noreferrer"><Github size={14} aria-hidden="true" /> Código web</a>
              <a className="btn" href={featured.links.app} target="_blank" rel="noreferrer"><Github size={14} aria-hidden="true" /> Código app</a>
            </div>
          </div>
          <div className="fp__phones" data-fx>
            {featured.phones.map((p, i) => (
              <figure className={`phone phone--${i}`} key={p.src}>
                <img src={p.src} alt={p.alt} width="390" height="844" loading="lazy" />
              </figure>
            ))}
          </div>
        </article>

        {/* El resto: ventanas de navegador */}
        <div className="pgrid">
          {others.map((p, i) => (
            <article className="panel panel--spot pc" key={p.title} data-reveal style={{ '--i': i % 2 }}>
              <div className="pc__bar">
                <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                <span className="pc__url">{host(p.links.live, 'github.com/Frannkode')}</span>
              </div>
              <a className="pc__shot" href={p.links.live || p.links.github} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                <img src={p.image} alt="" width="1600" height="1000" loading="lazy" />
              </a>
              <div className="pc__body">
                <div>
                  <h3>{p.title}</h3>
                  <p className="pc__sub">{p.subtitle}</p>
                </div>
                <p className="pc__text">{p.text}</p>
                {p.result && <p className="result"><b>Lo que cambió</b> {p.result}</p>}
                <div className="pc__foot">
                  <ul className="tags">{p.tech.slice(0, 3).map((t) => <li className="tag" key={t}>{t}</li>)}</ul>
                  <span className="pc__links">
                    {p.links.live && <a className="more" href={p.links.live} target="_blank" rel="noreferrer">Ver sitio<span aria-hidden="true"> ↗</span><span className="sr"> de {p.title} (abre en una pestaña nueva)</span></a>}
                    <a className="more" href={p.links.github} target="_blank" rel="noreferrer">Código<span aria-hidden="true"> ↗</span><span className="sr"> de {p.title} en GitHub (abre en una pestaña nueva)</span></a>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
