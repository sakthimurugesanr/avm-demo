import React, { useEffect } from "react";
import cross from '../assets/cross.webp'
import AOS from "aos";
import "aos/dist/aos.css";



const OfferForElectro = () => {
  
useEffect(() => {
  AOS.init({ duration: 1200 });
}, []);
  return (


    <section data-aos="fade-left" className="bg-blue-100 lg:rounded-r-full py-16 my-[100px] text-black">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
      

        {/* Image (You can replace with real machine image) */}
        <div className="flex justify-center " >
          <img
            src={cross} // replace with actual image
            alt="Electro Plating Machine"
            className="rounded-xl  w-full md:w-4/5 object-cover"
          />
        </div>

          <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AVM Religious Works</h2>

          <p className="text-lg leading-relaxed mb-4">
            Our Electro Plating is one of the top listed services. We use
            high-power machinery and high-quality chemical coating methods.
            Our coating process doubles the lifetime and strength of the products
            compared to normal plating systems.
          </p>

          <p className="text-lg leading-relaxed">
            We provide premium finishing with long-lasting shine, corrosion
            protection, and accurate craftsmanship. Our expert team ensures that
            every product meets top industry standards.
          </p>
        </div>

      </div>
    </section>

  );
};

export default OfferForElectro;
