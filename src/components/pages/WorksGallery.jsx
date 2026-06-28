
// const works = [
//   { cat: "Electroplating", title: "Nickel plated fittings",    img: "/gallery/nickel-fittings.jpg" },
//   { cat: "Temple work",    title: "Kalasam fabrication",        img: "/gallery/kalasam.jpg" },
//   { cat: "Electroplating", title: "Gold plated components",     img: "/gallery/gold-plated.jpg" },
//   { cat: "Church work",    title: "Church cross — stainless",   img: "/gallery/church-cross.jpg" },
//   { cat: "Flagpoles",      title: "Temple flagpole install",    img: "/gallery/temple-flagpole.jpg" },
//   { cat: "Mosque work",    title: "Muslim kalasam set",         img: "/gallery/muslim-kalasam.jpg" },
//   { cat: "Electroplating", title: "Copper plated parts",        img: "/gallery/copper.jpg" },
//   { cat: "Temple work",    title: "Hundi — brass finish",       img: "/gallery/hundi.jpg" },
//   { cat: "Flagpoles",      title: "Church flagpole",            img: "/gallery/church-flagpole.jpg" },
//   { cat: "Electroplating", title: "Silver plated set",          img: "/gallery/silver.jpg" },
//   { cat: "Temple work",    title: "Temple bell — brass",        img: "/gallery/bell.jpg" },
//   { cat: "Church work",    title: "Cross statue — gold coat",   img: "/gallery/cross-statue.jpg" },
//   { cat: "Mosque work",    title: "Decorative dome fitting",    img: "/gallery/dome.jpg" },
//   { cat: "Electroplating", title: "Lacquer coat panel",         img: "/gallery/lacquer.jpg" },
//   { cat: "Temple work",    title: "Vimanam structure",          img: "/gallery/vimanam.jpg" },
//   { cat: "Flagpoles",      title: "Mosque flagpole set",        img: "/gallery/mosque-flagpole.jpg" },
//   { cat: "Electroplating", title: "Brass plated hardware",      img: "/gallery/brass.jpg" },
//   { cat: "Church work",    title: "Altar cross — silver",       img: "/gallery/altar-cross.jpg" },
//   { cat: "Temple work",    title: "Gopuram kalasam",            img: "/gallery/gopuram.jpg" },
//   { cat: "Electroplating", title: "Zinc plated components",     img: "/gallery/zinc.jpg" },
// ];

// import { useState, useEffect, useRef, useCallback } from "react";

// const works = [
//   { cat: "Electroplating", title: "Nickel plated fittings", img: "https://picsum.photos/600/400?random=1" },
//   { cat: "Temple work", title: "Kalasam fabrication", img: "https://picsum.photos/600/400?random=2" },
//   { cat: "Electroplating", title: "Gold plated components", img: "https://picsum.photos/600/400?random=3" },
//   { cat: "Church work", title: "Church cross — stainless", img: "https://picsum.photos/600/400?random=4" },
//   { cat: "Flagpoles", title: "Temple flagpole install", img: "https://picsum.photos/600/400?random=5" },
//   { cat: "Mosque work", title: "Muslim kalasam set", img: "https://picsum.photos/600/400?random=6" },
//   { cat: "Electroplating", title: "Chrome bath finish", img: "https://picsum.photos/600/400?random=7" },
//   { cat: "Temple work", title: "Gopura finial set", img: "https://picsum.photos/600/400?random=8" },
//   { cat: "Church work", title: "Altar cross gilded", img: "https://picsum.photos/600/400?random=9" },
//   { cat: "Flagpoles", title: "Stainless mast 60ft", img: "https://picsum.photos/600/400?random=10" },
//   { cat: "Mosque work", title: "Minaret crescent dome", img: "https://picsum.photos/600/400?random=11" },
//   { cat: "Electroplating", title: "Brass door hardware", img: "https://picsum.photos/600/400?random=12" },
// ];

// const rows = [
//   { items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], direction: "left" },
//   { items: [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5], direction: "right" },
//   { items: [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2], direction: "left" },
// ];

// const SPEEDS = [55, 70, 45]; // seconds per row — slow & smooth
// // ── Scroll Track ──────────────────────────────────────────────────────────────
// function Track({ items, direction, speed, paused, onItemClick }) {
//   const doubled = [...items, ...items];

