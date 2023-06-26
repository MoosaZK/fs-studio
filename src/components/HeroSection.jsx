import React from 'react';
import {motion} from 'framer-motion';
import hero_img from "./img/heroimg.png";
const Hero = () => {
  return (
    <section 
     className='h-max md:h-screen my-3'>
       
        <div className='flex flex-wrap md:flex-nowrap mx-auto h-full'>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.5}}
                className='relative flex flex-col justify-center items-center md:items-start m-auto space-y-5'>
      
      <h1 className='lg:text-5xl md:text-4xl text-3xl text-left h-min space-x-5'> 
        <span>Get Your</span> 
        <span className=' text-light-blue-600 font-bold'>Graphics</span>
        <br /> Done
      </h1>
      <h5 className='text-center md:text-left'>I am a young, but Experienced, Software Developer</h5>
      
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.5}} 
                className="picture md:basis-1/2 flex items-end justify-center h-full mt-3">
                <div className=" md:h-[600px] md:w-[600px] h-[350px] w-[350px] bg-cover bg-top" style={{ backgroundImage: `url(${hero_img})` }}>
                </div>
            </motion.div>
        </div>
    </section>


  )
}

export default Hero;