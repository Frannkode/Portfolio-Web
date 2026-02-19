import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export function Stack() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-text-primary mb-6">
                        Arsenal <span className="text-primary italic">Técnico</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Herramientas que utilizo para construir soluciones robustas. Cada tecnología tiene un propósito claro en mi flujo de trabajo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {portfolioData.stack.map((category, i) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="premium-glass p-12 rounded-[2.5rem] border-white/5"
                        >
                            <h3 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-12">
                                {category.category}
                            </h3>
                            <div className="space-y-12">
                                {category.tools.map(tool => (
                                    <div key={tool.name} className="group">
                                        <div className="text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                                            {tool.name}
                                        </div>
                                        <p className="text-text-secondary leading-relaxed font-light">
                                            {tool.usage}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
