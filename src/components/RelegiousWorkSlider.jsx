import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// Images
import cross from "../assets/cross/copperkudam.webp";
import dwajasthambam1 from "../assets/dwajasthambam/dwajasthambam1.webp";
import dwajasthambam2 from "../assets/dwajasthambam/dwajasthambam2.webp";
import flagpole from "../assets/flagpole/flagpole2.webp";
import flagpole2 from "../assets/flagpole/flagpole3.webp";
import flagpole3 from "../assets/flagpole/flagpole4.webp";
import flagpole4 from "../assets/flagpole/flag1.webp";
import kalasam from "../assets/kalasam/kalasam.webp";
import kalasam2 from "../assets/kalasam/kalasam2.webp";
import kalasam3 from "../assets/kalasam/kalasam3.webp";
import kalasam4 from "../assets/kalasam/kalasam4.webp";
import flaglight from "../assets/thiruvatchi/flaglight.webp";
import thiruvatchi from "../assets/thiruvatchi/thiruvatchi1.webp";
import donationbox from "../assets/donationbox/box1.webp";

const images = [
  cross,
  dwajasthambam1,
  dwajasthambam2,
  flagpole,
  flagpole2,
  flagpole3,
  flagpole4,
  kalasam,
  kalasam2,
  kalasam3,
  kalasam4,
  flaglight,
  thiruvatchi,
  donationbox,
];

const InfrastructureSlider = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xlfont-bold text-center mb-5">
          Our Works
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor
          spaceBetween={24}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl  group">
                <img
                  src={img}
                  alt={`Infrastructure ${index + 1}`}
                  loading="lazy"
                  width="500"
                  height="350"
                  className="
                    w-full
                    h-64 sm:h-72 lg:h-80
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    will-change-transform
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default InfrastructureSlider;
