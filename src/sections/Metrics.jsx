import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export function Metrics() {
    return (
        <section className="py-24 bg-bg relative z-10 border-y border-border/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-border/50">
                    {portfolioData.metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`text-center group flex flex-col items-center justify-center ${i > 1 ? 'pt-8 md:pt-0' : i === 1 ? 'pt-0 md:pt-0' : i === 0 ? 'pb-0 md:pb-0' : 'pt-8 md:pt-0'} ${i === 2 || i === 3 ? 'pt-8 md:pt-0' : ''}`} // Just handling grid borders for mobile visually
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-text-primary mb-2 md:mb-4 group-hover:scale-105 transition-transform duration-300"
                            >
                                {metric.value}<span className="text-primary/70">{metric.suffix}</span>
                            </motion.div>
                            <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest max-w-[150px] md:max-w-[180px] mx-auto leading-relaxed">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
