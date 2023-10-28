import React, { useRef, useEffect } from 'react'
import { projectData } from '../data/data'
import {FaGithub} from 'react-icons/fa'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import IoLinkSharp{}  from 'react-icons/io'
import { PiLinkSimpleHorizontalBold } from 'react-icons/pi'
import { UseActiveContext } from '../context/active'

const Projects = () => {
    const { setActiveSection } = UseActiveContext()
    const {ref, inView} = useInView({ threshold: 0.75})

    const motionRef = useRef(null)


    useEffect(()=>{
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection])

    const { scrollYProgress } = useScroll({
        target: motionRef,
        offset: ["0 1.7", "1.2 1.5"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <section className='mt-12 md:mt-[15rem]' id='projects' ref={ref}>
      <h2 className='text-xl text-center text-gray-950 font-extrabold mb-4 '>My Projects</h2>
      <div className='cards p-[0.85rem] md:p-[1.2rem]'>
        {projectData.map((x)=>{
            return(<motion.div key={x.id} ref={motionRef} className='card text-sm flex flex-col gap-3 overflow-hiddeny border-1 border-red-600y p-5 rounded-2xl shadow-md' style={{ scale: scaleProgress, opacity: opacityProgress}}>
               <div>
                    <img src={x.img} alt=""  className='object-cover'/>
               </div>

               <div className='flex flex-col gap-2 mt-4'>
                    <h3 className='font-extrabold text-gray-800'>{x.title}</h3>
                    <p>{x.description}</p>
                    <ul className='flex flex-wrap gap-2 mt-2'>
                        {x.tags.map((tag, index)=>{
                            return <li key={index} className='bg-gray-800 text-white rounded-full px-2 py-1 text-[0.7rem]'>{tag}</li>
                        })}
                    </ul>
                    <div className='flex gap-6'>
                        <a href={x.github_link} target='_blank' className=' text-xl mt-2'><FaGithub className='github'/></a>
                        {x.url !=''? <a href={x.url} target='_blank' className='text-xl mt-2'><PiLinkSimpleHorizontalBold className='github'/></a>:''}
                        {/* <a href={x.url} target='_blank' className='text-xl mt-2'><PiLinkSimpleHorizontalBold className='github'/></a> */}
                    </div>
               </div>
            </motion.div>)
        })}
        
      </div>
    </section>
  )
}

export default Projects
