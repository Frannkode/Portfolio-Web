import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { Server, Layout, ShieldCheck, Zap } from 'lucide-react'

const icons = { Server, Layout, ShieldCheck, Zap }

export function Engineering() {
    return (
        <section id="engineering" className="py-32 bg-bg relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-text-primary mb-6">
                            Cómo pienso como <span className="text-primary italic">ingeniero</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            No solo escribo código; diseño sistemas. Mi enfoque está orientado a la escalabilidad,
                            la mantenibilidad y la entrega de valor real al negocio.
                        </p>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-sm font-mono text-primary uppercase tracking-tighter opacity-50">
                            Architectural Mindset // 2026 Standard
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioData.engineeringMindset.map((item, i) => {
                        const Icon = icons[item.icon]
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="premium-glass p-10 rounded-3xl border-white/5 group hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
