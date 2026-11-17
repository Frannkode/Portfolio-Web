import { SiReact, SiVite, SiTailwindcss, SiTypescript, SiPython, SiFastapi, SiPostgresql, SiDocker, SiFirebase, SiSupabase, SiVercel } from 'react-icons/si'

const tech = [
  [SiReact, 'React'], [SiVite, 'Vite'], [SiTailwindcss, 'Tailwind'], [SiTypescript, 'TypeScript'],
  [SiPython, 'Python'], [SiFastapi, 'FastAPI'], [SiPostgresql, 'PostgreSQL'], [SiDocker, 'Docker'],
  [SiFirebase, 'Firebase'], [SiSupabase, 'Supabase'], [SiVercel, 'Vercel'],
]

const lead = 'Del frontend a la base de datos.'
const rest = 'Diseño, programo y publico cada pieza: tiendas, sistemas de gestión y pedidos para negocios que quieren vender más y trabajar mejor.'
const words = `${lead} ${rest}`.split(' ')

export function Statement() {
  return (
    <>
      <section className="statement">
        <div className="wrap">
          <p data-fx>
            {words.map((w, i) => (
              <span className="w" key={i} style={{ '--w': (i / words.length) * 0.8 }}>{w} </span>
            ))}
          </p>
        </div>
      </section>
      <section className="tech" aria-label="Tecnologías">
        <div className="wrap">
          <div className="tech__row">
            {tech.map((t) => {
              const Icon = t[0]
              return <span key={t[1]}><Icon size={20} aria-hidden="true" /> {t[1]}</span>
            })}
          </div>
          <p className="tech__cap">Tecnologías con las que trabajo</p>
        </div>
      </section>
    </>
  )
}
