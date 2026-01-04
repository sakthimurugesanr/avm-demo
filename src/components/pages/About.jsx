import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ContactSection from "../ContactSection";
import {
  FaMedal,
  FaCogs,
  FaUsers,
  FaShippingFast,
  FaCheckDouble,
  FaRupeeSign,
  FaHandshake,
  FaBalanceScale
} from "react-icons/fa";
import image1 from '../../assets/infrastructure/infa1.webp'
import image2 from '../../assets/infrastructure/infa2.webp'
import image3 from '../../assets/infrastructure/infa3.webp'
import image4 from '../../assets/infrastructure/infa4.webp'
import image5 from '../../assets/infrastructure/infa5.webp'


// Local image
import aboutImage from "../../assets/VeilankanniChurchExtn.jpg";

// Remote images for Swiper
const infrastructureImages = [
  
  image2,
  image4,
  image1,
  image5,
  image3,
];

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


// GST Number
const gstNumber = "33CXYPP6160P1ZE";

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center">
        <img
          src="https://picsum.photos/1600/600?industry"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            About <span className="text-orange-400">AVM Metals</span>
          </h1>
          <p className="text-sm md:text-base">
            <Link to="/" className="hover:underline text-orange-400">Home</Link> / About
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 space-y-12">

          {/* Overview */}
          <div className=" mx-auto space-y-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <FaIndustry className="inline text-orange-600 mr-2" />
              AVM Metals
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              AVM Metals, located on Aathuppalayam Road, Tirupur, is a leading manufacturer and supplier of Brass Puja Items, God Idols, Temple Bells, Stainless Steel Puja Items, Temple Articles, House Warming Items, and Bronze Temple Bells. Established in 2010, AVM Metals has grown to become a trusted name serving clients across Tirupur and India.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our business philosophy emphasizes customer satisfaction, premium quality products, timely service, and precision craftsmanship. We employ skilled professionals dedicated to delivering exceptional metalwork solutions.
            </p>
          </div>

          {/* IMAGE + DETAILS */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-xl ">
            <img
              src={aboutImage}
              alt="AVM Metals"
              className="w-full h-96 object-cover rounded-xl -md"
            />
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
                Our Expertise
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We specialize in manufacturing high-quality flagpoles for churches, temples, and mosques. Additionally, we provide comprehensive metalwork services for religious institutions, including fabrication of temple structures, kalasams, Muslim kalasams, hundis, bells, church crosses, statues, and custom metal fittings.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every product is crafted using premium materials and advanced finishing techniques to ensure durability, long-lasting shine, corrosion resistance, and aesthetic excellence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Working hours: Monday - Sunday: 08:00 am - 08:00 pm. Contact us anytime for queries or orders.
              </p>
            </div>
          </div>

          {/* MISSION & VISION */}
          <div className="space-y-8">
            <div className=" p-8 rounded-xl ">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                <FaBullseye className="inline mr-2" /> Our Mission
              </h3>
              <p className="text-gray-700">
Deliver world-class metalworks and electroplating solutions for religious institutions with unmatched precision, durability, and aesthetic excellence. We are committed to preserving traditional craftsmanship while integrating modern techniques to ensure superior quality. By consistently meeting client expectations through reliable service, ethical practices, and timely delivery, we aim to build long-term relationships founded on trust, devotion, and excellence.              </p>
            </div>
            <div className=" p-8 rounded-xl ">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                <FaEye className="inline mr-2" /> Our Vision
              </h3>
              <p className="text-gray-700">
To be India’s leading manufacturer of Brass Bells, Flag Poles, Kudam, and specialized metalworks by combining traditional craftsmanship with innovative technology. We aspire to set industry benchmarks through superior quality, sustainable manufacturing practices, and continuous improvement. By expanding our presence nationwide, we aim to serve religious institutions and clients across India with reliable, durable, and aesthetically refined products, while upholding ethical values and long-term trust              </p>
            </div>
          </div>


          {/* OUR STRENGTHS */}
          <div className="bg-white px-4 sm:px-8 py-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-3">
              Our Strengths
            </h3>

            <p className="text-gray-600 text-sm sm:text-base text-center max-w-2xl mx-auto mb-8">
              Our strengths define our commitment to quality, precision, and reliability
              in every manufacturing process we deliver.
            </p>

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
          min-h-[130px]
          border border-gray-300
          rounded-md
          px-3 py-3
          flex flex-col
          items-center justify-center
          text-center
          bg-white
        "
                  >
                    {/* Icon */}
                    <div className="text-orange-600 text-xl mb-1">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-[120px] sm:text-xs font-medium text-gray-700 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


          </div>



          {/* INFRASTRUCTURE SLIDER */}
          <div className="py-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Infrastructure</h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {infrastructureImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Infrastructure ${index + 1}`}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-xl -md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default AboutUs;
