import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { PiLinkSimpleHorizontalBold } from 'react-icons/pi'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { projectData } from '../data/data';

const Project = () => {
  return (
    <motion.section className='cards w-[75%]y min-h-[10vh] border-2y border-red-500y mx-auto p-2 mt-[4rem]y' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"keyframes", duration: 1.4, delay: 0.6}}>
        {projectData.map((x)=>{
            return(<div className='card p-4 text-[rgb(50,48,40)]' key={x.id}>
            <div>
                <h3 className='text-xl font-bold '>{x.title}</h3>
                {/* <p className='text-sm'>{x.description}</p> */}
            </div>
            <hr className='border-1 border-black mt-3'/>
            <div className='mt-5 h-[200px] w-full image1-container'>
                <img src={x.img} alt="project-image" className='h-full w-full object-cover' />
            </div>
           
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-base tracking-wide font-bold'>{x.stack}</h3>
                    <div className='flex justify-between'>
                        <a href={x.github_link} target='_blank'><FaGithub className='text-base cursor-pointer'/></a>
                       {x.url !==''? <a href={x.url} target='_blank'> <PiLinkSimpleHorizontalBold className='text-base cursor-pointer'/> </a>:''} 
                    </div>

                </div>
                <div>
                    <GoArrowUpRight className='arrowUp text-4xl cursor-pointer'/>
                    
                </div>
            </div>
            <hr className='border-1 border-black mt-5'/>
            <div className='flex flex-wrap gap-2 mt-5'>
                {x.tags.map((tag, index)=>{
                    return(<span key={index} className='bg-transparent border-[1px] border-[rgb(50,48,40)] text-[rgb(50,48,40)] rounded-full px-2 py-1 text-[0.7rem]'>{tag}</span>)
                })}
        
            </div>
        </div>)
        })}

    </motion.section>
  )
}

export default Project
