import React from "react";
import bg from "../assets/VeilankanniChurchExtn.jpg";

const row1 = [
  "Electro Plating",
  "Nickel Plating",
  "Copper Plating",
  "Silver Plating",
  "Brass Plating",
  "Gold Plating",
  "Lacquer Coating",
  "Flag Poles",
  "Electro Plating",
  "Nickel Plating",
  "Copper Plating",
  "Silver Plating",
  "Brass Plating",
  "Gold Plating",
  "Lacquer Coating",
  "Flag Poles",
];

const row2 = [
  "Gopuram Kalasam",
  "Flagpole",
  "Brass Church Cross",
  "Brass Diya",
  "Brass Hand Bell",
  "Temple Dwajashthambam",
  "Steel Donation Box",
   "Brass Church Cross",
  "Golden Brass Flag Light",
  "Brass Thiruvatchi",
  "Gopuram Kalasam",
  "Flagpole",
  "Brass Church Cross",
  "Brass Diya",
  "Brass Hand Bell",
  "Temple Dwajashthambam",
  "Steel Donation Box",
   "Brass Church Cross",
  "Golden Brass Flag Light",
  "Brass Thiruvatchi",
];

const OurServices = () => {
  return (
    <section className="py-5 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our <span className="text-blue-600">Services</span>
      </h2>

      {/* Background wrapper */}
      <div
        className="w-full py-30 bg-cover bg-center overflow-hidden select-none  parallax-bg"
        style={{ backgroundImage: `url(${bg})` }}
      >

        {/* Row 1 (Left → Right) */}
        <div className="scroll-wrapper group">
          <div className="scroll-row animate-left group-hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((item, index) => (
              <span key={index} className="service-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 (Right → Left) */}
        <div className="scroll-wrapper group mt-8">
          <div className="scroll-row animate-right group-hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((item, index) => (
              <span key={index} className="service-item">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default OurServices;
