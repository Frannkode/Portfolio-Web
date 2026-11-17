import { steps } from '../data/portfolio'

const states = ['st--done', 'st--done', 'st--live']

export function Process() {
  return (
    <section id="proceso" className="feature">
      <div className="wrap">
        <div className="feature__head">
          <h2 data-reveal>Cómo trabajo,<br />de la consulta a la publicación</h2>
          <div className="feature__desc" data-reveal style={{ '--i': 1 }}>
            <p>Alcance acordado antes de empezar, avances que podés ver y decisiones compartidas.</p>
          </div>
        </div>
        <div className="panel" data-reveal>
          <div className="panel__bar"><span><b>Etapas</b> · {steps.length}</span><span>Franco</span></div>
          <ul className="steps">
            {steps.map((s, i) => (
              <li className="step" key={s.title}>
                <span className={`st ${states[i]}`} aria-hidden="true" />
                <div><b>{s.title}</b><span>{s.text}</span></div>
                <em>Etapa {i + 1}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
