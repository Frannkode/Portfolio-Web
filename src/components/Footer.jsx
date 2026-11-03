import { contact } from '../data/portfolio'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div>
            <a className="brand" href="#inicio"><Logo /> Frannkode</a>
            <p style={{ marginTop: 14, maxWidth: '28ch' }}>Desarrollador Full Stack en Reconquista, Santa Fe.</p>
          </div>
          <div>
            <h3>Secciones</h3>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#erp">ERP industrial</a></li>
              <li><a href="#proceso">Cómo trabajo</a></li>
            </ul>
          </div>
          <div>
            <h3>Redes</h3>
            <ul>
              <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul>
              <li><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${contact.email}`}>Email</a></li>
            </ul>
          </div>
        </div>
        <p className="footer__legal">© {new Date().getFullYear()} Frannkode. Diseño inspirado en el lenguaje visual de linear.app.</p>
      </div>
    </footer>
  )
}
