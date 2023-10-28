import React, {useEffect, useState} from 'react'
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UseActiveContext } from '../context/active'
import axios from 'axios'


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email:"", 
        message:""
    })
    const { setActiveSection } = UseActiveContext()
    const { inView, ref} = useInView({ threshold: 0.65})

    useEffect(()=>{
        if (inView) {
            setActiveSection("Contact")
        }
    }, [inView, setActiveSection])



    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            if (formData.email != "" || formData.message != "") {
                const url = 'https://resend-backend.vercel.app/api/v1'
                const data = {
                    name: `${formData.name}`,
                    email:`${formData.email}`,
                    message: `${formData.message}`
                }

                await axios.post(url, data)
                .then((res)=> res.data)
                .catch((err)=> err)
                toast.success(`Message sent!! I will get in touch with you in few days`,{transition: Slide, position:'top-right'})
                setLoading(false)
                setFormData({
                    name:'',
                    email:'',
                    message:''
                })
        
            }
            
        } catch (error) {
            toast.error(`Network error!! Please try again ${formData.name}`,{transition: Slide, position:'top-right'})
            setFormData({
                name: '',
                email: '', 
                message:''
            })
            setLoading(false)
        }
          
    }


  return (
    <motion.section className='flex flex-col gap-5 w-full lg:w-[65%] mx-auto p-2 md:p-3 mt-[10rem] lg:mt-[15rem]' ref={ref} id='contact' initial={{opacity:0}} transition={{type:"keyframes", delay:0.5, duration: 1}} whileInView={{opacity: 1}} viewport={{once:true}}>
        <div>
        <h3 className='text-center font-extrabold text-xl mb-4'>Contact Me</h3>
        <p className='text-sm text-center'>Please contact me directly via <a href="mailto:onyebuekes93@gmail.com" className='font-extrabold'>onyebuekes93@gmail.com</a> or through this form</p>
        </div>   
        
        <form action="" className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Your name' className='h-[7vh] text-sm pl-3 text-gray-900 font-semibold rounded-lg border-[1px] border-[#15295f]y focus:outline-none' value={formData.name} onChange={handleChange} required={true} maxLength={30}/>
            <input type="email" name="email" placeholder='Your email' className='h-[7vh] text-sm pl-3 text-gray-900 font-semibold rounded-lg border-[1px] border-[#15295f]y focus:outline-none' value={formData.email} onChange={handleChange} required={true} max={100}/>
            <textarea className='pl-3 pt-5 text-sm font-semibold border-[1px] border-[#15295f]y rounded-lg focus:outline-none' name="message" id="" cols="30" rows="10" placeholder='Your message' value={formData.message} onChange={handleChange} required={true} maxLength={5000}></textarea>
            <button className='flex self-center lg:self-start bg-gray-800 text-[rgb(249, 250, 251)]y text-white transition-all delay-[0.2] font-semibold border-[1px] text-sm px-5 py-3 rounded-lg hover:bg-inherit hover:text-[#15295f] hover:border-[1px] hover:border-[#15295f] hover:font-extrabold cursor-pointer' >{loading ? <div className="spinner"><span></span>
                <span></span>
                <span></span>
                <span></span></div>:'submit'}</button>
        </form>
    </motion.section>
  )
}

export default Contact
