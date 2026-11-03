import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../data/portfolio'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const { default: emailjs } = await import('@emailjs/browser') // se carga recién al enviar
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_name: 'Frannkode' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Email error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="close">
      <div className="wrap close__grid">
        <div className="close__side">
          <h2 data-reveal>¿Tenés un proyecto en mente?</h2>
          <p data-reveal style={{ '--i': 1 }}>Contame qué necesitás y te respondo con una propuesta.</p>
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer" data-reveal style={{ '--i': 2 }}>Hablemos por WhatsApp</a>
          <div className="links" data-reveal style={{ '--i': 3 }}>
            <a href={`mailto:${contact.email}`}><Mail size={15} aria-hidden="true" /> {contact.email}</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
        <form className="panel form" onSubmit={submit} data-reveal style={{ '--i': 1 }}>
          <input required aria-label="Nombre" name="name" placeholder="Tu nombre…" value={form.name} onChange={set('name')} autoComplete="name" />
          <input required type="email" aria-label="Email" name="email" inputMode="email" spellCheck={false} placeholder="tu@email.com…" value={form.email} onChange={set('email')} autoComplete="email" />
          <textarea required aria-label="Mensaje" name="message" placeholder="Contame qué necesitás…" value={form.message} onChange={set('message')} />
          <button className="btn btn--invert btn--lg" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Pedir presupuesto'}</button>
          <p className="form__status" role="status">
            {status === 'success' && 'Mensaje enviado. Te respondo pronto.'}
            {status === 'error' && 'No se pudo enviar. Escribime por WhatsApp o por mail.'}
          </p>
        </form>
      </div>
    </section>
  )
}
