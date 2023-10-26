import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UseActiveContext } from '../context/active'
import {technicalSkills, professionalSkill} from '../data/data'

const Skills = () => {
  const {setActiveSection} = UseActiveContext()
  const { inView, ref} = useInView({threshold: 0.75})

useEffect(()=>{
  if (inView) {
    setActiveSection("Skills")
  }
},[inView, setActiveSection])

const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    x: -100,
  },
  animate: (index)=> ({
    opacity: 1,
    x: 0,
    transition:{
      type: "keyframes",
      delay: 0.03 * index,
      duration: 0.85
    }
  }),
}

  return (
    <section className="container" ref={ref} id='skills' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"keyframes", duration: 1.5, delay: 0.5}}>
        <div className="main-title">
            <h3>Skills</h3>
        </div>

        <div className="row">

            <section className="col">
                <div className="sub-title">
                    <h2>Technical Skills</h2>
                </div>

                <div className="skills-container">

                  {technicalSkills.map((x, index)=>{
                      return(<motion.div key={index} className='skill' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={index}>
                          <div className='subject'>{x.name}</div>
                          <div className='progress-bar' value={`${x.percent}%`}>
                            <div className='progress-line' style={{maxWidth:`${x.percent}%`}}></div>
                          </div>
                      </motion.div>)
                  })}

              </div>
            </section>

            <section className="col">
                <div className="sub-title">
                    <h2>Professional Skills</h2>
                </div>

                <div className="skills-container">

                  {professionalSkill.map((x, index)=>{
                    return(<motion.div key={index} className='skill' variants={fadeInAnimationVariants} initial="initial" viewport={{once:true}} whileInView="animate" custom={index}> 
                        <div className='subject'>{x.name}</div>
                        <div className='progress-bar' value={`${x.percent}%`}>
                          <div className='progress-line' style={{maxWidth:`${x.percent}%`}}></div>
                        </div>
                    </motion.div>)
                  })}

                </div>
            </section>

        </div>
    </section>
  )
}

export default Skills
