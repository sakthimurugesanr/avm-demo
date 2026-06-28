import React, { useEffect, memo } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import silverplat from '../assets/electro/silverplating.jpg'
import brassplating from '../assets/electro/brassplating.webp'
import copperplating from '../assets/electro/copperplating.jpg'
import goldplating from '../assets/electro/goldplating.webp'
import lacqercoating from '../assets/electro/lacker.webp'
import nickel from '../assets/electro/nickel.jpg'

const products = [
    { name: 'Nickel Plating', img: nickel },
    { name: 'Copper Plating', img: copperplating },
    { name: 'Silver Plating', img: silverplat },
    { name: 'Brass Plating', img: brassplating },
    { name: 'Gold Plating', img: goldplating },
    { name: 'Lacquer Coating', img: lacqercoating },
]

const OurProducts = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 })
  }, [])

  return (
    <section className="py-8 sm:py-10 bg-gray-50">
          <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Electroplating <span className="text-blue-700">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 group"
              >
              <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="py-3 sm:py-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
              </div>
      </div>
    </section>
    )
}

export default memo(OurProducts)
