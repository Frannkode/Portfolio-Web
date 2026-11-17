import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../data/portfolio'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => { const v = e.target.value; setForm((f) => ({ ...f, [k]: v })) }

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
      if (import.meta.env.DEV) console.error('Email error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="close">
      <div className="wrap close__grid">
        <div className="close__side">
          <h2 data-reveal>¿Qué querés ordenar en tu negocio?</h2>
          <p data-reveal style={{ '--i': 1 }}>Contame en dos líneas cómo trabajás hoy (ventas, stock, pedidos) y qué te lleva más tiempo. Te respondo al momento por WhatsApp y te paso un precio de referencia.</p>
          <a className="btn btn--invert btn--lg" href={contact.whatsapp} target="_blank" rel="noreferrer" data-reveal style={{ '--i': 2 }}>Escribime por WhatsApp<span className="sr"> (abre en una pestaña nueva)</span></a>
          <div className="links" data-reveal style={{ '--i': 3 }}>
            <a href={`mailto:${contact.email}`}><Mail size={15} aria-hidden="true" /> {contact.email}</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub<span className="sr"> (abre en una pestaña nueva)</span></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} aria-hidden="true" /> LinkedIn<span className="sr"> (abre en una pestaña nueva)</span></a>
          </div>
        </div>
        <form className="panel form" onSubmit={submit} data-reveal style={{ '--i': 1 }}>
          <label className="field"><span>Nombre</span><input required name="name" value={form.name} onChange={set('name')} autoComplete="name" /></label>
          <label className="field"><span>Email</span><input required type="email" name="email" inputMode="email" spellCheck={false} placeholder="tu@email.com" value={form.email} onChange={set('email')} autoComplete="email" /></label>
          <label className="field"><span>Mensaje</span><textarea required name="message" value={form.message} onChange={set('message')} /></label>
          <button type="submit" className="btn btn--invert btn--lg" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar consulta'}</button>
          <p className="form__status" role="status">
            {status === 'sending' && 'Enviando…'}
            {status === 'success' && 'Consulta enviada. Te respondo pronto.'}
            {status === 'error' && 'No se pudo enviar. Escribime por WhatsApp o por mail.'}
          </p>
        </form>
      </div>
    </section>
  )
}
