import React from "react"



import Intro from './intro'
import Education from './education'
import Project from'./projects'
import Certificate from './certificates'
import About from './about'
import Skills from './skills'
import Contact from './contact'
import Footer from './footer'




export default function() {
  return (
    <div>
     
      <Intro/>
      <br/>
      <About/>
      <br/>
      <Education/>
      <br/>
      <Skills/>
      <br/>
      
      <Project/>
      <br/>
      

      
      <Certificate/>
      <br/>
      <Contact/>
      <br/>
      <Footer/>
      <br/>
     
    </div>
    
  )
}
