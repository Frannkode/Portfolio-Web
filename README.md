# Frannkode, portfolio

Portfolio de Franco Ponce, desarrollador Full Stack en Reconquista, Santa Fe.

- **Stack:** React 19, Vite 7, CSS propio, Lenis (scroll suave), EmailJS (formulario de contacto).
- **Contenido:** todo el texto y los proyectos están en `src/data/portfolio.js`.
- **Efectos de scroll:** `src/hooks/useScrollFx.js` (respeta "reducir movimiento").
- **Formulario:** requiere `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY` en `.env.local`.
- **Guía gratis:** `public/metodo.html` (página estática con el PDF en `public/assets/`).

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción en dist/
npm run lint
```
