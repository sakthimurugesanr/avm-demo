import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { trackEvent } from '../analytics/ga'

const religiousWorks = [
  'Copper Temple Kalasam',
  'Stainless Steel Flagpole',
  'Brass Church Cross',
  'Golden Brass Flag Light',
  'Brass Prabhavali Thiruvatchi',
  'Brass Temple Dwajasthambam',
  'Steel Donation Box',
]

const electroPlating = [
  'Nickel Plating',
  'Copper Plating',
  'Silver Plating',
  'Brass Plating',
  'Gold Plating',
  'Lacquer Coating',
]

const Header = ({ onContactClick }) => {
  const [open, setOpen] = useState(false)
  const [showDesktopServices, setShowDesktopServices] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false)
  const [mobileReligious, setMobileReligious] = useState(false)
  const [mobileElectro, setMobileElectro] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDesktopServices(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleServiceClick = useCallback(
    (serviceName) => {
      navigate('/services', { state: { target: serviceName } })
      setOpen(false)
      setShowMobileServices(false)
      setShowDesktopServices(false)
      trackEvent('Services', 'service Clicked', serviceName)
    },
    [navigate]
  )

  return (
    <div className="sticky top-0 z-50 bg-[#0e2630] text-white">
      <header className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            trackEvent('Home', 'CTA Clicked', 'Get Started')
          }}
        >
          <img src={logo} alt="logo" loading="lazy" decoding="async" className="w-[60px] sm:w-[70px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setShowDesktopServices((prev) => !prev)
                trackEvent('Services', 'services Clicked', 'All Services')
              }}
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors duration-200 py-2"
            >
              Services
              <span className="transition-transform duration-200">
                {showDesktopServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {showDesktopServices && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                <div className="bg-[#0e2630] px-5 py-3 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm tracking-wide">Our Services</span>
                  <span className="text-blue-300 text-xs">Click any service to explore</span>
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-900 mb-3 flex items-center gap-2">
                      Religious Works
                    </p>
                    <ul className="space-y-0.5">
                      {religiousWorks.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleServiceClick(item)}
                          className="px-3 py-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-150 group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-800 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-900 mb-3 flex items-center gap-2">
                      Electro Plating
                      <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ml-1">
                        New
                      </span>
                    </p>
                    <ul className="space-y-0.5">
                      {electroPlating.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleServiceClick(item)}
                          className="px-3 py-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-150 group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-800 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">AVM Metal Works — Tiruppur</span>
                  <button
                    onClick={() => {
                      navigate('/services')
                      setShowDesktopServices(false)
                    }}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    View All Services →
                  </button>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                trackEvent('About', 'About Clicked', 'About')
              }}
              className="hover:text-blue-200 transition-colors duration-200 no-underline text-white"
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                onContactClick()
                trackEvent('Contact', 'Contact Clicked', 'Contact')
              }}
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu className="text-3xl" />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out overflow-y-auto ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="sticky top-0 z-10 bg-[#0e2630] flex items-center justify-between px-4 py-3 shadow-md">
          <img src={logo} className="w-[50px]" alt="logo" loading="lazy" decoding="async" />
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Close menu"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-2">
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setShowMobileServices((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-[#0e2630] text-white font-semibold text-sm"
            >
              <span>Services</span>
              {showMobileServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {showMobileServices && (
              <div className="bg-white">
                <button
                  onClick={() => setMobileReligious((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 text-sm font-semibold text-[#0e2630] bg-blue-50"
                >
                  <span>Religious Works</span>
                  {mobileReligious ? <IoIosArrowUp className="text-[#0e2630]" /> : <IoIosArrowDown className="text-[#0e2630]" />}
                </button>
                {mobileReligious && (
                  <ul className="bg-white divide-y divide-gray-50">
                    {religiousWorks.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleServiceClick(item)}
                        className="px-5 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm text-gray-700 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => setMobileElectro((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 text-sm font-semibold text-[#0e2630] bg-blue-50"
                >
                  <span className="flex items-center gap-2">
                    Electro Plating
                    <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
                  </span>
                  {mobileElectro ? <IoIosArrowUp className="text-[#0e2630]" /> : <IoIosArrowDown className="text-[#0e2630]" />}
                </button>
                {mobileElectro && (
                  <ul className="bg-white divide-y divide-gray-50">
                    {electroPlating.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleServiceClick(item)}
                        className="px-5 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm text-gray-700 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={() => {
              setOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors no-underline"
          >
            About
            <span className="text-gray-400 text-xs">›</span>
          </Link>

          <button
            onClick={() => {
              onContactClick()
              setOpen(false)
            }}
            className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
          >
            Contact
            <span className="text-gray-400 text-xs">›</span>
          </button>
        </div>
      </div>

      {open && <div className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm" onClick={() => setOpen(false)} />}
    </div>
  )
}

export default memo(Header)
