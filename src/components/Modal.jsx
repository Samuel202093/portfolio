import React from 'react'
import { motion } from 'framer-motion'
import {technicalSkills, professionalSkill} from '../data/data'

const Modal = ({setShowModal, showModal}) => {

    const fadeInAnimationVariants = {
        initial:{
            opacity: 0,
            x: -100,
        },
        animate: ()=>({
            opacity: 1,
            x: 0,
            transition:{
                type: "keyframes",
                delay: 0.03,
                duration: 0.85
            }
        })
    }

    const handleClose = ()=>{
        setShowModal(!showModal)
    document.body.style.overflow = 'unset'
    }


  return (
    <motion.div className='fixed border-2y border-red-600y bg-red-600y bg-[rgba(0,0,0,0.5)] z-[100] top-0 w-[100%] min-h-[150vh]' variants={fadeInAnimationVariants} initial="initial" viewport={{once:true}} whileInView="animate">

        <div className='modalWrapper flex flex-col gap-8 md:w-[50%] lg:w-[35%] h-[100vh] bg-[rgb(255,250,246)] border-[1px] pl-6 pr-6 pt-6 pb-8 overflow-y-scroll'>
            <div className='flex flex-col gap-1'>
                <h2 className='text-base font-semibold text-[rgb(50,48,40)]'>Technical Skills</h2>
                <div className='w-fit min-h-[30vh] border-2y border-green-800y flex flex-wrap gap-6'>
                    {technicalSkills.map((x, index)=>{
                        return(<span key={index} className='border-[1px] bg-[#488C3E] text-[rgb(255,250,246)] px-6 py-1 rounded-full text-sm font-semibold'>{x.name}</span>)
                    })}
                </div>
            </div>

            <hr className='border-[rgb(50,48,40)] border-1'/>

            <div className='flex flex-col gap-1'>
                <h2 className='text-base font-semibold text-[rgb(50,48,40)]'>Professional Skills</h2>
                <div className='w-fit min-h-[30vh] border-2y border-green-800y flex flex-wrap gap-6'>
                    {professionalSkill.map((x, index)=>{
                        return(<span key={index} className='border-[1px] bg-[#488C3E] text-[rgb(255,250,246)] px-6 py-1 rounded-full text-sm font-semibold'>{x.name}</span>)
                    })}
                </div>
            </div>

            <div className='flex'>
                <span className='mx-auto cursor-pointer border-[1px] py-[0.3rem] px-8 rounded-full font-semibold bg-[rgb(50,48,40)] text-[rgb(255,250,246)]' onClick={handleClose}>Close</span>
            </div>
        </div>
      
    </motion.div>
  )
}

export default Modal
