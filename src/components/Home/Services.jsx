import React from 'react'
import services from "../../assets/img/services.avif"
const Services = () => {
  return (
  <section className='border p-5'>
    <div className='relative text-white border'>
        <div className=' max-w-[480px] md:max-w-[950px] lg:max-w-full'><img src={services} alt="" className='w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover object-center' /></div>
        <div className='flex p-5 gap-5 lg:p-15 bg-black/20 flex-col items-start font-[inter] absolute bottom-0 left-5 '>
            <span className='text-sm tracking-[2px] uppercase'>SERVICES</span>
            <p className='font-[pfd] text-2xl lg:text-4xl'>Exclusive Services for your Timepieces</p>
            <button className='uppercase p-2 border-b'>view more</button>
        </div>
    </div>
  </section>
  )
}

export default Services