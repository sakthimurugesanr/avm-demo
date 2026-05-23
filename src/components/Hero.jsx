// import React, { useEffect } from "react";
// import church from "../assets/banner/bg-banner.png";
// import church2 from "../assets/banner/bg-2.png";
// import { toast } from "sonner";

// const HeroSlider = () => {
//   useEffect(() => {
//     const hasVisited = localStorage.getItem("avm_welcome_shown");

//     if (!hasVisited) {
//       toast.success("Welcome to AVM Metal 👋", {
//         description: "We’re glad to have you here.",
//         duration: 4000,
//       });

//       localStorage.setItem("avm_welcome_shown", "true");
//     }
//   }, []);

//   return (
//     <div
//       id="heroSlider"
//       className="carousel slide w-full"
//       data-bs-ride="carousel"
//       data-bs-interval="3000"
//       data-bs-pause="false"
//     >
//       {/* Indicators */}
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#heroSlider"
//           data-bs-slide-to="0"
//           className="active"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#heroSlider"
//           data-bs-slide-to="1"
//         ></button>
//       </div>

//       {/* Slides */}
//       <div className="carousel-inner">

//         <div className="carousel-item active">
//           <div className="w-full ">
//             <img
//               src={church}
//               alt="Banner 1"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="w-full ">
//             <img
//               src={church2}
//               alt="Banner 2"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>

//       </div>

//       {/* Controls */}
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#heroSlider"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon"></span>
//       </button>

//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#heroSlider"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon"></span>
//       </button>
//     </div>
//   );
// };

// export default HeroSlider;

import React, { useEffect } from "react";
import church from "../assets/banner/bg-banner.png";
import church2 from "../assets/banner/bg-2.png";
import { toast } from "sonner";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem("avm_welcome_shown");

    if (!hasVisited) {
      toast.success("Welcome to AVM Metal 👋", {
        description: "We’re glad to have you here.",
        duration: 4000,
      });

      localStorage.setItem("avm_welcome_shown", "true");
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full">
            <img
              src={church}
              alt="AVM Banner 1"
              className="
                w-full
                h-[200px]
                sm:h-[320px]
                md:h-[450px]
                lg:h-[890px]
                object-cover
              "
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full">
            <img
              src={church2}
              alt="AVM Banner 2"
              className="
                w-full
                h-[200px]
                sm:h-[320px]
                md:h-[450px]
                lg:h-[890px]
                object-cover
              "
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HeroSlider;