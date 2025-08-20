import React from 'react'
import HeroSection from './Components/HeroSection'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Validate from './Components/Validate'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
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