// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { HiMenu } from "react-icons/hi";
// import { trackEvent } from "../analytics/ga";

// const Header = ({ onContactClick }) => {


//   const [open, setOpen] = useState(false);
//   const [showDesktopServices, setShowDesktopServices] = useState(false);
//   const [showMobileServices, setShowMobileServices] = useState(false);

//   const navigate = useNavigate();

//   const religiousWorks = [
//     "Copper Temple Kalasam",
//     "Stainless Steel Flagpole",
//     "Brass Church Cross",
//     "Golden Brass Flag Light",
//     "Brass Prabhavali Thiruvatchi",
//     "Brass Temple Dwajasthambam",
//     "Steel Donation Box",
//   ];

//   const electroPlating = [
//     "Nickel Plating",
//     "Copper Plating",
//     "Silver Plating",
//     "Brass Plating",
//     "Gold Plating",
//     "Lacquer Coating",
//   ];

//   const handleServiceClick = (serviceName) => {
//     navigate("/services", { state: { target: serviceName } });
//     setOpen(false);
//     setShowMobileServices(false);
//     setShowDesktopServices(false);
//   };

//   return (
//     <div className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
//       {/* HEADER BAR */}
//       <header className="container mx-auto flex items-center justify-between px-4 py-2">
//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//             trackEvent("Home", "CTA Clicked", "Get Started");
//           }}
//         >
//           <img src={logo} alt="logo" className="w-[70px]" />
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-8 text-base relative">
//           {/* SERVICES DROPDOWN */}
//           <li className="relative">
//             <button
//               onClick={() => {
//                 trackEvent("Services", "services Clicked", "All Services");

//                 setShowDesktopServices(!showDesktopServices)


//               }}
//               className="flex items-center gap-1 hover:text-gray-200 transition-colors duration-200"
//             >
//               Services {showDesktopServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
//             </button>

//             {showDesktopServices && (
//               <div className="absolute left-0 mt-3 w-80 bg-blue-900 border border-blue-700 rounded-lg shadow-xl p-4 z-50">
//                 {/* Religious Works */}
//                 <h4 className="text-sm font-semibold mb-2 text-blue-800">Religious Works</h4>
//                 <ul className="space-y-1 text-sm mb-3">
//                   {religiousWorks.map((item, i) => (
//                     <li
//                       key={i}
//                       onClick={() => handleServiceClick(item)}
//                       className="px-3 py-1 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Electro Plating */}

//                 <div className="flex justify-start items-center">

//                   <h4 className="text-sm font-semibold border-t border-blue-700 pt-2 text-blue-200">
//                     Electro Plating
//                   </h4>
//                   <span
//                     className="
//       text-[9px] sm:text-[10px]
//       font-bold
//       text-white
//       bg-red-500
//       px-2 py-[2px]
//       rounded-full
//       uppercase
//       leading-none
//     "
//                   >
//                     New
//                   </span>
//                 </div>
//                 <ul className="space-y-1 text-sm">
//                   {electroPlating.map((item, i) => (
//                     <li
//                       key={i}
//                       onClick={() => handleServiceClick(item)}
//                       className="px-3 py-1 rounded hover:bg-blue-700 cursor-pointer transition-colors duration-200"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>

//           <Link
//             to="/about"
//             style={{ textDecoration: "none" }}
//             className="hover:text-gray-200 no-underline text-white"
//             onClick={() => {
//               window.scrollTo({ top: 0, behavior: "smooth" })
//               trackEvent("About", "About Clicked", "About");


//             }}
//           >
//             About
//           </Link>

//           <button
//             onClick={() => {

//               onContactClick()
//               trackEvent("Contact", "Contact Clicked", "Contact");

//             }}
//             className="hover:text-gray-200 transition-colors duration-200"
//           >
//             Contact
//           </button>
//         </ul>

//         {/* MOBILE HAMBURGER */}
//         <button className="md:hidden text-4xl" onClick={() => setOpen(true)}>
//           <HiMenu className="text-4xl" />
//         </button>
//       </header>

