import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import indiamart from "../assets/indmart.png";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          gap-8 px-4
          text-center md:text-left
        "
      >
        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            Pavithran:
            <a href="tel:9944066321" className="underline">
              99440 66321
            </a>
          </p>

          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            Muthu Kumar:
            <a href="tel:7826994488" className="underline">
              78269 94488
            </a>
          </p>

          <p className="flex items-center gap-2 mt-3">
            <FaEnvelope />
            <a
              href="mailto:avmelectroplating@gmail.com"
              className="underline break-all"
            >
              avmelectroplating@gmail.com
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Our Location</h2>

          <p className="flex items-start gap-2 text-sm leading-relaxed">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              382/2, Gayathri Nagar, 1st Street,
              <br />
              Anupparpalayam,
              <br />
              Tiruppur – 641 652
            </span>
          </p>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Working Hours</h2>
          <p className="text-sm opacity-90">
            Monday – Sunday
            <br />
            <span className="font-medium">08:00 AM – 08:00 PM</span>
            <br />
            Contact us anytime for queries or orders.
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>

          <div className="flex items-center justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://www.instagram.com/your_instagram_handle/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/people/Avm-flagpoles/61557399955237/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@avmflagpoles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.indiamart.com/avm-metals-tiruppur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={indiamart} alt="IndiaMart" className="h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-xs mt-8 px-4">
        © {new Date().getFullYear()} AVM Electroplating. All Rights Reserved.
      </div>
    </footer>
  );
}
