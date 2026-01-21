import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiVercel,
  SiVite
} from 'react-icons/si'

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Core",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white" },
        { name: "Vite", icon: SiVite, color: "text-yellow-400" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Tecnologías
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 group"
                    >
                      <skill.icon className={`w-8 h-8 mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
              También tengo experiencia con
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
