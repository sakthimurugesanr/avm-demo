import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cross from '../assets/cross/cross1.webp'
import dwajasthambam1 from '../assets/dwajasthambam/dwajasthambam1.webp'
import dwajasthambam2 from '../assets/dwajasthambam/dwajasthambam2.webp'
import flagpole from '../assets/flagpole/flagpole2.webp'
import flagpole2 from '../assets/flagpole/flagpole3.webp'
import flagpole3 from '../assets/flagpole/flagpole4.webp'
import flagpole4 from '../assets/flagpole/flag1.webp'
import kalasam from '../assets/kalasam/kalasam.webp'
import kalasam2 from '../assets/kalasam/kalasam2.webp'
import kalasam3 from '../assets/kalasam/kalasam3.webp'
import kalasam4 from '../assets/kalasam/kalasam4.webp'
import flaglight from '../assets/thiruvatchi/flaglight.webp'
import thiruvatchi from '../assets/thiruvatchi/thiruvatchi1.webp'


const   WhatWeOffer = () => {

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
      setFade(true); // start fade-in

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(false); // reset opacity back to normal
      }, 400); // fade duration
    }, 4000); // change image every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-aos="fade-in"
      className="bg-blue-100  py-12 md:py-7 text-black"
    >
      <div className="container  mx-auto px-4 grid md:grid-cols-2 md: rounded-2xl gap-10 items-center">

        {/* TEXT */}
       <div className="md:text-left  max-w-3xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
    AVM <span className="text-orange-600">Religious Works</span>
  </h2>

  <p className="text-lg leading-relaxed mb-4 text-gray-700">
    We specialize in the manufacturing of high-quality flagpoles for
    <span className="font-semibold text-gray-900">
      {" "}churches, temples, and mosques
    </span>.
    In addition, we provide comprehensive metalwork services for religious
    institutions, ensuring precision, durability, and aesthetic excellence
    in every project.
  </p>

  <p className="text-lg leading-relaxed text-gray-700">
    Our expertise includes the fabrication of
    <span className="font-semibold text-orange-600">
      {" "}temple structures, kalasams, Muslim kalasams, hundis, bells,
      church crosses, statues, and custom religious metal fittings
    </span>,
    crafted with premium materials and advanced finishing techniques for
    long-lasting shine and corrosion resistance.
  </p>
</div>


        {/* FADE IMAGE */}
        <div className="flex justify-center">
          <img
            src={images[index]}
            alt="Electro Plating"
            className={`rounded-xl w-full h-[400px] max-w-md object-cover shadow-md 
              transition-opacity duration-500 ease-in-out
              ${fade ? "opacity-0" : "opacity-100"}`}
          />
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
