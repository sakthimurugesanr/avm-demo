import { useRef } from "react";

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

  // ⭐ Duplicate reviews for infinite scroll
  const loopReviews = [...reviews, ...reviews];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our customers consistently appreciate our quality, reliability, and
        commitment to excellence.
      </p>

      {/* ⭐ Infinite Scrolling Row */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 animate-scroll hover:pause-scroll"
          style={{ width: "max-content" }}
        >
          {loopReviews.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 border border-gray-200 w-[300px] md:w-[350px] flex-shrink-0"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{item.review}"
              </p>

              {/* Name */}
              <h4 className="font-semibold text-gray-900 text-lg">
                {item.name}
              </h4>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
