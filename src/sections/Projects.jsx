import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github } from 'lucide-react'
import { TiltCard } from '../components/TiltCard'

const bentoSpan = (i) => {
  if (i === 0) return 'md:col-span-2 lg:col-span-2 lg:row-span-2'
  if (i === 1) return 'md:col-span-2 lg:col-span-2'
  return 'lg:col-span-1'
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[minmax(220px,1fr)_minmax(220px,1fr)] gap-6">
          {portfolioData.projects.map((project, i) => {
            const isFeatured = i === 0
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={bentoSpan(i)}
              >
              <TiltCard
                tiltStrength={isFeatured ? 4 : 6}
                className={`flex flex-col h-full bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_0_40px_var(--primary-glow)] ${isFeatured ? 'lg:flex-row' : ''}`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden border-b border-white/[0.05] shrink-0 ${isFeatured ? 'h-48 lg:h-auto lg:w-1/2 lg:border-b-0 lg:border-r' : 'h-36'}`}>
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-700 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  {isFeatured && (
                    <span className="absolute top-3 left-3 z-20 text-[10px] font-mono uppercase tracking-widest bg-primary text-on-primary px-2.5 py-1 rounded-full font-bold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 flex flex-col ${isFeatured ? 'p-6 lg:p-8 lg:justify-center' : 'p-5'}`}>
                  <div className="mb-3">
                    <h3 className={`font-display font-semibold text-text-primary mb-1 ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.tech && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-text-secondary border border-border rounded-full px-2 py-0.5 bg-white/[0.02]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={`space-y-3 mb-6 flex-1 ${isFeatured ? 'lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0' : ''}`}>
                    <div>
                      <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-red-500/80"></span> Problema
                      </h4>
                      <p className={`text-text-primary/80 leading-relaxed ${isFeatured ? 'text-sm' : 'text-xs'}`}>
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-success/80"></span> Solución
                      </h4>
                      <p className={`text-text-primary/80 leading-relaxed ${isFeatured ? 'text-sm' : 'text-xs'}`}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className={`grid grid-cols-2 gap-2 py-3 border-y border-white/[0.05] mb-4 bg-white/[0.01] ${isFeatured ? '-mx-6 lg:-mx-8 px-6 lg:px-8' : '-mx-5 px-5'}`}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className={`font-bold text-primary mb-0.5 ${isFeatured ? 'text-lg' : 'text-sm'}`}>
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
              </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
