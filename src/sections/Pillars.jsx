import { IsoLayers, IsoCubes, IsoBars } from '../components/Iso'

const items = [
  { Art: IsoLayers, title: 'De punta a punta', text: 'Frontend, backend, base de datos y publicación. Un solo desarrollador que entiende todas las capas.' },
  { Art: IsoCubes, title: 'A medida', text: 'Sistemas hechos para tu operación, sin plantillas: punto de venta, stock, pedidos y paneles con estadísticas.' },
  { Art: IsoBars, title: 'Rigor de equipo', text: 'Trabajé como QA y revisor técnico en un ERP industrial de más de un año de desarrollo. Ahí aprendí a detectar fallas antes de que lleguen al cliente, y lo aplico en cada proyecto.' },
]

export function Pillars() {
  return (
    <section className="wrap pillars" aria-labelledby="pillars-h">
      <h2 id="pillars-h" className="sr">Cómo trabajo, en tres ideas</h2>
      {items.map((it, i) => {
        const Art = it.Art
        return (
        <div className="pillar" key={it.title} data-fx>
          <span className="fig" aria-hidden="true">FIG 0.{i + 1}</span>
          <Art />
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
        )
      })}
    </section>
  )
}
