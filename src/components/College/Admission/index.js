import React from 'react'

function Admission() {
    return (
     <>
     
     <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full"
                  src="/laptop.gif"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                
                  <img alt="blog" src="/graduation.svg" class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"/>
                  
                  <h3 className="text-3xl font-semibold mb-16">Admission Process</h3>
                  <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="text-sm font-bolt leading-relaxed mt-2 mb-4 text-gray-700">STEP 1</h2>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
        </div>
      
    
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="text-sm font-bolt leading-relaxed mt-2 mb-4 text-gray-700">STEP 2</h2>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="text-sm font-bolt leading-relaxed mt-2 mb-4 text-gray-700">FINISH</h2>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
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

export default Admission
