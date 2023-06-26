import React from 'react'
import {motion} from 'framer-motion';
import TesimonialCard from './TesimonialCard';
import images from './Images';
function Testimonials() {
  return (
    <motion.section id='portfolio'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='h-max md:h-screen mb-5 '>
        
        <div id="heading" className='mt-20 '>
            <h3 className=' md:text-4xl text-3xl font-bold tracking-wide'>Testimonials</h3>
        </div>

        <div className="max-w-[1000px] my-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <TesimonialCard img={images.img1}/>
            <TesimonialCard img={images.img1}/>
            <TesimonialCard img={images.img1}/>
        </div>

     </motion.section>
    
  )
}

export default Testimonials