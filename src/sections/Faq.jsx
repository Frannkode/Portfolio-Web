import { faq } from '../data/portfolio'

export function Faq() {
  return (
    <section id="preguntas" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>Preguntas<br />frecuentes</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>Lo que más me preguntan antes de empezar.</p>
          </div>
        </div>
        <div className="panel faq" data-reveal>
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
