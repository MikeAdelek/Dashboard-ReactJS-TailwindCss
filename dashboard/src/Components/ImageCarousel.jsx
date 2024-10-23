import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./ParentComponent";
// import { imageText } from "./TransactionChart";

const ImageCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const nextSlide = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, id) => (
          <div key={id} className="relative flex-shrink-0 w-full h-[22rem]">
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-justify p-8">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
                {slide.title}
              </h3>
              <p className="text-white sm:text-base md:text-xl lg:text-xs mt-2">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-white text-[#64748B]"
        >
          <ChevronLeft size={24} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-white text-[#64748B]"
        >
          <ChevronRight size={24} className="sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="absolute bottom-4 sm:bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 sm:gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 sm:w-3 sm:h-3 bg-white rounded-full ${
                curr === i ? "p-0.5 sm:p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

/* {imageText.map((text, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 p-4 text-white text-center ${
              curr === i ? "opacity-100" : "opacity-100"
            }`}
          >
            <strong>{text.title}</strong>
            <p>{text.desc}</p>
          </div>
        ))} */

// {
//   slide.text && (
//     <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 rounded-sm text-white text-sm">
//       {slide.text}
//     </div>
//   );
// }
