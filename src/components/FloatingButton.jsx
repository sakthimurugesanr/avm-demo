import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">

      {/* Call Button */}
      <a
        href="tel:+919944066321"   // 👉 your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl transition-all flex items-center justify-center"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919944066321"   // 👉 WhatsApp chat link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}