//       {/* MOBILE TOP-DOWN DRAWER */}
//       <div
//         className={`fixed inset-0 z-50 bg-blue-900 transform transition-transform duration-300 overflow-y-auto ${open ? "translate-y-0" : "-translate-y-full"
//           }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 py-3 border-b">
//           <img src={logo} className="w-[45px] sm:w-[70px]" alt="logo" />
//           <button
//             className="text-2xl text-white hover:text-black"
//             onClick={() => setOpen(false)}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Content */}
//         <div className="px-4 py-6 flex flex-col items-center space-y-6">
//           {/* Services Toggle */}
//           <button
//             onClick={() => setShowMobileServices(!showMobileServices)}
//             className="w-full max-w-xs flex justify-between items-center text-base font-medium text-gray-100 border-b pb-2"
//           >

//             Services
//             {showMobileServices ? (
//               <IoIosArrowUp className="text-lg" />
//             ) : (
//               <IoIosArrowDown className="text-lg" />
//             )}
//           </button>
//           <span
//             className="
//       text-[9px] sm:text-[10px]
//       font-bold
//       text-white
//       bg-red-500
//       px-2
//       top-23
//       left-5
//       absolute
//       rounded-full
//       uppercase
//       leading-none
//     "
//           >
//             New
//           </span>

//           {/* Services List */}
//           {showMobileServices && (
//             <div className="w-full  bg-blue-900 rounded-xl p-4 space-y-6">
//               {/* Religious Works */}
//               <div>
//                 <h4 className="flex  text-start -ml-5 items-center justify-center gap-2 mb-3 uppercase">
//                   Religious Works
//                 </h4>
//                 <ul className="space-y-2 text-sm text-start">
//                   {religiousWorks.map((item, i) => (
//                     <li
//                       key={i}
//                       onClick={() => handleServiceClick(item)}
//                       className="py-2 rounded-md  hover:bg-gray-100 cursor-pointer"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Electro Plating */}
//               <div className="border-t pt-4">
//                 <h4 className="flex items-center justify-center gap-2 mb-3 text-center uppercase">
//                   {/* <span className="text-xs  text-gray-100 mb-3 text-center uppercase"> */}
//                   Electro Plating


//                   {/* NEW Tag */}
//                   <span
//                     className="
//       text-[9px] sm:text-[10px]
//       font-bold
//       text-white
//       bg-red-500
//       px-2 py-[2px]
//       rounded-full
//       uppercase
//       leading-none
//     "
//                   >
//                     New
//                   </span>
//                 </h4>

//                 <ul className="space-y-2 text-sm text-start">
//                   {electroPlating.map((item, i) => (
//                     <li
//                       key={i}
//                       onClick={() => handleServiceClick(item)}
//                       className="py-2 rounded-md  hover:bg-gray-900 cursor-pointer"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}

//           {/* Links */}
//           <Link
//             to="/about"
//             onClick={() => {
//               setOpen(false);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             className=" w-full max-w-xs flex justify-between items-center text-base font-medium text-start m-6  hover:text-black no-underline text-white"
//             style={{ textDecoration: "none" }}


//           >
//             About
//           </Link>

//           <button
//             onClick={() => {
//               onContactClick();

//               setOpen(false);
//             }}
//             className=" w-full max-w-xs flex justify-between items-center hover:text-black text-white"
//           >
//             Contact
//           </button>
//         </div>
//       </div>



//       {/* OVERLAY */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Header;


import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { trackEvent } from "../analytics/ga";

