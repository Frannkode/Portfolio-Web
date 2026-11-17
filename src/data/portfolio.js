// Contenido tomado del README de GitHub (github.com/Frannkode/Frannkode).
const WA = 'https://wa.me/5493482232529'

export const contact = {
  whatsapp: `${WA}?text=Hola%20Franco%2C%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto`,
  email: 'poncefrancomiguel@gmail.com',
  github: 'https://github.com/frannkode',
  linkedin: 'https://linkedin.com/in/tecfrancoponce',
}

export const whatsappBase = `${WA}?text=`

// Valores de referencia en pesos argentinos; se confirman según el alcance.
export const plans = [
  {
    id: 'landing', name: 'Landing', price: '$80.000', from: true,
    text: 'Una página clara con tus servicios y un botón para que te escriban.',
    items: ['Tus servicios y tu zona en una sola página', 'Botón directo a WhatsApp', 'Se ve bien en el celular', 'Publicada en internet'],
  },
  {
    id: 'web', name: 'Web o tienda', price: '$250.000', from: false,
    text: 'Una web más completa o una tienda para vender online.',
    items: ['Varias secciones, o catálogo y carrito', 'Pedidos por WhatsApp', 'Diseño a medida de tu marca', 'Publicada y lista para usar'],
  },
  {
    id: 'sistema', name: 'Software a medida', price: '$1.600.000', from: true, featured: true,
    text: 'Un sistema hecho para tu operación. En proyectos grandes trabajo con el equipo de desarrollo con el que colaboro.',
    items: ['Punto de venta, stock y paneles con estadísticas', 'Usuarios y permisos', 'Alcance y plazos acordados antes de empezar', 'En proyectos grandes, con el equipo de desarrollo con el que trabajo'],
  },
]

export const services = [
  { icon: 'LayoutDashboard', title: 'Sistemas de gestión', text: 'Punto de venta, control de stock y paneles con estadísticas, hechos según cómo trabaja tu operación y no al revés.' },
  { icon: 'ShoppingBag', title: 'Tiendas online', text: 'Catálogo, carrito y pedidos por WhatsApp. Desde cero o sobre Tiendanube, con personalizaciones como selectores de packs y SKUs dinámicos.' },
  { icon: 'UtensilsCrossed', title: 'Pedidos para gastronomía', text: 'Carta pensada para el celular y pedidos directo a tu WhatsApp, sin plataformas que cobren comisión por pedido.' },
  { icon: 'Globe', title: 'Webs y landing pages', text: 'Una página clara con tus servicios y un botón directo a WhatsApp, para que quien te busca te escriba.' },
]

export const erp = {
  title: 'ERP industrial a medida',
  lead: 'Sistema para una industria de alimentos, desarrollado por un equipo durante más de un año y hoy en producción. Mi rol fue QA y revisión técnica.',
  role: 'Las cifras corresponden al sistema completo. Es el equipo de desarrollo con el que trabajo en proyectos grandes.',
  stats: [
    { value: '370 mil+', label: 'líneas de Python' },
    { value: '900+', label: 'migraciones de base de datos' },
    { value: '850+', label: 'archivos de test' },
  ],
  modules: [
    'Producción industrial', 'Stock y trazabilidad', 'Contabilidad', 'Impuestos y facturación electrónica',
    'Tesorería y punto de venta', 'Socios y sueldos', 'Precios y márgenes', 'Logística y reparto',
    'Reportes y KPIs', 'Calidad y mantenimiento', 'Integraciones', 'Roles y permisos',
  ],
  qa: [
    'Planificación de pruebas por sprint, cruzando datos de Jira con copias de la base para detectar inconsistencias antes de salir a producción.',
    'Diagnóstico de errores en producción: fallas de esquemas y de conectividad con la base de datos.',
    'Revisión de pull requests con comentarios técnicos.',
    'Testing de la app móvil en React Native y depuración de entornos Docker y migraciones.',
  ],
  tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'GitHub Actions', 'React Native'],
}

