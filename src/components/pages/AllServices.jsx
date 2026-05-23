// import React, { useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import service from '../../assets/service1.jpg'

// import cross from "../../assets/cross/cross.webp";
// import dwajasthambam1 from "../../assets/dwajasthambam/dwajasthambam1.webp";
// import dwajasthambam2 from "../../assets/dwajasthambam/dwajasthambam2.webp";
// import flagpol from "../../assets/flagpole/flagpole2.webp";
// import flagpole from "../../assets/flagpole/flagpole3.webp";
// import flagpole3 from "../../assets/flagpole/flagpole4.webp";
// import flagpole4 from "../../assets/flagpole/flag1.webp";
// import kalasam from "../../assets/kalasam/kalasam.webp";
// import kalasam2 from "../../assets/kalasam/kalasam2.webp";
// import kalasam3 from "../../assets/kalasam/kalasam3.webp";
// import kalasam4 from "../../assets/kalasam/kalasam4.webp";
// import flaglight from "../../assets/thiruvatchi/flaglight.webp";
// import thiruvatchi from "../../assets/thiruvatchi/thiruvatchi1.webp";
// import donationbox from "../../assets/donationbox/box1.webp";
// import ContactSection from "../ContactSection";
// import { Link, useLocation, useOutletContext } from "react-router-dom";

// // electro plating 

// import brassplating from '../../assets/electro/brassplating.webp'
// import copperplating from '../../assets/electro/copperplating.jpg'
// import goldplating from '../../assets/electro/goldplating.webp'
// import lacker from '../../assets/electro/lacker.webp'
// import nickel from '../../assets/electro/nickel.jpg'
// import silverplating from '../../assets/electro/silverplating.jpg'
// import ReadMoreText from "./Readmore";



// const AllServices = () => {


//     const electroPlating = [
//         "Nickel Plating",
//         "Copper Plating",
//         "Silver Plating",
//         "Brass Plating",
//         "Gold Plating",
//         "Lacquer Coating",
//         "Flag Poles",
//     ];

//     const location = useLocation();
//     const sectionRefs = useRef({});


