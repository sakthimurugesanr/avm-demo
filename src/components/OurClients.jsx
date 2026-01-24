import React from "react";

export default function DummyReviewsSlider() {
  const reviews = [
    {
      name: "Praveen Kumar",
      role: "Business Owner",
      review:
        "Outstanding service! The finishing quality and attention to detail were excellent. Highly recommended.",
      rating: 5,
    },
    {
      name: "Sanjay M",
      role: "Manufacturer",
      review:
        "Very fast delivery and premium quality plating. Their team is professional and reliable.",
      rating: 4,
    },
    {
      name: "Arun Raj",
      role: "Entrepreneur",
      review:
        "Affordable pricing with top-notch results. Will definitely continue working with them.",
      rating: 5,
    },
    {
      name: "Madhan K",
      role: "Fabrication Expert",
      review:
        "The plating quality is consistent and durable. Good communication and on-time work.",
      rating: 5,
    },
  ];

  // Duplicate reviews for infinite scroll
  const loopReviews = [...reviews, ...reviews];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 md:px-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
        Our customers consistently appreciate our quality, reliability, and
        commitment to excellence.
      </p>

      {/* Infinite Scrolling Row */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 animate-scroll hover:pause-scroll"
          style={{ width: "max-content" }}
        >
          {loopReviews.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                
                hover:shadow-md
                transition-all
                duration-300
                rounded-xl
              p-2 sm:p-5
              border
                
                w-[280px] sm:w-[300px] md:w-[320px]
                
              "
            >
              {/* Stars */}
              <div className="flex mb-2 sm:mb-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-base sm:text-lg">
                      ★
                    </span>
                  ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 italic mb-2 sm:mb-3 text-xs sm:text-xs md:text-base leading-relaxed">
                "{item.review}"
              </p>

              {/* Name */}
              <h4 className="font-semibold text-gray-900 text-xs sm:text-base md:text-lg">
                {item.name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-xs">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