const Header = ({ onContactClick }) => {
  const [open, setOpen] = useState(false);
  const [showDesktopServices, setShowDesktopServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [mobileReligious, setMobileReligious] = useState(false);
  const [mobileElectro, setMobileElectro] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDesktopServices(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
  ];

  const handleServiceClick = (serviceName) => {
    navigate("/services", { state: { target: serviceName } });
    setOpen(false);
    setShowMobileServices(false);
    setShowDesktopServices(false);
    trackEvent("Services", "service Clicked", serviceName);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#0e2630] text-white ">

      {/* ── HEADER BAR ── */}
      <header className="container mx-auto flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            trackEvent("Home", "CTA Clicked", "Get Started");
          }}
        >
          <img src={logo} alt="logo" className="w-[60px] sm:w-[70px]" />
        </Link>

        {/* ── DESKTOP NAV ── */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setShowDesktopServices((p) => !p);
                trackEvent("Services", "services Clicked", "All Services");
              }}
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors duration-200 py-2"
            >
              Services
              <span className="transition-transform duration-200">
                {showDesktopServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {/* ── WHITE DROPDOWN PANEL ── */}
            {showDesktopServices && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">

                {/* Dropdown header strip */}
                <div className="bg-blue-900 px-5 py-3 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm tracking-wide">Our Services</span>
                  <span className="text-blue-300 text-xs">Click any service to explore</span>
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-100">

                  {/* Religious Works column */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-900 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-blue-900 inline-block" />
                      Religious Works
                    </p>
                    <ul className="space-y-0.5">
                      {religiousWorks.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleServiceClick(item)}
                          className="px-3 py-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-150 group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-800 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Electro Plating column */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-900 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-blue-900 inline-block" />
                      Electro Plating
                      <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ml-1">
                        New
                      </span>
                    </p>
                    <ul className="space-y-0.5">
                      {electroPlating.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleServiceClick(item)}
                          className="px-3 py-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-150 group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-800 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Dropdown footer */}
                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">AVM Metal Works — Tiruppur</span>
                  <button
                    onClick={() => { navigate("/services"); setShowDesktopServices(false); }}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    View All Services →
                  </button>
                </div>
              </div>
            )}
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                trackEvent("About", "About Clicked", "About");
              }}
              className="hover:text-blue-200 transition-colors duration-200 no-underline text-white"
            >
              About
            </Link>
          </li>

          {/* Contact */}
          <li>
            <button
              onClick={() => {
                onContactClick();
                trackEvent("Contact", "Contact Clicked", "Contact");
              }}
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu className="text-3xl" />
        </button>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════ */}
      <div
        className={`
          fixed inset-0 z-50 bg-white text-gray-800
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer top bar */}
        <div className="sticky top-0 z-10 bg-blue-900 flex items-center justify-between px-4 py-3 shadow-md">
          <img src={logo} className="w-[50px]" alt="logo" />
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Close menu"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="px-4 py-6 space-y-2">

          {/* ── Services accordion ── */}
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setShowMobileServices((p) => !p)}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-blue-900 text-white font-semibold text-sm"
            >
              <span>Services</span>
              {showMobileServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {showMobileServices && (
              <div className="bg-white">

                {/* Religious Works sub-accordion */}
                <button
                  onClick={() => setMobileReligious((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 text-sm font-semibold text-blue-900 bg-blue-50"
                >
                  <span>Religious Works</span>
                  {mobileReligious
                    ? <IoIosArrowUp className="text-blue-700" />
                    : <IoIosArrowDown className="text-blue-700" />}
                </button>

                {mobileReligious && (
                  <ul className="bg-white divide-y divide-gray-50">
                    {religiousWorks.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleServiceClick(item)}
                        className="px-5 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm text-gray-700 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Electro Plating sub-accordion */}
                <button
                  onClick={() => setMobileElectro((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-100 text-sm font-semibold text-blue-900 bg-blue-50"
                >
                  <span className="flex items-center gap-2">
                    Electro Plating
                    <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      New
                    </span>
                  </span>
                  {mobileElectro
                    ? <IoIosArrowUp className="text-blue-700" />
                    : <IoIosArrowDown className="text-blue-700" />}
                </button>

                {mobileElectro && (
                  <ul className="bg-white divide-y divide-gray-50">
                    {electroPlating.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleServiceClick(item)}
                        className="px-5 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-sm text-gray-700 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            )}
          </div>

          {/* About */}
          <Link
            to="/about"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors no-underline"
          >
            About
            <span className="text-gray-400 text-xs">›</span>
          </Link>

          {/* Contact */}
          <button
            onClick={() => {
              onContactClick();
              setOpen(false);
            }}
            className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
          >
            Contact
            <span className="text-gray-400 text-xs">›</span>
          </button>

        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;