import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

export default function ImageGallery() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1027/600/400",
    "https://picsum.photos/id/1031/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1039/600/400",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openImage = (index) => {
    setCurrentIndex(index);
    setZoom(1);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.3, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.3, 1));

  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Project Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            onClick={() => openImage(index)}
            className="w-full h-40 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition"
            alt={`Gallery ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            className="max-w-[90%] max-h-[80%] rounded-lg"
            style={{ transform: `scale(${zoom})`, transition: "0.2s" }}
          />

          {/* Zoom Controls */}
          <div className="absolute bottom-10 flex gap-6 text-white text-3xl">
            <button onClick={zoomOut}>
              <FaSearchMinus />
            </button>
            <button onClick={zoomIn}>
              <FaSearchPlus />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
