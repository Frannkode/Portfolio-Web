import { IsoLayers, IsoCubes, IsoBars } from '../components/Iso'

const items = [
  { Art: IsoLayers, title: 'De punta a punta', text: 'Frontend, backend, base de datos y publicación. Un solo desarrollador que entiende todas las capas.' },
  { Art: IsoCubes, title: 'A medida', text: 'Sistemas hechos para tu operación, sin plantillas: punto de venta, stock, pedidos y paneles con estadísticas.' },
  { Art: IsoBars, title: 'Probado en producción', text: 'QA y revisión técnica en un ERP industrial con más de 850 archivos de test.' },
]

export function Pillars() {
  return (
    <section className="wrap pillars">
      {items.map((it, i) => {
        const Art = it.Art
        return (
        <div className="pillar" key={it.title} data-reveal style={{ '--i': i }}>
          <Art />
          <h2>{it.title}</h2>
          <p>{it.text}</p>
        </div>
        )
      })}
    </section>
  )
}
