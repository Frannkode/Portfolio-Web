import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiFirebase } from 'react-icons/si'

const iconMap = {
    SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiFirebase
}

export function Stack() {
    const allTools = portfolioData.stack.flatMap((category) => category.tools)

    return (
        <section id="stack" className="py-24 bg-bg relative overflow-hidden border-t border-border/50">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4 md:mb-6">
                            Tecnología de <span className="text-gradient italic">Vanguardia</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light">
                            Selección precisa de herramientas empresariales. Sin modas pasajeras, solo tecnología comprobada que escala.
                        </p>
                    </motion.div>
                </div>

                {/* Infinite marquee ticker */}
                <div className="relative mb-16 md:mb-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-max animate-marquee">
                        {[...allTools, ...allTools].map((tool, i) => {
                            const Icon = iconMap[tool.icon] || SiReact
                            return (
                                <div key={`${tool.name}-${i}`} className="flex items-center gap-3 px-8 shrink-0">
                                    <Icon size={22} className="text-text-secondary" />
                                    <span className="font-mono text-sm text-text-secondary whitespace-nowrap">{tool.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="space-y-16 max-w-6xl mx-auto">
                    {portfolioData.stack.map((category, catIdx) => (
                        <div key={category.category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.2 }}
                                className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] font-semibold mb-8 flex items-center gap-4"
                            >
                                <span className="w-12 h-[1px] bg-border" />
                                {category.category}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.tools.map((tool, i) => {
                                    const Icon = iconMap[tool.icon] || SiReact;
                                    return (
                                        <motion.div
                                            key={tool.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="group relative p-6 md:p-8 rounded-[1.5rem] mac-glass-card hover:border-primary/30 hover:shadow-[0_0_35px_var(--primary-glow)] transition-all duration-500 overflow-hidden min-h-[180px]"
                                        >
                                            {/* Giant Watermark Icon */}
                                            <div className="absolute -right-6 -top-6 text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 rotate-12 group-hover:rotate-0 group-hover:scale-110">
                                                <Icon size={140} />
                                            </div>

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-border flex items-center justify-center text-text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300">
                                                    <Icon size={24} />
                                                </div>
                                                <h4 className="text-xl font-display font-semibold text-text-primary mb-2">
                                                    {tool.name}
                                                </h4>

                                                <div className="relative overflow-hidden">
                                                    <motion.p
                                                        initial={false}
                                                        className="text-sm text-text-secondary leading-relaxed opacity-70 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400"
                                                    >
                                                        {tool.usage}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

