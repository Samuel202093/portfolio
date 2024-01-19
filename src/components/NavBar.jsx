import React, {useEffect} from 'react'
import CV from '../assets/file/samuel_resume_fullstack.pdf'

const NavBar = () => {
  useEffect(()=>{
    const handleScroll = () => {
      const navElement = document.querySelector('.nav')
      const scrollHeight = window.scrollY;
      if (scrollHeight > 200) {
        navElement.style.visibility = 'hidden'
      }else{
        navElement.style.visibility = 'visible'
      }
    }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  },[])


  return (
    <nav className='nav hidden md:flex md:justify-between lg:justify-around p-6 border-b-[1px] sticky top-0 z-10 border-[rgb(50,48,40)] bg-[rgb(255,250,246)]' id='nav'>
        <div>
            <a href= "/" className='nav_heading text-2xly'>Onyebueke Samuel</a>
        </div>
        <div className='border-2y border-blacky lg:w-[25%] flex justify-between md:mr-[1rem] lg:mr-0'>
            <a href='https://linkedin.com/in/onyebueke-ifeanyi-1b52411b4' target='_blank' className='border-[1px] border-[rgb(50,48,40)] py-[0.3rem] text-[rgb(50,48,40)] font-medium tracking-wider px-9 rounded-[2rem] transition-all delay-75 hover:bg-[rgb(255,204,211)] md:mr-6 lg:ml-0'>Linkedin</a>

            <a href='https://github.com/Samuel202093' target='_blank' className='border-[1px] border-[rgb(50,48,40)] py-[0.3rem] text-[rgb(50,48,40)] font-medium tracking-wider px-9 rounded-[2rem] transition-all delay-75 hover:bg-[rgb(255,204,211)] md:mr-6 lg:ml-0'>Github</a>
            
            <a href={CV} className='border-[1px] border-[rgb(50,48,40)] font-medium text-[rgb(50,48,40)] transition-all delay-75 tracking-wider py-[0.3rem] px-9 rounded-[2rem] hover:bg-[rgb(255,204,211)]' download>Resume</a>
        </div>

    </nav>
  )
}

export default NavBar
