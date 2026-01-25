import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cross from '../assets/cross/cross.webp';
import dwajasthambam1 from '../assets/dwajasthambam/dwajasthambam1.webp';
import dwajasthambam2 from '../assets/dwajasthambam/dwajasthambam2.webp';
import flagpole from '../assets/flagpole/flagpole2.webp';
import flagpole2 from '../assets/flagpole/flagpole3.webp';
import flagpole3 from '../assets/flagpole/flagpole4.webp';
import flagpole4 from '../assets/flagpole/flag1.webp';
import kalasam from '../assets/kalasam/kalasam.webp';
import kalasam2 from '../assets/kalasam/kalasam2.webp';
import kalasam3 from '../assets/kalasam/kalasam3.webp';
import kalasam4 from '../assets/kalasam/kalasam4.webp';
import flaglight from '../assets/thiruvatchi/flaglight.webp';
import thiruvatchi from '../assets/thiruvatchi/thiruvatchi1.webp';

const WhatWeOffer = () => {
  const images = [
    cross, dwajasthambam1, dwajasthambam2,
    flagpole, flagpole2, flagpole3, flagpole4,
    kalasam, kalasam2, kalasam3, kalasam4,
    flaglight, thiruvatchi
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 400); // fade duration
    }, 4000); // change image every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      
      className="bg-blue-50 py-10 sm:py-12 md:py-16 text-black"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center rounded-2xl">

        {/* TEXT */}
        <div className="md:text-left max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            AVM <span className="text-orange-600">Religious Works</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 text-gray-700">
            We specialize in the manufacturing of high-quality flagpoles for
            <span className="font-semibold text-gray-900"> churches, temples, and mosques</span>.
            In addition, we provide comprehensive metalwork services for religious institutions, ensuring precision, durability, and aesthetic excellence in every project.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Our expertise includes the fabrication of
            <span className="font-semibold text-orange-600">
              {" "}temple structures, kalasams, Muslim kalasams, hundis, bells,
              church crosses, statues, and custom religious metal fittings
            </span>, crafted with premium materials and advanced finishing techniques for long-lasting shine and corrosion resistance.
          </p>
        </div>

        {/* FADE IMAGE */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src={images[index]}
            alt="Electro Plating"
            className={`rounded-xl w-full max-w-md h-[300px] sm:h-[350px] md:h-[400px] object-cover shadow-md transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
