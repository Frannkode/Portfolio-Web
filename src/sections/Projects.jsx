import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-semibold text-text-primary mb-4"
          >
            Soluciones & <span className="text-text-secondary italic font-light">Resultados</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed"
          >
            Casos de éxito donde la tecnología transformó cuellos de botella en ventas y eficiencia operativa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl overflow-hidden transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              {/* Image Container */}
              <div className="relative h-36 overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-display font-semibold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-500/80"></span> Problema
                    </h4>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-success/80"></span> Solución
                    </h4>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/[0.05] mb-4 bg-white/[0.01] -mx-5 px-5">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-sm font-bold text-primary mb-0.5">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-text-secondary leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 items-center mt-auto pt-1">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white/[0.05] hover:bg-white/[0.1] text-text-primary border border-white/[0.05] rounded-md text-[11px] font-semibold transition-colors"
                  >
                    Ver Proyecto <ExternalLink size={12} />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-md border border-white/[0.05] text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-colors"
                    aria-label="Ver código en GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