//     const { contactRef } = useOutletContext()
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     const services = [
//         {
//             id: 'Brass Church Cross',
//             title: "Brass Church Cross",
//             img: cross,
//             desc: `Our Brass Cross collection is crafted with premium-quality brass and finished with a glossy golden or silver coating for a rich, elegant appearance. Available in multiple sizes, including 4.5 feet and 2 feet, these crosses are designed with precision and traditional Christian craftsmanship.

// The cross is one of the most sacred symbols in Christianity, representing love, sacrifice, hope, forgiveness, and the victory of Jesus Christ over death. Its presence brings spiritual comfort and serves as a reminder of faith and devotion.

// These brass crosses are ideal for use in churches, sanctuaries, prayer halls, and home altars. Their strong material and polished finish ensure long-lasting shine and durability. They also serve as meaningful gifts for Christian festivals and special occasions such as Christmas, weddings, birthdays, anniversaries, and housewarmings.

// Whether used for religious worship, decoration, or ceremonial purposes, our Brass Crosses add beauty, elegance, and spiritual significance to any sacred space.`},
//         {
//             id: 'Brass Temple Dwajasthambam',
//             title: "Brass Temple Dwajasthambam",
//             img: dwajasthambam1,
//             desc: `A Dwajasthambam, or temple flagstaff, is an important spiritual structure placed inside temple premises, usually in front of the mukhamaṇḍapa (entrance pavilion). It represents devotion and is traditionally used to hoist the temple flag during festivals and rituals.

// This Dwajasthambam is crafted using a strong copper core, covered with high-quality brass cladding that gives it a beautiful golden finish. The polished surface, round shape, and detailed craftsmanship make it both visually appealing and long-lasting. Designed specially for temple use, it adds authenticity, elegance, and a sacred presence to the temple environment.

// Made in India, this Dwajasthambam combines traditional design with durable materials, ensuring it stands strong for many years.`},
//         {
//             id: 'Stainless Steel Flagpole',
//             title: "Stainless Steel Flagpole",
//             img: flagpole,
//             desc: `We provide high-quality Brass and Stainless Steel (SS) Church Flagpoles (Kodimaram) designed for durability, strength, and long-lasting shine. These flagpoles are commonly used in churches and religious institutions for hoisting flags during ceremonies and daily worship.

// Made from premium brass, an alloy of copper and zinc, the pole offers excellent durability, corrosion resistance, and an elegant golden appearance. The SS (stainless steel) option provides additional strength and a modern polished finish, ideal for both indoor and outdoor use.

// Our flagpoles are available in round or square shapes, designed to withstand weather conditions while maintaining a refined and traditional look. Perfect for churches, sanctuaries, and religious spaces, these flagpoles add beauty, dignity, and spiritual significance to the environment.` },
//         {
//             id: 'Copper Temple Kalasam',
//             title: "Copper Temple Kalasam",
//             img: kalasam,
//             desc: `The Temple Copper Gopura Kalasam is a traditional and sacred architectural ornament placed at the pinnacle of temple towers. Crafted from premium-quality copper, this kalasam features a rich reddish-brown glossy finish that enhances both its visual appeal and durability.

// In Hindu temple architecture, the kalasam holds deep spiritual meaning. It symbolizes divine presence, prosperity, purity, and protection. The pot-like shape represents abundance and is believed to invite positive energy, blessings, and harmony into the temple space.

// Designed with precision and traditional craftsmanship, this copper kalasam is suitable for temples, pooja rooms, and spiritual renovation projects. It can be customized in size and style to match different temple structures. Its strong copper material offers excellent longevity, weather resistance, and a timeless aesthetic that beautifully complements any sacred architecture.

// Whether used during new temple construction or restoration work, the Temple Copper Gopura Kalasam adds a touch of authenticity, sacredness, and cultural significance to the overall structure.`,
//         },
//         {
//             id: 'Golden Brass Flag Light',
//             title: "Golden Brass Flag Light",
//             img: flaglight,
//             desc: `This golden brass handicraft is a beautifully crafted decorative piece designed specifically for church use. Made from high-quality brass, it showcases the rich heritage of traditional metal artistry. Brass handicrafts have a long history in Indian craftsmanship, where skilled artisans transform raw metal into meaningful and elegant artworks.

// Known for their durability, shine, and timeless appeal, brass items reflect both aesthetic beauty and spiritual significance. The rectangular shape adds a classic and structured look, making it suitable for altars, sanctuaries, prayer halls, or church interiors.`},
//         {
//             id: 'Brass Prabhavali Thiruvatchi',
//             title: "Brass Prabhavali Thiruvatchi",
//             img: thiruvatchi,
//             desc: `This U-shaped brass temple handicraft is a finely crafted decorative piece designed to enhance the beauty and spiritual ambiance of any temple. Made from premium-quality brass, it features a stunning golden finish that reflects traditional Indian artistry and timeless elegance. Available in sizes ranging from 1 feet to 10 feet, it can be customized to suit small prayer rooms, traditional temples, or large sanctum spaces.

// Brass handicrafts have been an essential part of Indian culture for centuries. Skilled artisans use age-old techniques to create intricate and meaningful designs that symbolize devotion, purity, and tradition. The antique-style design adds a classic, heritage-inspired charm, making the piece suitable for traditional temple architecture and sacred interiors.

// Known for its durability, shine, and resistance to wear, brass is a preferred material for temple decor items that are meant to last for generations. The smooth finishing, artistic detailing, and perfect craftsmanship make this piece a true representation of traditional workmanship and spiritual value.

// Whether used as a decorative element, ritual accessory, or architectural highlight, this brass handicraft adds a rich, divine, and elegant touch to any temple setting.`},
//         {
//             id: 'Steel Donation Box',
//             title: "Steel Donation Box",
//             img: donationbox,
//             desc: `A donation box, also known as a collecting box, is a specially designed receptacle used to receive voluntary contributions from visitors, devotees, or the general public. These boxes are commonly placed in temples, churches, libraries, museums, community halls, and various non-profit organizations to encourage small, meaningful donations that support daily operations, charitable activities, and maintenance work.

// Our Brass Donation Box stands out for its exceptional craftsmanship, durability, and traditional appeal. Brass, being a strong and corrosion-resistant alloy, ensures long-lasting performance even in high-usage environments. The box is designed with a secure structure, elegant finishing, and an antique aesthetic that enhances the ambience of the place where it is installed. Its sturdy construction ensures safety, while its eye-catching golden sheen symbolizes purity and offering, making it ideal for religious and cultural spaces.

// This donation box perfectly blends functionality, security, and timeless artistry, making it a valuable addition for any organization seeking an elegant and reliable way to collect contributions.`},
//     ];


//     const electroServices = [
//         {


//             id: "Brass Plating",
//             title: "Brass Plating",
//             img: brassplating,
//             desc: "Enhances durability and provides a rich golden finish for religious and decorative metal items."
//         },
//         {
//             id: 'Copper Plating',
//             title: "Copper Plating",
//             img: copperplating,
//             desc: "Improves conductivity and corrosion resistance with a smooth copper finish."
//         },
//         {
//             id: 'Gold Plating',
//             title: "Gold Plating",
//             img: goldplating,
//             desc: "Premium electroplating for idols, ornaments, and sacred artifacts with long-lasting shine."
//         },
//         {
//             id: 'Silver Plating',
//             title: "Silver Plating",
//             img: silverplating,
//             desc: "Elegant silver finish for temple items and decorative metal works."
//         },
//         {
//             id: 'Nickel Plating',
//             title: "Nickel Plating",
//             img: nickel,
//             desc: "Protective coating that improves wear resistance and surface strength."
//         },
//         {
//             id: 'Lacquer Coating',
//             title: "Lacquer Coating",
//             img: lacker,
//             desc: "Transparent protective coating to preserve shine and prevent oxidation."
//         }
//     ];


//     useEffect(() => {
//         if (location.state?.target) {
//             const el = sectionRefs.current[location.state.target];
//             if (el) {
//                 el.scrollIntoView({ behavior: "smooth" });
//             }
//         }
//     }, [location]);

//     return (
//         <>

//             <section className="relative w-full h-[260px] sm:h-[300px] md:h-[380px] flex items-center justify-center">
//                 {/* Background Image */}
//                 <img
//                     src={service}
//                     alt="AVM Services Background"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/65"></div>

//                 {/* Content */}
//                 <div className="relative z-10 text-center text-white px-4 max-w-4xl">
//                     <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
//                         Our <span className="text-orange-400">Services</span>
//                     </h1>

//                     <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
//                         Religious Metal Works & Professional Electroplating Solutions
//                     </p>

//                     {/* Breadcrumb */}
//                     <nav className="text-xs sm:text-sm md:text-base text-gray-300">
//                         <Link
//                             to="/"
//                             className="hover:text-orange-400 transition-colors"
//                         >
//                             Home
//                         </Link>
//                         <span className="mx-2">/</span>
//                         <span className="text-orange-400 font-medium">
//                             Services
//                         </span>
//                     </nav>
//                 </div>
//             </section>
//             <section className="py-12 md:py-16 bg-gray-100">

//                 <div className="container mx-auto px-4 space-y-20">

//                     {/* RELIGIOUS SERVICES */}
//                     {services.map((item) => (
//                         <div
//                             ref={(el) => (sectionRefs.current[item.id] = el)}
//                             key={item.id}
//                             className="p-2 grid md:grid-cols-2 gap-10 items-center rounded-2xl bg-blue-100"
//                         >
//                             {/* IMAGE */}
//                             <div data-aos="fade-up" className="flex justify-center">
//                                 <div className="w-full max-w-[320px] aspect-3/4 bg-white border rounded-lg overflow-hidden">
//                                     <img
//                                         src={item.img}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             </div>

//                             {/* CONTENT */}
//                             <div data-aos="fade-up">
//                                 <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
//                                     {item.title}
//                                 </h3>

//                                     <ReadMoreText
//                                             text={item.desc}
//                                               maxLength={400}
//                                             />

//                             </div>
//                         </div>
//                     ))}

//                     {/* ELECTROPLATING SERVICES */}
//                     {electroServices.map((item, index) => (
//                         <div
//                             key={index}
//                             ref={(el) => (sectionRefs.current[item.id] = el)}

//                             data-aos="fade-up"
//                             className="p-2 grid md:grid-cols-2 gap-10 items-center rounded-2xl bg-blue-100"
//                         >
//                             {/* IMAGE */}
//                             <div className=" flex justify-center">
//                                 <div className=" w-full max-w-[320px] aspect-3/4 bg-white border rounded-lg overflow-hidden">
//                                     <img
//                                         src={item.img}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             </div>

//                             {/* CONTENT */}
//                             <div>
//                                 <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-gray-700 text-base leading-relaxed">
//                                     {item.desc}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </section>


//             <div ref={contactRef}>


//             </div>
//             <ContactSection />
//         </>
//     );
// };

// export default AllServices;


// import React, { useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import service from '../../assets/service1.jpg';

// import cross from "../../assets/cross/cross.webp";
// import dwajasthambam1 from "../../assets/dwajasthambam/dwajasthambam1.webp";
// import dwajasthambam2 from "../../assets/dwajasthambam/dwajasthambam2.webp";
// import flagpol from "../../assets/flagpole/flagpole2.webp";
// import flagpole from "../../assets/flagpole/flagpole3.webp";
// import flagpole3 from "../../assets/flagpole/flagpole4.webp";
// import flagpole4 from "../../assets/flagpole/flag1.webp";
// import kalasam from "../../assets/kalasam/kalasam.webp";
// import kalasam2 from "../../assets/kalasam/kalasam2.webp";
// import kalasam3 from "../../assets/kalasam/kalasam3.webp";
// import kalasam4 from "../../assets/kalasam/kalasam4.webp";
// import flaglight from "../../assets/thiruvatchi/flaglight.webp";
// import thiruvatchi from "../../assets/thiruvatchi/thiruvatchi1.webp";
// import donationbox from "../../assets/donationbox/box1.webp";
// import ContactSection from "../ContactSection";
// import { Link, useLocation, useOutletContext } from "react-router-dom";

// import brassplating from '../../assets/electro/brassplating.webp';
// import copperplating from '../../assets/electro/copperplating.jpg';
// import goldplating from '../../assets/electro/goldplating.webp';
// import lacker from '../../assets/electro/lacker.webp';
// import nickel from '../../assets/electro/nickel.jpg';
// import silverplating from '../../assets/electro/silverplating.jpg';
// import ReadMoreText from "./Readmore";

// // ─── Section Divider ────────────────────────────────────────────
// const GoldDivider = () => (
//   <div className="flex items-center gap-4 my-2">
//     <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
//     <div className="w-2 h-2 rotate-45 bg-amber-500" />
//     <div className="w-3 h-3 rotate-45 border-2 border-amber-500" />
//     <div className="w-2 h-2 rotate-45 bg-amber-500" />
//     <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
//   </div>
// );

// // ─── Section Label Badge ─────────────────────────────────────────
// const CategoryBadge = ({ label, icon }) => (
//   <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/40 text-amber-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
//     <span>{icon}</span>
//     {label}
//   </div>
// );

// // ─── Religious Service Card (alternating layout) ─────────────────
// const ServiceCard = ({ item, index }) => {
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       ref={undefined}
//       data-aos={isEven ? "fade-right" : "fade-left"}
//       data-aos-duration="800"
//       data-aos-delay={index * 50}
//       className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100"
//     >
//       {/* Gold accent top bar */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600" />

//       <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} min-h-[320px]`}>

//         {/* ── Image Side ── */}
//         <div className="relative md:w-2/5 w-full h-64 md:h-auto overflow-hidden flex-shrink-0">
//           <img
//             src={item.img}
//             alt={item.title}
//             loading="lazy"
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           {/* gradient overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} from-transparent to-black/30`} />

//           {/* Index badge */}
//           <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
//             {String(index + 1).padStart(2, "0")}
//           </div>
//         </div>

//         {/* ── Content Side ── */}
//         <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
//           <CategoryBadge label="Religious Metal Works" icon="🪔" />
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-snug">
//             {item.title}
//           </h3>
//           {/* <GoldDivider /> */}
//           <div className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
//             <ReadMoreText text={item.desc} maxLength={320} />
//           </div>

//           {/* decorative corner element */}
//           <div className="mt-6 flex items-center gap-2">
//             <div className="w-8 h-0.5 bg-amber-400" />
//             <div className="w-2 h-2 rotate-45 bg-amber-400" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── Electroplating Card (grid layout) ───────────────────────────
// const ElectroCard = ({ item, index }) => (
//   <div
//     data-aos="zoom-in-up"
//     data-aos-duration="700"
//     data-aos-delay={index * 80}
//     className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-1"
//   >
//     {/* Top gold line */}
//     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//     {/* Image */}
//     <div className="relative h-52 overflow-hidden">
//       <img
//         src={item.img}
//         alt={item.title}
//         loading="lazy"
//         className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//       {/* Icon tag */}
//       <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
//         Electroplating
//       </div>
//     </div>

//     {/* Content */}
//     <div className="p-5">
//       <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">{item.title}</h4>
//       <div className="w-8 h-0.5 bg-amber-400 mb-3" />
//       <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//     </div>
//   </div>
// );

// // ─── Section Heading ─────────────────────────────────────────────
// const SectionHeading = ({ tag, title, highlight, subtitle }) => (
//   <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
//     <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-3">
//       {tag}
//     </span>
//     <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
//       {title}{" "}
//       <span className="relative inline-block">
//         <span className="relative z-10 text-amber-500">{highlight}</span>
//         <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-100 -z-0 rounded" />
//       </span>
//     </h2>
//     {subtitle && (
//       <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto mt-2">{subtitle}</p>
//     )}
//     {/* decorative line */}
//     <div className="flex items-center justify-center gap-2 mt-5">
//       <div className="w-12 h-px bg-amber-300" />
//       <div className="w-2 h-2 rotate-45 bg-amber-400" />
//       <div className="w-20 h-0.5 bg-amber-500" />
//       <div className="w-2 h-2 rotate-45 bg-amber-400" />
//       <div className="w-12 h-px bg-amber-300" />
//     </div>
//   </div>
// );

// // ─── Main Component ───────────────────────────────────────────────
// const AllServices = () => {
//   const location = useLocation();
//   const sectionRefs = useRef({});
//   const { contactRef } = useOutletContext();

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
//   }, []);

//   const services = [
//     {
//       id: "Brass Church Cross",
//       title: "Brass Church Cross",
//       img: cross,
//       desc: `Our Brass Cross collection is crafted with premium-quality brass and finished with a glossy golden or silver coating for a rich, elegant appearance. Available in multiple sizes, including 4.5 feet and 2 feet, these crosses are designed with precision and traditional Christian craftsmanship.

// The cross is one of the most sacred symbols in Christianity, representing love, sacrifice, hope, forgiveness, and the victory of Jesus Christ over death. Its presence brings spiritual comfort and serves as a reminder of faith and devotion.

// These brass crosses are ideal for use in churches, sanctuaries, prayer halls, and home altars. Their strong material and polished finish ensure long-lasting shine and durability. They also serve as meaningful gifts for Christian festivals and special occasions such as Christmas, weddings, birthdays, anniversaries, and housewarmings.`,
//     },
//     {
//       id: "Brass Temple Dwajasthambam",
//       title: "Brass Temple Dwajasthambam",
//       img: dwajasthambam1,
//       desc: `A Dwajasthambam, or temple flagstaff, is an important spiritual structure placed inside temple premises, usually in front of the mukhamaṇḍapa (entrance pavilion). It represents devotion and is traditionally used to hoist the temple flag during festivals and rituals.

// This Dwajasthambam is crafted using a strong copper core, covered with high-quality brass cladding that gives it a beautiful golden finish. The polished surface, round shape, and detailed craftsmanship make it both visually appealing and long-lasting.`,
//     },
//     {
//       id: "Stainless Steel Flagpole",
//       title: "Stainless Steel Flagpole",
//       img: flagpole,
//       desc: `We provide high-quality Brass and Stainless Steel (SS) Church Flagpoles (Kodimaram) designed for durability, strength, and long-lasting shine. These flagpoles are commonly used in churches and religious institutions for hoisting flags during ceremonies and daily worship.

// Made from premium brass, an alloy of copper and zinc, the pole offers excellent durability, corrosion resistance, and an elegant golden appearance. The SS option provides additional strength and a modern polished finish, ideal for both indoor and outdoor use.`,
//     },
//     {
//       id: "Copper Temple Kalasam",
//       title: "Copper Temple Kalasam",
//       img: kalasam,
//       desc: `The Temple Copper Gopura Kalasam is a traditional and sacred architectural ornament placed at the pinnacle of temple towers. Crafted from premium-quality copper, this kalasam features a rich reddish-brown glossy finish that enhances both its visual appeal and durability.

// In Hindu temple architecture, the kalasam holds deep spiritual meaning. It symbolizes divine presence, prosperity, purity, and protection. Designed with precision and traditional craftsmanship, it is suitable for temples, pooja rooms, and spiritual renovation projects.`,
//     },
//     {
//       id: "Golden Brass Flag Light",
//       title: "Golden Brass Flag Light",
//       img: flaglight,
//       desc: `This golden brass handicraft is a beautifully crafted decorative piece designed specifically for church use. Made from high-quality brass, it showcases the rich heritage of traditional metal artistry. Known for their durability, shine, and timeless appeal, brass items reflect both aesthetic beauty and spiritual significance. The rectangular shape adds a classic and structured look, making it suitable for altars, sanctuaries, and prayer halls.`,
//     },
//     {
//       id: "Brass Prabhavali Thiruvatchi",
//       title: "Brass Prabhavali Thiruvatchi",
//       img: thiruvatchi,
//       desc: `This U-shaped brass temple handicraft is a finely crafted decorative piece designed to enhance the beauty and spiritual ambiance of any temple. Made from premium-quality brass, it features a stunning golden finish that reflects traditional Indian artistry and timeless elegance. Available in sizes ranging from 1 feet to 10 feet, it can be customized to suit small prayer rooms, traditional temples, or large sanctum spaces.`,
//     },
//     {
//       id: "Steel Donation Box",
//       title: "Steel Donation Box",
//       img: donationbox,
//       desc: `A donation box is a specially designed receptacle used to receive voluntary contributions from visitors and devotees. Our Brass Donation Box stands out for its exceptional craftsmanship, durability, and traditional appeal. Brass ensures long-lasting performance even in high-usage environments. Its sturdy construction ensures safety, while its eye-catching golden sheen symbolizes purity and offering.`,
//     },
//   ];

//   const electroServices = [
//     { id: "Brass Plating",   title: "Brass Plating",   img: brassplating,   desc: "Enhances durability and provides a rich golden finish for religious and decorative metal items." },
//     { id: "Copper Plating",  title: "Copper Plating",  img: copperplating,  desc: "Improves conductivity and corrosion resistance with a smooth, refined copper finish." },
//     { id: "Gold Plating",    title: "Gold Plating",    img: goldplating,    desc: "Premium electroplating for idols, ornaments, and sacred artifacts with long-lasting shine." },
//     { id: "Silver Plating",  title: "Silver Plating",  img: silverplating,  desc: "Elegant silver finish for temple items and decorative metal works." },
//     { id: "Nickel Plating",  title: "Nickel Plating",  img: nickel,         desc: "Protective coating that improves wear resistance and surface strength." },
//     { id: "Lacquer Coating", title: "Lacquer Coating", img: lacker,         desc: "Transparent protective coating to preserve shine and prevent oxidation." },
//   ];

//   useEffect(() => {
//     if (location.state?.target) {
//       const el = sectionRefs.current[location.state.target];
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [location]);

