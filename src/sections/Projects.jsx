import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "ReactVicios",
      description: "Plataforma completa para gestión de menús de hamburguesería con integración de WhatsApp. Permite a los clientes hacer pedidos directamente desde el menú digital.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API", "Firebase"],
      image: "https://raw.githubusercontent.com/Frannkode/Portfolio-Web/refs/heads/main/src/assets/viciosburgerr.png",
      liveUrl: "https://reactvicios.vercel.app",
      githubUrl: "https://github.com/frannkode/ReactVicios"
    },
    {
      id: 2,
      title: "TaskFlow Dashboard",
      description: "Dashboard administrativo moderno para gestión de tareas y proyectos. Incluye autenticación, roles de usuario, reportes en tiempo real.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://taskflow-demo.vercel.app",
      githubUrl: "https://github.com/frannkode/taskflow-dashboard"
    },
    {
      id: 3,
      title: "EcoShop Landing",
      description: "Landing page moderna para tienda online ecológica. Diseño responsive con integración de pasarelas de pago y optimización SEO.",
      technologies: ["React", "Framer Motion", "Styled Components", "Stripe"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://ecoshop-landing.vercel.app",
      githubUrl: "https://github.com/frannkode/ecoshop-landing"
    },
    {
      id: 4,
      title: "WeatherWise App",
      description: "Aplicación meteorológica con pronósticos en tiempo real, mapas interactivos y notificaciones personalizables.",
      technologies: ["React Native", "TypeScript", "Expo", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://weatherwise-app.vercel.app",
      githubUrl: "https://github.com/frannkode/weatherwise-app"
    },
    {
      id: 5,
      title: "DevBlog Platform",
      description: "Plataforma de blogging para desarrolladores con editor Markdown, resaltado de sintaxis y sistema de comentarios.",
      technologies: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://devblog-platform.vercel.app",
      githubUrl: "https://github.com/frannkode/devblog-platform"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Mis Proyectos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo front-end,
            desde aplicaciones web hasta plataformas completas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/90 text-slate-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-slate-800/90 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Tengo más proyectos en mi GitHub. Si tienes una idea o proyecto en mente,
              ¡hablemos sobre cómo podemos trabajar juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/frannkode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                Ver más en GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Trabajemos juntos
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
