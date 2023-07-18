import React from 'react'
import i1 from '../../asset/c1.png'
import i2 from '../../asset/c2.png'
import i3 from '../../asset/c3.png'
import i4 from '../../asset/c4.png'

export default function() {
  return (
    <div class="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-8 lg:py-20a bg-indigo-100" id='cer'>
       <br/>
        <h1 class="text-4xl font-bold">Certifications</h1>
        <br/>
  <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
    <div class="overflow-hidden  bg-white rounded hover:shadow-lg">
      <img src={i1} class="object-cover w-full h-64 rounded" alt="" />
      <div class="py-5">
       
        <p class="text-2xl font-bold leading-5 px-4 ">HTML Fndamentals</p>
        <br/>
        <p class="text-xl font-semibold leading-5 px-4">From SKILL LYNC</p>
       
        
                
            
                
      
      </div>
    </div>
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={i2} class="object-cover w-full h-64 rounded" alt="" />
      <div class="py-5">
       
        <p class="text-2xl font-bold leading-7 px-4">Basic DataStructure Algorithms</p>
        <br/>
        <p class="text-xl font-semibold leading-5 px-4">From SKILL LYNC</p>
       
        
       
               
          
                
      
      </div>
    </div>
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={i3} class="object-cover w-full h-64 rounded" alt="" />
      <div class="py-5">
       
        <p class="text-2xl font-bold leading-5 px-4">OOPS Fundamentals</p>
        <br/>
        <p class="text-xl font-semibold leading-5 px-4">From SKILL LYNC</p>
        
       
             
            
                
         
        </div>
      </div>
      <div class="overflow-hidden transition-shadow duration-300 bg-white rounded hover:shadow-lg">
      <img src={i4} class="object-cover w-full h-64 rounded" alt="" />
      <div class="py-5">
       
        <p class="text-2xl font-bold leading-7 px-4">Java Script programming</p>
        <br/>
        <p class="text-xl font-semibold leading-5 px-4">From Udemy</p>
        
       
             
            
                
         
        </div>
      </div>
    </div>
    
      
  </div>
    
  )
}

    