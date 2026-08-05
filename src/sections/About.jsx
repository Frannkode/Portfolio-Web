import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { Counter } from '../components/Counter'

export function About() {
  const { badge, heading, bio, stats, timeline } = portfolioData.about

  return (
    <section id="about" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/[0.04] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 mac-glass rounded-full border-border"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest font-semibold">
              {badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed"
          >
            {bio}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-20 md:mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-2">
                <Counter value={stat.value} /><span className="text-primary/70">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08 }}
                className="relative flex md:justify-center"
              >
                <div className="md:grid md:grid-cols-2 md:gap-10 w-full">
                  <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                    <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-semibold text-text-primary mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-bg md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