export const projects = [
  {
    title: 'ViciosBurger',
    subtitle: 'Pedidos online para una hamburguesería',
    text: 'Pensado para el celular, con versión web instalable y app React Native. Canal propio por WhatsApp, sin intermediarios ni comisiones.',
    result: 'Los pedidos entran ordenados y dejó de contestar consulta por consulta.',
    tech: ['React', 'React Native', 'Node.js'],
    phones: [
      { src: '/assets/img/projects/vicios-menu.webp', alt: 'Menú de ViciosBurger en el celular' },
      { src: '/assets/img/projects/vicios-inicio.webp', alt: 'Pantalla de inicio de ViciosBurger en el celular' },
      { src: '/assets/img/projects/vicios-detalle.webp', alt: 'Detalle de un producto en ViciosBurger' },
    ],
    links: { live: 'https://viciosburgerr.vercel.app', github: 'https://github.com/Frannkode/ViciosBurgerApp', app: 'https://github.com/Frannkode/ViciosBurger' },
  },
  {
    title: 'FullBebidas',
    subtitle: 'E-commerce de bebidas',
    text: 'Plataforma a medida con carga rápida y un proceso de compra simple en el celular.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/assets/img/projects/fullbebidas.webp',
    links: { live: 'https://full-bebidas.vercel.app', github: 'https://github.com/Frannkode/FullBebidas' },
  },
  {
    title: 'QuickOrder',
    subtitle: 'Sistema de pedidos en tiempo real',
    text: 'Toma de pedidos con una interfaz ultrarrápida para los operarios, pensada para las horas pico.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: '/assets/img/projects/quickorder.webp',
    links: { live: 'https://quick-order-beta.vercel.app', github: 'https://github.com/Frannkode/QuickOrder' },
  },
  {
    title: 'MotoPartes',
    subtitle: 'Tienda online de repuestos de moto',
    text: 'E-commerce de catálogo para un rubro técnico, con búsqueda y navegación por categorías.',
    tech: ['React', 'JavaScript'],
    image: '/assets/img/projects/motopartes.webp',
    links: { live: null, github: 'https://github.com/Frannkode/MotoPartes' },
  },
  {
    title: 'El Cruce',
    subtitle: 'Carta digital para un restaurante',
    text: 'Una carta QR que el cliente abre desde la mesa y pedidos centralizados en una tablet, en lugar de cartas en papel y teléfonos colapsados.',
    result: 'Los clientes ya no tienen problemas para ver la carta.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    image: '/assets/img/projects/elcruce.webp',
    links: { live: 'https://elcruce.vercel.app', github: 'https://github.com/Frannkode/ElCruceRestaurant' },
  },
]

export const steps = [
  { title: 'Charlamos y acordamos el alcance', text: 'Me contás cómo trabaja tu negocio y te paso qué incluye, a qué precio y qué queda afuera, antes de empezar.' },
  { title: 'Entregas por etapas', text: 'Vas viendo el sistema funcionando en cada etapa y decidimos juntos qué ajustar.' },
  { title: 'Publicación y soporte', text: 'Publico el proyecto. El soporte posterior depende del plan y se acuerda al cotizar.' },
]

export const offers = [
  {
    id: 'gestion', code: 'FRK-001', name: 'Sistemas de gestión', title: 'Sistema de gestión a medida',
    text: 'Punto de venta, control de stock y paneles con estadísticas, hechos según cómo trabaja tu negocio. Aplico la revisión técnica que practiqué como QA en un ERP industrial.',
    status: 'Disponible', stack: ['React', 'TypeScript'], back: 'Python, FastAPI', data: 'PostgreSQL',
  },
  {
    id: 'tiendas', code: 'FRK-002', name: 'Tiendas online', title: 'Tienda online a medida',
    text: 'Catálogo, carrito y pedidos por WhatsApp, publicados en Vercel, para que tu negocio venda sin depender de terceros.',
    status: 'Disponible', stack: ['React', 'Vite', 'Tailwind CSS'], back: 'Node.js, Firebase', data: 'Supabase, Firebase',
  },
  {
    id: 'pedidos', code: 'FRK-003', name: 'Pedidos por WhatsApp', title: 'Pedidos para gastronomía',
    text: 'Menú pensado para el celular, con versión web instalable y app React Native. Los pedidos llegan directo a tu WhatsApp.',
    status: 'Disponible', stack: ['React', 'React Native', 'PWA'], back: 'Node.js', data: 'Firebase',
  },
]
