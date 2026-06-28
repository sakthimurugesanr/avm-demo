import { FaMobileAlt } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";

const services = [
    "Nickel & Copper",
    "Silver & Gold",
    "Brass & Lacquer",
    "Temple structures",
    "Kalasams & Hundis",
    "Church crosses",
];

const BookCallBanner = ({ onContactClick }) => {
    const handleBookCall = () => {
        if (onContactClick) onContactClick();
        window.location.href = "tel:+919944066321";
    };

    return (
        <section className="w-full rounded-2xl bg-[#0E2630]">
            <div className="
        max-w-5xl mx-auto px-6 md:px-10 py-10
        flex flex-col md:flex-row
        items-center justify-between
        gap-10 
      ">

                {/* ── Left ── */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h2 className="text-white text-2xl sm:text-[28px] font-semibold leading-tight tracking-tight mb-4">
                        Premium plating &amp;{" "}
                        <span className="text-[#4fc3a1]">religious metalwork</span>
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {services.map((s, i) => (
                            <span
                                key={i}
                                className="text-[12px] text-white/50 bg-white/5  border-white/10  px-3 py-1"
                            >
                                {s}
                            </span>
                        ))}
                    </div>

                    <p className="text-white/38 text-[13.5px] leading-relaxed max-w-md">
                        Custom religious fittings &amp; flagpoles precision crafted
                        with advanced finishing for lasting shine &amp; corrosion
                        resistance.
                    </p>

                    
                </div>

                {/* ── Right ── */}
                <div
                    className="
    flex flex-col items-stretch gap-3
    w-full md:w-[220px] flex-shrink-0 justify-center
  "
                >
                    {/* Info card — desktop only */}
                    <div className="hidden md:block border-white/10 rounded-2xl px-5 py-4">
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">
                            Direct line
                        </p>

                        <p className="text-white text-[19px] font-semibold tracking-wide">
                            99440 66321
                        </p>

                        <p className="text-[11px] text-white/30 mt-1">
                            Mon – Sat, 9 am – 7 pm
                        </p>
                    </div>

                    {/* Primary CTA */}
                    <button
                        onClick={handleBookCall}
                        className="w-full flex items-center justify-center gap-2 bg-[#4fc3a1] text-[#0E2630] text-[14px] font-bold py-3.5 rounded-xl hover:opacity-90 active:scale-[0.97] transition-all"
                    >
                        <MdPhoneCallback className="text-[18px]" />
                        Book a call
                    </button>

                    {/* Divider */}
                    

                  
                </div>

            </div>
        </section>
    );
};

export default BookCallBanner;