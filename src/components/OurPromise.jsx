import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMedal, FaBolt, FaFileInvoiceDollar,
  FaHandshake, FaIndustry, FaLightbulb,
} from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

const promises = [
  { num: "01", title: "Quality", icon: <FaMedal />, desc: "Uncompromising standards across every service no shortcuts, no exceptions." },
  { num: "02", title: "Delivery time", icon: <FaBolt />, desc: "Timely execution and reliable delivery, always on schedule without compromise." },
  { num: "03", title: "Pricing", icon: <FaFileInvoiceDollar />, desc: "Fair, transparent, and competitive pricing tailored precisely to your requirements." },
  { num: "04", title: "Customer centric", icon: <FaHandHoldingHeart />, desc: "Every solution is designed around your satisfaction as the ultimate priority." },
  { num: "05", title: "Manufacturing excellence", icon: <FaIndustry />, desc: "Precision-driven manufacturing with consistent, reliable, and measurable output." },
  { num: "06", title: "Innovative", icon: <FaLightbulb />, desc: "Continuous innovation to stay ahead of evolving industry standards and demands." },
];

const OurPromise = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-10 md:py-8 px-4">
      <div className="max-w-5xl mx-auto ">

        {/* Heading */}
        <div className="text-center max-w-lg mx-auto mb-12 ">
          <div className="flex items-center justify-center gap-3 mb-3 ">

          </div>
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#0E2630] leading-tight tracking-tight mb-3">
            Built on <span className="text-[#4fc3a1]">trust</span>,<br />
            delivered with precision
          </h2>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            Dependable solutions for all your business needs  highest
            standards and every commitment honoured.
          </p>
        </div>

        <div className="
        
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          border border-gray-200 rounded-2xl overflow-hidden
          max-w-[1080px] mx-auto
        ">
          {promises.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 70}
              className=" 
                relative group bg-white hover:bg-gray-50
                transition-colors duration-200 overflow-hidden
                p-7
                border-b border-r border-gray-200
                lg:[&:nth-child(3n)]:border-r-0
                sm:[&:nth-child(2n)]:border-r-0
                [&:nth-child(n+5)]:border-b-0
                lg:[&:nth-child(n+4)]:border-b-0
              "
            >
              <span className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-[#4fc3a1] opacity-[0.06] pointer-events-none" />


              <div className="flex items-start gap-4">
                <div className="
    flex-shrink-0
    w-[52px] h-[52px] flex items-center justify-center
    rounded-[14px] bg-emerald-50 border border-emerald-100
    text-[#0E2630] text-[22px]
    group-hover:bg-[#0E2630] group-hover:border-[#0E2630] group-hover:text-[#4fc3a1]
    transition-colors duration-200
  ">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-[14px] font-semibold text-[#0E2630] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              {/* Icon */}

              {/* Text */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPromise;