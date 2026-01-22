import { motion } from 'framer-motion'
import { Code, Sparkles } from 'lucide-react'
import { memo, useMemo, useCallback, lazy, Suspense } from 'react'
import { IconContext } from 'react-icons'

// Lazy load icons for better performance
const SiHtml5 = lazy(() => import('react-icons/si').then(module => ({ default: module.SiHtml5 })))
const SiCss3 = lazy(() => import('react-icons/si').then(module => ({ default: module.SiCss3 })))
const SiJavascript = lazy(() => import('react-icons/si').then(module => ({ default: module.SiJavascript })))
const SiReact = lazy(() => import('react-icons/si').then(module => ({ default: module.SiReact })))
const SiNextdotjs = lazy(() => import('react-icons/si').then(module => ({ default: module.SiNextdotjs })))
const SiTypescript = lazy(() => import('react-icons/si').then(module => ({ default: module.SiTypescript })))
const SiTailwindcss = lazy(() => import('react-icons/si').then(module => ({ default: module.SiTailwindcss })))
const SiNodedotjs = lazy(() => import('react-icons/si').then(module => ({ default: module.SiNodedotjs })))
const SiGit = lazy(() => import('react-icons/si').then(module => ({ default: module.SiGit })))
const SiFigma = lazy(() => import('react-icons/si').then(module => ({ default: module.SiFigma })))
const SiVercel = lazy(() => import('react-icons/si').then(module => ({ default: module.SiVercel })))
const SiVite = lazy(() => import('react-icons/si').then(module => ({ default: module.SiVite })))

function SkillsComponent() {
  // Memoize skill categories to prevent recreation on every render
  const skillCategories = useMemo(() => [
    {
      title: "Frontend Core",
      gradient: "from-orange-400 to-red-500",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-400" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-slate-300" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ]
    },
    {
      title: "Tools & Platforms",
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
        { name: "Git", icon: SiGit, color: "text-orange-400" },
        { name: "Figma", icon: SiFigma, color: "text-purple-400" },
        { name: "Vercel", icon: SiVercel, color: "text-slate-300" },
        { name: "Vite", icon: SiVite, color: "text-yellow-400" }
      ]
    }
  ], [])

  // Memoize animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0
      }
    }
  }), [])

  const cardVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }), [])

  const skillVariants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  }), [])

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/20 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 mb-6 shadow-lg">
              <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Stack Tecnológico</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent leading-tight">
              Tecnologías
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Mi arsenal técnico para crear experiencias web excepcionales,
              combinando las mejores herramientas del ecosistema moderno.
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="relative h-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute inset-[1px] bg-gradient-to-br ${category.gradient} opacity-10 rounded-3xl`} />
                <div className="absolute inset-[2px] bg-white/95 dark:bg-slate-900/95 rounded-3xl" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} mb-4 shadow-lg`}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex flex-col items-center text-center">
                        <skill.icon className={`w-10 h-10 mb-3 ${skill.color}`} />
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-12 shadow-lg">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white"
              >
                También domino
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {[
                  'Responsive Design',
                  'API Integration',
                  'State Management',
                  'Testing',
                  'Performance Optimization',
                  'SEO',
                  'Accessibility',
                  'Version Control'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-semibold border border-cyan-200/50 dark:border-cyan-700/30 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export const Skills = memo(SkillsComponent)
