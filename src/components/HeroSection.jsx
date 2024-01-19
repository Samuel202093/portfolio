import React from 'react'
import { CgHello } from "react-icons/cg";
import { motion } from 'framer-motion';

const HeroSection = ({handleShow}) => {
  return (
    <section className='lg:flex md:justify-between lg:w-[70%] min-h-[6vh] border-[1px]y border-blacky mx-auto p-2 lg:mt-10 md:mt-4' id='home'>

        <motion.div className='imageWrapper w-[60%] lg:w-[70%] h-[35vh] md:h-[50vh] lg:h-[35vh] border-2 border-[rgb(80,112,53)] rounded-[50%] mt-3 mx-auto lg:mx-0' initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1}} transition={{ type: "tween", ease:"backOut", stiffness:100, delay: 0.5, duration: 1.5}}>
        </motion.div>

        <motion.div className='flex flex-col gap-3 lg:px-6 px-3 mt-8' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{type:"keyframes", duration: 1, delay: 0.85}}>

            <div className=' font-medium'>
            <p className='flex text-xl tracking-wide '>Hello <CgHello className='mt-1 ml-2 text-xl text-[rgb(255,204,211)]y'/>, I'm Samuel, a Fullstack Developer.</p>
        <p className='text-xl tracking-wide'>I create inventive solutions for complex problems with a focus on business requirements, transforming challenges into user-friendly solutions. A creative, flexible, a debugger, a team player and an efficient time manager.</p>
        </div>

          <div className='flex flex-col-reverse md:flex-row gap-6 border-2y border-red-700y'>

            <a href='#contacts' className='flex self-start px-8 py-2 text-base rounded-[2rem] text-[rgb(50,48,40)] font-semibold tracking-wider border-[1px] border-[#488C3E] bg-[rgb(178,224,187)]y bg-[#488C3E] text-[rgb(80, 112, 89)] hover:bg-transparent transition-all delay-75 hover:scale-[1.02]'>Open to Career Opportunities</a>

            <span className='flex self-start px-6 py-2 text-base text-[rgb(50,48,40)] cursor-pointer tracking-wider ease-in-out delay-[.4s] font-semibold border-[#488C3E] bg-[#488C3E] font-mediumy rounded-[2rem] border-[1px] border-blacky hover:bg-transparent hover:border-[1px] hover:border-[#488C3E] hover:italic' onClick={handleShow}>Skills</span>

          </div>
        </motion.div>
    </section>
  )
}

export default HeroSection
