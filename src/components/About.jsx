import React from "react";
import mechine from '../assets/mechine.avif'

const AboutUs = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center md:order-1 order-2">
          <img
            src={mechine}
            alt="About Electro Plating"
            className="rounded-xl h-[400px] max-w-md shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:order-2 order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About <span className="text-orange-600">AVM Electro Plating</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            AVM Electro Plating is one of the leading electroplating service
            providers in Tiruppur. With years of strong experience, we offer
            premium plating services such as Nickel, Copper, Silver, Brass,
            Gold, and Lacquer coating.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
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
