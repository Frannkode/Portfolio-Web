export function About() {
  return (
    <section id="quien-soy" className="feature">
      <div className="wrap about">
        <img className="about__img" src="/assets/img/franco.webp" alt="Imagen de perfil de Franco" width="160" height="160" loading="lazy" />
        <div>
          <h2 data-reveal>Hablás directo<br />conmigo</h2>
          <p data-reveal style={{ '--i': 1 }}>
            Soy Franco, desarrollador de Reconquista. Diseño, programo y publico cada proyecto. Cuando el sistema es grande, armo un equipo de desarrollo para entregarlo bien.
          </p>
        </div>
      </div>
    </section>
  )
}
