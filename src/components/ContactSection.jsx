import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import indiamart from '../assets/indmart.png';

const ContactSection = () => {
  return (
    <section className="my-2.5 py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact <span className="text-orange-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

              <p className="text-gray-700 mb-4">
                For all plating services, orders, and enquiries, feel free to connect with us.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-2 text-lg font-medium">
                  <FaPhoneAlt className="text-orange-600" /> Pavithran: 
                  <a href="tel:9944066321" className="underline ml-1">99440 66321</a>
                </p>
                <p className="flex items-center gap-2 text-lg font-medium">
                  <FaPhoneAlt className="text-orange-600" /> Muthu Kumar: 
                  <a href="tel:7826994488" className="underline ml-1">78269 94488</a>
                </p>

                <p className="flex items-start gap-2 text-lg">
                  <FaMapMarkerAlt className="text-orange-600 mt-1" /> 
                  <span className="font-semibold">Address:</span>  
                  382/2, Gayathri Nagar, 1st Street, Anupparpalayam, Tiruppur – 641 652
                </p>

                <p className="flex items-center gap-2 text-lg">
                  <FaEnvelope className="text-orange-600" /> 
                  <a href="mailto:avmelectroplating@gmail.com" className="underline">avmelectroplating@gmail.com</a>
                </p>

                {/* Social Links */}
                <div className="flex gap-4 mt-4 items-center text-2xl">
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.youtube.com/@avmflagpoles" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <FaYoutube />
                  </a>
                  <a 
                    href="https://www.facebook.com/people/Avm-flagpoles/61557399955237/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://www.indiamart.com/avm-metals-tiruppur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={indiamart} alt="IndiaMart" className="h-8" />
                  </a>
                </div>

                <p className="mt-4 text-gray-700 text-justify">
                  We specialize in the manufacturing of high-quality flagpoles for churches, temples, and mosques. Additionally, we provide comprehensive metalwork services for religious institutions, including the fabrication of temple structures, church and mosque metal fittings such as kalasams, Muslim kalasams, hundis, bells, church crosses, and statues. Our expertise ensures precision, durability, and aesthetic excellence in every project.
                </p>
              </div>
            </div>
          </div>

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
