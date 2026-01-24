import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import indiamart from '../assets/indmart.png';

const ContactSection = () => {
  return (
    <section  className="my-2.5 py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact <span className="text-orange-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">


          <form className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-lg w-full"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="border p-3 rounded-lg w-full"
              ></textarea>

              <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-medium transition">
                Start Conversation
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Tiruppur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-xl shadow-md"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
