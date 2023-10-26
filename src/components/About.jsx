import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { UseActiveContext } from '../context/active'


const About = () => {
    const { setActiveSection } = UseActiveContext()
    const { inView, ref} = useInView({ threshold: 0.75})


    useEffect(()=>{
        if (inView) {
            setActiveSection("About")
        }
    },[inView, setActiveSection])


  return (
    <motion.section ref={ref} id='about' className='w-full lg:w-[63%] border-0 md:border-[1px] border-blacky rounded-3xl mx-auto mt-10 md:mt-[15rem] p-4 flex flex-col gap-4 lg:gap-2 text-start md:text-center shadow-0 md:shadow-xl' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{ type: "circleOut", ease:"backOut", stiffness:100, delay: 0.5, duration: 1.5}}>
        
        <h3 className='text-xl text-center text-gray-950 font-extrabold mb-4'>About Samuel</h3>
        
        <p className='text-base'>After graduating with a <span className='font-extrabold text-gray-900'>degree in  computer Engineering</span>, I decide to increase my knowledge due to my passion for programming by enrolling in a coding bootcamp and learned <span className='font-extrabold text-gray-900'>fullstack web development.</span> </p>
        <p className='text-base'>All through my career, I've had the opportunity to work on several projects. The experience gotten from the development of these projects has equipped me with knowledge and problem-solving skills necessary to tackle complex challenges head-on.</p>

        <p className='text-base'>Furthermore, With my technical skills, <span className='text-gray-900 font-extrabold'>I thrive in collaborative environments working with multidisciplinary teams</span> to achieve project goals. <span className='text-gray-900 font-extrabold'>I'm always eager to learn </span> and stay up-to-date with latest technologies and industry standard to ensure best solutions for client.</p>

        <p className='text-base mb-10'>Apart from programming, I love reading books, playing video games, surfing the internet and listening to music.</p>
    </motion.section>
  )
}

export default About
