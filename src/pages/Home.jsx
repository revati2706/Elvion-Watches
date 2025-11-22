import React, { useEffect, useRef } from 'react'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import craft from "../assets/img/craft.avif"
import Craft from '../components/Home/Craft'
import Services from '../components/Home/Services'


const Home = () => {
    const scrollRef = useRef(null)
    
    
  return (
    
   <section className='flex flex-col gap-5 '>
    <Hero/>
    <div ref={scrollRef} className='w-full   '>
        <div className='flex justify-center p-5 md:p-20 flex-col items-center gap-5 '>
            <span className='text-lg uppercase font-[inter] tracking-[2px]'>Collection</span>
             <p className='md:text-2xl text-md max-w-xl  text-center  font-[pfd] text-[#271c12]'>Elvion defines timeless precision and refined craftsmanship meticulously built to endure. More than watches, they’re heirlooms.</p>
        </div>
        <Collection/>
    </div>
    


  <div ref={scrollRef} className="w-full">
  <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
    <img
      src={craft}
      alt="Craftsmanship Banner"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-5 text-white px-6 text-center">
      
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-[pfd] font-semibold leading-tight tracking-wide">
        Craftsmanship Beyond Time
      </h2>

      <p className="font-[inter] max-w-[650px] text-xs sm:text-sm md:text-lg opacity-90 leading-relaxed">
        Every Elvion timepiece blends precision engineering with refined minimal design,
        hand-finished to deliver lasting performance and timeless style.
      </p>

      <button className="font-[inter] px-6 py-2 sm:px-8 sm:py-3 border border-white  hover:bg-white hover:text-black transition-all duration-300 tracking-wide">
        Discover Craftmanship
      </button>
    </div>
  </div>

  <Craft/>
</div>

<div className='-mt-10'>
<Services/>
</div>

 
   </section>
  )
}

export default Home