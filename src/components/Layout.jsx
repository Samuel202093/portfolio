import React,{useState} from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Project from './Project'
import Contacts from './Contacts'
import Modal from './Modal'
import { GoArrowUp } from "react-icons/go";
import ArrowUp from './ArrowUp'
import Tooltip from './Tooltip'


const Layout = () => {
  const[showModal, setShowModal] = useState(false)

  const handleShow = ()=>{
    setShowModal(!showModal)
    document.body.style.overflow = 'hidden'
  }


  return (
    <>
        <NavBar/> 
      <main>
        <HeroSection handleShow={handleShow}/>
        <Project />
        <Contacts/>
        {showModal && <Modal setShowModal={setShowModal} showModal={showModal}/>}
        <ArrowUp/>
        <Tooltip/>
        <Footer />
      </main>
    </>
  )
}

export default Layout
