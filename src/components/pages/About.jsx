// import React from "react";
// import { Link, useOutletContext } from "react-router-dom";
// import { FaIndustry, FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import aboutimage from '../../assets/about.jpg'
// import "swiper/css";
// import "swiper/css/pagination";
// import ContactSection from "../ContactSection";
// import {
//   FaMedal,
//   FaCogs,
//   FaUsers,
//   FaShippingFast,
//   FaCheckDouble,
//   FaRupeeSign,
//   FaHandshake,
//   FaBalanceScale
// } from "react-icons/fa";
// import image1 from '../../assets/infrastructure/infa1.webp'
// import image2 from '../../assets/infrastructure/infa2.webp'
// import image3 from '../../assets/infrastructure/infa3.webp'
// import image4 from '../../assets/infrastructure/infa4.webp'
// import image5 from '../../assets/infrastructure/infa5.webp'


// // Local image
// import aboutImage from "../../assets/VeilankanniChurchExtn.jpg";
// import ReadMoreText from "./Readmore";

// // Remote images for Swiper
// const infrastructureImages = [

//   image2,
//   image4,
//   image1,
//   image5,
//   image3,
// ];

// const strengths = [
//   { title: "Premium Quality Materials", icon: <FaMedal /> },
//   { title: "Advanced Manufacturing", icon: <FaCogs /> },
//   { title: "Skilled Workforce", icon: <FaUsers /> },
//   { title: "On-Time Delivery", icon: <FaShippingFast /> },
//   { title: "Strict Quality Control", icon: <FaCheckDouble /> },
//   { title: "Cost-Effective Solutions", icon: <FaRupeeSign /> },
//   { title: "Customer-Centric Approach", icon: <FaHandshake /> },
//   { title: "Ethical Business Practices", icon: <FaBalanceScale /> },
// ];


// // GST Number
// const gstNumber = "33CXYPP6160P1ZE";

// const AboutUs = () => {

//   const { contactRef } = useOutletContext()

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center">
//         <img
//           src={aboutimage}
//           alt="About Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative text-center text-white px-4">
//           <h1 className="text-3xl md:text-5xl font-bold mb-3">
//             About <span className="text-orange-400">AVM Metals</span>
//           </h1>
//           <p className="text-sm md:text-base">
//             <Link to="/" className="hover:underline text-orange-400">Home</Link> / About
//           </p>
//         </div>
//       </section>

//       {/* COMPANY OVERVIEW */}
//       <section className="bg-blue-50 py-16">
//         <div className="container mx-auto px-4 space-y-12">

//           {/* Overview */}
//           <div className=" mx-auto space-y-4 ">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               <FaIndustry className="inline text-orange-600 mr-2" />
//               AVM Metals
//             </h2>
//             {/* <p className="text-gray-700 text-md md:text-lg  leading-relaxed">
//               AVM Metals, located on Aathuppalayam Road, Tirupur, is a leading manufacturer and supplier of Brass Puja Items, God Idols, Temple Bells, Stainless Steel Puja Items, Temple Articles, House Warming Items, and Bronze Temple Bells. Established in 2010, AVM Metals has grown to become a trusted name serving clients across Tirupur and India.
//             </p> */}

//             <ReadMoreText
//               text="AVM Metals, located on Aathuppalayam Road, Tirupur, is a leading manufacturer and supplier of Brass Puja Items, God Idols, Temple Bells, Stainless Steel Puja Items, Temple Articles, House Warming Items, and Bronze Temple Bells. Established in 2010, AVM Metals has grown to become a trusted name serving clients across Tirupur and India. We continuously innovate our designs and maintain high-quality standards to meet the demands of our customers. Our products are used in homes, temples, and corporate gifting. Over the years, we have expanded our range to include customized items and now ship across India and internationally. Customer satisfaction and timely delivery are our top priorities, making AVM Metals a preferred choice for quality temple and puja articles."
//               maxLength={550}
//             />
//             <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//               Our business philosophy emphasizes customer satisfaction, premium quality products, timely service, and precision craftsmanship. We employ skilled professionals dedicated to delivering exceptional metalwork solutions.
//             </p>
//           </div>

