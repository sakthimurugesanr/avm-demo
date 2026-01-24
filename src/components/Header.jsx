import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { trackEvent } from "../analytics/ga";

const Header = ({ onContactClick }) => {


  const [open, setOpen] = useState(false);
  const [showDesktopServices, setShowDesktopServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  const navigate = useNavigate();

  const religiousWorks = [
    "Copper Temple Kalasam",
    "Stainless Steel Flagpole",
    "Brass Church Cross",
    "Golden Brass Flag Light",
    "Brass Prabhavali Thiruvatchi",
    "Brass Temple Dwajasthambam",
    "Steel Donation Box",
  ];

  const electroPlating = [
    "Nickel Plating",
    "Copper Plating",
    "Silver Plating",
    "Brass Plating",
    "Gold Plating",
    "Lacquer Coating",
    "Flag Poles",
  ];

  const handleServiceClick = (serviceName) => {
    navigate("/services", { state: { target: serviceName } });
    setOpen(false);
    setShowMobileServices(false);
    setShowDesktopServices(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      {/* HEADER BAR */}
      <header className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            trackEvent("Home", "CTA Clicked", "Get Started");
          }}
        >
          <img src={logo} alt="logo" className="w-[70px]" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-base relative">
          {/* SERVICES DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => {
                trackEvent("Services", "services Clicked", "All Services");

                setShowDesktopServices(!showDesktopServices)


              }}
              className="flex items-center gap-1 hover:text-gray-200 transition-colors duration-200"
            >
              Services {showDesktopServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {showDesktopServices && (
              <div className="absolute left-0 mt-3 w-80 bg-blue-900 border border-blue-700 rounded-lg shadow-xl p-4 z-50">
                {/* Religious Works */}
                <h4 className="text-sm font-semibold mb-2 text-blue-800">Religious Works</h4>
                <ul className="space-y-1 text-sm mb-3">
                  {religiousWorks.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="px-3 py-1 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Electro Plating */}

                <div className="flex justify-start items-center">

                  <h4 className="text-sm font-semibold border-t border-blue-700 pt-2 text-blue-200">
                    Electro Plating
                  </h4>
                  <span
                    className="
      text-[9px] sm:text-[10px]
      font-bold
      text-white
      bg-red-500
      px-2 py-[2px]
      rounded-full
      uppercase
      leading-none
    "
                  >
                    New
                  </span>
                </div>
                <ul className="space-y-1 text-sm">
                  {electroPlating.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="px-3 py-1 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="hover:text-gray-200 no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              trackEvent("About", "About Clicked", "About");


            }}
          >
            About
          </Link>

          <button
            onClick={() => {

              onContactClick
              trackEvent("Contact", "Contact Clicked", "Contact");

            }}
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </button>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-4xl" onClick={() => setOpen(true)}>
          <HiMenu className="text-4xl" />
        </button>
      </header>

      {/* MOBILE TOP-DOWN DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-blue-900 transform transition-transform duration-300 overflow-y-auto ${open ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <img src={logo} className="w-[45px] sm:w-[70px]" alt="logo" />
          <button
            className="text-2xl text-white hover:text-black"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-6 flex flex-col items-center space-y-6">
          {/* Services Toggle */}
          <button
            onClick={() => setShowMobileServices(!showMobileServices)}
            className="w-full max-w-xs flex justify-between items-center text-base font-medium text-gray-100 border-b pb-2"
          >

            Services
            {showMobileServices ? (
              <IoIosArrowUp className="text-lg" />
            ) : (
              <IoIosArrowDown className="text-lg" />
            )}
          </button>
          <span
            className="
      text-[9px] sm:text-[10px]
      font-bold
      text-white
      bg-red-500
      px-2
      top-23
      left-5
      absolute
      rounded-full
      uppercase
      leading-none
    "
          >
            New
          </span>

          {/* Services List */}
          {showMobileServices && (
            <div className="w-full  bg-blue-900 rounded-xl p-4 space-y-6">
              {/* Religious Works */}
              <div>
                <h4 className="flex  text-start -ml-5 items-center justify-center gap-2 mb-3 uppercase">
                  Religious Works
                </h4>
                <ul className="space-y-2 text-sm text-start">
                  {religiousWorks.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="py-2 rounded-md  hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Electro Plating */}
              <div className="border-t pt-4">
                <h4 className="flex items-center justify-center gap-2 mb-3 text-center uppercase">
                  {/* <span className="text-xs  text-gray-100 mb-3 text-center uppercase"> */}
                  Electro Plating


                  {/* NEW Tag */}
                  <span
                    className="
      text-[9px] sm:text-[10px]
      font-bold
      text-white
      bg-red-500
      px-2 py-[2px]
      rounded-full
      uppercase
      leading-none
    "
                  >
                    New
                  </span>
                </h4>

                <ul className="space-y-2 text-sm text-start">
                  {electroPlating.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="py-2 rounded-md  hover:bg-gray-900 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Links */}
          <Link
            to="/about"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className=" w-full max-w-xs flex justify-between items-center text-base font-medium text-start m-6  hover:text-black no-underline text-white"
            style={{ textDecoration: "none" }}


          >
            About
          </Link>

          <button
            onClick={() => {
              onContactClick();

              setOpen(false);
            }}
            className=" w-full max-w-xs flex justify-between items-center hover:text-black text-white"
          >
            Contact
          </button>
        </div>
      </div>



      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
