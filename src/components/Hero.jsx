import React, { useEffect } from "react";
import church from "../assets/banner/bg-banner.png";
import church2 from "../assets/banner/bg-2.png";
import { toast } from "sonner";

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
    <div
      id="heroSlider"
      className="carousel slide w-full"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="1"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="w-full ">
            <img
              src={church}
              alt="Banner 1"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="carousel-item">
          <div className="w-full ">
            <img
              src={church2}
              alt="Banner 2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default HeroSlider;
