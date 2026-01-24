import React, { useState } from "react";

const accordionData = [
  {
    title: "Electro Plating Services",
    content:
      `AVM Electro Plating is one of the leading electroplating service providers in Tiruppur. 
       With years of strong experience, we offer premium plating services such as Nickel, Copper, 
       Silver, Brass, Gold, and Lacquer coating.`,
  },
  {
    title: "High-Quality Machinery",
    content:
      `We use high-power machinery, advanced coating processes, and accurate chemical methods 
       to ensure every product gains superior strength and durability.`,
  },
  {
    title: "Long-Lasting Durability",
    content:
      `Our coating process doubles the lifetime and strength of the products compared to 
       normal plating systems, giving long-lasting shine and corrosion resistance.`,
  },
  {
    title: "Skilled Workmanship",
    content:
      `Our expert technicians deliver premium finishing with precision, quality craftsmanship, 
       and reliable project handling.`,
  },
  {
    title: "Our Mission",
    content:
      `We aim to deliver perfection, customer satisfaction, and world-class finishing that meets 
       top industry standards every single time.`,
  },
];

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* Accordion Items */}
        <div className="space-y-3">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-blue-100" : "bg-white"
              }`}
            >
              {/* Accordion Header */}
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-800"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="text-lg sm:text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 overflow-hidden px-3 sm:px-4 ${
                  openIndex === index ? "max-h-60 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