//           {/* IMAGE + DETAILS */}
//           <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-1 rounded-xl ">
//             <img
//               src={aboutImage}
//               alt="AVM Metals"
//               className="w-full h-96 object-cover rounded-xl "
//             />
//             <div className="space-y-4">
//               <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
//                 Our Expertise
//               </h3>
//               <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//                 We specialize in manufacturing high-quality flagpoles for churches, temples, and mosques. Additionally, we provide comprehensive metalwork services for religious institutions, including fabrication of temple structures, kalasams, Muslim kalasams, hundis, bells, church crosses, statues, and custom metal fittings.
//               </p>
//               <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//                 Every product is crafted using premium materials and advanced finishing techniques to ensure durability, long-lasting shine, corrosion resistance, and aesthetic excellence.
//               </p>
//               <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//                 Working hours: <span className="text-orange-600">Monday - Sunday: 08:00 am - 08:00 pm.</span> Contact us anytime for queries or orders.
//               </p>
//             </div>
//           </div>

//           {/* MISSION & VISION */}
//           <div className="space-y-8">
//             <div className=" p-8 rounded-xl ">
//               <h3 className="text-2xl font-bold text-orange-600 mb-4">
//                 <FaBullseye className="inline mr-2 text-orange-500" /> Our Mission
//               </h3>
//               <p className="text-gray-700 text-md md:text-lg">
//                 Deliver world-class metalworks and electroplating solutions for religious institutions with unmatched precision, durability, and aesthetic excellence. We are committed to preserving traditional craftsmanship while integrating modern techniques to ensure superior quality. By consistently meeting client expectations through reliable service, ethical practices, and timely delivery, we aim to build long-term relationships founded on trust, devotion, and excellence.              </p>
//             </div>
//             <div className=" p-8 rounded-xl ">
//               <h3 className="text-2xl font-bold text-orange-600 mb-4">
//                 <FaEye className="inline mr-2 text-orange-500" /> Our Vision
//               </h3>
//               <p className="text-gray-700 text-md md:text-lg">
//                 To be India’s leading manufacturer of Brass Bells, Flag Poles, Kudam, and specialized metalworks by combining traditional craftsmanship with innovative technology. We aspire to set industry benchmarks through superior quality, sustainable manufacturing practices, and continuous improvement. By expanding our presence nationwide, we aim to serve religious institutions and clients across India with reliable, durable, and aesthetically refined products, while upholding ethical values and long-term trust              </p>
//             </div>
//           </div>


//           {/* OUR STRENGTHS */}
//           <div className="bg-white px-4 sm:px-8 py-10">
//             <h3 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-3">
//               Our Strengths
//             </h3>

//             <p className="text-gray-600 text-md md:text-lg text-center max-w-2xl mx-auto mb-8">
//               Our strengths define our commitment to quality, precision, and reliability
//               in every manufacturing process we deliver.
//             </p>

//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               spaceBetween={14}
//               loop={true}
//               breakpoints={{
//                 0: { slidesPerView: 2 },
//                 640: { slidesPerView: 3 },
//                 1024: { slidesPerView: 4 },
//               }}
//             >
//               {strengths.map((item, index) => (
//                 <SwiperSlide key={index} className="flex justify-center">
//                   <div
//                     className="
//           w-full max-w-[270px]
//           min-h-[100px]
//           border border-gray-300
//           rounded-md
//           px-3 py-3
//           flex flex-col
//           items-center justify-center
//           text-center
//           text-sm
//           bg-white
//         "
//                   >
//                     {/* Icon */}
//                     <div className="text-orange-600 text-sm md:text-xl mb-1">
//                       {item.icon}
//                     </div>

//                     {/* Title */}
//                     <h4
//                       className="
//     text-[10px]        /* extra small mobile */
//     sm:text-[11px]     /* large mobile */
//     md:text-xs         /* tablet */
//     lg:text-sm         
//     font-medium
//     text-gray-700
//     leading-tight
//   "
//                     >
//                       {item.title}
//                     </h4>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>


//           </div>



