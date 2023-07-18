import React from 'react'
import photo from '../../asset/photo-gallery.gif'
import aeroplane from '../../asset/airplane.gif'
import web from '../../asset/web.gif'
import Image3 from '../../asset/computer.png'
import Image4 from '../../asset/car.gif'

export default function() {
  return (
    <div class="px-16 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-8 lg:py-20 bg-zinc-200" id='pro'>
        <h1 class="text-4xl font-bold">Projects Undertaken</h1>
         {/* <img src={Image3} class=" w-24"/> */}
        
         <br/> 

  <div class="grid gap-10 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-max">
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={photo} class="object-fit w-full h-64 rounded" alt="" />
      <div class="py-5 w-full h-full bg-slate-100">
       
        <p class="text-2xl font-bold leading-7 text-center ">Photo Album Application using Django Framework.</p>
       
        
                
            
                
      
      </div>
    </div>
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={Image4} class="object-fit w-full h-64 rounded" alt="" />
      <div class="py-5 bg-slate-100 w-full h-full">
       
        <p class="text-2xl font-bold leading-7 text-center">Car Website Using Html,Css and Js.</p>
       
        
                
            
                
      
      </div>
    </div>
    
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={aeroplane} class="object-fit w-full h-64 rounded" alt="" />
      <div class="py-5  bg-slate-100 w-full h-full">
       
        <p class="text-2xl font-bold leading-7 text-center ">Airline Automation System Using JAVA.</p>
        
       
               
          
                
      
      </div>
    </div>
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={web} class="object-fill w-96 h-64 rounded" alt="" />
      <div class="py-5  bg-slate-100 w-full h-full">
       
        <p class="text-2xl font-bold leading-7 text-center">Web Scraping with pandas and BeautifulSoup.</p>
        
       
             
            
                
         
        </div>
      </div>
    </div>
  </div>

  )
}
