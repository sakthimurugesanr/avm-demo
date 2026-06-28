// import React, { Suspense } from 'react'
// import { useOutletContext } from 'react-router-dom'
// import LoadingFallback from '../../components/LoadingFalback'

// const HeroSlider = React.lazy(() => import('../Hero'))
// const WhatWeOffer = React.lazy(() => import('../WhatWeOffer'))
// const InfrastructureSlider = React.lazy(() => import('../RelegiousWorkSlider'))
// const OurProducts = React.lazy(() => import('../OurProducts'))
// const AboutUs = React.lazy(() => import('../About'))
// const WorksGallery = React.lazy(() => import('../pages/WorksGallery'))
// const OurPromise = React.lazy(() => import('../OurPromise'))
// const OurServices = React.lazy(() => import('../Services'))
// const Dhvaja3DViewer = React.lazy(() => import('../pages/Dhvaja3DViewer'))
// const StatsSection = React.lazy(() => import('../StatsSection'))
// const ClientReviews = React.lazy(() => import('../OurClients'))
// const BookCallBanner = React.lazy(() => import('../pages/BookCallBanner'))
// const ServicesAccordion = React.lazy(() => import('../ServiceAccordion'))
// const ContactSection = React.lazy(() => import('../ContactSection'))

// const Content = () => {
//   const { contactRef } = useOutletContext()

//   return (
//     <Suspense fallback={<LoadingFallback />}>
//       <div>
//         <HeroSlider />
//         <WhatWeOffer />
//         <InfrastructureSlider />
//         <AboutUs />
//         <OurProducts />
//         <WorksGallery />
//         <OurPromise />
//         <OurServices />
//         {/* <Dhvaja3DViewer /> */}
//         <StatsSection />
//         <ClientReviews />
//         <BookCallBanner />
//         <ServicesAccordion />
//         <div ref={contactRef} className="my-12" />
//         <ContactSection />
//       </div>
//     </Suspense>
//   )
// }

// export default Content
import React, { Suspense, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import LoadingFallback from '../../components/LoadingFalback'

// ── Critical above-fold component (eager) ──────────────────────────────────
// HeroSlider is the first thing the user sees — lazy-loading it causes LCP delay.
// Keeping it as lazy but we give it a dedicated lightweight fallback.
const HeroSlider = React.lazy(() => import('../Hero'))

// ── Below-fold components (lazy) ───────────────────────────────────────────
const WhatWeOffer = React.lazy(() => import('../WhatWeOffer'))
const InfrastructureSlider = React.lazy(() => import('../RelegiousWorkSlider'))
const OurProducts = React.lazy(() => import('../OurProducts'))
const AboutUs = React.lazy(() => import('../About'))
const WorksGallery = React.lazy(() => import('../pages/WorksGallery'))
const OurPromise = React.lazy(() => import('../OurPromise'))
const OurServices = React.lazy(() => import('../Services'))
const Dhvaja3DViewer = React.lazy(() => import('../pages/Dhvaja3DViewer'))
const StatsSection = React.lazy(() => import('../StatsSection'))
const ClientReviews = React.lazy(() => import('../OurClients'))
const BookCallBanner = React.lazy(() => import('../pages/BookCallBanner'))
const ServicesAccordion = React.lazy(() => import('../ServiceAccordion'))
const ContactSection = React.lazy(() => import('../ContactSection'))

// ── SEO: Structured data (JSON-LD) ─────────────────────────────────────────
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://avmmetals.com/#business',
      name: 'AVM Metals',
      alternateName: 'AVM Electro Plating',
      description:
        'Tiruppur\'s leading electroplating and brass metalwork specialist. Offering Nickel, Copper, Silver, Brass, Gold plating and religious metalwork since 2010.',
      url: 'https://avmmetals.com',
      telephone: ['+919944066321', '+917826994488'],
      email: 'avmelectroplating@gmail.com',
      foundingDate: '2010',
      priceRange: '$$',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Bank Transfer',
      image: 'https://avmmetals.com/og-image.jpg',
      logo: 'https://avmmetals.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '382/2, Gayathri Nagar, 1st Street, Anupparpalayam',
        addressLocality: 'Tiruppur',
        addressRegion: 'Tamil Nadu',
        postalCode: '641652',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '11.1085',
        longitude: '77.3411',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Electroplating & Metalwork Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nickel Plating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copper Plating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silver Plating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brass Plating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gold Plating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lacquer Coating' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Temple Kalasam Fabrication' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Church Cross Fabrication' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flag Pole Manufacturing' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '9',
        bestRating: '5',
        worstRating: '1',
      },
      areaServed: [
        { '@type': 'State', name: 'Tamil Nadu' },
        { '@type': 'Country', name: 'India' },
      ],
      sameAs: [
        'https://www.facebook.com/avmmetals',
        'https://www.instagram.com/avmmetals',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://avmmetals.com/#website',
      url: 'https://avmmetals.com',
      name: 'AVM Metals',
      description: 'Electroplating & Religious Metalwork — Tiruppur',
      publisher: { '@id': 'https://avmmetals.com/#business' },
    },
  ],
}

