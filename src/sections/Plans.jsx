import { Check } from 'lucide-react'
import { plans, whatsappBase } from '../data/portfolio'

export function Plans() {
  return (
    <section id="precios" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>Planes<br />y precios</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>Valores de referencia en pesos argentinos. El precio final se confirma según el alcance, antes de empezar.</p>
          </div>
        </div>
        <div className="plans">
          {plans.map((p, i) => (
            <article className={`panel plan${p.featured ? ' plan--on' : ''}`} key={p.id} data-reveal style={{ '--i': i }}>
              <h3>{p.name}</h3>
              <p className="plan__price">{p.from && <small>desde </small>}{p.price}</p>
              <p className="plan__text">{p.text}</p>
              <ul className="plan__list">
                {p.items.map((it) => (
                  <li key={it}><Check size={14} aria-hidden="true" /> {it}</li>
                ))}
              </ul>
              <a
                className={`btn btn--lg ${p.featured ? 'btn--invert' : ''}`}
                href={`${whatsappBase}${encodeURIComponent(`Hola Franco, vi tu portfolio y me interesa el plan ${p.name}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar este plan<span className="sr"> (abre WhatsApp en una pestaña nueva)</span>
              </a>
            </article>
          ))}
        </div>
        <p className="plans__note" data-reveal>El soporte posterior a la publicación depende del plan y se acuerda al cotizar.</p>
      </div>
    </section>
  )
}
