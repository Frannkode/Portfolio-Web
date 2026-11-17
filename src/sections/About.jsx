export function About() {
  return (
    <section id="quien-soy" className="feature">
      <div className="wrap about">
        <img className="about__img" src="/assets/img/franco.webp" alt="Ilustración de perfil de Franco" width="160" height="160" loading="lazy" />
        <div>
          <h2 data-reveal>Hablás directo<br />conmigo</h2>
          <p data-reveal style={{ '--i': 1 }}>
            Soy Franco, desarrollador de Reconquista, con más de 6 años programando. Me enfoqué en pymes porque me gustan los sistemas chicos, los que se usan todos los días. Diseño, programo y publico cada proyecto, y te contesto yo, no un intermediario.
          </p>
          <p data-reveal style={{ '--i': 2 }}>
            Trabajo en Gii, una empresa que hace sistemas a medida, como un ERP industrial que lleva más de un año de desarrollo. En proyectos grandes cuento con ese equipo. Trabajo a distancia con cualquier lugar, y en persona cerca de Reconquista.
          </p>
        </div>
      </div>
    </section>
  )
}
