import { useState, useEffect } from 'react'
import './App.css'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiSass, SiNodedotjs, SiGit, SiGreensock, SiNpm } from 'react-icons/si'
import { LuMenu, LuX, LuMapPin, LuMail, LuPhone, LuCheck, LuExternalLink, LuCode, LuUtensilsCrossed, LuRocket, LuGithub, LuLinkedin, LuInstagram, LuDribbble, LuShare2, LuArrowRight } from 'react-icons/lu'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Page load animation
    setTimeout(() => setIsLoaded(true), 100)

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full text-white z-20 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm border-b border-purple-500/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="text-white">Frann</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">kode</span>
          </h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><button onClick={() => scrollToSection('hero')} className="text-white hover:text-purple-400 transition-colors duration-300">Inicio</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="text-white hover:text-purple-400 transition-colors duration-300">Habilidades</button></li>
            <li><button onClick={() => scrollToSection('secondary-skills')} className="text-white hover:text-purple-400 transition-colors duration-300">Tecnologías</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-400 transition-colors duration-300">Proyectos</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-400 transition-colors duration-300">Contacto</button></li>
          </ul>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
            {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/30 backdrop-blur-md'}`}>
            <ul className="flex flex-col space-y-2 px-4 py-4">
              <li><button onClick={() => scrollToSection('hero')} className="block text-white hover:text-purple-400 transition-colors duration-300 w-full text-left">Inicio</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="block text-white hover:text-purple-400 transition-colors duration-300 w-full text-left">Habilidades</button></li>
              <li><button onClick={() => scrollToSection('secondary-skills')} className="block text-white hover:text-purple-400 transition-colors duration-300 w-full text-left">Tecnologías</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="block text-white hover:text-purple-400 transition-colors duration-300 w-full text-left">Proyectos</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="block text-white hover:text-purple-400 transition-colors duration-300 w-full text-left">Contacto</button></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Desarrollador Front-End</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">Creo experiencias web modernas y funcionales</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                Mis Proyectos
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105">
                Contáctame
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2 relative">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <LuCode className="text-6xl sm:text-7xl md:text-8xl text-purple-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Habilidades</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <SiHtml5 className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">HTML5</h3>
              <p className="text-purple-300">85%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="90, 100" className="text-slate-600"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#purpleGradient)" strokeWidth="2" strokeDasharray="80, 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">80%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">CSS3</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <SiJavascript className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
              <p className="text-purple-300">75%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="90, 100" className="text-slate-600"></path>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#purpleGradient)" strokeWidth="2" strokeDasharray="70, 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">70%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">React</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Skills Section */}
      <section id="secondary-skills" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Vue.js', Icon: SiVuedotjs },
              { name: 'Sass', Icon: SiSass },
              { name: 'Node.js', Icon: SiNodedotjs },
              { name: 'Git', Icon: SiGit },
              { name: 'GSAP', Icon: SiGreensock },
              { name: 'NPM', Icon: SiNpm }
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <tech.Icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="text-sm font-semibold text-purple-400">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Proyectos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <LuUtensilsCrossed className="text-6xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ReactVicios</h3>
                <p className="text-gray-300 mb-4">Página web con menú de hamburguesería gestionado por WhatsApp.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">WhatsApp</span>
                </div>
                <a href="https://github.com/Frannkode/ReactVicios" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
                  <LuExternalLink className="w-4 h-4" />
                  Ver en GitHub
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <LuRocket className="text-6xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proximamente.</h3>
                <p className="text-gray-300 mb-4">Proximamente.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">Ver proyecto →</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
              Ver todos los proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Conectemos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Listo para llevar tus ideas al siguiente nivel. Hablemos sobre tu próximo proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Email Card */}
            <div className="group relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <LuMail className="w-10 h-10 text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">Email</h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        Envíame un mensaje directo para discutir proyectos o colaboraciones.
      </p>

      <button
        onClick={() => {
          navigator.clipboard.writeText("poncefrancomiguel@gmail.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 group/btn"
      >
        <span>{copied ? "Correo copiado" : "Copiar email"}</span>
        <LuArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </div>
</div>

            {/* Social Media Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LuShare2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Redes Sociales</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Sígueme en mis redes para ver mi trabajo y actualizaciones.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Frannkode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <LuGithub className="w-6 h-6 text-white group-hover/icon:text-purple-400 transition-colors duration-300" />
                    </a>
                    <a
                      href="https://instagram.com/frannshakur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <LuInstagram className="w-6 h-6 text-white group-hover/icon:text-pink-400 transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LuMapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Ubicación</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Basado en Argentina, disponible para proyectos remotos.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-full px-4 py-2">
                    <LuMapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">Argentina, Reconquista</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">&copy; 2025 Frannkode. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