//   return (
//     <div className="overflow-hidden w-full">
//       <div
//         className="flex gap-3 w-max"
//         style={{
//           animation: `scroll${direction === "left" ? "Left" : "Right"} ${speed}s linear infinite`,
//           animationPlayState: paused ? "paused" : "running",
//         }}
//       >
//         {doubled.map((idx, i) => {
//           const item = works[idx];
//           return (
//             <button
//               key={i}
//               onClick={() => onItemClick(idx)}
//               className="
//                 relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px]
//                 rounded-2xl overflow-hidden cursor-pointer group bg-slate-100
//                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4fc3a1] focus-visible:ring-offset-2
//               "
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 loading="lazy"
//                 className="
//                   w-full block object-cover
//                   h-[120px] sm:h-[145px] md:h-[165px]
//                   transition-transform duration-500 ease-out group-hover:scale-110
//                 "
//               />
//               {/* Overlay */}
//               <div className="
//                 absolute inset-0 flex flex-col justify-end p-3
//                 bg-[#0E2630]/0 group-hover:bg-[#0E2630]/70
//                 transition-all duration-300
//               ">
//                 <div className="
//                   opacity-0 translate-y-2
//                   group-hover:opacity-100 group-hover:translate-y-0
//                   transition-all duration-200
//                 ">
//                   <p className="text-[10px] text-[#4fc3a1] uppercase tracking-widest mb-0.5">{item.cat}</p>
//                   <p className="text-[12px] sm:text-[13px] text-white font-medium leading-snug">{item.title}</p>
//                 </div>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // ── Lightbox ──────────────────────────────────────────────────────────────────
// function Lightbox({ idx, onClose, onPrev, onNext }) {
//   const item = works[idx];
//   const [zoomed, setZoomed] = useState(false);

//   // Keyboard navigation
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "ArrowLeft") onPrev();
//       if (e.key === "ArrowRight") onNext();
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [onPrev, onNext, onClose]);

//   // Reset zoom on item change
//   useEffect(() => setZoomed(false), [idx]);

//   // Prevent body scroll while open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E2630]/90 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-3xl overflow-hidden w-full max-w-[92vw] sm:max-w-lg md:max-w-2xl shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Image */}
//         <div
//           className="relative overflow-hidden cursor-zoom-in"
//           onClick={() => setZoomed((z) => !z)}
//         >
//           <img
//             src={item.img}
//             alt={item.title}
//             className={`
//               w-full object-cover block
//               max-h-[55vw] sm:max-h-[320px] md:max-h-[420px]
//               transition-transform duration-500 ease-out
//               ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100"}
//             `}
//           />
//           {/* Zoom hint badge */}
//           {!zoomed && (
//             <span className="
//               absolute top-3 right-3
//               bg-black/40 text-white text-[11px] px-2.5 py-1 rounded-full
//               backdrop-blur-sm pointer-events-none
//             ">
//               Click to zoom
//             </span>
//           )}
//           {/* Counter pill */}
//           <span className="
//             absolute bottom-3 left-3
//             bg-black/40 text-white text-[11px] px-2.5 py-1 rounded-full
//             backdrop-blur-sm pointer-events-none
//           ">
//             {idx + 1} / {works.length}
//           </span>
//         </div>

//         {/* Footer */}
//         <div className="px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
//           <div>
//             <p className="text-[11px] text-[#4fc3a1] uppercase tracking-widest mb-0.5">{item.cat}</p>
//             <p className="text-[14px] sm:text-[16px] font-semibold text-[#0E2630] leading-snug">{item.title}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={onPrev}
//               aria-label="Previous"
//               className="
//                 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
//                 text-[#0E2630] hover:bg-emerald-50 hover:border-emerald-300
//                 transition-colors duration-150 text-sm
//               "
//             >
//               ←
//             </button>
//             <button
//               onClick={onNext}
//               aria-label="Next"
//               className="
//                 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
//                 text-[#0E2630] hover:bg-emerald-50 hover:border-emerald-300
//                 transition-colors duration-150 text-sm
//               "
//             >
//               →
//             </button>
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="
//                 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
//                 text-gray-400 hover:bg-gray-100 hover:text-gray-700
//                 transition-colors duration-150 text-sm
//               "
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Main Gallery ──────────────────────────────────────────────────────────────
// export default function WorksGallery() {
//   const [paused, setPaused] = useState(false);
//   const [lbIdx, setLbIdx] = useState(null);

//   const openLb = useCallback((idx) => setLbIdx(idx), []);
//   const closeLb = useCallback(() => setLbIdx(null), []);
//   const prevLb = useCallback(() => setLbIdx((i) => (i - 1 + works.length) % works.length), []);
//   const nextLb = useCallback(() => setLbIdx((i) => (i + 1) % works.length), []);

