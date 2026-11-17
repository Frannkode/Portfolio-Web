import { contact } from '../data/portfolio'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div>
            <a className="brand" href="#inicio"><Logo /> Frannkode</a>
            <p style={{ marginTop: 14, maxWidth: '28ch' }}>Sistemas de gestión, tiendas y webs a medida. Reconquista, Santa Fe.</p>
          </div>
          <div>
            <h2 className="footer__h">Secciones</h2>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#precios">Planes y precios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#erp">ERP industrial</a></li>
              <li><a href="#proceso">Cómo trabajo</a></li>
              <li><a href="/metodo.html">Guía gratis: Método Web en 3 días</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer__h">Redes</h2>
            <ul>
              <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer__h">Contacto</h2>
            <ul>
              <li><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${contact.email}`}>Email</a></li>
              <li><a href={`mailto:${contact.email}?subject=Busco%20desarrollador%20para%20mi%20equipo`}>¿Armás un equipo? Escribime</a></li>
            </ul>
          </div>
        </div>
        <p className="footer__legal">© {new Date().getFullYear()} Frannkode.</p>
      </div>
    </footer>
  )
}
