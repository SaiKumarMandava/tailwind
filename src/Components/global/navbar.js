// import React from "react";
// import { useState } from "react";
// export default function App() {
//    const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div class=" px-[360px] sticky top-0 sm:hidden  flex flex-wrap lg:block  md:block" id="nav">
//       <div class=" sticky top-0 lg:mx-auto bg-blue-50 lg:max-w-screen-3xl sm:max-w-full "> 
       
//        <div class="relative flex  justify-around flex-wrap  py-6 sm:flex  sm:hideen">
//          <h1 class="text-3xl font-bold ">Sai Kumar</h1>
//          <br/>
         
         
           
       
//          <ul class="flex items-center flex-wrap space-x-16 lg:flex">
         
//            <li>
//              <a
//                href="#abt" title="About Me"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900 text-3xl"
//              >
//                About
//              </a>
//            </li>
//            <li>
//              <a
//                href="#edu" title="Education"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900  text-3xl"
//              >
//                Education
//              </a>
//            </li>
//            <li>
//              <a
//                href="#skill" title="Professional Skills"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900  text-3xl"
//              >
//                Skills
//              </a>
//            </li>
//            <li>
//              <a
//                href="#pro" title="Projects"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900  text-3xl"
//              >
//                Projects
//              </a>
//            </li>
//            <li>
//              <a
//                href="#cer" title="Certifications"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900  text-3xl"
//              >
//                Certificates
//              </a>
//            </li>
//            <li>
//              <a
//                href="#cnt" title="Contact Me"
               
//                class="font-medium tracking-wide text-gray-900 transition-colors duration-200  hover:text-red-900  text-3xl"
//              >
//               Contact
//              </a>
//            </li>
           
//          </ul>
//           {/* <div class="lg:hidden">
//            <button
//              aria-label="Open Menu"
//              title="Open Menu"
//              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
//              onClick={() => setIsMenuOpen(true)}
//            >
//              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                <path
//                  fill="currentColor"
//                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                />
//                <path
//                  fill="currentColor"
//                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                />
//                <path
//                  fill="currentColor"
//                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                />
//              </svg>
//            </button> */}
          
//              {/* <div class="absolute top-0 left-0 w-full lg:hidden">
//                <div class="p-5 bg-white border rounded shadow-sm">
//                  <div class="flex items-center justify-between mb-4">
//                    <div>
//                      <a
//                        href="/"
//                        aria-label="Company"
//                        title="Company"
//                        class="inline-flex items-center"
//                      >
//                        <svg
//                          class="w-8 text-deep-purple-accent-400"
//                          viewBox="0 0 24 24"
//                          strokeLinejoin="round"
//                          strokeWidth="2"
//                          strokeLinecap="round"
//                          strokeMiterlimit="10"
//                          stroke="currentColor"
//                          fill="none"
//                        >
//                          <rect x="3" y="1" width="7" height="12" />
//                          <rect x="3" y="17" width="7" height="6" />
//                          <rect x="14" y="1" width="7" height="6" />
//                          <rect x="14" y="11" width="7" height="12" />
//                        </svg>
//                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
//                          Company
//                        </span>
//                      </a>
//                    </div>
//                    <div>
//                      <button
//                        aria-label="Close Menu"
//                        title="Close Menu"
//                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                        onClick={() => setIsMenuOpen(false)}
//                      >
//                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                          <path
//                            fill="currentColor"
//                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                          />
//                        </svg>
//                      </button>
//                    </div>
//                  </div>
//                  <nav>
//                    <ul class="space-y-4">
//                      <li>
//                        <a
//                          href="/"
//                          aria-label="Our product"
//                          title="Our product"
//                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                        >
//                          Product
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="/"
//                          aria-label="Our product"
//                          title="Our product"
//                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                        >
//                          Features
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="/"
//                          aria-label="Product pricing"
//                          title="Product pricing"
//                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                        >
//                          Pricing
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="/"
//                          aria-label="About us"
//                          title="About us"
//                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                        >
//                          About us
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="/"
//                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//                          aria-label="Sign up"
//                          title="Sign up"
//                        >
//                          Sign up
//                        </a>
//                      </li>
//                    </ul>
//                  </nav> 
//                 </div>
//              </div> */}
         
//                 </div>
//         </div>
//       </div>
//   //  </div>
 

   
//   //   </div>
    
      
//   )
// }

