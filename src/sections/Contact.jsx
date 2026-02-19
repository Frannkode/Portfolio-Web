import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Send, Sparkles, Cloud, ArrowRight } from 'lucide-react'

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
    <section id="contact" className="py-32 bg-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-pink/30 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-blue/20 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-pink rounded-full text-primary font-bold text-sm mb-8">
              <Sparkles size={16} />
              <span>Conectemos nuestras energías</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-black text-text-primary mb-8 leading-[0.9]">
              ¿Iniciamos algo <span className="text-primary italic">mágico?</span>
            </h2>

            <p className="text-xl text-text-secondary mb-12 font-light leading-relaxed max-w-lg">
              Estoy listo para transformar tus visiones en realidades digitales celestiales.
              Mándame un mensaje y elevemos tu proyecto al siguiente nivel.
            </p>

            <div className="space-y-6">
              <a href="mailto:poncefrancomiguel@gmail.com" className="flex items-center gap-6 p-6 premium-glass rounded-[2rem] group hover:bg-primary/5 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-text-secondary">Escríbeme</div>
                  <div className="text-lg font-bold text-text-primary">poncefrancomiguel@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/tecfrancoponce" target="_blank" className="flex items-center gap-6 p-6 premium-glass rounded-[2rem] group hover:bg-primary/5 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Linkedin className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-text-secondary">Linkedin</div>
                  <div className="text-lg font-bold text-text-primary">Frannkode Pro</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="premium-glass p-8 md:p-12 rounded-[3rem] celestial-glow shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 float opacity-50 hidden md:block">
              <Cloud size={100} className="text-accent-blue" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary ml-2">Tu Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Cosmo Traveller"
                    className="w-full bg-white/50 border border-border focus:border-primary px-6 py-4 rounded-2xl outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary ml-2">Tu Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@universo.com"
                    className="w-full bg-white/50 border border-border focus:border-primary px-6 py-4 rounded-2xl outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-text-secondary ml-2">Tu Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame tu visión..."
                  className="w-full bg-white/50 border border-border focus:border-primary px-6 py-4 rounded-3xl outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-[2rem] font-bold text-xl flex items-center justify-center gap-3 transition-all ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/30'
                  }`}
              >
                {status === 'sending' ? 'Enviando Señal...' : status === 'success' ? '¡Señal Recibida! ✨' : (
                  <>
                    Enviar Mensaje <ArrowRight size={20} />
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium text-center">Fallo en la señal cósmica. Intenta de nuevo.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
