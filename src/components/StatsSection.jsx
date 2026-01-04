import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaCogs, FaProjectDiagram } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="w-full bg-blue-100">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 px-3 sm:px-4 items-center text-center">

        {/* Clients */}
        <div className="py-3 sm:p-5 rounded-2xl hover:scale-105 transition duration-300
                        md:flex md:flex-col md:justify-center md:items-center">
          <FaUsers className="mx-auto text-blue-600 text-base sm:text-3xl mb-1 sm:mb-2" />
          <h2 className="font-extrabold text-sm sm:text-3xl lg:text-4xl leading-tight">
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <CountUp end={1000} suffix="+" duration={3} />
            </span>
          </h2>
          <p className="text-[10px] sm:text-sm lg:text-base mt-1 opacity-90 font-medium">
            Clients
          </p>
        </div>

        {/* Services */}
        <div className="py-3 sm:p-5 rounded-2xl hover:scale-105 transition duration-300
                        md:flex md:flex-col md:justify-center md:items-center">
          <FaCogs className="mx-auto text-green-600 text-base sm:text-3xl mb-1 sm:mb-2" />
          <h2 className="font-extrabold text-sm sm:text-3xl lg:text-4xl leading-tight">
            <span className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              <CountUp end={10} suffix="+" duration={3} />
            </span>
          </h2>
          <p className="text-[10px] sm:text-sm lg:text-base mt-1 opacity-90 font-medium">
            Services
          </p>
        </div>

        {/* Projects */}
        <div className="py-3 sm:p-5 rounded-2xl hover:scale-105 transition duration-300
                        md:flex md:flex-col md:justify-center md:items-center">
          <FaProjectDiagram className="mx-auto text-orange-500 text-base sm:text-3xl mb-1 sm:mb-2" />
          <h2 className="font-extrabold text-sm sm:text-3xl lg:text-4xl leading-tight">
            <span className="bg-linear-to-r from-orange-400 via-red-500 to-pink-600 text-transparent bg-clip-text">
              <CountUp end={1500} suffix="+" duration={3} />
            </span>
          </h2>
          <p className="text-[10px] sm:text-sm lg:text-base mt-1 opacity-90 font-medium">
            Projects
          </p>
        </div>

      </div>
    </section>
  );
}
