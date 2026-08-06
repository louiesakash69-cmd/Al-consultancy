import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import OurService from './components/OurService'
import IndustriesWeServe from './components/IndustriesWeServe'
import Whychoose from './components/Whychoose'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'





const App = () => {
  return (
    <div className='al-root'>
      <Header/>
      <Hero/>
      <About/>
      <OurService/>
      <IndustriesWeServe/>
      <Whychoose/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
