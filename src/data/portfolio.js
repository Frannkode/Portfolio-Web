export const portfolioData = {
    hero: {
        name: "Frannkode",
        role: "Fullstack Engineer & Creative Architect",
        tagline: "Elevemos tus ideas a una dimensión digital celestial. Construyo sistemas elegantes, eficientes y llenos de luz.",
        cta: {
            primary: "Explorar Universo",
            secondary: "Hablemos"
        }
    },
    metrics: [
        { label: "Proyectos Reales Desplegados", value: "15+", suffix: "" },
        { label: "Automatizaciones Implementadas", value: "8", suffix: "" },
        { label: "Optimización de Performance", value: "40", suffix: "%" },
        { label: "Reducción de Tiempos Manuales", value: "60", suffix: "%" }
    ],
    engineeringMindset: [
        {
            title: "Arquitectura Backend Escalable",
            description: "Diseño sistemas basados en microservicios o monolitos modulares, priorizando la separación de preocupaciones y la facilidad de escalado horizontal.",
            icon: "Server"
        },
        {
            title: "Frontend Mantenible",
            description: "Implemento arquitecturas basadas en componentes puras, utilizando patrones como Composition y Hooks personalizados para maximizar la reutilización.",
            icon: "Layout"
        },
        {
            title: "Principios SOLID & Clean Code",
            description: "Mi código no solo funciona, es legible. Aplico SOLID para asegurar que el sistema pueda evolucionar sin romperse.",
            icon: "ShieldCheck"
        },
        {
            title: "Mentalidad de Automatización",
            description: "Si una tarea se repite dos veces, merece ser automatizada. Utilizo CI/CD y scripts personalizados para optimizar flujos de trabajo.",
            icon: "Zap"
        }
    ],
    projects: [
        {
            title: "FullBebidas — E-commerce Pro",
            impact: "Arquitectura escalable para alta demanda de tráfico.",
            description: "Plataforma de comercio electrónico especializada en bebidas con gestión de inventario y pagos.",
            context: "Necesidad de un sistema de ventas robusto y rápido con UX optimizada para conversión.",
            decisions: "Implementación de Server-Side Rendering para SEO máximo y caché de borde.",
            tradeoffs: "Mayor complejidad en el despliegue para asegurar latencia mínima.",
            stack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
            image: "/assets/img/projects/fullbebidas.png",
            links: {
                live: "https://full-bebidas.vercel.app",
                github: "https://github.com/Frannkode/FullBebidas"
            }
        },
        {
            title: "QuickOrder — Smart Delivery",
            impact: "Reducción del 40% en latencia de pedidos.",
            description: "Sistema de pedidos ultra-rápido para restaurantes con interfaz intuitiva y real-time.",
            context: "Restaurantes con picos de demanda que requieren una toma de pedidos sin fricciones.",
            decisions: "Estrategia de Optimistic UI para una sensación de velocidad instantánea.",
            tradeoffs: "Sincronización de estado compleja para evitar conflictos en tiempo real.",
            stack: ["React", "Vite", "Firebase", "Framer Motion"],
            image: "/assets/img/projects/quickorder.png",
            links: {
                live: "https://quick-order-beta.vercel.app",
                github: "https://github.com/Frannkode/QuickOrder"
            }
        },
        {
            title: "ReactVicios — SaaS Gastronómico",
            impact: "Reducción del 30% en tiempo de toma de pedidos.",
            description: "Plataforma completa para gestión de menús con integración de WhatsApp API.",
            context: "El cliente necesitaba digitalizar su proceso de venta sin depender de apps de terceros caras.",
            decisions: "Elegí Firebase por su escalabilidad rápida y tiempo real para las actualizaciones de stock.",
            tradeoffs: "Se priorizó la velocidad de entrega sobre una base de datos relacional más compleja.",
            stack: ["React", "Firebase", "WhatsApp API", "Tailwind"],
            image: "/assets/img/projects/viciosburgerr.png",
            links: {
                live: "https://viciosburgerr.vercel.app",
                github: "https://github.com/frannkode/ReactVicios"
            }
        },
        {
            title: "El Cruce — Delivery System",
            impact: "Aumento del 20% en pedidos online en el primer mes.",
            description: "Sitio web moderno con carta digital y sistema de gestión optimizado.",
            context: "Digitalización de un restaurante tradicional con alta demanda de delivery.",
            decisions: "Uso de Vite + React para asegurar una carga instantánea en móviles.",
            tradeoffs: "Diseño minimalista para asegurar compatibilidad total con dispositivos móviles antiguos.",
            stack: ["React", "Vite", "Tailwind CSS"],
            image: "/assets/img/projects/elcruce.png",
            links: {
                live: "https://elcruce.vercel.app",
                github: "https://github.com/Frannkode/ElCruceRestaurant"
            }
        }
    ],
    stack: [
        {
            category: "Frontend",
            tools: [
                { name: "React", usage: "Interfaces dinámicas y SPAs de alto rendimiento." },
                { name: "TypeScript", usage: "Seguridad de tipos en proyectos de gran escala." },
                { name: "Next.js", usage: "Optimización SEO y renderizado híbrido." }
            ]
        },
        {
            category: "Backend & DevOps",
            tools: [
                { name: "Node.js", usage: "APIs rápidas y escalables." },
                { name: "PostgreSQL", usage: "Gestión de datos relacionales complejos." },
                { name: "Docker", usage: "Estandarización de entornos de desarrollo." }
            ]
        }
    ]
};
