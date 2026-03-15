// import React from "react";

// export default function DummyReviewsSlider() {
//   const reviews = [
//     {
//       name: "Praveen Kumar",
//       role: "Business Owner",
//       review:
//         "Outstanding service! The finishing quality and attention to detail were excellent. Highly recommended.",
//       rating: 5,
//     },
//     {
//       name: "Sanjay M",
//       role: "Manufacturer",
//       review:
//         "Very fast delivery and premium quality plating. Their team is professional and reliable.",
//       rating: 4,
//     },
//     {
//       name: "Arun Raj",
//       role: "Entrepreneur",
//       review:
//         "Affordable pricing with top-notch results. Will definitely continue working with them.",
//       rating: 5,
//     },
//     {
//       name: "Madhan K",
//       role: "Fabrication Expert",
//       review:
//         "The plating quality is consistent and durable. Good communication and on-time work.",
//       rating: 5,
//     },
//   ];

//   // Duplicate reviews for infinite scroll
//   const loopReviews = [...reviews, ...reviews];

//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 px-4 md:px-12 overflow-hidden">
//       {/* Heading */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
//         What Our Clients Says
//       </h2>
//       <p className="text-center text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
//         Our customers consistently appreciate our quality, reliability, and
//         commitment to excellence.
//       </p>

//       {/* Infinite Scrolling Row */}
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex gap-4 sm:gap-6 animate-scroll hover:pause-scroll"
//           style={{ width: "max-content" }}
//         >
//           {loopReviews.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white
                
//                 hover:shadow-md
//                 transition-all
//                 duration-300
//                 rounded-xl
//               p-2 sm:p-5
//               border
                
//                 w-[280px] sm:w-[300px] md:w-[320px]
                
//               "
//             >
//               {/* Stars */}
//               <div className="flex mb-2 sm:mb-3">
//                 {Array(item.rating)
//                   .fill(0)
//                   .map((_, i) => (
//                     <span key={i} className="text-yellow-500 text-base sm:text-lg">
//                       ★
//                     </span>
//                   ))}
//               </div>

//               {/* Review text */}
//               <p className="text-gray-700 italic mb-2 sm:mb-3 text-xs sm:text-xs md:text-base leading-relaxed">
//                 "{item.review}"
//               </p>

//               {/* Name */}
//               <h4 className="font-semibold text-gray-900 text-xs sm:text-base md:text-lg">
//                 {item.name}
//               </h4>
//               <p className="text-gray-500 text-xs sm:text-xs">{item.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";

// const reviews = [
//   {
//     name: "Saro Sri",
//     location: "Tamil Nadu",
//     review:
//       "I gave my pooja items for silver plating here. The finishing was excellent and the price was very reasonable. Planning to give my gold plating work here too.",
//     rating: 5,
//   },
//   {
//     name: "Cithra M",
//     location: "Tamil Nadu",
//     review:
//       "We gave our kuladeivam temple kalasam for gold colouring — it looks exactly like pure gold. Outstanding quality and delivered on time. Very satisfied.",
//     rating: 5,
//   },
//   {
//     name: "Thilak Srinivasan",
//     location: "Tamil Nadu",
//     review:
//       "Excellent craftsmanship and very professional team. The metal work quality is truly impressive. Will definitely recommend to others.",
//     rating: 5,
//   },
//   {
//     name: "Chandhru",
//     location: "Tamil Nadu",
//     review:
//       "Great service and very good finishing quality. The team was responsive and the work was completed within the promised time. Fully satisfied.",
//     rating: 5,
//   },
//   {
//     name: "Mr. Balraj",
//     location: "Tamil Nadu",
//     review:
//       "Very good workmanship. The plating finish was smooth and durable. Pricing is fair and the staff is cooperative. Happy with the overall experience.",
//     rating: 5,
//   },
//   {
//     name: "Swapnil Joshi",
//     location: "Jalna, Maharashtra",
//     review:
//       "Best quality electroplating service. Even from Maharashtra I chose AVM Metals — the quality speaks for itself. Timely delivery and professional handling.",
//     rating: 5,
//   },
//   {
//     name: "BL Shankar",
//     location: "Chennai, Tamil Nadu",
//     review:
//       "Reliable and professional service. The brass plating on my temple items came out beautifully. Clean finish and good packaging. Will order again.",
//     rating: 5,
//   },
//   {
//     name: "Praba Karan",
//     location: "Canada",
//     review:
//       "Ordered special temple articles from Canada and AVM Metals handled everything perfectly. Premium quality, secure packaging, and on-time international delivery.",
//     rating: 5,
//   },
//   {
//     name: "Sakthi",
//     location: "Tiruppur, Tamil Nadu",
//     review:
//       "Top-notch electroplating service right here in Tiruppur. The team is skilled, pricing is transparent, and the finished products look absolutely premium.",
//     rating: 5,
//   },
// ];

// // duplicate for infinite loop
// const loopReviews = [...reviews, ...reviews];

// export default function ReviewsSlider() {
//   return (
//     <section className="bg-gray-50 py-12 sm:py-16 overflow-hidden">

//       {/* ── Heading ── */}
//       <div className="px-4 text-center mb-8 sm:mb-12">
//         <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
//           <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
//           Customer Reviews
//         </span>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//           What Our Clients{" "}
//           <span className="relative inline-block">
//             <span className="relative z-10 text-orange-500">Say</span>
//             <span className="absolute bottom-1 left-0 right-0 h-2 bg-orange-100 -z-0 rounded" />
//           </span>
//         </h2>
//         <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
//           Real feedback from our valued customers across India and beyond.
//         </p>
//       </div>

