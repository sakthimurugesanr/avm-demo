import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cross from "../../assets/cross/cross1.webp";
import dwajasthambam1 from "../../assets/dwajasthambam/dwajasthambam1.webp";
import dwajasthambam2 from "../../assets/dwajasthambam/dwajasthambam2.webp";
import flagpole from "../../assets/flagpole/flagpole2.webp";
import flagpole2 from "../../assets/flagpole/flagpole3.webp";
import flagpole3 from "../../assets/flagpole/flagpole4.webp";
import flagpole4 from "../../assets/flagpole/flag1.webp";
import kalasam from "../../assets/kalasam/kalasam.webp";
import kalasam2 from "../../assets/kalasam/kalasam2.webp";
import kalasam3 from "../../assets/kalasam/kalasam3.webp";
import kalasam4 from "../../assets/kalasam/kalasam4.webp";
import flaglight from "../../assets/thiruvatchi/flaglight.webp";
import thiruvatchi from "../../assets/thiruvatchi/thiruvatchi1.webp";
import donationbox from "../../assets/donationbox/box1.webp";
import ContactSection from "../ContactSection";
import { Link, useLocation, useOutletContext } from "react-router-dom";

// electro plating 

import brassplating from '../../assets/electro/brassplating.webp'
import copperplating from '../../assets/electro/copperplating.jpg'
import goldplating from '../../assets/electro/goldplating.webp'
import lacker from '../../assets/electro/lacker.webp'
import nickel from '../../assets/electro/nickel.jpg'
import silverplating from '../../assets/electro/silverplating.jpg'



