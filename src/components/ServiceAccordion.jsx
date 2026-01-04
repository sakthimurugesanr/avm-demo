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
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden bg-white "
            >
              {/* Accordion Header */}
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
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
