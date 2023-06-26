import React from 'react'
import {motion} from 'framer-motion';
function Card(props) {
  return (
    <motion.img 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{delay: 0.2}} 
    className="picture h-[330px] w-[280px] mx-auto hover:scale-105 transition duration-300 ease-in-out"
    src={props.img} 
    alt="" >
        
    </motion.img>
  )
}

export default Card