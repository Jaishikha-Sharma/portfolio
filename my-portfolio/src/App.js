import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Fotter from './components/footer/Fotter'
import { Analytics } from "@vercel/analytics/react"
import Work from './components/myWork/MyWorks'

export default function App() {
  return (
    <div>
    <Navbar/>  
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Fotter/>
    </div>
  )
}
