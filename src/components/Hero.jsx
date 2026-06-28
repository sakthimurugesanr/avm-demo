import React, { useEffect, memo } from 'react'
import laptopchurch from '../assets/banner/ban-res/oe-test/bg-laptop.webp'
import churctabbanner from '../assets/banner/ban-res/oe-test/bg-tab.webp'
import mobilebanner from '../assets/banner/ban-res/oe-test/bg-mobile.webp'

import image2forlaptop from '../assets/banner/ban-res/oe-electro/bg-laptop.webp'
import image2formmobile from '../assets/banner/ban-res/oe-electro/bg-mobile.webp'
import image2fortab from '../assets/banner/ban-res/oe-electro/bg-tab.webp'

import { toast } from 'sonner'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const HeroSlider = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem('avm_welcome_shown')

    if (!hasVisited) {
      toast.success('Welcome to AVM Metal 👋', {
        description: 'Were glad to have you here.',
        duration: 4000,
      })
      localStorage.setItem('avm_welcome_shown', 'true')
    }
  }, [])

  return (
    <div className="full-width-section overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <picture>
            <source media="(max-width: 639px)" srcSet={mobilebanner} />
            <source media="(max-width: 1023px)" srcSet={churctabbanner} />
            <img
              src={laptopchurch}
              alt="AVM Banner"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source media="(max-width: 639px)" srcSet={image2formmobile} />
            <source media="(max-width: 1023px)" srcSet={image2fortab} />
            <img
              src={image2forlaptop}
              alt="AVM Electro Banner"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default memo(HeroSlider)
