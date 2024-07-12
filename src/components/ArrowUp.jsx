import React from 'react'
import { GoArrowUp } from "react-icons/go";


const ArrowUp = () => {
  return (
    <div className='rotating-div fixedy absolute flex md:bottom-[-152%] lg:bottom-[-180%] right-6 rounded-full w-[40px] h-[40px] border-[2px] border-dotted border-black'>
    <a href="#home" className='flex mx-auto'>
      <GoArrowUp className='flex justify-centery self-center mx-auto text-2xl cursor-pointer'/>
      </a> 
    </div>
  )
}

export default ArrowUp
