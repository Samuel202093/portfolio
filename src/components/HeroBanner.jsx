import React, { useEffect} from 'react'
import {easeIn, motion} from 'framer-motion'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdOutlineFileDownload } from "react-icons/md"
import { useInView } from 'react-intersection-observer'
// import { Link } from 'react-router-dom'
import myPhoto from '../assets/samuel.jpg'
import { UseActiveContext } from '../context/active'
import CV from '../assets/file/samuel.pdf'

const HeroBanner = () => {
    const { setActiveSection } =   UseActiveContext()
    const {ref, inView} = useInView({ threshold: 0.75})

    useEffect(()=>{
        setActiveSection("Home")
    },[inView, setActiveSection])


    
  return (
    <section ref={ref} id='home' className='absolutey top-[20%]y flex flex-col md:flex-row justify-around w-full lg:w-[90%] p-3 md:p-1 lg:p-3 translate-x-0 lg:translate-x-[3rem] -mt-5 md:-mt-0'>
      <div className='w-full md:w-[50%] lg:w-[20%] h-[50vh] md:h-[40vh] border-solid-orange rounded-[50%] mr-0 md:mr-[7rem] lg:mr-[-7rem] mt-0 md:mt-3 lg:mt-0'>
        <motion.div className='w-fit h-full' initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1}} transition={{ type: "tween", ease:"backOut", stiffness:100, delay: 0.5, duration: 1.5}}>
        <img src={myPhoto} alt="samuel_potrait" className='w-[100%] h-full object-cover rounded-[50%] border-[0.35rem] border-white'/>
        </motion.div>
      </div>
      <motion.div className='w-full md:w-[45%] lg:w-[35%] mt-4 md:mt-0 h-[30vh]y ml-0 md:ml-[-7rem] h-[45vh] border-[2px]y border-red-600y p-1 md:p-6' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"keyframes", duration: 1.5, delay: 0.5}}>

        <p className='text-base pb-2'>Hello, I'm <span className='text-base font-extrabold font-serif italic'>Samuel,</span> and I'm an enthusiastic <span className='text-base font-extrabold font-serif italic'>Fullstack developer</span> with a strong dedication in developing innovative and consumer-driven solutions.</p>
        <p className='pb-4'>With a background in Computer Engineering, I have honed my skills in various programming languages and technologies, making me a versatile and adaptable developer.</p>
        <div className='flex flex-wrap md:flex-row gap-4 mt-3 md:mt-0'>
            <a href="#contact" className='flex gap-[0.2rem] bg-gray-950 py-1 cursor-pointer text-white text-sm px-[0.32rem] rounded-full transition-all delay-75 hover:bg-white hover:text-gray-950 hover:font-extrabold hover:scale-110'>Contact me <IoIosArrowRoundForward className='text-[1rem] mt-1'/></a>
            <a href={CV} className='flex gap-2 text-sm font-bold text-gray-950 cursor-pointer bg-white py-1 px-2 transition-all delay-75 rounded-full hover:bg-gray-950 hover:text-white hover:font-normal' download>Download resume <MdOutlineFileDownload className='text-[1rem] mt-1'/></a>
            <div className='flex gap-3'>
            <a href='https://github.com/Samuel202093' target='_blank' className='git cursor-pointer'><FaGithub className='text-[1.3rem] bg-red-800y rounded-fully mt-1'/></a>
            <span className='git-tooltip hidden absolute transition ease-in-out delay-150 bg-gray-950 text-white md:translate-y-7 translate-y-8 -translate-x-8 text-xs px-1 py-[0.2rem] font-normal rounded-full'>Github link</span> 
            <a href='https://linkedin.com/in/onyebueke-ifeanyi-1b52411b4' target='_blank' className='linkedin cursor-pointer'><FaLinkedin className='text-[1.3rem] mt-1'/></a>
            <span className='linkedin-tooltip hiddeny absolute hidden transition ease-in-out delay-150 translate-y-[2.3rem] md:translate-y-[1.8rem] lg:translate-y-[0.23rem] translate-x-[-0.8rem] md:translate-x-[1.75rem] lg:translate-x-[3.8rem] bg-gray-950 text-white px-1 text-sm py-0 md:py-[0.2rem] rounded-full'>Linkedin profile</span>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroBanner
