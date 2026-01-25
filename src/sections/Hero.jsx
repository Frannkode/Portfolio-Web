import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"></span>
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Disponible para proyectos!</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-slate-900 dark:text-white">Hola, soy </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Franco
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-light">
              Desarrollador Front-End
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Creo experiencias web modernas y fluidas, especializándome en interfaces intuitivas
              que conectan tecnología con usuarios. Disponible para proyectos remotos.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver mis proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Contáctame
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="https://github.com/frannkode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/franco-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:poncefrancomiguel@gmail.com"
              className="p-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
