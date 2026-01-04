export default function ClientShorts() {
  const shorts = [
    "https://www.youtube.com/shorts/ySW8bLZuo2Q",
    "https://www.youtube.com/shorts/Id1JaXGw8R0",
    "https://www.youtube.com/shorts/Ws0mKHkS6qw",
    "https://www.youtube.com/shorts/a7dihPck_Rc",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Watch real customer reviews and experiences with our services.
      </p>

      {/* Responsive Shorts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {shorts.map((url, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-gray-200"
          >
            <iframe
              className="w-full h-72 sm:h-80 md:h-96"
              src={url.replace("shorts/", "embed/")}
              title={`Client Review ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
