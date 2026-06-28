
import React, { useState, useEffect, useCallback } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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

const Lightbox = ({ index, onClose, onPrev, onNext }) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const toggleZoom = () => setZoomed((z) => !z);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center w-full h-full px-4 sm:px-12"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-xl transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="absolute top-4 left-4 z-50 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {index + 1} / {images.length}
        </div>

        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-50 bg-black/50 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition shadow-lg"
          aria-label="Previous"
        >
          ‹
        </button>

        <div
          className={`
    transition-transform duration-300
    ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}
  `}
          onClick={toggleZoom}
        >
          <img
            src={images[index]}
            alt={`Work ${index + 1}`}
            draggable={false}
            className="
      select-none
      rounded-xl
      shadow-2xl
      object-contain
      w-[90vw]  sm:w-[75vw]  md:w-[65vw]  lg:w-[55vw]
      h-[50vw]  sm:h-[42vw]  md:h-[38vw]  lg:h-[32vw]
      max-w-[860px]
      max-h-[540px]
      min-w-[260px]
      min-h-[180px]
    "
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-50 bg-black/50 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition shadow-lg"
          aria-label="Next"
        >
          ›
        </button>

        {/* ── Zoom hint (shown only when not zoomed) ── */}
        {!zoomed && (
          <p className="absolute bottom-4 text-white/40 text-xs select-none">
            Click image to zoom · Arrows or ← → keys to navigate · Esc to close
          </p>
        )}
      </div>
    </div>
  );
};

// ─── Main Slider Component ────────────────────────────────────────
const InfrastructureSlider = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length), []);

  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % images.length), []);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
          Our <span className="text-orange-600">Works</span>
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
              <div
                className="overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Zoom-in overlay hint */}
                <div className="relative">
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
                  {/* hover overlay with magnifier icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                      🔍
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox — rendered at root level via portal-style conditional */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
};

export default InfrastructureSlider;