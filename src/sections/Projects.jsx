import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "ReactVicios",
      description: "Plataforma completa para gestión de menús de hamburguesería con integración de WhatsApp. Permite a los clientes hacer pedidos directamente desde el menú digital.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API", "Firebase"],
      image: "https://raw.githubusercontent.com/Frannkode/Portfolio-Web/refs/heads/main/src/assets/viciosburgerr.png",
      liveUrl: "https://viciosburgerr.vercel.app",
      githubUrl: "https://github.com/frannkode/ReactVicios"
}
    // {
    //   id: 2,
    //   title: "TaskFlow Dashboard",
    //   description: "Dashboard administrativo moderno para gestión de tareas y proyectos. Incluye autenticación, roles de usuario, reportes en tiempo real.",
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    //   liveUrl: "https://taskflow-demo.vercel.app",
    //   githubUrl: "https://github.com/frannkode/taskflow-dashboard"
    // },
    // {
    //   id: 3,
    //   title: "EcoShop Landing",
    //   description: "Landing page moderna para tienda online ecológica. Diseño responsive con integración de pasarelas de pago y optimización SEO.",
    //   technologies: ["React", "Framer Motion", "Styled Components", "Stripe"],
    //   image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
    //   liveUrl: "https://ecoshop-landing.vercel.app",
    //   githubUrl: "https://github.com/frannkode/ecoshop-landing"
    // },
    // {
    //   id: 4,
    //   title: "WeatherWise App",
    //   description: "Aplicación meteorológica con pronósticos en tiempo real, mapas interactivos y notificaciones personalizables.",
    //   technologies: ["React Native", "TypeScript", "Expo", "OpenWeather API"],
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
    //   liveUrl: "https://weatherwise-app.vercel.app",
    //   githubUrl: "https://github.com/frannkode/weatherwise-app"
    // },
    // {
    //   id: 5,
    //   title: "DevBlog Platform",
    //   description: "Plataforma de blogging para desarrolladores con editor Markdown, resaltado de sintaxis y sistema de comentarios.",
    //   technologies: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS"],
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=500&h=300&fit=crop&crop=center",
    //   liveUrl: "https://devblog-platform.vercel.app",
    //   githubUrl: "https://github.com/frannkode/devblog-platform"
    // }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Portfolio 2025</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent"
            >
              Mis Proyectos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Una selección curada de proyectos que demuestran mi expertise en desarrollo moderno,
              desde aplicaciones web innovadoras hasta plataformas escalables.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] bg-white/95 dark:bg-slate-900/95 rounded-3xl" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-200"
                          aria-label="Ver demo"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-200"
                          aria-label="Ver código"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold border border-indigo-200/50 dark:border-indigo-700/30 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/30 dark:hover:to-purple-800/30 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-semibold">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white to-indigo-200 bg-clip-text text-transparent"
              >
                ¿Listo para crear algo increíble?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg"
              >
                Tengo más proyectos fascinantes en mi GitHub. Si tienes una idea innovadora o necesitas
                un desarrollador para tu próximo proyecto, ¡conectemos!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="https://github.com/frannkode"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-slate-900/25 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  Explorar GitHub
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
                >
                  <Sparkles className="w-5 h-5" />
                  Iniciar Proyecto
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
