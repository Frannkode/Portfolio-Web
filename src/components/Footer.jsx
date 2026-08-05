import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-24 bg-bg overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-text-primary">
                  FRANN<span className="text-text-secondary font-light">KODE</span>
                </h3>
              </motion.div>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-sm">
                Ingeniería de software enfocada en <span className="text-primary font-semibold">resultados de negocio</span>.
              </p>

              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/frannkode" },
                  { icon: Linkedin, href: "https://linkedin.com/in/tecfrancoponce" },
                  { icon: Mail, href: "mailto:poncefrancomiguel@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="p-3 md:p-4 rounded-xl text-text-secondary hover:text-primary border border-border transition-all bg-white/[0.02] hover:bg-accent-soft"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Section */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-text-secondary font-bold mb-6 md:mb-8">Mapa del Sitio</h4>
              <ul className="space-y-4">
                {['Inicio', 'Soluciones', 'Ventaja', 'Contacto'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                         const targetId = item === 'Inicio' ? 'hero' : item === 'Soluciones' ? 'projects' : item === 'Ventaja' ? 'engineering' : 'contact';
                         document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-text-secondary hover:text-primary transition-all text-base md:text-lg flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary transition-all overflow-hidden" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to action mini */}
            <div className="flex flex-col justify-start">
               <h4 className="text-xs font-mono uppercase tracking-widest text-text-secondary font-bold mb-6 md:mb-8">Empezar</h4>
               <p className="text-sm text-text-secondary mb-6">
                 ¿Listo para escalar tu negocio sin límites técnicos?
               </p>
               <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
               >
                 Agendar Llamada <ArrowRight size={16} />
               </button>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-xs md:text-sm text-text-secondary font-medium tracking-tight">
              © {currentYear} Frannkode. Todos los derechos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
