import React, { useRef, useCallback, memo } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import WhatsAppButton from '../WhatsApp'
import FloatingActionButtons from '../FloatingButton'
import { Info } from './Info'
import ScrollToTop from '../ScrollToTop'

const Layout = () => {

  const contactRef = useRef(null)
  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])


  return (
    <div className="app-viewport w-full">
      <Info />
      <Header onContactClick={scrollToContact} />
      <FloatingActionButtons />
      <ScrollToTop />
      <main className="app-container w-full">
        <Outlet context={{ contactRef }} />
      </main>
      <Footer />
    </div>
  )
}

export default memo(Layout)