import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className={`
    fixed bottom-5 right-[29px] lg:right-[31px]  md:right-[30px]  z-50
    flex items-center justify-center
    w-10 h-10
    p-2
    rounded-full  
    bg-blue-900 text-white
    shadow-lg
    transition-all duration-300
    hover:bg-black
    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
  `}
>

      <FaArrowUp className="text-sm sm:text-base" />
    </button>
  );
}
