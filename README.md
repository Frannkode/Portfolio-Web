# Portfolio de Franco - Desarrollador Front-End

Un portfolio moderno y profesional creado con React, Vite, Tailwind CSS y Framer Motion. Diseñado para destacar en el mercado laboral de 2026 y atraer oportunidades de trabajo remoto/freelance.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con dark/light mode
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Animaciones**: Transiciones suaves con Framer Motion
- **SEO Optimizado**: Meta tags, Open Graph y rendimiento optimizado
- **Accesibilidad**: Labels ARIA, navegación por teclado y contraste adecuado
- **Performance**: Lazy loading, optimización de fuentes y código limpio

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Íconos**: Lucide React
- **Deployment**: Vercel

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación y menú móvil
│   ├── Footer.jsx          # Footer con información de contacto
│   └── ThemeToggle.jsx     # Toggle para dark/light mode
├── sections/
│   ├── Hero.jsx            # Sección principal con presentación
│   ├── About.jsx           # Información personal y destacados
│   ├── Skills.jsx          # Tecnologías y habilidades
│   ├── Projects.jsx        # Portafolio de proyectos
│   └── Contact.jsx         # Formulario de contacto
├── hooks/
│   └── useTheme.js         # Hook para gestión de tema
└── utils/
    └── (futuras utilidades)
```

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/frannkode/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Build para Producción
```bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
```

## 📦 Deployment en Vercel

### Opción 1: Deploy Automático (Recomendado)
1. Conecta tu repositorio de GitHub con Vercel
2. Push a la rama `main` - el deploy se hace automáticamente
3. Vercel detectará automáticamente la configuración de Vite

### Opción 2: Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para producción
vercel --prod
```

### Configuración de Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## 🎨 Personalización

### Cambiar Información Personal
Edita los siguientes archivos:

- `src/sections/Hero.jsx`: Nombre, título, descripción
- `src/sections/About.jsx`: Información personal
- `src/sections/Contact.jsx`: Email y ubicación
- `src/sections/Projects.jsx`: Agrega tus proyectos reales

### Cambiar Colores
Los colores principales están definidos en Tailwind:
- Primary: Indigo/Purple (`indigo-600`, `purple-600`)
- Background: Slate grays
- Modifica en `tailwind.config.js` si es necesario

### Agregar Nuevos Proyectos
En `src/sections/Projects.jsx`, agrega objetos al array `projects`:

```javascript
{
  id: 6,
  title: "Mi Nuevo Proyecto",
  description: "Descripción breve",
  longDescription: "Descripción detallada",
  technologies: ["React", "Node.js"],
  image: "url-de-imagen",
  liveUrl: "https://mi-proyecto.com",
  githubUrl: "https://github.com/user/repo",
  featured: false
}
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

## 📱 Características de Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid y Flexbox
- **Typography**: Escalable con `clamp()` y responsive text

## 🌙 Dark Mode

- **Sistema**: Detecta preferencia del usuario automáticamente
- **Manual**: Toggle en la navegación
- **Persistencia**: Guarda preferencia en localStorage
- **Transiciones**: Suaves entre modos

## 📈 SEO y Performance

### SEO
- Meta tags completos
- Open Graph para redes sociales
- Structured data (JSON-LD)
- URLs limpias y descriptivas

### Performance
- Lazy loading de imágenes
- Code splitting automático
- Optimización de fuentes
- Minificación y compresión

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Franco**
- Email: poncefrancomiguel@gmail.com
- GitHub: [@frannkode](https://github.com/frannkode)
- LinkedIn: [Franco Dev](https://linkedin.com/in/franco-dev)
- Ubicación: Argentina, Reconquista

---

⭐ Si te gusta este portfolio, ¡dale una estrella en GitHub!

Creado con ❤️ por Franco - Desarrollador Front-End
