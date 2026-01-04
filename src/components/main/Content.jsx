import React from 'react'
import HeroSlider from '../Hero'
import OurServices from '../Services'
import WhatWeOffer from '../WhatWeOffer'
import OurProducts from '../OurProducts'
import AboutUs from '../About'
import ContactSection from '../ContactSection'
import StatsSection from '../StatsSection'
import ClientReviews from '../OurClients'
import ClientShorts from '../ClientShorts'
// import ImageGallery from '../ImageGallery'
import { useOutletContext } from 'react-router-dom'
// import VideoSection from '../SampleVideo'
import ServicesAccordion from '../ServiceAccordion'
import OfferForElectro from '../OfferForElectro'
import { Suspense } from 'react'
import InfrastructureSlider from '../RelegiousWorkSlider'
import OurPromise from '../OurPromise'

export const Content = () => {

  const { contactRef } = useOutletContext()
  return (
    <Suspense fallback="Loading...">

      <div>
        <HeroSlider />
        <StatsSection />
        <OurServices />
        <WhatWeOffer />
        <OurPromise/>
        <InfrastructureSlider/>
        {/* <OfferForElectro/> */}
        {/* <WhatWeOffer/> */}
        <AboutUs />
        <OurProducts />
        {/* <VideoSection/> */}
        {/* <ImageGallery/> */}
        {/* <ClientShorts /> */}
        <ClientReviews />
        <ServicesAccordion />


        <div ref={contactRef} className='my-[50]'>

        </div>
        <ContactSection />
      </div>
    </Suspense>

  )
}
