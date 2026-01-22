import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Gracias por llegar hasta aquí</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Frann</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">kode</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Desarrollador Front-End especializado en crear experiencias web modernas
                y funcionales para proyectos remotos.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-slate-300">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  Sobre mí
                </a>
                <a
                  href="#skills"
                  className="block text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  Tecnologías
                </a>
                <a
                  href="#projects"
                  className="block text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  Proyectos
                </a>
                <a
                  href="#contact"
                  className="block text-slate-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                >
                  Contacto
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4 text-slate-300">Conectemos</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://github.com/frannkode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/franco-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:poncefrancomiguel@gmail.com"
                  className="p-2 text-slate-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                © {currentYear} Franco Miguel Ponce. Todos los derechos reservados.
              </p>
              <p className="text-slate-500 text-sm flex items-center">
                Hecho con <Heart className="w-4 h-4 mx-1 text-red-500" /> y React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
