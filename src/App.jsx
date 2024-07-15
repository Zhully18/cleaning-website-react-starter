import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Details from './Components/Details/Details'
import Project from './Components/Projects/Project'
import Feedback from './Components/Feedback/Feedback'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Details />
      <Project />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}

export default App