//   return (
//     <>
//       {/* CSS keyframes injected once */}
//       <style>{`
//         @keyframes scrollLeft {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         @keyframes scrollRight {
//           from { transform: translateX(-50%); }
//           to   { transform: translateX(0); }
//         }
//       `}</style>

//       <section className="bg-white py-14 md:py-20 px-4 overflow-hidden">
//         <div className="max-w-6xl mx-auto">

//           {/* Heading */}
//           <div className="text-center max-w-lg mx-auto mb-10">
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="w-6 h-px bg-[#0E2630]" />
//               <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#0E2630]">Our works</span>
//               <span className="w-6 h-px bg-[#0E2630]" />
//             </div>
//             <h2 className="text-[26px] md:text-[34px] font-semibold text-[#0E2630] leading-tight tracking-tight mb-3">
//               Crafted with <span className="text-[#4fc3a1]">precision</span>,<br />
//               finished to perfection
//             </h2>
//             <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed">
//               A showcase of our electroplating and religious metalwork projects — every piece engineered for durability and shine.
//             </p>
//           </div>

//           {/* Tracks */}
//           <div
//             className="flex flex-col gap-3"
//             onMouseEnter={() => setPaused(true)}
//             onMouseLeave={() => setPaused(false)}
//           >
//             {rows.map((row, ri) => (
//               <Track
//                 key={ri}
//                 items={row.items}
//                 direction={row.direction}
//                 speed={SPEEDS[ri]}
//                 paused={paused}
//                 onItemClick={openLb}
//               />
//             ))}
//           </div>

//           <p className="text-center text-[12px] text-gray-300 mt-6">
//             Hover to pause · Click any card to view
//           </p>
//         </div>
//       </section>

//       {/* Lightbox */}
//       {lbIdx !== null && (
//         <Lightbox
//           idx={lbIdx}
//           onClose={closeLb}
//           onPrev={prevLb}
//           onNext={nextLb}
//         />
//       )}
//     </>
//   );
// }




import { useState, useEffect, useRef, useCallback } from "react";

const works = [
  { cat: "Electroplating", title: "Nickel plated fittings", img: "https://picsum.photos/600/400?random=1" },
  { cat: "Temple work", title: "Kalasam fabrication", img: "https://picsum.photos/600/400?random=2" },
  { cat: "Electroplating", title: "Gold plated components", img: "https://picsum.photos/600/400?random=3" },
  { cat: "Church work", title: "Church cross — stainless", img: "https://picsum.photos/600/400?random=4" },
  { cat: "Flagpoles", title: "Temple flagpole install", img: "https://picsum.photos/600/400?random=5" },
  { cat: "Mosque work", title: "Muslim kalasam set", img: "https://picsum.photos/600/400?random=6" },
  { cat: "Electroplating", title: "Chrome bath finish", img: "https://picsum.photos/600/400?random=7" },
  { cat: "Temple work", title: "Gopura finial set", img: "https://picsum.photos/600/400?random=8" },
  { cat: "Church work", title: "Altar cross gilded", img: "https://picsum.photos/600/400?random=9" },
  { cat: "Flagpoles", title: "Stainless mast 60ft", img: "https://picsum.photos/600/400?random=10" },
  { cat: "Mosque work", title: "Minaret crescent dome", img: "https://picsum.photos/600/400?random=11" },
  { cat: "Electroplating", title: "Brass door hardware", img: "https://picsum.photos/600/400?random=12" },
];

const rows = [
  { items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], direction: "left" },
  { items: [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5], direction: "right" },
  { items: [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2], direction: "left" },
];

const SPEEDS = [55, 70, 45]; // seconds per row — slow & smooth

