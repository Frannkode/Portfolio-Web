import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { useState, useRef } from 'react'

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Spotlight effect for cards
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`project-card-${index}`);
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg relative overflow-hidden">
      {/* Decorative blurred background orb */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-semibold text-text-primary mb-6"
          >
            Soluciones & <span className="text-gradient">Resultados</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            Casos de éxito donde la tecnología transformó cuellos de botella en ventas y eficiencia operativa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              id={`project-card-${i}`}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col mac-glass-card overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              <div className="spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-bg/20 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-text-secondary uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80"></span> Problema
                    </h4>
                    <p className="text-sm md:text-base text-text-primary/90 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span> Solución
                    </h4>
                    <p className="text-sm md:text-base text-text-primary/90 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border mb-6 bg-white/[0.02] -mx-6 md:-mx-8 px-6 md:px-8">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-lg md:text-xl font-bold text-primary mb-0.5">
                        {metric.value}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 items-center mt-auto pt-2">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-bg rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Ver Proyecto <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-border text-text-secondary hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Ver código en GitHub"
                  >
                    <Github size={18} />
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
