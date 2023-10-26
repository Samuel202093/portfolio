import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { links } from '../data/data'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { UseActiveContext } from '../context/active'

const Header = () => {
  const {activeSection, setActiveSection } = UseActiveContext()


  return (
    <header className='z-[999] relative'>
      <motion.div className='fixed top-0 left-1/2 h-[3.3rem] md:h-[2.8rem] lg:h-[2.55rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[2.55rem] sm:w-[36rem] sm:rounded-full' initial={{y: -100, x: "-50%", opacity: 0}} animate={{y:0, x: "-50%", opacity:1}} transition={{ ease: "easeOut", duration: 1 }}>
      </motion.div>

      <nav className='flex fixed top-[0.15rem] border-2y border-red-500y left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.5rem] md:top-[1.7rem] sm:h-[initial] sm:py-0 '>
        <ul className='flex w-[100%]y md:w-[22rem] flex-row md:flex-wrapy items-center justify-center gap-y-2 gap-x-[0.7rem] md:gap-x-10 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap- overflow-x-scrolly md:overflow-x-hiddeny '>
        {links.map((x)=>{
            return (
                <motion.li className='h-3/4 flex items-center justify-center' key={x.hash} initial={{y: -100, opacity: 0}} animate={{y:0, opacity: 1}}>
                    <a className={clsx('flex w-full items-center transition-all rounded-full delay-100 justify-center px-2 py-2 hover:text-gray-950 hover:bg-[#fbe2e3]',{ "bg-[#fbe2e3] transition ease-in-out duration-100 delay-75": activeSection === x.name})} href={x.hash} onClick={()=> setActiveSection(x.name)}>{x.name}</a>
                </motion.li>
            )
        })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
