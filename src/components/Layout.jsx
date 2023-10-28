import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import HeroBanner from './HeroBanner'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
      <main>
        <Outlet />
        <HeroBanner/>
        <About />
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer />
        <ToastContainer/>
      </main>
    </>
  )
}

export default Layout
