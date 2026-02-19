import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-text-primary mb-8">
            Casos de <span className="text-primary italic">Estudio</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
            Selección estratégica de proyectos donde la arquitectura y las decisiones técnicas
            fueron clave para resolver problemas reales de negocio.
          </p>
        </div>

        <div className="space-y-40">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full group relative">
                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 premium-glass">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bg/40 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="text-primary font-mono text-sm tracking-widest uppercase">
                    {project.impact}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div>
                    <h4 className="text-text-primary font-bold mb-2 flex items-center gap-2">
                      Contexto & Problema
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed italic">
                      {project.context}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold mb-2 flex items-center gap-2">
                      Decisiones Técnicas
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.decisions}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-white/5 text-text-secondary rounded-full text-xs font-mono border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-text-primary font-bold group"
                  >
                    Demo en vivo <ExternalLink size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-text-secondary font-bold group hover:text-white transition-colors"
                  >
                    Ver código <Github size={18} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