// ── Scroll Track ──────────────────────────────────────────────────────────────
function Track({ items, direction, speed, paused, onItemClick }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `scroll${direction === "left" ? "Left" : "Right"} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((idx, i) => {
          const item = works[idx];
          return (
            <button
              key={i}
              onClick={() => onItemClick(idx)}
              className="
                relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px]
                rounded-2xl overflow-hidden cursor-pointer group bg-slate-100
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4fc3a1] focus-visible:ring-offset-2
              "
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="
                  w-full block object-cover
                  h-[120px] sm:h-[145px] md:h-[165px]
                  transition-transform duration-500 ease-out group-hover:scale-110
                "
              />
              {/* Overlay */}
              <div className="
                absolute inset-0 flex flex-col justify-end p-3
                bg-[#0E2630]/0 group-hover:bg-[#0E2630]/70
                transition-all duration-300
              ">
                <div className="
                  opacity-0 translate-y-2
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-200
                ">
                  <p className="text-[10px] text-[#4fc3a1] uppercase tracking-widest mb-0.5">{item.cat}</p>
                  <p className="text-[12px] sm:text-[13px] text-white font-medium leading-snug">{item.title}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ idx, onClose, onPrev, onNext }) {
  const item = works[idx];
  const [zoomed, setZoomed] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext, onClose]);

  // Reset zoom on item change
  useEffect(() => setZoomed(false), [idx]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E2630]/90 backdrop-blur-sm"
      onClick={onClose} px-4
    >
      <div
        className="bg-white rounded-3xl overflow-hidden w-full max-w-[92vw] sm:max-w-lg md:max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden cursor-zoom-in"
          onClick={() => setZoomed((z) => !z)}
        >
          <img
            src={item.img}
            alt={item.title}
            className={`
              w-full object-cover block
              max-h-[55vw] sm:max-h-[320px] md:max-h-[420px]
              transition-transform duration-500 ease-out
              ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100"}
            `}
          />
          {/* Zoom hint badge */}
          {!zoomed && (
            <span className="
              absolute top-3 right-3
              bg-black/40 text-white text-[11px] px-2.5 py-1 rounded-full
              backdrop-blur-sm pointer-events-none
            ">
              Click to zoom
            </span>
          )}
          {/* Counter pill */}
          <span className="
            absolute bottom-3 left-3
            bg-black/40 text-white text-[11px] px-2.5 py-1 rounded-full
            backdrop-blur-sm pointer-events-none
          ">
            {idx + 1} / {works.length}
          </span>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[11px] text-[#4fc3a1] uppercase tracking-widest mb-0.5">{item.cat}</p>
            <p className="text-[14px] sm:text-[16px] font-semibold text-[#0E2630] leading-snug">{item.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              aria-label="Previous"
              className="
                w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                text-[#0E2630] hover:bg-emerald-50 hover:border-emerald-300
                transition-colors duration-150 text-sm
              "
            >
              ←
            </button>
            <button
              onClick={onNext}
              aria-label="Next"
              className="
                w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                text-[#0E2630] hover:bg-emerald-50 hover:border-emerald-300
                transition-colors duration-150 text-sm
              "
            >
              →
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="
                w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                text-gray-400 hover:bg-gray-100 hover:text-gray-700
                transition-colors duration-150 text-sm
              "
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Gallery ──────────────────────────────────────────────────────────────
export default function WorksGallery() {
  const [paused, setPaused] = useState(false);
  const [lbIdx, setLbIdx] = useState(null);

  const openLb = useCallback((idx) => setLbIdx(idx), []);
  const closeLb = useCallback(() => setLbIdx(null), []);
  const prevLb = useCallback(() => setLbIdx((i) => (i - 1 + works.length) % works.length), []);
  const nextLb = useCallback(() => setLbIdx((i) => (i + 1) % works.length), []);

  return (
    <>
      {/* CSS keyframes injected once */}
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <section className=" bg-slate-950 py-14 md:py-20 overflow-hidden rounded-2xl ">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-lg mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#0E2630]" />
              <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#0E2630]">Our works</span>
              <span className="w-6 h-px bg-[#0E2630]" />
            </div>
            <h2 className="text-[26px] md:text-[34px] font-semibold text-[#0E2630] leading-tight tracking-tight mb-3">
              Crafted with <span className="text-[#4fc3a1]">precision</span>,<br />
              finished to perfection
            </h2>
            <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed">
              A showcase of our electroplating and religious metalwork projects — every piece engineered for durability and shine.
            </p>
          </div>

          {/* Tracks */}
          {/* <div
            className="flex flex-col gap-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {rows.map((row, ri) => (
              <Track
                key={ri}
                items={row.items}
                direction={row.direction}
                speed={SPEEDS[ri]}
                paused={paused}
                onItemClick={openLb}
              />
            ))}
          </div> */}

          <div
            className="relative flex flex-col gap-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left shadow */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-36 md:w-48 z-10
    bg-gradient-to-r from-black via-black/60 to-transparent" />

            {/* Right shadow */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-36 md:w-48 z-10
    bg-gradient-to-l from-black via-black/60 to-transparent" />

            {rows.map((row, ri) => (
              <Track
                key={ri}
                items={row.items}
                direction={row.direction}
                speed={SPEEDS[ri]}
                paused={paused}
                onItemClick={openLb}
              />
            ))}
          </div>

          <p className="text-center text-[12px] text-gray-300 mt-6">
            Hover to pause · Click any card to view
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lbIdx !== null && (
        <Lightbox
          idx={lbIdx}
          onClose={closeLb}
          onPrev={prevLb}
          onNext={nextLb}
        />
      )}
    </>
  );
}
