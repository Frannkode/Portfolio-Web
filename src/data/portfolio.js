// Contenido tomado del README de GitHub (github.com/Frannkode/Frannkode).
export const contact = {
  whatsapp:
    'https://wa.me/5493482232529?text=Hola%20Franco%2C%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por%20un%20proyecto',
  email: 'poncefrancomiguel@gmail.com',
  github: 'https://github.com/frannkode',
  linkedin: 'https://linkedin.com/in/tecfrancoponce',
}

export const services = [
  { icon: 'ShoppingBag', title: 'Tiendas online', text: 'Desde cero o sobre Tiendanube, con personalizaciones como selectores de packs y SKUs dinámicos.' },
  { icon: 'LayoutDashboard', title: 'Sistemas de gestión', text: 'Punto de venta, control de stock y paneles con estadísticas, a medida de tu operación.' },
  { icon: 'UtensilsCrossed', title: 'Pedidos para gastronomía', text: 'Menú pensado para el celular y pedidos por WhatsApp, sin pagar comisión a terceros.' },
  { icon: 'Globe', title: 'Webs y landing pages', text: 'Rápidas y hechas para que te contacten.' },
]

export const erp = {
  title: 'ERP industrial a medida',
  lead: 'Sistema completo para una industria de alimentos: producción, stock, contabilidad, impuestos y reportes, conectados de punta a punta. Proyecto de equipo, de más de un año, en producción.',
  role: 'Mi rol: QA y revisión técnica dentro del equipo.',
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
    tech: ['React', 'React Native', 'Node.js'],
    image: '/assets/img/projects/viciosburgerr.png',
    phones: [
      { src: '/assets/img/projects/vicios-menu.png', alt: 'Menú de ViciosBurger en el celular' },
      { src: '/assets/img/projects/vicios-inicio.png', alt: 'Pantalla de inicio de ViciosBurger en el celular' },
      { src: '/assets/img/projects/vicios-detalle.png', alt: 'Detalle de un producto en ViciosBurger' },
    ],
    links: { live: 'https://viciosburgerr.vercel.app', github: 'https://github.com/Frannkode/ViciosBurgerApp', app: 'https://github.com/Frannkode/ViciosBurger' },
  },
  {
    title: 'FullBebidas',
    subtitle: 'E-commerce de bebidas',
    text: 'Plataforma a medida con carga rápida y un proceso de compra simple en el celular.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/assets/img/projects/fullbebidas.png',
    links: { live: 'https://full-bebidas.vercel.app', github: 'https://github.com/Frannkode/FullBebidas' },
  },
  {
    title: 'QuickOrder',
    subtitle: 'Sistema de pedidos en tiempo real',
    text: 'Toma de pedidos con una interfaz ultrarrápida para los operarios, pensada para las horas pico.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: '/assets/img/projects/quickorder.png',
    links: { live: 'https://quick-order-beta.vercel.app', github: 'https://github.com/Frannkode/QuickOrder' },
  },
  {
    title: 'MotoPartes',
    subtitle: 'Tienda online de repuestos de moto',
    text: 'E-commerce de catálogo para un rubro técnico, con búsqueda y navegación por categorías.',
    tech: ['React', 'JavaScript'],
    image: '/assets/img/projects/motopartes.png',
    links: { live: null, github: 'https://github.com/Frannkode/MotoPartes' },
  },
  {
    title: 'El Cruce',
    subtitle: 'Carta digital para un restaurante',
    text: 'Carta QR dinámica y pedidos centralizados en una tablet, en lugar de cartas en papel y teléfonos colapsados.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    image: '/assets/img/projects/elcruce.png',
    links: { live: 'https://elcruce.vercel.app', github: 'https://github.com/Frannkode/ElCruceRestaurant' },
  },
]

export const steps = [
  { title: 'Charlamos y definimos qué necesitás', text: 'Con un alcance claro y sin tecnicismos.' },
  { title: 'Entregas por etapas', text: 'Ves avances reales y decidimos juntos en cada paso.' },
  { title: 'Lanzamiento y soporte', text: 'Te acompaño después de publicar.' },
]

export const stack = [
  { group: 'Webs y tiendas', items: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'] },
  { group: 'Sistemas y datos', items: ['Python', 'FastAPI', 'PostgreSQL'] },
  { group: 'Nube y publicación', items: ['Firebase', 'Supabase', 'Vercel'] },
]

export const offers = [
  {
    id: 'tiendas', code: 'FRK-001', name: 'Tiendas online', title: 'Tienda online a medida',
    text: 'Catálogo, carrito y pedidos por WhatsApp, publicados en Vercel, para que tu negocio venda sin depender de terceros.',
    status: 'En producción', stack: ['React', 'Vite', 'Tailwind CSS'], back: 'Node.js, Firebase', data: 'Supabase, Firebase',
  },
  {
    id: 'pedidos', code: 'FRK-002', name: 'Pedidos por WhatsApp', title: 'Pedidos para gastronomía',
    text: 'Menú pensado para el celular, con versión web instalable y app React Native. Los pedidos llegan directo a tu WhatsApp.',
    status: 'En producción', stack: ['React', 'React Native', 'PWA'], back: 'Node.js', data: 'Firebase',
  },
  {
    id: 'gestion', code: 'FRK-003', name: 'Sistemas de gestión', title: 'Sistema de gestión a medida',
    text: 'Punto de venta, control de stock y paneles con estadísticas. El mismo oficio que usé en un ERP industrial de producción.',
    status: 'En producción', stack: ['React', 'TypeScript'], back: 'Python, FastAPI', data: 'PostgreSQL',
  },
]
