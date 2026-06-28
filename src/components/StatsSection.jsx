import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  // useInView hook
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="w-full  py-6 sm:py-10" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 px-4 text-center">

        {/* Clients */}
        <div className=" rounded-xl p-3 sm:p-6  transition ">
          <FaUsers className="mx-auto text-blue-600 text-lg sm:text-3xl mb-1 sm:mb-3" />

          <h2 className="font-bold text-base sm:text-3xl lg:text-4xl text-gray-900">
            {inView ? <CountUp end={1000} suffix="+" duration={3} /> : 0}
          </h2>

          <p className="text-[11px] sm:text-sm lg:text-base text-gray-500 mt-1">
            Clients
          </p>
        </div>

        {/* Services */}
        <div className="bg-white rounded-xl p-3 sm:p-6  transition ">
          <FaCogs className="mx-auto text-green-600 text-lg sm:text-3xl mb-1 sm:mb-3" />

          <h2 className="font-bold text-base sm:text-3xl lg:text-4xl text-gray-900">
            {inView ? <CountUp end={10} suffix="+" duration={3} /> : 0}
          </h2>

          <p className="text-[11px] sm:text-sm lg:text-base text-gray-500 mt-1">
            Services
          </p>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl p-3 sm:p-6  transition ">
          <FaProjectDiagram className="mx-auto text-orange-500 text-lg sm:text-3xl mb-1 sm:mb-3" />

          <h2 className="font-bold text-base sm:text-3xl lg:text-4xl text-gray-900">
            {inView ? <CountUp end={1500} suffix="+" duration={3} /> : 0}
          </h2>

          <p className="text-[11px] sm:text-sm lg:text-base text-gray-500 mt-1">
            Projects
          </p>
        </div>

      </div>
    </section>
  );
}
