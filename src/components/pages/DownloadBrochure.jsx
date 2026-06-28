// const DownloadBrochure = () => {
//   const handleDownload = () => {
//     // Replace with your actual brochure file path
//     const link = document.createElement("a");
//     link.href = "/brochure.pdf";
//     link.download = "Brochure.pdf";
//     link.click();
//   };

//   return (
//     <section className="bg-white py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="
//           flex flex-col sm:flex-row items-center justify-between gap-6
//           bg-[#0E2630] rounded-2xl px-6 py-7 sm:px-10 sm:py-8
//         ">
//           {/* Left — icon + text */}
//           <div className="flex items-center gap-4">
//             <div className="
//               flex-shrink-0 w-12 h-12 rounded-xl
//               bg-white/10 flex items-center justify-center
//             ">
//               {/* File icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#4fc3a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v13a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-white font-semibold text-[15px] leading-snug">
//                 Company Brochure
//               </p>
//               <p className="text-white/50 text-[12px] mt-0.5">
//                 PDF · 2.4 MB
//               </p>
//             </div>
//           </div>

//           {/* Right — button */}
//           <button
//             onClick={handleDownload}
//             className="
//               flex items-center gap-2 flex-shrink-0
//               bg-[#4fc3a1] hover:bg-[#3aab8a]
//               text-[#0E2630] font-semibold text-[13px]
//               px-5 py-2.5 rounded-xl
//               transition-colors duration-200
//               w-full sm:w-auto justify-center
//             "
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-3.5-3.5M12 16l3.5-3.5" />
//             </svg>
//             Download Brochure
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DownloadBrochure;


// import React from "react";

// const CorporateShowcase = () => {
//   const handleDownload = () => {
//     // Replace with your actual brochure file path
//     const link = document.createElement("a");
//     link.href = "/avm-metals-brochure.pdf";
//     link.download = "AVM_Metals_Brochure.pdf";
//     link.click();
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[500px]">
//       <div className="max-w-5xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
//         <div className="grid grid-cols-1 lg:grid-cols-12">
          
//           {/* Left Side: License-Free Photo Container */}
//           <div className="relative lg:col-span-5 min-h-[250px] sm:min-h-[300px] lg:min-h-full bg-gray-900">
//             <img
//               src="https://images.unsplash.com/photo-1590513904571-002bf921da8a?auto=format&fit=crop&q=80&w=800" 
//               alt="AVM Metals Brass Craftsmanship"
//               className="w-full h-full object-cover object-center opacity-85"
//             />
//             {/* Elegant Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0E2630]/40 to-transparent" />
//           </div>

//           {/* Right Side: Simplified Copy & Fixed Action Button */}
//           <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
//             <div className="space-y-4">
//               <div className="space-y-1">
//                 <span className="text-xs font-bold tracking-widest text-[#4fc3a1] uppercase">
//                   Established 2010
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2630] tracking-tight">
//                   AVM Metals
//                 </h2>
//                 <p className="text-xs sm:text-sm text-gray-400 font-medium">
//                   Aathuppalayam Road, Tirupur
//                 </p>
//               </div>

//               <hr className="w-12 border-t-2 border-[#4fc3a1]" />

//               <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                 AVM Metals is a premier manufacturer and supplier of premium **Brass Puja Items, God Idols, Temple Bells, and Bronze Articles**. Serving clients across Tirupur and India, we blend traditional artistry with modern innovation to deliver unmatched quality and timeless designs.
//               </p>
//             </div>

//             {/* Fully Responsive CTA Button Area */}
//             <div className="pt-2">
//               <button
//                 onClick={handleDownload}
//                 className="
//                   inline-flex items-center justify-center gap-2.5
//                   w-full sm:w-auto px-7 py-3.5 rounded-xl
//                   bg-[#0E2630] text-white font-semibold text-sm
//                   hover:bg-[#163b4a] active:scale-[0.98]
//                   transition-all duration-200 shadow-sm
//                   group
//                 "
//               >
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   className="w-4 h-4 text-[#4fc3a1] group-hover:translate-y-0.5 transition-transform duration-200" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor" 
//                   strokeWidth={2.2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-3.5-3.5M12 16l3.5-3.5" />
//                 </svg>
//                 Download Capabilities Brochure
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CorporateShowcase;


import React from "react";

const GradientShowcase = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/avm-metals-brochure.pdf";
    link.download = "AVM_Metals_Brochure.pdf";
    link.click();
  };

  return (
    <section className="bg-white py-12 px-4 max-w-full mx-auto">
      {/* Container with Brand Gradient */}
      <div className="bg-gradient-to-br from-[#0E2630] to-[#1a3d4c] rounded-2xl p-6  flex flex-col md:flex-row items-around gap-8 shadow-sm">
        
        {/* Left: Simple Image */}
        <div className="w-full md:w-1/3 max-w-[200px] aspect-square rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1590513904571-002bf921da8a?auto=format&fit=crop&q=80&w=500"
            alt="AVM Metals"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text & Button */}
        <div className="w-full md:w-2/3 flex flex-col items-start text-left">
          <span className="text-xs font-semibold tracking-wider text-[#4fc3a1] uppercase">
            Est. 2010 · Tirupur
          </span>
          
          <h2 className="text-2xl font-bold text-white mt-1 mb-3">
            AVM Metals
          </h2>
          
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Leading manufacturers of premium Brass Puja Items, God Idols, Temple Bells, and custom bronze articles. Based on Aathuppalayam Road, we deliver exceptional craftsmanship across India.
          </p>

          {/* Button: Fixed Response for All Devices */}
          <button
            onClick={handleDownload}
            className="
              inline-flex items-center justify-center gap-2 
              w-full sm:w-auto px-6 py-3 rounded-xl
              bg-[#4fc3a1] text-[#0E2630] font-bold text-sm
              hover:bg-[#3db08f] transition-colors duration-200
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-3.5-3.5M12 16l3.5-3.5" />
            </svg>
            Download Brochure
          </button>
        </div>

      </div>
    </section>
  );
};

export default GradientShowcase;