//           {/* INFRASTRUCTURE SLIDER */}
//           <div className="py-16">
//             <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Infrastructure</h3>
//             <Swiper
//               modules={[Pagination, Autoplay]}
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               spaceBetween={20}
//               loop={true}
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {infrastructureImages.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <img
//                     src={img}
//                     alt={`Infrastructure ${index + 1}`}
//                     loading="lazy"
//                     className="w-full h-64 object-cover rounded-xl -md"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>
//       </section>
//       <div ref={contactRef}>

//         <ContactSection />
//       </div>
//     </>
//   );
// };

// export default AboutUs;



import React, { useState, useEffect, useCallback } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FaIndustry, FaBullseye, FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import aboutimage from "../../assets/about.jpg";
import "swiper/css";
import "swiper/css/pagination";
import ContactSection from "../ContactSection";
import {
  FaMedal, FaCogs, FaUsers, FaShippingFast,
  FaCheckDouble, FaRupeeSign, FaHandshake, FaBalanceScale,
} from "react-icons/fa";
import image1 from "../../assets/infrastructure/infa1.webp";
import image2 from "../../assets/infrastructure/infa2.webp";
import image3 from "../../assets/infrastructure/infa3.webp";
import image4 from "../../assets/infrastructure/infa4.webp";
import image5 from "../../assets/infrastructure/infa5.webp";
import aboutImage from "../../assets/VeilankanniChurchExtn.jpg";
import ReadMoreText from "./Readmore";

const infrastructureImages = [image2, image4, image1, image5, image3];

const strengths = [
  { title: "Premium Quality Materials", icon: <FaMedal /> },
  { title: "Advanced Manufacturing", icon: <FaCogs /> },
  { title: "Skilled Workforce", icon: <FaUsers /> },
  { title: "On-Time Delivery", icon: <FaShippingFast /> },
  { title: "Strict Quality Control", icon: <FaCheckDouble /> },
  { title: "Cost-Effective Solutions", icon: <FaRupeeSign /> },
  { title: "Customer-Centric Approach", icon: <FaHandshake /> },
  { title: "Ethical Business Practices", icon: <FaBalanceScale /> },
];

// ─── Lightbox ────────────────────────────────────────────────────
const Lightbox = ({ index, total, onClose, onPrev, onNext }) => {
  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center w-full h-full px-4 sm:px-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-lg transition"
        >
          ✕
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 bg-white/10 text-white text-xs px-3 py-1 rounded-full">
          {index + 1} / {total}
        </div>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 text-white flex items-center justify-center text-2xl transition shadow-lg"
        >
          ‹
        </button>

        {/* Image — fixed uniform size across all images */}
        <img
          src={infrastructureImages[index]}
          alt={`Infrastructure ${index + 1}`}
          className="
            rounded-xl object-contain shadow-2xl select-none
            w-[92vw]  sm:w-[78vw]  md:w-[66vw]  lg:w-[56vw]
            h-[52vw]  sm:h-[44vw]  md:h-[40vw]  lg:h-[34vw]
            max-w-[860px] max-h-[540px]
            min-w-[260px] min-h-[180px]
          "
          draggable={false}
        />

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 text-white flex items-center justify-center text-2xl transition shadow-lg"
        >
          ›
        </button>

        {/* Hint */}
        <p className="absolute bottom-4 text-white/30 text-xs select-none">
          ← → keys to navigate · Esc to close
        </p>
      </div>
    </div>
  );
};

// ─── Section Label ───────────────────────────────────────────────
const SectionTag = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
    {children}
  </span>
);

// ─── Gold divider ────────────────────────────────────────────────
const Divider = () => (
  <div className="flex items-center gap-2 my-5">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-300/60" />
    <div className="w-1.5 h-1.5 rotate-45 bg-orange-400" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-300/60" />
  </div>
);

