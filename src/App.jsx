import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import Header from './components/Header'
// import Testone from './components/Testone'
// import TestTwo from './components/TestTwo'
import Layout from './components/main/Layout'
import HeroSlider from './components/Hero'
import { Content } from './components/main/Content'
import AllServices from './components/pages/AllServices'
import About from './components/pages/About'
import { initGA } from './analytics/ga'
import PageTracker from './tracker/PageTracker'

const App = () => {
initGA()

  //G-BTN493DEK6
  return (
    <div>
      <BrowserRouter>
       <PageTracker />
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Content />} />
            {/* <Route path='/test' element={<TestTwo />} /> */}
            <Route path='/services' element={<AllServices/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App    