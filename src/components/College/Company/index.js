import React from 'react'

function Company() {
    return (
        <>
         <div className="container mx-auto overflow-hidden ">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto ">
              <img alt="blog" src="/buildings.svg" class="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"/>
              
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Placement
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Certain companies have main offices in more than one city, in which case they are listed under each, but minor offices and resources are not listed.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full  last:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/color/28/000000/google-logo.png"/>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-fulllast:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/color/28/000000/amazon.png"/>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full  last:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/color/28/000000/twitter--v2.png"/>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full  last:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/fluent/28/000000/github.png"/>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full  last:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/fluent/28/000000/facebook-new.png"/>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full  last:mr-0 mr-2 mt-2">
                <img src="https://img.icons8.com/fluent/28/000000/adobe-creative-cloud.png"/>
                </span>
               
              </div>
              <button
            className="bg-gray-800 rounded-full active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2  outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            type="button"
          > 
             View More
        </button>
            </div>

            <div className="w-full md:w-5/12 py-28 px-28  mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 w-full mb-16  md:mt-10">
                <img
                  alt="..."
                  src="/company.gif"
                  className="w-full align-middle rounded relative "
                />
            
          
              </div>
            </div>
          </div>
   
</div>
        </>
    )
}

export default Company
