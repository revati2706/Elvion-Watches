import React from 'react'
import smHeroImg from '../../assets/img/smHeroImg.jpg'
import { product } from '../../data/product'

const Collection = () => {
  return (
    <section className='w-full flex items-center overflow-x-auto scrollbar-hide gap-5 p-10'>
      {product.map((i, idx) => (
        <div key={idx}>
          <div className='border p-10'>
            <div className='h-[300px] w-[300px] md:w-[500px] md:h-[600px] relative overflow-hidden p-20 border-2 group'>
              
              {/* Base Image */}
              <img 
                className='h-full w-full object-cover' 
                src={i.img} 
                alt={i.name} 
              />

              {/* Hover Image */}
              <img 
                className='absolute p-10 top-0 left-0 opacity-0 h-full w-full object-cover group-hover:opacity-100 transition-all duration-300' 
                src={i.img_overlay} 
                alt={i.name} 
              />

              {/* Gradient Overlay + Text */}
              <div
                className='absolute bottom-0 left-0 opacity-0 h-1/3 w-full bg-gradient-to-t from-[#faefe2]/90 to-transparent backdrop-blur-[2px] flex items-center justify-center z-10 group-hover:opacity-100 transition-all duration-300'
              >
                <p className='text-black z-20 text-2xl font-bold font-[pfd]'>
                  {i.name}
                </p>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Collection