const useSEOMeta = () => {
  useEffect(() => {
    // Title
    document.title =
      'AVM Metals | Electroplating & Religious Metalwork in Tiruppur'

    const setMeta = (attrs) => {
      const selector = Object.entries(attrs)
        .filter(([k]) => k !== 'content')
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('')
      let el = document.head.querySelector(`meta${selector}`)
      if (!el) {
        el = document.createElement('meta')
        Object.entries(attrs)
          .filter(([k]) => k !== 'content')
          .forEach(([k, v]) => el.setAttribute(k, v))
        document.head.appendChild(el)
      }
      el.setAttribute('content', attrs.content)
    }

    const setLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setLink('canonical', 'https://avmmetals.com')

    setMeta({ name: 'description', content: 'AVM Metals — Tiruppur\'s trusted electroplating specialist since 2010. Gold, Silver, Nickel, Brass & Copper plating. Temple kalasams, flag poles, church crosses. Pan-India delivery.' })
    setMeta({ name: 'keywords', content: 'electroplating tiruppur, gold plating, silver plating, brass plating, nickel plating, copper plating, temple kalasam, flag pole, church cross, AVM metals, AVM electro plating' })
    setMeta({ name: 'robots', content: 'index, follow' })
    setMeta({ name: 'author', content: 'AVM Metals' })

    setMeta({ property: 'og:type', content: 'website' })
    setMeta({ property: 'og:url', content: 'https://avmmetals.com' })
    setMeta({ property: 'og:title', content: 'AVM Metals | Electroplating & Religious Metalwork — Tiruppur' })
    setMeta({ property: 'og:description', content: 'Gold, Silver, Nickel, Brass & Copper plating. Temple kalasams, flag poles, church crosses. Serving India since 2010.' })
    setMeta({ property: 'og:image', content: 'https://avmmetals.com/og-image.jpg' })
    setMeta({ property: 'og:locale', content: 'en_IN' })
    setMeta({ property: 'og:site_name', content: 'AVM Metals' })

    // Twitter Card
    setMeta({ name: 'twitter:card', content: 'summary_large_image' })
    setMeta({ name: 'twitter:title', content: 'AVM Metals | Electroplating — Tiruppur' })
    setMeta({ name: 'twitter:description', content: 'Premium electroplating & religious metalwork. Pan-India delivery since 2010.' })
    setMeta({ name: 'twitter:image', content: 'https://avmmetals.com/og-image.jpg' })

    const id = 'avm-jsonld'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
    }
  }, [])
}

// ── Component ───────────────────────────────────────────────────────────────
const Content = () => {
  const { contactRef } = useOutletContext()

  // Inject SEO meta once on mount
  useSEOMeta()

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div>
        <HeroSlider />
        <WhatWeOffer />
        <InfrastructureSlider />
        <AboutUs />
        <OurProducts />
        <WorksGallery />
        <OurPromise />
        <OurServices />
        {/* <Dhvaja3DViewer /> */}
        <StatsSection />
        <ClientReviews />
        <BookCallBanner />
        <ServicesAccordion />
        <div ref={contactRef} className="my-12" />
        <ContactSection />
      </div>
    </Suspense>
  )
}

export default Content