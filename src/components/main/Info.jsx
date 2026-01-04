import React from 'react'
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa'

export const Info = () => {
  return (
    <div className="hidden md:block w-full bg-black text-white px-[5%] py-2 md: h-[35px]">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-2">

        {/* Email */}
        <div className="flex justify-center items-center text-center  gap-1 mt-[-15px]">
            <FaEnvelope/>
          <a
            href="mailto:avmelectroplating@gmail.com"
            className="underline mt-[-3px]"
          >
            avmelectroplating@gmail.com
          </a>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center gap-6 mt-[3px]">

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>Pavithran:</span>
            <a href="tel:9944066321" className="underline">
              99440 66321
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>Muthu Kumar:</span>
            <a href="tel:7826994488" className="underline">
              78269 94488
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}
