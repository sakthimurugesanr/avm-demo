import React from "react";
import mechine from '../assets/mechine.avif'

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        <div className="flex justify-center md:order-1 order-2">
          <img
            src={mechine}
            alt="About Electro Plating"
            className="rounded-2xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full max-w-md md:w-4/5 object-cover shadow-lg transition-transform hover:scale-105"
          />
        </div>

        <div className="md:order-2 order-1">
          <h2 className="text-md md:text-3xl font-bold mb-5 text-gray-900">
            About <span className="text-orange-600">AVM Electro Plating</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
            AVM Electro Plating is one of the leading electroplating service
            providers in Tiruppur. With years of strong experience, we offer
            premium plating services such as Nickel, Copper, Silver, Brass,
            Gold, and Lacquer coating.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            We use high-power machinery, advanced coating processes, and skilled
            workmanship to ensure every product gets a durable, long-lasting,
            and attractive finish. Our mission is to deliver quality, perfection,
            and customer satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
