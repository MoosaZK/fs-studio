import React from 'react';
import {motion} from 'framer-motion';
import Card from './Card';
import images from './Images';

function Portfolio() {
  return (
    <motion.section id='portfolio'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     className='h-max mb-5 bg-blue-500 md:pb-12'>
        <div id="heading" className='pt-16 pb-5'>
            <h3 className='text-white  md:text-4xl text-3xl font-bold tracking-wide'>Portfolio</h3>
        </div>
        <div id="description1">
            <p className='text-white'>
                We specialize in creating a wide array of captivating visual content, ranging <br />
                from eye-catching logos and thumbnail designs to stunning banners, <br />
                expert video edits, and compelling posters.
            </p>
        </div>

        <div className="max-w-[1200px] my-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
            <Card img={images.img1} />
            <Card img={images.img2} />
            <Card img={images.img3} />
            <Card img={images.img4} />
        </div>

        <div id="description2" className=' mt-20 py-5'>
            <p className='text-white'>
            Power up your gaming presence with our killer thumbnails and <br />
            logos designed exclusively for hardcore gamers like you. <br />
            Dominate the gaming scene with our epic graphics. Level up now! 
            </p>
        </div>

        <div className="max-w-[1200px] my-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
            <Card img={images.img1} />
            <Card img={images.img2} />
            <Card img={images.img3} />
            <Card img={images.img4} />
        </div>
        <div className="max-w-[1200px] my-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
            <Card img={images.img1} />
            <Card img={images.img2} />
            <Card img={images.img3} />
            <Card img={images.img4} />
        </div>
    </motion.section>
  )
}

export default Portfolio