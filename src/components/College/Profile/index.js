import React from 'react'

function Profile() {
    return (

      <>
        <section className="relative py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="Wait"
                        src="/new.png"
                        className="shadow-xl rounded-full h-32 w-48  align-middle  -m-16 -ml-20 lg:-ml-1 max-w-150-px"
                      />
                      
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    
                    <div className="py-6 px-3 ml-5 mt-32 sm:mt-0">
                       <span class="text-yellow-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>1.2K
                     </span>
                      <button
                        className="bg-gray-800  rounded-full active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2  outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      > 
                        Visit Site
                      </button>
                    
                    </div>
                    
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex  justify-left animate-pulse py-4 lg:pt-4 pt-8">
                      <div className="mr-1  p-3 animated text-center">
                      <button>  <img src="https://img.icons8.com/fluent/40/000000/facebook-new.png"/> </button>
                      </div>
                      <div className="mr-2 p-3 text-center">
                      <button> 
                      <img src="https://img.icons8.com/color/40/000000/youtube-music.png"/>
                      </button>
                      </div>
                      <div className="lg:mr-2 p-3 text-center">
                      <button> 
                      <img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-1">
                  
                  <h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-1">
                   VIT 
                 
                  </h3>
                  
                  <div className="text-sm leading-normal mt-0  text-gray-500 font-bold uppercase ">
               <a className="inline-flex items-center">
              <img alt="vit" src="/x.svg" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="text-sm leading-normal mt-0  text-gray-500 font-bold uppercase "> Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014</span>
              </span>
               </a>
               </div>
              <div className=" mt-3 text-gray-700 ">
                  <a className="inline-flex items-center">
                    
              <img alt="blog" src="/te.svg" class="w-7 h-6 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="text-sm leading-normal   text-gray-500 font-bold uppercase ">  075602 54500</span>
              </span>
            </a>
             </div>
             </div>
                <div className="mt-5 py-5 border-t border-gray-300 text-center">
                  
             
           <div className="container px-8   mx-auto">
           <div className="flex flex-col text-center w-full mb-1">
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">VIT Bhopal University is a private university in Kothri Kalan in Sehore district, Madhya Pradesh, India. It was established by the Vellore Institute of Technology. </p>
            </div>
           </div>
              </div>  
            </div>
            </div>
            </div>
        </section>

        </>
    )
}

export default Profile
