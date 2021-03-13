import React from 'react'
import CountUp from 'react-countup';

function Data() {
    return (
      <>
      <div className="min-w-screen h-56  bg-gray-100 flex justify-center px-5 py-5">
  <div className="w-full  max-w-4xl">
    <div className="-mx-2 md:flex">
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4">
          <div className="rounded-lg  animate-bounce bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <img alt="testimonial" className="w-15 h-12 mb-8 object-cover object-center inline-block bg-gray-100 " src="/calendar.svg"/>
          <p className="text-gray-700 text-md font-light leading-relaxed mt-4 mb-4  ">Established</p>
          <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
          <CountUp start={1900} end={1996}/>
          </h3>
            </div>
         
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4">
          <div className="rounded-lg animate-bounce bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <img alt="testimonial" className="w-15 h-12  mb-8 object-cover object-center  inline-block " src="/carreer.svg"/>
          <p className="text-gray-700 text-md font-light leading-relaxed mt-4 mb-4  ">Placement</p>
          <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
          <CountUp start={0} end={100}/>
          </h3>
            </div>
         
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4">
          <div className="rounded-lg animate-bounce bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <img alt="testimonial" className="w-15 h-12 mb-8 object-cover object-center inline-block bg-gray-100 " src="/money.svg"/>
          <p className="text-gray-700 text-md font-light leading-relaxed mt-4 mb-4  ">Maximum Package</p>
          <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
          INR <CountUp start={5} end={50}/> L
          </h3>
            </div>
         
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4">
          <div className="rounded-lg animate-bounce bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <img alt="testimonial" className="w-15 h-12 mb-8 object-cover object-center inline-block " src="/min.svg"/>
          <p className="text-gray-700 text-md font-light leading-relaxed mt-4 mb-4  ">Minimum Package</p>
          <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
          INR <CountUp start={5} end={10}/> L
          </h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    )
}

export default Data