const AllServices = () => {


    const electroPlating = [
        "Nickel Plating",
        "Copper Plating",
        "Silver Plating",
        "Brass Plating",
        "Gold Plating",
        "Lacquer Coating",
        "Flag Poles",
    ];

    const location = useLocation();
    const sectionRefs = useRef({});


    const { contactRef } = useOutletContext()
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const services = [
        {
            id: 'Brass Church Cross',
            title: "Brass Church Cross",
            img: cross,
            desc: `Our Brass Cross collection is crafted with premium-quality brass and finished with a glossy golden or silver coating for a rich, elegant appearance. Available in multiple sizes, including 4.5 feet and 2 feet, these crosses are designed with precision and traditional Christian craftsmanship.

The cross is one of the most sacred symbols in Christianity, representing love, sacrifice, hope, forgiveness, and the victory of Jesus Christ over death. Its presence brings spiritual comfort and serves as a reminder of faith and devotion.

These brass crosses are ideal for use in churches, sanctuaries, prayer halls, and home altars. Their strong material and polished finish ensure long-lasting shine and durability. They also serve as meaningful gifts for Christian festivals and special occasions such as Christmas, weddings, birthdays, anniversaries, and housewarmings.

Whether used for religious worship, decoration, or ceremonial purposes, our Brass Crosses add beauty, elegance, and spiritual significance to any sacred space.`},
        {
            id: 'Brass Temple Dwajasthambam',
            title: "Brass Temple Dwajasthambam",
            img: dwajasthambam1,
            desc: `A Dwajasthambam, or temple flagstaff, is an important spiritual structure placed inside temple premises, usually in front of the mukhamaṇḍapa (entrance pavilion). It represents devotion and is traditionally used to hoist the temple flag during festivals and rituals.

This Dwajasthambam is crafted using a strong copper core, covered with high-quality brass cladding that gives it a beautiful golden finish. The polished surface, round shape, and detailed craftsmanship make it both visually appealing and long-lasting. Designed specially for temple use, it adds authenticity, elegance, and a sacred presence to the temple environment.

Made in India, this Dwajasthambam combines traditional design with durable materials, ensuring it stands strong for many years.`},
        {
            id: 'Stainless Steel Flagpole',
            title: "Stainless Steel Flagpole",
            img: flagpole,
            desc: `We provide high-quality Brass and Stainless Steel (SS) Church Flagpoles (Kodimaram) designed for durability, strength, and long-lasting shine. These flagpoles are commonly used in churches and religious institutions for hoisting flags during ceremonies and daily worship.

Made from premium brass, an alloy of copper and zinc, the pole offers excellent durability, corrosion resistance, and an elegant golden appearance. The SS (stainless steel) option provides additional strength and a modern polished finish, ideal for both indoor and outdoor use.

Our flagpoles are available in round or square shapes, designed to withstand weather conditions while maintaining a refined and traditional look. Perfect for churches, sanctuaries, and religious spaces, these flagpoles add beauty, dignity, and spiritual significance to the environment.` },
        {
            id: 'Copper Temple Kalasam',
            title: "Copper Temple Kalasam",
            img: kalasam,
            desc: `The Temple Copper Gopura Kalasam is a traditional and sacred architectural ornament placed at the pinnacle of temple towers. Crafted from premium-quality copper, this kalasam features a rich reddish-brown glossy finish that enhances both its visual appeal and durability.

In Hindu temple architecture, the kalasam holds deep spiritual meaning. It symbolizes divine presence, prosperity, purity, and protection. The pot-like shape represents abundance and is believed to invite positive energy, blessings, and harmony into the temple space.

Designed with precision and traditional craftsmanship, this copper kalasam is suitable for temples, pooja rooms, and spiritual renovation projects. It can be customized in size and style to match different temple structures. Its strong copper material offers excellent longevity, weather resistance, and a timeless aesthetic that beautifully complements any sacred architecture.

Whether used during new temple construction or restoration work, the Temple Copper Gopura Kalasam adds a touch of authenticity, sacredness, and cultural significance to the overall structure.`,
        },
        {
            id: 'Golden Brass Flag Light',
            title: "Golden Brass Flag Light",
            img: flaglight,
            desc: `This golden brass handicraft is a beautifully crafted decorative piece designed specifically for church use. Made from high-quality brass, it showcases the rich heritage of traditional metal artistry. Brass handicrafts have a long history in Indian craftsmanship, where skilled artisans transform raw metal into meaningful and elegant artworks.

Known for their durability, shine, and timeless appeal, brass items reflect both aesthetic beauty and spiritual significance. The rectangular shape adds a classic and structured look, making it suitable for altars, sanctuaries, prayer halls, or church interiors.`},
        {
            id: 'Brass Prabhavali Thiruvatchi',
            title: "Brass Prabhavali Thiruvatchi",
            img: thiruvatchi,
            desc: `This U-shaped brass temple handicraft is a finely crafted decorative piece designed to enhance the beauty and spiritual ambiance of any temple. Made from premium-quality brass, it features a stunning golden finish that reflects traditional Indian artistry and timeless elegance. Available in sizes ranging from 1 feet to 10 feet, it can be customized to suit small prayer rooms, traditional temples, or large sanctum spaces.

Brass handicrafts have been an essential part of Indian culture for centuries. Skilled artisans use age-old techniques to create intricate and meaningful designs that symbolize devotion, purity, and tradition. The antique-style design adds a classic, heritage-inspired charm, making the piece suitable for traditional temple architecture and sacred interiors.

Known for its durability, shine, and resistance to wear, brass is a preferred material for temple decor items that are meant to last for generations. The smooth finishing, artistic detailing, and perfect craftsmanship make this piece a true representation of traditional workmanship and spiritual value.

Whether used as a decorative element, ritual accessory, or architectural highlight, this brass handicraft adds a rich, divine, and elegant touch to any temple setting.`},
        {
            id: 'Steel Donation Box',
            title: "Steel Donation Box",
            img: donationbox,
            desc: `A donation box, also known as a collecting box, is a specially designed receptacle used to receive voluntary contributions from visitors, devotees, or the general public. These boxes are commonly placed in temples, churches, libraries, museums, community halls, and various non-profit organizations to encourage small, meaningful donations that support daily operations, charitable activities, and maintenance work.

Our Brass Donation Box stands out for its exceptional craftsmanship, durability, and traditional appeal. Brass, being a strong and corrosion-resistant alloy, ensures long-lasting performance even in high-usage environments. The box is designed with a secure structure, elegant finishing, and an antique aesthetic that enhances the ambience of the place where it is installed. Its sturdy construction ensures safety, while its eye-catching golden sheen symbolizes purity and offering, making it ideal for religious and cultural spaces.

This donation box perfectly blends functionality, security, and timeless artistry, making it a valuable addition for any organization seeking an elegant and reliable way to collect contributions.`},
    ];


    const electroServices = [
        {


            id: "Brass Plating",
            title: "Brass Plating",
            img: brassplating,
            desc: "Enhances durability and provides a rich golden finish for religious and decorative metal items."
        },
        {
            id: 'Copper Plating',
            title: "Copper Plating",
            img: copperplating,
            desc: "Improves conductivity and corrosion resistance with a smooth copper finish."
        },
        {
            id: 'Gold Plating',
            title: "Gold Plating",
            img: goldplating,
            desc: "Premium electroplating for idols, ornaments, and sacred artifacts with long-lasting shine."
        },
        {
            id: 'Silver Plating',
            title: "Silver Plating",
            img: silverplating,
            desc: "Elegant silver finish for temple items and decorative metal works."
        },
        {
            id: 'Nickel Plating',
            title: "Nickel Plating",
            img: nickel,
            desc: "Protective coating that improves wear resistance and surface strength."
        },
        {
            id: 'Lacquer Coating',
            title: "Lacquer Coating",
            img: lacker,
            desc: "Transparent protective coating to preserve shine and prevent oxidation."
        }
    ];


    useEffect(() => {
        if (location.state?.target) {
            const el = sectionRefs.current[location.state.target];
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>

            <section className="relative w-full h-[260px] sm:h-[300px] md:h-[380px] flex items-center justify-center">
                {/* Background Image */}
                <img
                    src="https://picsum.photos/1600/600?industry"
                    alt="AVM Services Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
                        Our <span className="text-orange-400">Services</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
                        Religious Metal Works & Professional Electroplating Solutions
                    </p>

                    {/* Breadcrumb */}
                    <nav className="text-xs sm:text-sm md:text-base text-gray-300">
                        <Link
                            to="/"
                            className="hover:text-orange-400 transition-colors"
                        >
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-orange-400 font-medium">
                            Services
                        </span>
                    </nav>
                </div>
            </section>
            <section className="py-12 md:py-16 bg-gray-100">

                <div className="container mx-auto px-4 space-y-20">

                    {/* RELIGIOUS SERVICES */}
                    {services.map((item) => (
                        <div
                            ref={(el) => (sectionRefs.current[item.id] = el)}
                            key={item.id}
                            className="grid md:grid-cols-2 gap-10 items-center"
                        >
                            {/* IMAGE */}
                            <div data-aos="fade-up" className="flex justify-center">
                                <div className="w-full max-w-[320px] aspect-3/4 bg-white border rounded-lg overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div data-aos="fade-up">
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* ELECTROPLATING SERVICES */}
                    {electroServices.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (sectionRefs.current[item.id] = el)}

                            data-aos="fade-up"
                            className="grid md:grid-cols-2 gap-10 items-center"
                        >
                            {/* IMAGE */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-[320px] aspect-3/4 bg-white border rounded-lg overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>


            <div ref={contactRef}>


            </div>
            <ContactSection />
        </>
    );
};

export default AllServices;
