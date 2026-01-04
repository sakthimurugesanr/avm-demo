import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

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
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="logo" className="w-[110px]" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-base relative">
          {/* SERVICES DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setShowDesktopServices(!showDesktopServices)}
              className="flex items-center gap-1 hover:text-gray-200 transition-colors duration-200"
            >
              Services {showDesktopServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {showDesktopServices && (
              <div className="absolute left-0 mt-3 w-80 bg-blue-900 border border-blue-700 rounded-lg shadow-xl p-4 z-50">
                {/* Religious Works */}
                <h4 className="text-sm font-semibold mb-2 text-blue-200">Religious Works</h4>
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
                <h4 className="text-sm font-semibold border-t border-blue-700 pt-2 text-blue-200">
                  Electro Plating
                </h4>
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
            style={{textDecoration:"none"}}
            className="hover:text-gray-200 no-underline text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About
          </Link>

          <button
            onClick={onContactClick}
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </button>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-4xl" onClick={() => setOpen(true)}>
          <HiMenu  className="text-4xl"/>
        </button>
      </header>

      {/* MOBILE TOP-DOWN DRAWER */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-blue-900 z-50 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-blue-800">
          <img src={logo} className="w-[90px]" alt="logo" />
          <button className="text-3xl" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Services Mobile */}
          <button
            onClick={() => setShowMobileServices(!showMobileServices)}
            className="w-full flex justify-center items-center text-lg font-medium"
          >
            Services {showMobileServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {showMobileServices && (
            <div className="bg-blue-800 rounded-lg p-4 space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-blue-200 mb-2 text-center">
                  Religious Works
                </h4>
                <ul className="space-y-2 text-sm text-center">
                  {religiousWorks.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="py-2 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200 border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-blue-700 pt-4">
                <h4 className="text-xs font-semibold text-blue-200 mb-2 text-center">
                  Electro Plating
                </h4>
                <ul className="space-y-2 text-sm text-center">
                  {electroPlating.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="py-2 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200 border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <Link
            to="/about"
                        style={{textDecoration:"none"}}

            className="hover:text-gray-200 text-white no-underline block text-lg text-center pt-3"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            About
          </Link>

          <button
            onClick={() => {
              onContactClick();
              setOpen(false);
            }}
            className="block text-lg text-center hover:text-blue-200 pt-3 w-full"
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
