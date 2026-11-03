import { erp } from '../data/portfolio'

export function Erp() {
  return (
    <section id="erp" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>ERP industrial<br />a medida</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>{erp.lead}</p>
            <p style={{ color: 'var(--ink-3)', fontSize: '0.9375rem' }}>{erp.role}</p>
          </div>
        </div>
        <div className="panel panel--spot" data-reveal>
          <div className="stats">
            {erp.stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
          <ul className="mods" aria-label="Qué cubre el sistema">
            {erp.modules.map((m) => <li key={m}><span className="st st--live" aria-hidden="true" />{m}</li>)}
          </ul>
          <div className="erp__two">
            <div>
              <h3>Mi trabajo en el equipo</h3>
              <ul className="checks">
                {erp.qa.map((q) => <li key={q}><span className="st st--done" aria-hidden="true" /><span>{q}</span></li>)}
              </ul>
            </div>
            <div>
              <h3>Tecnologías</h3>
              <ul className="tags">{erp.tech.map((t) => <li className="tag" key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
