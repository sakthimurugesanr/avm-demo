import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import silverplat from "../assets/electro/silverplating.jpg";
import brassplating from "../assets/electro/brassplating.webp";
import copperplating from "../assets/electro/copperplating.jpg";
import goldplating from "../assets/electro/goldplating.webp";
import lacqercoating from "../assets/electro/lacker.webp";
import nickel from "../assets/electro/nickel.jpg";


const products = [
  { name: "Nickel Plating", img: nickel },
  { name: "Copper Plating", img: copperplating },
  { name: "Silver Plating", img: silverplat },
  { name: "Brass Plating", img: brassplating },
  { name: "Gold Plating", img: goldplating },
  { name: "Lacquer Coating", img: lacqercoating },
];

const OurProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-10 bg-gray-50 mb-3">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center  text-gray-900">
            Electroplating<span className="text-blue-700 ml-2 my-3 ">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className="
                bg-white
                rounded-xl
                overflow-hidden
                border
                border-gray-200
                hover:shadow-lg
                transition
              "
            >
              {/* Image Wrapper (fixed size) */}
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                   data-aos="fade-right"
                  loading="lazy"
                  className="

                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    will-change-transform
                  "
                />
              </div>

              {/* Title */}
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProducts;
