export const portfolioData = {
    hero: {
        name: "Frannkode",
        role: "Software Engineer & Digital Strategist",
        tagline: "Transformo problemas de negocio complejos en soluciones digitales rentables. Especialista en optimizar procesos, reducir costos operativos y escalar ventas a través de ingeniería de software.",
        cta: {
            primary: "Ver Resultados",
            secondary: "Agendar Llamada"
        }
    },
    metrics: [
        { label: "Aumento Promedio en Conversión", value: "40", suffix: "%" },
        { label: "Horas Manuales Ahorradas / Mes", value: "120", suffix: "+" },
        { label: "Proyectos Escalados con Éxito", value: "15", suffix: "+" },
        { label: "Reducción de Costos Operativos", value: "30", suffix: "%" }
    ],
    engineeringMindset: [
        {
            title: "Sistemas que NO se caen",
            description: "Infraestructuras preparadas para alta demanda. Tu negocio nunca perderá una venta porque \"el sistema está lento\".",
            icon: "Server"
        },
        {
            title: "Automatización Total",
            description: "Si una tarea la hace un humano repetidas veces, te está costando dinero. Implementamos sistemas que trabajan en piloto automático 24/7.",
            icon: "Zap"
        },
        {
            title: "Interfaces de Alta Conversión",
            description: "Diseño minimalista y psicología del consumidor aplicada. Interfaces tan simples que tus clientes no tendrán fricción al comprar.",
            icon: "Layout"
        },
        {
            title: "Seguridad y Estabilidad",
            description: "Datos protegidos y código limpio garantizan que el sistema pueda crecer contigo sin tener que rehacer todo desde cero en un año.",
            icon: "ShieldCheck"
        }
    ],
    projects: [
        {
            title: "FullBebidas",
            subtitle: "E-commerce de Alta Conversión",
            problem: "El cliente perdía ventas en dispositivos móviles por un proceso de pago confuso y tiempos de carga excesivos.",
            solution: "Desarrollo de una plataforma a medida con carga instantánea y checkout en 1 clic.",
            metrics: [
                { label: "Conversión Mobile", value: "+45%" },
                { label: "Carga de página", value: "< 1s" }
            ],
            image: "/assets/img/projects/fullbebidas.png",
            links: {
                live: "https://full-bebidas.vercel.app",
                github: "https://github.com/Frannkode/FullBebidas"
            }
        },
        {
            title: "QuickOrder",
            subtitle: "Sistema de Pedidos Inteligente",
            problem: "Pérdida de pedidos en horas pico debido a la lentitud en la atención y fricción en la toma manual.",
            solution: "Implementación de un sistema de pedidos en tiempo real con una interfaz ultrarrápida para los operarios.",
            metrics: [
                { label: "Tiempo de atención", value: "-40%" },
                { label: "Gestión de pedidos", value: "100% automatizada" }
            ],
            image: "/assets/img/projects/quickorder.png",
            links: {
                live: "https://quick-order-beta.vercel.app",
                github: "https://github.com/Frannkode/QuickOrder"
            }
        },
        {
            title: "ReactVicios",
            subtitle: "Gestión Gastronómica (SaaS)",
            problem: "Dependencia de plataformas de delivery costosas (30% de comisión) y falta de control sobre los clientes.",
            solution: "Creación de un canal de ventas propio directo por WhatsApp sin intermediarios ni comisiones.",
            metrics: [
                { label: "Ahorro en comisiones", value: "$$$" },
                { label: "Retención de clientes", value: "+30%" }
            ],
            image: "/assets/img/projects/viciosburgerr.png",
            links: {
                live: "https://viciosburgerr.vercel.app",
                github: "https://github.com/frannkode/ReactVicios"
            }
        },
        {
            title: "El Cruce",
            subtitle: "Digitalización de Restaurante",
            problem: "Operativa caótica con cartas en papel desactualizadas y teléfonos colapsados.",
            solution: "Digitalización completa con carta QR dinámica y pedidos centralizados en una tablet.",
            metrics: [
                { label: "Ventas online", value: "+20% el 1er mes" },
                { label: "Errores en pedidos", value: "Reducidos a 0" }
            ],
            image: "/assets/img/projects/elcruce.png",
            links: {
                live: "https://elcruce.vercel.app",
                github: "https://github.com/Frannkode/ElCruceRestaurant"
            }
        }
    ],
    stack: [
        {
            category: "Optimización y Frontend",
            tools: [
                { name: "Next.js & React", icon: "SiNextdotjs", usage: "Rendimiento instantáneo y SEO técnico para dominar en Google." },
                { name: "Tailwind CSS", icon: "SiTailwindcss", usage: "Diseños responsivos perfectos, fluidos y de nivel Apple." },
                { name: "TypeScript", icon: "SiTypescript", usage: "Estabilidad de código para evitar errores críticos en producción." }
            ]
        },
        {
            category: "Infraestructura y Datos",
            tools: [
                { name: "Node.js", icon: "SiNodedotjs", usage: "Servidores rápidos y altamente escalables." },
                { name: "PostgreSQL", icon: "SiPostgresql", usage: "Bases de datos robustas y seguras para tu información." },
                { name: "Firebase", icon: "SiFirebase", usage: "Datos en tiempo real y arquitecturas que escalan sin esfuerzo." }
            ]
        }
    ]
};
