import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Validate from './Components/Validate'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [isObserved, setIsObserved] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [isProjectsObserved, setIsProjectsObserved] = useState(false)
  useEffect(() => {
  const header = document.querySelector('#sticky-header');
  const servicesSection = document.querySelector('#service'); 
  const servicesSectionContainer = document.querySelector('#services');
  const projectsSectionContainer = document.querySelector('#projects');
  const projectsSection = document.querySelector('.projects-section');
  const heroSection = document.querySelector('.hero-section');

  if (!header || !servicesSection || !projectsSection || !heroSection) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };


  // Observer for hero + services
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
      } else {
        servicesSection.classList.remove('translate-y-full');
        servicesSection.classList.remove('opacity-0');
        setIsObserved(true)

      }
    });
  }, options);

  // observer for sticky header
  const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.remove('-translate-y-full');
        header.classList.remove('-top-full')
      } else {
        // header.classList.add('-top-full')
        header.classList.add('-translate-y-full');
        setShowMobileNav(false)
        header.classList.remove('hidden')
      }
    })
  }, {
    root: null,
    threshold: 0.8
  })




  // Observer for services + projects
  const projectSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectsSection.classList.remove('opacity-0');
      } else {
      }
    });
  }, {
    threshold: 0.1
  });

  // Start observing
  if(!isObserved) observer.observe(heroSection);
  observerTwo.observe(heroSection)
  if(!isProjectsObserved) projectSectionObserver.observe(projectsSectionContainer);

  // Cleanup
  return () => {
    observer.disconnect();
    projectSectionObserver.disconnect();
  };
  }, [isProjectsObserved, isObserved]);


  return (
    <div>
      <header className=' p-4 text-white fixed -top-full z-199999 transition-all ease-in-out duration-500 -translate-y-full bg-[#3a1b85] w-full ' id='sticky-header'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-extrabold uppercase'>Yaya</h1>
          <nav className='hidden lg:inline' id='nav-links'>
              <ul className='flex space-x-4'>
                <li><a href="#services" className="underline-middle hover:font-medium">Services</a></li>
                <li><a href="#testimonials" className="underline-middle hover:font-medium">Testimonials</a></li>
                <li><a href="#projects" className="underline-middle hover:font-medium">Projects</a></li>
              </ul>
          </nav>

          {/* Contact btn */}
          <button className='hidden lg:inline-block border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#00003d] transition-colors cursor-pointer'>
              <a href="#contact" onClick={(e) => {
                  e.preventDefault()
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                  })}}>Contact</a>
          </button>

              {/* Mobile nav icon */}
          <button 
          className='lg:hidden flex flex-col gap-2 border-2 border-white px-4 py-2 rounded-lg cursor-pointer'
          onClick={() => setShowMobileNav(!showMobileNav)}> 
            <span className='bg-white h-0.5 w-5'></span>
            <span className='bg-white h-0.5 w-5'></span>
            <span className='bg-white h-0.5 w-5'></span>
          </button>
        </div>
        {/* Mobile Nave */}
        {
          showMobileNav && <div className='lg:hidden transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-xl font-bold '>
          <ul className='flex space-x-6 py-4'>
              <li><a 
              href="#services" 
              className="underline-middle hover:font-medium"
              onClick={e => {
                e.preventDefault()
                document.getElementById('services').scrollIntoView({
                  behavior: 'smooth'
                })
                setShowMobileNav(false)
              }}>Services</a></li>
              <li><a 
              href="#testimonials" 
              className="underline-middle hover:font-medium"
              onClick={e => {
                e.preventDefault()
                document.getElementById('testimonials').scrollIntoView({
                  behavior: 'smooth'
                })
                setShowMobileNav(false)
              }}>Testimonials</a></li>
              <li><a 
              href="#projects" 
              className="underline-middle hover:font-medium"
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth'
                })
                setShowMobileNav(false)
              }}>Projects</a></li>
          </ul>

          <button className=' border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#00003d] transition-colors cursor-pointer'>
              <a href="#contact" onClick={(e) => {
                  e.preventDefault()
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                  })
                  setShowMobileNav(false)
                  }}>Contact</a>
          </button>
        </div>
        }
      </header>
      <HeroSection />
      <Service />
      <Projects />
      <Validate />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App