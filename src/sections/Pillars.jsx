import { IsoLayers, IsoCubes, IsoBars } from '../components/Iso'

const items = [
  { Art: IsoLayers, title: 'Hablás con quien programa', text: 'Quien te cotiza es quien escribe el código y te contesta por WhatsApp. Sin intermediarios ni cuentas asignadas.' },
  { Art: IsoCubes, title: 'Precio claro desde el inicio', text: 'Ves el valor de referencia antes de escribir. El alcance queda por escrito, el anticipo es del 40% y el código es tuyo al terminar.' },
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
