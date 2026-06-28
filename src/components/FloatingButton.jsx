import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActionButtons() {
  return (
    <div className="fixed mb-10 bottom-6 right-6 flex flex-col items-end gap-2 z-50">

      <a
        href="tel:+919944066321"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-xl transition-all flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14"
      >
        <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://wa.me/919944066321"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl transition-all flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

    </div>
  );
}