// ─── Main Component ──────────────────────────────────────────────
const AboutUs = () => {
  const { contactRef } = useOutletContext();

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + infrastructureImages.length) % infrastructureImages.length), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i + 1) % infrastructureImages.length), []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutimage}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-orange-400" />
            <span className="text-orange-400 text-[10px] font-bold tracking-[0.3em] uppercase">Since 2010</span>
            <div className="w-8 h-px bg-orange-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
            About <span className="text-orange-400">AVM Metals</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-4">
            Crafting sacred metalworks with devotion & precision
          </p>
          <nav className="inline-flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-slate-300">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-orange-400">›</span>
            <span className="text-orange-400 font-semibold">About</span>
          </nav>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">

          {/* ── COMPANY OVERVIEW ── */}
          <div className="max-w-4xl mx-auto">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <FaIndustry className="text-orange-500 text-2xl flex-shrink-0" />
              AVM Metals
            </h2>
            <ReadMoreText
              text="AVM Metals, located on Aathuppalayam Road, Tirupur, is a leading manufacturer and supplier of Brass Puja Items, God Idols, Temple Bells, Stainless Steel Puja Items, Temple Articles, House Warming Items, and Bronze Temple Bells. Established in 2010, AVM Metals has grown to become a trusted name serving clients across Tirupur and India. We continuously innovate our designs and maintain high-quality standards to meet the demands of our customers. Our products are used in homes, temples, and corporate gifting. Over the years, we have expanded our range to include customized items and now ship across India and internationally. Customer satisfaction and timely delivery are our top priorities, making AVM Metals a preferred choice for quality temple and puja articles."
              maxLength={550}
            />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              Our business philosophy emphasizes customer satisfaction, premium quality products, timely service, and precision craftsmanship. We employ skilled professionals dedicated to delivering exceptional metalwork solutions.
            </p>
          </div>

          {/* <Divider /> */}

          {/* ── EXPERTISE (image + text) ── */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={aboutImage}
                alt="AVM Metals Expertise"
                className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* floating badge */}
              {/* <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">Est. 2010</p>
                <p className="text-sm font-bold text-slate-800">Tirupur, Tamil Nadu</p>
              </div> */}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <SectionTag>Our Expertise</SectionTag>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500">
                Crafted With Devotion
              </h3>
              <div className="w-12 h-0.5 bg-orange-400 rounded" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We specialize in manufacturing high-quality flagpoles for churches, temples, and mosques. Additionally, we provide comprehensive metalwork services including fabrication of temple structures, kalasams, Muslim kalasams, hundis, bells, church crosses, statues, and custom metal fittings.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every product is crafted using premium materials and advanced finishing techniques to ensure durability, long-lasting shine, corrosion resistance, and aesthetic excellence.
              </p>
              {/* working hours chip */}
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
                <span className="text-orange-500 text-base">🕗</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Working Hours</p>
                  <p className="text-sm font-semibold text-slate-700">Mon – Sun · 08:00 am – 08:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* <Divider /> */}

          {/* ── MISSION & VISION ── */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: <FaBullseye className="text-orange-500 text-xl" />,
                label: "Our Mission",
                text: "Deliver world-class metalworks and electroplating solutions for religious institutions with unmatched precision, durability, and aesthetic excellence. We are committed to preserving traditional craftsmanship while integrating modern techniques. By consistently meeting client expectations through reliable service, ethical practices, and timely delivery, we build long-term relationships founded on trust, devotion, and excellence.",
              },
              {
                icon: <FaEye className="text-orange-500 text-xl" />,
                label: "Our Vision",
                text: "To be India's leading manufacturer of Brass Bells, Flag Poles, Kudam, and specialized metalworks by combining traditional craftsmanship with innovative technology. We aspire to set industry benchmarks through superior quality and sustainable manufacturing practices. By expanding our presence nationwide, we aim to serve religious institutions across India with reliable, durable, and aesthetically refined products.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-orange-100 overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                {/* corner bubble */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full opacity-60" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-orange-600">{item.label}</h3>
                  </div>
                  <div className="w-8 h-0.5 bg-orange-300 rounded mb-4 group-hover:w-16 transition-all duration-500" />
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <Divider /> */}

          {/* ── OUR STRENGTHS ── */}
          <div>
            <div className="text-center mb-8">
              <SectionTag>What Sets Us Apart</SectionTag>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Our <span className="text-orange-500">Strengths</span>
              </h3>
              <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
                Our strengths define our commitment to quality, precision, and reliability in every manufacturing process.
              </p>
            </div>

            {/* <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={12}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {strengths.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-white border border-orange-100 rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:shadow-md hover:border-orange-300 transition-all duration-300">
                    <div className="text-orange-500 text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-700 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}

                 <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={14}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {strengths.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div
                    className="
          w-full max-w-[270px]
          min-h-[100px]
          border border-gray-300
          rounded-md
          px-3 py-3
          flex flex-col
          items-center justify-center
          text-center
          text-sm
          bg-white
        "
                  >
                    {/* Icon */}
                    <div className="text-orange-600 text-sm md:text-xl mb-1">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h4
                      className="
    text-[10px]        /* extra small mobile */
    sm:text-[11px]     /* large mobile */
    md:text-xs         /* tablet */
    lg:text-sm         
    font-medium
    text-gray-700
    leading-tight
  "
                    >
                      {item.title}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <Divider /> */}

          {/* ── INFRASTRUCTURE SLIDER + LIGHTBOX ── */}
          <div>
            <div className="text-center mb-8">
              <SectionTag>Facility</SectionTag>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Our <span className="text-orange-500">Infrastructure</span>
              </h3>
              <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
                Click any image to view full screen with navigation
              </p>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={16}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {infrastructureImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                    onClick={() => openLightbox(index)}
                  >
                    {/* uniform fixed size for all slider images */}
                    <img
                      src={img}
                      alt={`Infrastructure ${index + 1}`}
                      loading="lazy"
                      className="
                        w-full object-cover
                        h-[200px] sm:h-[220px] md:h-[240px]
                        transition-transform duration-500 group-hover:scale-105
                      "
                    />
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                        🔍
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          total={infrastructureImages.length}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
};

export default AboutUs;