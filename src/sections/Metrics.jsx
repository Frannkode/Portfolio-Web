import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export function Metrics() {
    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioData.metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                className="text-5xl md:text-7xl font-display font-black text-text-primary mb-4 group-hover:text-primary transition-colors"
                            >
                                {metric.value}{metric.suffix}
                            </motion.div>
                            <div className="text-sm md:text-base text-text-secondary font-mono uppercase tracking-widest max-w-[150px] mx-auto leading-tight">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
