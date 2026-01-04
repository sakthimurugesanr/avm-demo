import React, { useRef } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import WhatsAppButton from '../WhatsApp'
import FloatingActionButtons from '../FloatingButton'
import { Info } from './Info'

const Layout = () => {
  
   const contactRef = useRef(null)
 const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div >
      <Info/>
        <Header onContactClick={scrollToContact}/>
<FloatingActionButtons/>
        <Outlet context={{contactRef}}/>
        <Footer/>
    </div>
  )
}

export default Layout