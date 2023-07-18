import React from 'react'
import email from '../../asset/email.png'
import phone from '../../asset/phone.png'

export default function() {
  return (
    <div class="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-8 lg:py-20 bg-slate-300" id='cnt'>
        <h1 class="text-4xl font-bold">Contact Me</h1>
        <br></br>
        <br></br>
       
        <div class="flex flex-wrap gap-6">
            <div>
            <img src={email}/>
            <img src={phone}/>

            </div>
            <div>
                <h4 class="text-xl mt-3 font-semibold">saimandava150@gmail.com</h4><br/>
                <h4 class="text-xl mt-0 font-semibold">+91 6309640774</h4>
                
            </div>
            
            
            
            
            </div>
       

        
       
       <div class="flex gap-10">
       <form  action="https://formspree.io/f/xgebbdpr" method='post'>
           <div class=" flex flex-col p-5 gap-6">
            <label class=" font-bold text-xl " for="n">Name</label>
            <input type='text' name='name' required  placeholder='Enter Your Name' id='n' class=" h-12 w-96  text-black font-semibold text-lg focus:bg-slate-500 focus:text-white"/>
    
            <label class=" font-bold text-xl " for="e">E-mail</label>
            <input type='email' name='email' required  placeholder='Enter Your E-mail'  id='e' class=" h-12 w-96 text-black font-semibold text-lg focus:bg-slate-500  focus:text-white"/>
            <label class=" font-bold text-xl " for="m">Message</label>
            
            <textarea type="text-area" name='text-area' rows={4} cols={4} required  placeholder='Enter Your Message' id='m' class=" h-12 w-96 text-black font-semibold text-lg focus:bg-slate-500  focus:text-white"/>
            <div class=" w-72">
            <input type='submit' value="Send" class=" w-96 p-3 text-3xl font-bold bg-sky-300 hover:bg-black hover:text-white "/>
            </div>
           </div>
          
        </form>
        
       
       <div class=" w-full mb-6">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62224.61171774061!2d77.44038318495534!3d12.905263161828005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685346285308!5m2!1sen!2sin" class=" w-full h-full"></iframe>
       </div>
       </div>
       </div>
       
    
  
  )
}
