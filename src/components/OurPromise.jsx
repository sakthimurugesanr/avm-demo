import React, { useEffect } from "react";
import AOS from "aos";

import {
  FaCheckCircle,
  FaClock,
  FaRupeeSign,
  FaUsers,
  FaIndustry,
  FaLightbulb,
} from "react-icons/fa";

const promises = [
  {
    title: "Quality",
    desc: "We maintain uncompromising quality standards across every service we deliver.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Delivery Time",
    desc: "Timely execution and reliable delivery without compromising quality.",
    icon: <FaClock />,
  },
  {
    title: "Pricing",
    desc: "Fair, transparent, and competitive pricing tailored to your needs.",
    icon: <FaRupeeSign />,
  },
  {
    title: "Customer Centric",
    desc: "Every solution is designed with customer satisfaction as the priority.",
    icon: <FaUsers />,
  },
  {
    title: "Manufacturing Excellence",
    desc: "Precision-driven manufacturing with consistent and reliable output.",
    icon: <FaIndustry />,
  },
  {
    title: "Innovative",
    desc: "Continuous innovation to meet evolving industry standards.",
    icon: <FaLightbulb />,
  },
];

const OurPromise = () => {
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section className=" py-7 md:py-15">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs md:text-4xl font-bold text-blue-900 mb-4">
            Our Promise
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
            We deliver dependable solutions for all your business needs,
            maintaining the highest standards and honoring every commitment
            made to our customers.
          </p>
        </div>

        {/* Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {promises.map((item, index) => (
    <div
      key={index}
      data-aos="fade-right"
      className="
        relative overflow-hidden
        bg-blue-50
        rounded-xl
        p-2
        shadow-sm
        border border-blue-100
        hover:shadow-md
        transition
      "
    >
      {/* ── Corner dot decoration ── */}
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
      </div>

      {/* ── Bottom-right large bubble ── */}
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-blue-100 opacity-60" />

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-11 flex items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-xl">
          {item.icon}
        </div>

        <h3 className="text-sm md:text-lg font-semibold text-blue-900">
          {item.title}
        </h3>
      </div>

      <p className="text-sm md:text-lg text-gray-600 leading-relaxed relative z-10">
        {item.desc}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default OurPromise;
