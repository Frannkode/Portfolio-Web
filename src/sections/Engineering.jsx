import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { Server, Layout, ShieldCheck, Zap } from 'lucide-react'

const icons = { Server, Layout, ShieldCheck, Zap }

export function Engineering() {
    return (
        <section id="engineering" className="py-24 bg-bg relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-4 md:mb-6">
                            Ventaja <span className="text-gradient italic">Competitiva</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            La tecnología no es un gasto, es un multiplicador. Así es como aseguro el retorno de tu inversión.
                        </p>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest opacity-50 font-semibold">
                            Business Value // 2026
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {portfolioData.engineeringMindset.map((item, i) => {
                        const Icon = icons[item.icon]
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-[2rem] p-px overflow-hidden group transition-transform duration-500 hover:-translate-y-1"
                            >
                                <div
                                    className="spin-border-bg absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: 'conic-gradient(from 0deg, transparent 0%, var(--accent) 12%, transparent 28%)' }}
                                />
                                <div className="relative mac-glass p-8 md:p-10 rounded-[2rem] h-full">
                                    <div className="w-14 h-14 bg-white/[0.05] border border-border rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 text-primary shadow-lg">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-text-primary mb-3 md:mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
