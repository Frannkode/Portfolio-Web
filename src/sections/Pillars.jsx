import { IsoLayers, IsoCubes, IsoBars } from '../components/Iso'

const items = [
  { Art: IsoLayers, title: 'Hablás con quien programa', text: 'Quien te cotiza es quien escribe el código y te contesta por WhatsApp. Sin intermediarios ni cuentas asignadas.' },
  { Art: IsoCubes, title: 'Precio claro desde el inicio', text: 'Planes de referencia a la vista: landing desde $80.000, web o tienda $250.000, software a medida desde $1.600.000. El precio final se confirma según el alcance, antes de empezar.' },
  { Art: IsoBars, title: 'Canal propio, sin comisiones', text: 'Tus pedidos llegan directo a tu WhatsApp, sin plataformas en el medio que cobren un porcentaje por cada venta.' },
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
