import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Send, ArrowRight } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Frannkode',
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 animate-grid opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mac-glass rounded-full text-text-primary text-sm mb-6 md:mb-8 border border-border">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">Iniciemos el proyecto</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-semibold text-text-primary mb-6 leading-tight">
              Hablemos de <span className="text-gradient italic">resultados.</span>
            </h2>

            <p className="text-lg md:text-xl text-text-secondary mb-10 font-light leading-relaxed max-w-lg">
              Si estás listo para escalar tu negocio y dejar atrás los problemas técnicos, envíame un mensaje.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a href="mailto:poncefrancomiguel@gmail.com" className="flex items-center gap-4 md:gap-6 p-4 md:p-6 mac-glass rounded-[1.5rem] md:rounded-[2rem] group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/[0.05] border border-border rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-bg group-hover:border-primary text-primary transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-text-secondary">Escríbeme</div>
                  <div className="text-base md:text-lg font-semibold text-text-primary">poncefrancomiguel@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/tecfrancoponce" target="_blank" className="flex items-center gap-4 md:gap-6 p-4 md:p-6 mac-glass rounded-[1.5rem] md:rounded-[2rem] group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/[0.05] border border-border rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-bg group-hover:border-primary text-primary transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-text-secondary">Linkedin</div>
                  <div className="text-base md:text-lg font-semibold text-text-primary">Franco Ponce</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mac-glass-card p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-text-secondary ml-1">Tu Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-black/20 border border-border focus:border-primary px-4 md:px-6 py-3 md:py-4 rounded-xl text-text-primary outline-none transition-all placeholder:text-text-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-text-secondary ml-1">Tu Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@empresa.com"
                    className="w-full bg-black/20 border border-border focus:border-primary px-4 md:px-6 py-3 md:py-4 rounded-xl text-text-primary outline-none transition-all placeholder:text-text-secondary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-text-secondary ml-1">Proyecto / Objetivo</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre el problema que quieres resolver..."
                  className="w-full bg-black/20 border border-border focus:border-primary px-4 md:px-6 py-3 md:py-4 rounded-xl text-text-primary outline-none transition-all resize-none placeholder:text-text-secondary/50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all ${status === 'success' ? 'bg-green-500 text-bg' : 'bg-primary text-bg hover:bg-primary/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  }`}
              >
                {status === 'sending' ? 'Enviando...' : status === 'success' ? '¡Mensaje Recibido! ✓' : (
                  <>
                    Enviar Mensaje <ArrowRight size={18} />
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium text-center">Hubo un error. Por favor intenta de nuevo.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