//   return (
//     <>
//       {/* ── HERO BANNER ── */}
//       <section className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
//         <img
//           src={service}
//           alt="AVM Services"
//           className="absolute inset-0 w-full h-full object-cover scale-105"
//         />
//         {/* layered overlays for depth */}
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />

//         {/* animated gold lines */}
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl" data-aos="fade-up">
//           {/* decorative element */}
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-8 h-px bg-amber-400" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
//             <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">AVM Metal Works</span>
//             <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
//             <div className="w-8 h-px bg-amber-400" />
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//             Our <span className="text-amber-400">Services</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-5 max-w-xl mx-auto">
//             Religious Metal Works & Professional Electroplating Solutions
//           </p>

//           {/* Breadcrumb */}
//           <nav className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-slate-300">
//             <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
//             <span className="text-amber-500">›</span>
//             <span className="text-amber-400 font-semibold">Services</span>
//           </nav>
//         </div>
//       </section>

//       {/* ── RELIGIOUS SERVICES ── */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 relative overflow-hidden">
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-[0.03]"
//           style={{ backgroundImage: "radial-gradient(circle, #b45309 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <SectionHeading
//             tag="Handcrafted with Devotion"
//             title="Religious Metal"
//             highlight="Works"
//             subtitle="Timeless craftsmanship for sacred spaces — temples, churches & prayer halls"
//           />

