import { AlignVerticalJustifyEnd } from 'lucide-react'
import React, { useEffect } from 'react'

const Header = () => {
 

  useEffect(() => {
    const nav = document.getElementById('nav-links')
    if(!nav) return
    const handleClick = (e) => {
      e.preventDefault()
      if (e.target.tagName === 'A') {
        const sectiondId = e.target.getAttribute('href')
        const section = document.querySelector(sectiondId)
        if(section) {
          section.scrollIntoView({
            behavior : 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      }
    }

    nav.addEventListener('click', handleClick)

    return () => {
      nav.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <header className='flex justify-between items-center p-4 text-white'>
        <h1 className='text-3xl font-extrabold uppercase'>Yaya</h1>
        <nav className='hidden lg:inline' id='nav-links'>
            <ul className='flex space-x-4'>
              <li><a href="#services" className="underline-middle hover:font-medium">Services</a></li>
              <li><a href="#testimonials" className="underline-middle hover:font-medium">Testimonials</a></li>
              <li><a href="#projects" className="underline-middle hover:font-medium">Projects</a></li>
            </ul>
        </nav>

        <button className='hidden lg:inline-block border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#00003d] transition-colors cursor-pointer'>
            <a href="#contact" onClick={(e) => {
                e.preventDefault()
              document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth'
                })}}>Contact</a>
        </button>

        <button className='lg:hidden flex flex-col gap-2 border-2 border-white px-4 py-2 rounded-lg cursor-pointer'> 
          <span className='bg-white h-0.5 w-5'></span>
          <span className='bg-white h-0.5 w-5'></span>
          <span className='bg-white h-0.5 w-5'></span>
        </button>
    </header>
  )
}

export default Header