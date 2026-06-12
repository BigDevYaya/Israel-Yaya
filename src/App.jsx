import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Service from './Components/Service'
import Projects from './Components/projects/Projects'
import Validate from './Components/Validate'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    const header = document.querySelector('#sticky-header')
    const heroSection = document.querySelector('.hero-section')

    if (!header || !heroSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            header.classList.remove('-translate-y-full')
            header.classList.remove('-top-full')
          } else {
            header.classList.add('-translate-y-full')
            setShowMobileNav(false)
            header.classList.remove('hidden')
          }
        })
      },
      {
        root: null,
        threshold: 0.8,
      }
    )

    observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = showMobileNav ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showMobileNav])

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setShowMobileNav(false)
  }

  const links = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
  ]

  return (
    <div className='overflow-hidden'>
      <header
        className="p-4 text-white fixed -top-full z-199999 transition-all ease-in-out duration-500 -translate-y-full bg-[#3a1b85] w-full"
        id="sticky-header"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-extrabold uppercase">Yaya</h1>

          <nav className="hidden lg:inline" id="nav-links">
            <ul className="flex space-x-4">
              <li><a href="#services" className="underline-middle hover:font-medium">Services</a></li>
              <li><a href="#testimonials" className="underline-middle hover:font-medium">Testimonials</a></li>
              <li><a href="#projects" className="underline-middle hover:font-medium">Projects</a></li>
            </ul>
          </nav>

          <button className="hidden lg:inline-block border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#00003d] transition-colors cursor-pointer">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Contact
            </a>
          </button>

          <button
            className="lg:hidden relative w-8 h-8 cursor-pointer"
            onClick={() => setShowMobileNav(!showMobileNav)}
            aria-label="Toggle navigation"
          >
            <span className={`absolute left-0 w-full h-[2px] bg-white rounded transition-all duration-300 ${showMobileNav ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-white rounded transition-all duration-300 ${showMobileNav ? 'opacity-0 scale-0' : 'top-1/2 -translate-y-1/2'}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-white rounded transition-all duration-300 ${showMobileNav ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'}`} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-[#3a1b85]/95 backdrop-blur-2xl z-[199998] lg:hidden transition-all duration-500 ease-in-out ${showMobileNav ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12 px-8">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-4xl md:text-5xl font-light uppercase tracking-[0.15em] text-white hover:text-[#EF6D58] transition-all duration-500 ease-out cursor-pointer ${showMobileNav ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              style={{ transitionDelay: showMobileNav ? `${0.1 + i * 0.1}s` : `${(links.length - 1 - i) * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('contact')}
            className={`mt-2 border border-white/30 px-12 py-3 rounded-full text-white text-lg tracking-[0.15em] uppercase hover:bg-white hover:text-[#3a1b85] transition-all duration-500 ease-out cursor-pointer ${showMobileNav ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
            style={{ transitionDelay: showMobileNav ? '0.4s' : '0.15s' }}
          >
            Contact
          </button>
        </div>
      </div>

      <HeroSection />
      <Service />
      <Projects />
      <Validate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