//           <div className="space-y-8 md:space-y-12">
//             {services.map((item, index) => (
//               <div
//                 key={item.id}
//                 ref={(el) => (sectionRefs.current[item.id] = el)}
//               >
//                 <ServiceCard item={item} index={index} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── DIVIDER BAND ── */}
//       <div className="relative">

//       </div>

//       {/* ── ELECTROPLATING GRID ── */}
//       <section className="py-10 md:py-20 bg-white relative overflow-hidden">

//         {/* subtle diagonal bg */}
//         <div className="absolute inset-0 opacity-[0.025]"/>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <SectionHeading
//             tag="Advanced Finishing"
//             title="Electroplating"
//             highlight="Services"
//             subtitle="Professional metal coating for durability, aesthetics & corrosion protection"
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {electroServices.map((item, index) => (
//               <div key={item.id} ref={(el) => (sectionRefs.current[item.id] = el)}>
//                 <ElectroCard item={item} index={index} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT REF ── */}
//       <div ref={contactRef} />
//       <ContactSection />
//     </>
//   );
// };

// export default AllServices;


import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import service from '../../assets/service1.jpg';

import cross from "../../assets/cross/cross.webp";
import dwajasthambam1 from "../../assets/dwajasthambam/dwajasthambam1.webp";
import flagpole from "../../assets/flagpole/flagpole3.webp";
import kalasam from "../../assets/kalasam/kalasam.webp";
import flaglight from "../../assets/thiruvatchi/flaglight.webp";
import thiruvatchi from "../../assets/thiruvatchi/thiruvatchi1.webp";
import donationbox from "../../assets/donationbox/box1.webp";
import ContactSection from "../ContactSection";
import { Link, useLocation, useOutletContext } from "react-router-dom";

import brassplating from '../../assets/electro/brassplating.webp';
import copperplating from '../../assets/electro/copperplating.jpg';
import goldplating from '../../assets/electro/goldplating.webp';
import lacker from '../../assets/electro/lacker.webp';
import nickel from '../../assets/electro/nickel.jpg';
import silverplating from '../../assets/electro/silverplating.jpg';
import ReadMoreText from "./Readmore";

// ─── Category Badge ───────────────────────────────────────────────
const CategoryBadge = ({ label }) => (
    <div className="inline-flex items-center gap-2 bg-amber-500/10 border  text-amber-600 text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
        <span className="w-1.5 h-1.5 rounded-full" />
        {label}
    </div>
);

// ─── Section Heading ──────────────────────────────────────────────
const SectionHeading = ({ tag, title, highlight, subtitle }) => (
    <div className="text-center mb-8 md:mb-12 lg:mb-10" data-aos="fade-up">
        <span className="inline-block text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-2">
            {tag}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
            {title}{" "}
            <span className="relative inline-block">
                <span className="relative z-10 text-amber-500">{highlight}</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-amber-100 -z-0 rounded" />
            </span>
        </h2>
        {subtitle && (
            <p className="text-slate-500 text-sm sm:text-base lg:text-sm max-w-lg mx-auto mt-2">{subtitle}</p>
        )}
        <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-px bg-amber-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
            <div className="w-16 h-0.5 bg-amber-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
            <div className="w-10 h-px bg-amber-300" />
        </div>
    </div>
);

// ─── Unified Service Card (same design for both sections) ─────────
const ServiceCard = ({ item, index, badge }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            data-aos={isEven ? "fade-right" : "fade-left"}
            data-aos-duration="700"
            data-aos-delay={index * 40}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100"
        >
            {/* Gold top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 " />

            <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

                {/* ── Image ── */}
                <div
                    className="
    relative flex-shrink-0 overflow-hidden
    w-full h-80
    sm:h-70
    md:w-2/5 md:h-auto
    lg:w-[30%]
    min-h-[200px]
  "
                >
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="
            bsolute inset-0
      w-full h-full
      object-cover
      transition-transform duration-700
      group-hover:scale-110
    "
                    />

                    {/* gradient overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"
                            } from-transparent to-black/25`}
                    />

                    {/* Number badge */}
                    {/* <div className="absolute top-3 left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                        {String(index + 1).padStart(2, "0")}
                    </div> */}
                </div>

                {/* ── Content ── */}
                <div className="flex-1 p-5 sm:p-6 md:p-7 lg:p-6 flex flex-col justify-center">
                    <CategoryBadge label={badge} />
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl font-bold text-slate-800 mb-2 leading-snug">
                        {item.title}
                    </h3>

                    <div className="w-8 h-0.5 bg-amber-400 mb-3 group-hover:w-14 transition-all duration-500" />
                    <div className="text-slate-600 text-sm lg:text-[13px] leading-relaxed">
                        <ReadMoreText text={item.desc} maxLength={280} />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-amber-400" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────
const AllServices = () => {
    const location = useLocation();
    const sectionRefs = useRef({});
    const { contactRef } = useOutletContext();

    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    }, []);

    const services = [
        {
            id: "Brass Church Cross",
            title: "Brass Church Cross",
            img: cross,
            desc: `Our Brass Cross collection is crafted with premium-quality brass and finished with a glossy golden or silver coating for a rich, elegant appearance. Available in multiple sizes, including 4.5 feet and 2 feet, these crosses are designed with precision and traditional Christian craftsmanship. The cross is one of the most sacred symbols in Christianity, representing love, sacrifice, hope, forgiveness, and the victory of Jesus Christ over death. Ideal for churches, sanctuaries, prayer halls, and home altars.`,
        },
        {
            id: "Brass Temple Dwajasthambam",
            title: "Brass Temple Dwajasthambam",
            img: dwajasthambam1,
            desc: `A Dwajasthambam, or temple flagstaff, is an important spiritual structure placed inside temple premises, usually in front of the mukhamaṇḍapa (entrance pavilion). It represents devotion and is traditionally used to hoist the temple flag during festivals and rituals. Crafted using a strong copper core covered with high-quality brass cladding that gives it a beautiful golden finish.`,
        },
        {
            id: "Stainless Steel Flagpole",
            title: "Stainless Steel Flagpole",
            img: flagpole,
            desc: `We provide high-quality Brass and Stainless Steel Church Flagpoles (Kodimaram) designed for durability, strength, and long-lasting shine. Commonly used in churches and religious institutions for hoisting flags during ceremonies and daily worship. Made from premium brass offering excellent durability, corrosion resistance, and an elegant golden appearance.`,
        },
        {
            id: "Copper Temple Kalasam",
            title: "Copper Temple Kalasam",
            img: kalasam,
            desc: `The Temple Copper Gopura Kalasam is a traditional and sacred architectural ornament placed at the pinnacle of temple towers. Crafted from premium-quality copper, this kalasam features a rich reddish-brown glossy finish. In Hindu temple architecture, the kalasam symbolizes divine presence, prosperity, purity, and protection. Suitable for temples, pooja rooms, and spiritual renovation projects.`,
        },
        {
            id: "Golden Brass Flag Light",
            title: "Golden Brass Flag Light",
            img: flaglight,
            desc: `This golden brass handicraft is a beautifully crafted decorative piece designed specifically for church use. Made from high-quality brass, it showcases the rich heritage of traditional metal artistry. Known for their durability, shine, and timeless appeal, brass items reflect both aesthetic beauty and spiritual significance. Suitable for altars, sanctuaries, prayer halls, and church interiors.`,
        },
        {
            id: "Brass Prabhavali Thiruvatchi",
            title: "Brass Prabhavali Thiruvatchi",
            img: thiruvatchi,
            desc: `This U-shaped brass temple handicraft is a finely crafted decorative piece designed to enhance the beauty and spiritual ambiance of any temple. Made from premium-quality brass, it features a stunning golden finish reflecting traditional Indian artistry. Available in sizes ranging from 1 feet to 10 feet, customizable to suit small prayer rooms, traditional temples, or large sanctum spaces.`,
        },
        {
            id: "Steel Donation Box",
            title: "Steel Donation Box",
            img: donationbox,
            desc: `A donation box is a specially designed receptacle used to receive voluntary contributions from visitors and devotees. Our Brass Donation Box stands out for its exceptional craftsmanship, durability, and traditional appeal. Brass ensures long-lasting performance even in high-usage environments. Its sturdy construction ensures safety, while its golden sheen symbolizes purity and offering.`,
        },
    ];

    const electroServices = [
        {
            id: "Brass Plating",
            title: "Brass Plating",
            img: brassplating,
            desc: `Brass plating enhances durability and provides a rich golden finish for religious and decorative metal items. The process bonds a thin layer of brass alloy onto the base metal, giving it a warm, lustrous appearance that resists tarnish and corrosion. Ideal for temple articles, decorative fixtures, and ceremonial items requiring a premium golden look.`,
        },
        {
            id: "Copper Plating",
            title: "Copper Plating",
            img: copperplating,
            desc: `Copper plating improves conductivity and corrosion resistance with a smooth, refined copper finish. The electroplating process deposits a thin copper layer that bonds firmly to the base metal, offering enhanced durability and a warm reddish-brown aesthetic. Widely used for temple artifacts, electrical components, and decorative metalwork requiring superior surface quality.`,
        },
        {
            id: "Gold Plating",
            title: "Gold Plating",
            img: goldplating,
            desc: `Premium gold electroplating for idols, ornaments, and sacred artifacts with long-lasting shine. Our gold plating service uses high-purity gold deposits to create a rich, durable surface finish that resists tarnishing and adds tremendous visual value. Suitable for religious idols, jewelry, trophy items, and luxury decorative pieces requiring authentic golden brilliance.`,
        },
        {
            id: "Silver Plating",
            title: "Silver Plating",
            img: silverplating,
            desc: `Elegant silver finish for temple items and decorative metal works. Silver plating deposits a thin, highly reflective layer of pure silver onto metal surfaces, providing excellent aesthetic appeal, antimicrobial properties, and corrosion resistance. Perfect for pooja items, decorative figurines, serving articles, and ceremonial metalwork that require a premium silver appearance.`,
        },
        {
            id: "Nickel Plating",
            title: "Nickel Plating",
            img: nickel,
            desc: `Nickel plating provides a protective coating that significantly improves wear resistance and surface strength. The hard nickel layer shields base metals from corrosion, abrasion, and environmental damage while delivering a bright, semi-glossy finish. Commonly applied to industrial parts, automotive components, decorative hardware, and metal items requiring enhanced durability and surface hardness.`,
        },
        {
            id: "Lacquer Coating",
            title: "Lacquer Coating",
            img: lacker,
            desc: `Transparent lacquer coating preserves shine and prevents oxidation on plated and polished metal surfaces. This protective clear coat seals the surface from moisture, air, and chemical exposure, maintaining the original finish for years. Applied as the final finishing step on brass, copper, silver, and gold plated items to lock in brilliance and extend product life.`,
        },
    ];

    useEffect(() => {
        if (location.state?.target) {
            const el = sectionRefs.current[location.state.target];
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [location]);

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[360px] flex items-center justify-center overflow-hidden">
                <img
                    src={service}
                    alt="AVM Services"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                <div className="relative z-10 text-center text-white px-4 max-w-3xl" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-6 h-px bg-amber-400" />
                        <div className="w-1 h-1 rotate-45 bg-amber-400" />
                        <span className="text-amber-400 text-[10px] font-bold tracking-[0.3em] uppercase">AVM Metal Works</span>
                        <div className="w-1 h-1 rotate-45 bg-amber-400" />
                        <div className="w-6 h-px bg-amber-400" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold mb-3 leading-tight">
                        Our <span className="text-amber-400">Services</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 mb-4 max-w-md mx-auto">
                        Religious Metal Works & Professional Electroplating Solutions
                    </p>
                    <nav className="inline-flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-slate-300">
                        <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                        <span className="text-amber-500">›</span>
                        <span className="text-amber-400 font-semibold">Services</span>
                    </nav>
                </div>
            </section>

            {/* ── RELIGIOUS SERVICES ── */}
            <section className="py-12 md:py-16 lg:py-14 bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "radial-gradient(circle, #b45309 1px, transparent 1px)", backgroundSize: "30px 30px" }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
                    <SectionHeading
                        tag="Handcrafted with Devotion"
                        title="Religious Metal"
                        highlight="Works"
                        subtitle="Timeless craftsmanship for sacred spaces — temples, churches & prayer halls"
                    />
                    <div className="space-y-6 md:space-y-8 lg:space-y-6">
                        {services.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (sectionRefs.current[item.id] = el)}
                            >
                                <ServiceCard item={item} index={index} badge="Religious Metal Works" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ELECTROPLATING SERVICES ── */}
            <section className="py-12 md:py-16 lg:py-14 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: "radial-gradient(circle, #b45309 1px, transparent 1px)", backgroundSize: "30px 30px" }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
                    <SectionHeading
                        tag="Advanced Finishing"
                        title="Electroplating"
                        highlight="Services"
                        subtitle="Professional metal coating for durability, aesthetics & corrosion protection"
                    />
                    <div className="space-y-6 md:space-y-8 lg:space-y-6">
                        {electroServices.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => (sectionRefs.current[item.id] = el)}
                            >
                                <ServiceCard item={item} index={index} badge="Electroplating" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <div ref={contactRef} />
            <ContactSection />
        </>
    );
};

export default AllServices;