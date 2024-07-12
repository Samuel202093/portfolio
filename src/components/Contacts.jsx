import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
// import CV from '../assets/file/samuel_resume_fullstack.pdf'


const Contacts = () => {
  // const CV = new URL('../assets/file/samuel_resume_fullstack.pdf', import.meta.url);

  return (
    <section id='contacts' className='flex flex-col gap-2 lg:w-[70%] min-h-[8vh] border-[1px] md:border-[rgb(50,48,40)] md:mx-auto lg:p-8 p-3 rounded-[13px] md:mt-10 transition-transform delay-[.3s] ease-in-out lg:hover:scale-[1.05]y mt-6'>
      <div>
        <h2 className='flex text-2xl font-bold'>Let's Connect <FaHandshakeSimple className='text-3xl text-red-700y ml-3 mt-[0.2rem]'/></h2> 
      </div>
      <div>
      <p className='text-[rgb(50,48,40)] text-base'>Hi there! I'm available for both full-time and freelance projects, and I'm open to working either remotely or on-site in Nigeria. I look forward to staying in touch with you.</p>
      </div>
      <div className='flex flex-wrap gap-2 md:gap-0 md:justify-between text-base font-bold border-2y border-red-500y lg:w-[55%] w-[100%]'>
        <a href="mailto:onyebuekes93@gmail.com" target='_blank' className='py-1 px-4 border-[1px] border-[rgb(50,48,40)] rounded-full transition-all delay-75 hover:bg-[rgb(255,204,211)]'>onyebuekes93@gmail.com</a>
        <a href='https://linkedin.com/in/onyebueke-ifeanyi-1b52411b4' target='_blank' className='py-1 px-4 border-[1px] border-[rgb(50,48,40)] rounded-full transition-all delay-75 hover:bg-[rgb(255,204,211)]'>Linkedin</a>
        {/* <a href={CV} className='py-1 px-4 border-[1px] border-[rgb(50,48,40)] rounded-full transition-all delay-75 hover:bg-[rgb(255,204,211)]' download>Resume</a> */}
        <a href='https://wa.me/08131880839' target='_blank' className='py-1 px-4 border-[1px] border-[rgb(50,48,40)] rounded-full transition-all delay-75 hover:bg-[rgb(255,204,211)]'>WhatsApp</a>
        
      </div>
    </section>
  )
}

export default Contacts
