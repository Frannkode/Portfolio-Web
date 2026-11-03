import { ShoppingBag, LayoutDashboard, UtensilsCrossed, Globe } from 'lucide-react'
import { services } from '../data/portfolio'

const icons = { ShoppingBag, LayoutDashboard, UtensilsCrossed, Globe }

export function Services() {
  return (
    <section id="servicios" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>Qué hago<br />por tu negocio</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>Desde una landing hasta un sistema de gestión completo, con un alcance claro desde el primer día.</p>
          </div>
        </div>
        <div className="panel panel--spot" data-reveal>
          <div className="svcs">
            {services.map((s) => {
              const Icon = icons[s.icon]
              return (
                <article className="svc" key={s.title}>
                  <span className="svc__ic"><Icon size={16} aria-hidden="true" /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
