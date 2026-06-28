import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { Toaster } from 'sonner'
import { initGA } from './analytics/ga'
import PageTracker from './tracker/PageTracker'

const Layout = React.lazy(() => import('./components/main/Layout'))
const Content = React.lazy(() => import('./components/main/Content'))
const AllServices = React.lazy(() => import('./components/pages/AllServices'))
const About = React.lazy(() => import('./components/pages/About'))

const App = () => {
  useEffect(() => {
    initGA()
  }, [])

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">Loading application...</div>}>
          <Toaster theme="dark" position="top-right" richColors />
          <PageTracker />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Content />} />
              <Route path="/services" element={<AllServices />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
