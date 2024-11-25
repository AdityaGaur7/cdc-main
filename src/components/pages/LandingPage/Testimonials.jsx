import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  { name: "Awijeet Singh", title: "B.Tech, Second Year", feedback: "Organize Interactive Sessions And Workshops To Raise Awareness About Coding And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 2", feedback: "Coding culture is growing, and this initiative is amazing for tech enthusiasts And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 3", feedback: "The workshops are insightful and provide great hands-on learning experiences And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 4", feedback: "Encourages continuous learning and tech awareness through coding competitions And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 5", feedback: "Collaborating with faculty and alumni, this club strengthens tech skills And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 6", feedback: "Provides a platform for students to engage in coding and development And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 7", feedback: "Excellent initiative for students to learn and grow in tech fields And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 8", feedback: "Builds a strong foundation in tech and coding among peers And Other Key Tech Domains Other Key Tech Domains." },
  { name: "Anonymous", title: "B.Tech Year 9", feedback: "Helps students develop skills that are crucial for the industry And Other Key Tech Domains Other Key Tech Domains." }
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1); 
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center relative text-white p-8 h-auto z-20
    ">
      <h3 className="text-center text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20  lg:mb-16 mb-16">
          What Other Think About Us
        </h3>
      <div className="flex justify-evenly space-x-20 min-h-72">
        {testimonialsData.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial, index) => (
          <div
            key={index}
            className="relative w-72 p-6 rounded-lg bg-[rgba(255,255,255,0.1)]   text-center shadow-lg  border border-blue-500"
            style={{
              clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-10a1 1 0 112 0v2a1 1 0 01-2 0v-2zm-3 7a4 4 0 118 0H8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-blue-400">{testimonial.title}</p>
              <p className="text-sm text-blue-400 mt-2">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
