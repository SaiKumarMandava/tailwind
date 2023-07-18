import React from 'react'
import Image from '../../asset/My project-2.png'
import linkedin from '../../asset/linkedinlogo.png'
import pdf from '../../asset/sai.pdf.pdf'





export default function() {
  return (
    <div>
    <div class="px-4 py-6 mx-auto backdrop-blur-xl  sm:max-w-xl md:max-w-100% lg:max-w-[90%] md:px-24 lg:px-8 lg:py-20 shadow-xl bg-gradient-to-b from-slate-400 via-slate-300 to-zinc-300 " id='intro' style={{fontFamily:'Poppins'}}>
   
    <div class=" mb-0 sm:text-center">
      <div>
      

        <img alt="avatar" src={Image} class="object-cover w-96 h-96 rounded-full shadow-sm mx-auto border-[6px] border-slate-400" />
      
      
    <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
      <div class="mb-4">
        <h1 class="inline-block max-w-lg py-5 text-5xl font-bold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
         Mandava Sai Kumar
        </h1>
        <p class="text-2xl text-gray-700 ">
        Web Developer
      </p>
      </div>
      
      
    </div>
   
    <div class="flex justify-center gap-10 flex-wrap">
    <div class="sm:text-center">
      <a href={pdf} aria-label="" download='Sai Resume' class="inline-flex items-center font-bold text-2xl duration-200 bg-slate-950 p-4 rounded-lg text-white hover:shadow-lg hover:bg-white hover:text-black ">Download CV</a>
    
    </div>
    <div class="flex justify-center ">
      <ul>
        <a href='https://www.linkedin.com/in/mandava-sai-kumar-757411234' target='blank' ><img src={linkedin} class=" w-16 shadow-sm hover:shadow-md"/> </a>
        
      </ul>
    </div>
    <div class="sm:text-center">
      <a href="#cnt" aria-label="" class="inline-flex items-center font-bold transition-colors text-2xl duration-200 bg-slate-950  px-12 py-4 text-white rounded-lg hover:bg-white hover:text-black ">Hire  Me</a>
    
    </div>
    
    </div>
    <br/>
    <br/>
   </div>
   
  </div>


    </div>
  </div>
    
  )
}
