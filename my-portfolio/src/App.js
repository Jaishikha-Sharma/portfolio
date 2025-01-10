import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
// import MyWorks from './components/myWork/MyWorks'
import Contact from './components/contact/Contact'
import Fotter from './components/footer/Fotter'
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div>
    <Navbar/>  
    <Hero/>
    <About/>
    <Services/>
    {/* <MyWorks/> */}
    <Contact/>
    <Fotter/>
    </div>
  )
}
