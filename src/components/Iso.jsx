// Dibujos isométricos de línea fina, generados en código (sin imágenes).
const STROKE = 'rgba(247,248,248,0.6)'

function Box({ cx, cy, a, h, dim = 1 }) {
  const b = a / 2
  const top = `${cx},${cy - h - b} ${cx + a},${cy - h} ${cx},${cy - h + b} ${cx - a},${cy - h}`
  const left = `${cx - a},${cy - h} ${cx},${cy - h + b} ${cx},${cy + b} ${cx - a},${cy}`
  const right = `${cx + a},${cy - h} ${cx},${cy - h + b} ${cx},${cy + b} ${cx + a},${cy}`
  const p = { fill: '#08090a', stroke: STROKE, strokeWidth: 1, strokeOpacity: dim, strokeLinejoin: 'round' }
  return (
    <g>
      <polygon points={left} {...p} />
      <polygon points={right} {...p} />
      <polygon points={top} {...p} />
    </g>
  )
}

export function IsoLayers() {
  // Capas apiladas: de la base de datos a la pantalla.
  const layers = Array.from({ length: 7 }, (_, i) => i)
  return (
    <svg className="iso" viewBox="0 0 230 190" aria-hidden="true">
      {layers.map((i) => <Box key={i} cx={115} cy={168 - i * 17} a={78} h={9} dim={1 - i * 0.07} />)}
    </svg>
  )
}

export function IsoCubes() {
  return (
    <svg className="iso" viewBox="0 0 230 190" aria-hidden="true">
      <Box cx={72} cy={150} a={44} h={44} dim={0.5} />
      <Box cx={150} cy={160} a={44} h={44} dim={0.6} />
      <Box cx={112} cy={132} a={44} h={44} dim={0.8} />
      <Box cx={112} cy={96} a={30} h={30} />
      <Box cx={176} cy={118} a={30} h={30} dim={0.5} />
    </svg>
  )
}

export function IsoBars() {
  const bars = [30, 52, 40, 76, 58, 96, 70, 118, 84]
  return (
    <svg className="iso" viewBox="0 0 230 190" aria-hidden="true">
      {bars.map((h, i) => <Box key={i} cx={30 + i * 21} cy={170 - i * 6} a={9} h={h} dim={0.45 + i * 0.07} />)}
    </svg>
  )
}