//       {/* ── Infinite scroll row ── */}
//       <div className="relative w-full overflow-hidden">

//         {/* left fade */}
//         <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
//         {/* right fade */}
//         <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

//         <div
//           className="flex gap-2 sm:gap-2 animate-scroll"
//           style={{ width: "max-content" }}
//         >
//           {loopReviews.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 relative bg-white border border-gray-100
//                 rounded-2xl p-2 sm:p-2
//                 shadow-sm hover:shadow-md
//                 transition-shadow duration-300
//                 w-[270px] sm:w-[250px] h-[200px] md:w-[320px]
//                 flex flex-col gap-3
//                 overflow-hidden
//                 flex-shrink-0
//               "
//             >
//               {/* corner bubble */}
//               <div className="absolute top-0 right-0 w-14 h-10 bg-orange-50 rounded-bl-full opacity-60" />

//               {/* Stars */}
//               <div className="flex gap-0.5">
//                 {Array(item.rating).fill(0).map((_, i) => (
//                   <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
//                 ))}
//               </div>

//               {/* Review */}
//               <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1">
//                 "{item.review}"
//               </p>

//               {/* Divider */}
//               <div className="w-8  bg-orange-200" />

//               {/* Name + Location */}
//               <div>
//                 <h4 className="font-bold text-gray-900 text-sm sm:text-base">
//                   {item.name}
//                 </h4>
//                 <p className="text-orange-500 text-[11px] sm:text-xs font-medium">
//                   📍 {item.location}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Animation style ── */}
//       <style>{`
//         @keyframes scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// }



import React from "react";

const reviews = [
  {
    name: "Saro Sri",
    location: "Tamil Nadu",
    review:
      "I gave my pooja items for silver plating here. The finishing was excellent and the price was very reasonable. Planning to give my gold plating work here too.",
    rating: 5,
  },
  {
    name: "Cithra M",
    location: "Tamil Nadu",
    review:
      "We gave our kuladeivam temple kalasam for gold colouring — it looks exactly like pure gold. Outstanding quality and delivered on time. Very satisfied.",
    rating: 5,
  },
  {
    name: "Thilak Srinivasan",
    location: "Tamil Nadu",
    review:
      "Excellent craftsmanship and very professional team. The metal work quality is truly impressive. Will definitely recommend to others.",
    rating: 5,
  },
  {
    name: "Chandhru",
    location: "Tamil Nadu",
    review:
      "Great service and very good finishing quality. The team was responsive and the work was completed within the promised time. Fully satisfied.",
    rating: 5,
  },
  {
    name: "Mr. Balraj",
    location: "Tamil Nadu",
    review:
      "Very good workmanship. The plating finish was smooth and durable. Pricing is fair and the staff is cooperative. Happy with the overall experience.",
    rating: 5,
  },
  {
    name: "Swapnil Joshi",
    location: "Jalna, Maharashtra",
    review:
      "Best quality electroplating service. Even from Maharashtra I chose AVM Metals — the quality speaks for itself. Timely delivery and professional handling.",
    rating: 5,
  },
  {
    name: "BL Shankar",
    location: "Chennai, Tamil Nadu",
    review:
      "Reliable and professional service. The brass plating on my temple items came out beautifully. Clean finish and good packaging. Will order again.",
    rating: 5,
  },
  {
    name: "Praba Karan",
    location: "Canada",
    review:
      "Ordered special temple articles from Canada and AVM Metals handled everything perfectly. Premium quality, secure packaging, and on-time international delivery.",
    rating: 5,
  },
  {
    name: "Sakthi",
    location: "Tiruppur, Tamil Nadu",
    review:
      "Top-notch electroplating service right here in Tiruppur. The team is skilled, pricing is transparent, and the finished products look absolutely premium.",
    rating: 5,
  },
];

const loopReviews = [...reviews, ...reviews];

export default function ReviewsSlider() {
  return (
    <section className="bg-gray-50 py-8 sm:py-10 md:py-12 overflow-hidden">

      {/* ── Heading ── */}
      <div className="px-4 text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          Customer Reviews
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          What Our Clients{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-orange-500">Say</span>
            <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-orange-100 -z-0 rounded" />
          </span>
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
          Real feedback from our valued customers across India and beyond.
        </p>
      </div>

      {/* ── Scroll track ── */}
      <div className="relative w-full overflow-hidden">

        {/* left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-stretch gap-3 sm:gap-4 animate-scroll"
          style={{ width: "max-content" }}
        >
          {loopReviews.map((item, index) => (
            <div
              key={index}
              className="
                relative flex-shrink-0
                bg-white border border-gray-100
                rounded-xl shadow-sm hover:shadow-md
                transition-shadow duration-300
                overflow-hidden
                flex flex-col
                p-3 sm:p-4
                w-[220px] sm:w-[260px] md:w-[280px]
              "
            >
              {/* corner bubble */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-orange-50 rounded-bl-full opacity-70 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {Array(item.rating).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Full review text — NO line-clamp, fully visible */}
              <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm leading-relaxed flex-1 mb-3">
                "{item.review}"
              </p>

              {/* Bottom — name + location */}
              <div className="border-t border-orange-100 pt-2">
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">
                  {item.name}
                </h4>
                <p className="text-orange-500 text-[10px] sm:text-[11px] font-medium mt-0.5">
                  📍 {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}