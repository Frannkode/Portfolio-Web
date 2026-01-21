import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "ReactVicios",
      description: "Plataforma completa para gestión de menús de hamburguesería con integración de WhatsApp. Permite a los clientes hacer pedidos directamente desde el menú digital, con personalización completa del diseño y gestión de inventario en tiempo real.",
      longDescription: "Desarrollé una solución integral para restaurantes que combina un menú digital atractivo con un sistema de pedidos vía WhatsApp. La plataforma incluye gestión de productos, categorías, personalización de colores y logos, y estadísticas de ventas. Los clientes pueden ver el menú, personalizar sus pedidos y enviarlos directamente al restaurante.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API", "Firebase"],
      image: "",
      liveUrl: "https://reactvicios.vercel.app",
      githubUrl: "https://github.com/frannkode/ReactVicios",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow Dashboard",
      description: "Dashboard administrativo moderno para gestión de tareas y proyectos. Incluye autenticación, roles de usuario, reportes en tiempo real y interfaz intuitiva para equipos de trabajo.",
      longDescription: "Una aplicación completa de gestión de proyectos con dashboard administrativo. Incluye sistema de autenticación JWT, roles de usuario (admin, manager, user), creación y asignación de tareas, seguimiento de progreso, reportes en tiempo real con gráficos, y notificaciones push.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://taskflow-demo.vercel.app",
      githubUrl: "https://github.com/frannkode/taskflow-dashboard",
      featured: true
    },
    {
      id: 3,
      title: "EcoShop Landing",
      description: "Landing page moderna para tienda online ecológica. Diseño responsive con integración de pasarelas de pago, sistema de reseñas y optimización SEO completa.",
      longDescription: "Página de destino optimizada para conversión con diseño moderno y ecológico. Incluye integración con Stripe para pagos, sistema de reseñas de productos, carrito de compras persistente, optimización SEO completa, y analíticas integradas.",
      technologies: ["React", "Framer Motion", "Styled Components", "Stripe", "SEO"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://ecoshop-landing.vercel.app",
      githubUrl: "https://github.com/frannkode/ecoshop-landing",
      featured: false
    },
    {
      id: 4,
      title: "WeatherWise App",
      description: "Aplicación meteorológica con pronósticos en tiempo real, mapas interactivos y notificaciones personalizables. Desarrollada con React Native para iOS y Android.",
      longDescription: "App móvil completa con pronósticos del tiempo precisos, mapas interactivos con radar, notificaciones personalizables según el clima, guardado de ubicaciones favoritas, y widgets para pantalla de inicio. Utiliza la API de OpenWeatherMap para datos actualizados.",
      technologies: ["React Native", "TypeScript", "Expo", "OpenWeather API", "AsyncStorage"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://weatherwise-app.vercel.app",
      githubUrl: "https://github.com/frannkode/weatherwise-app",
      featured: false
    },
    {
      id: 5,
      title: "DevBlog Platform",
      description: "Plataforma de blogging para desarrolladores con editor Markdown, resaltado de sintaxis, sistema de comentarios y gestión de contenido completo.",
      longDescription: "CMS completo para blogs técnicos con editor Markdown enriquecido, resaltado de sintaxis para múltiples lenguajes de programación, sistema de comentarios, categorías y tags, búsqueda avanzada, y panel administrativo completo para gestión de posts y usuarios.",
      technologies: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "React Markdown"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=500&h=300&fit=crop&crop=center",
      liveUrl: "https://devblog-platform.vercel.app",
      githubUrl: "https://github.com/frannkode/devblog-platform",
      featured: false
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'h-64 lg:h-80' : 'h-48'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex-1 justify-center"
                    >
                      <Eye className="w-4 h-4" />
                      Ver Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
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
