import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://files.oaiusercontent.com/file-Fwn8eDroKirlBRN7rR1gszFw?se=2024-11-01T14%3A36%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db678857b-a3e0-4d3d-83ae-e95950a0a78b.webp&sig=GrTWS6RQjnBvvYoBv/nhGYj7z3iSgQoD7D4bIIatUlU%3D",
    "https://files.oaiusercontent.com/file-vYBuXWBx5z6oddgmLiKGJDf3?se=2024-11-01T14%3A37%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D781c80c8-d713-4bc8-a43e-70582b63841f.webp&sig=P7w/vwq67MAcFA5tntsgKz5Q0FbMYMq5zAfj4EDslUA%3D",
    "https://files.oaiusercontent.com/file-Fwn8eDroKirlBRN7rR1gszFw?se=2024-11-01T14%3A36%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db678857b-a3e0-4d3d-83ae-e95950a0a78b.webp&sig=GrTWS6RQjnBvvYoBv/nhGYj7z3iSgQoD7D4bIIatUlU%3D",
    "https://files.oaiusercontent.com/file-vYBuXWBx5z6oddgmLiKGJDf3?se=2024-11-01T14%3A37%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D781c80c8-d713-4bc8-a43e-70582b63841f.webp&sig=P7w/vwq67MAcFA5tntsgKz5Q0FbMYMq5zAfj4EDslUA%3D",
    "https://files.oaiusercontent.com/file-Fwn8eDroKirlBRN7rR1gszFw?se=2024-11-01T14%3A36%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db678857b-a3e0-4d3d-83ae-e95950a0a78b.webp&sig=GrTWS6RQjnBvvYoBv/nhGYj7z3iSgQoD7D4bIIatUlU%3D",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Next and Previous Slide Handlers
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center p-4 h-auto mx-auto z-20 relative">
       <h3 className="text-center mx-auto text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20 mb-8 lg:mb-10">
          Glimpses of CDC
        </h3>
      <div className="relative w-full max-w-6xl  overflow-hidden mx-auto">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500  mx-auto"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-52 xs:w-60 xxs:w-48 sm:h-80 lg:h-96 flex-shrink-0 flex items-center justify-center mx-auto"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg border border-blue-500 mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
