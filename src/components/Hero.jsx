import React from "react";
import church from '../assets/avm_church-2.jpg'
import church2 from '../assets/avm_church.jpg'

const HeroSlider = () => {
  return (
    <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={church} className="d-block w-100 h-[50vh] md:h-[65vh] object-cover" />
        </div>
        <div className="carousel-item">
          <img src={church2} className="d-block w-100 h-[50vh] md:h-[65vh] object-cover" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/id/1032/1600/900" className="d-block w-100 h-[50vh] md:h-[65vh] object-cover" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/id/1043/1600/900" className="d-block w-100 h-[50vh] md:h-[65vh] object-cover" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default HeroSlider;
