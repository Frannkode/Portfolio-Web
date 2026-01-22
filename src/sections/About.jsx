import { motion } from 'framer-motion'
import { Code, Palette, Users, Award, Coffee, Heart } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Front-End",
      description: "Especializado en crear interfaces modernas y funcionales con React, Next.js y TypeScript."
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Experiencia en diseño de interfaces intuitivas y experiencias de usuario excepcionales."
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva con equipos multidisciplinarios y comunicación clara."
    },
    {
      icon: Award,
      title: "Calidad del Código",
      description: "Compromiso con estándares altos, testing y mejores prácticas de desarrollo."
    }
  ]

  const stats = [
    { number: "2+", label: "Años de Experiencia" },
    { number: "15+", label: "Proyectos Completados" },
    { number: "100%", label: "Proyectos Freelance" },
    { number: "24/7", label: "Disponibilidad" }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 mb-6 shadow-lg"
            >
              <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Conoce mi historia</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Sobre Mí
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Soy un desarrollador front-end apasionado por crear experiencias web excepcionales
              que combinan funcionalidad, diseño y usabilidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Mi Historia
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Comencé mi viaje en el desarrollo web hace más de 2 años, fascinado por la capacidad
                  de transformar ideas en realidades digitales. Mi enfoque se centra en crear aplicaciones
                  web que no solo funcionen perfectamente, sino que también brinden experiencias
                  memorables a los usuarios.
                </p>

                <p>
                  Me especializo en tecnologías modernas como React, Next.js y TypeScript, combinadas
                  con un fuerte énfasis en el diseño responsivo y la accesibilidad. Creo que el buen
                  código no solo resuelve problemas técnicos, sino que también cuenta una historia
                  y conecta con las personas.
                </p>

                <p>
                  Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a
                  proyectos open source, y compartir conocimientos con la comunidad de desarrolladores.
                  Siempre estoy dispuesto a enfrentar nuevos desafíos y aprender cosas nuevas.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Coffee className="w-5 h-5 mr-2 text-indigo-600" />
                  Datos Curiosos
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Mi primer "Hola Mundo" fue en HTML puro</li>
                  <li>• Puedo debuggear con una taza de café en la mano</li>
                  <li>• Creo que el código limpio es tan importante como el funcional</li>
                  <li>• Siempre tengo múltiples proyectos personales en marcha</li>
                </ul>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                        <Code className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      Siempre aprendiendo, siempre creando
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Lo Que Me Define
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-indigo-100 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
