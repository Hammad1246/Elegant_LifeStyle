"use client";
import React, { useState, useCallback, useMemo } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SLIDES = [
  { id: 0, image: "/images/heroImage.jpg" },
  { id: 1, image: "/images/c2.png" },
  { id: 2, image: "/images/c3.png" },
  { id: 3, image: "/images/c4.png" },
];

function HeroBanner({ bannerName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const handleNextSlide = useCallback(() => {
    setActiveIndex(prev => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const currentSlide = useMemo(() => SLIDES[activeIndex], [activeIndex]);

  return (
    <section
      className="md:h-[335px] h-[250px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${currentSlide.image}')` }}
      aria-label="Image carousel"
    >
      {/* Overlay */}
      <div 
        className="absolute top-[102px] md:h-[233px] h-[148px] inset-0 bg-black opacity-27"
        aria-hidden="true"
      />

      {/* Navigation and Content */}
      <div className="relative flex justify-center items-center h-full">
        <div className="flex w-full h-auto justify-between items-center md:px-7 px-4 mt-10 md:mt-0">
          <button
            className="md:w-12 md:h-8 w-9 h-5 bg-opacity-19 border border-gray-500 border-opacity-30 backdrop-blur-md flex justify-center items-center cursor-pointer"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <IoIosArrowBack />
          </button>

          <h1 className="text-white md:text-6xl text-4xl">{bannerName}</h1>
          
          <button
            className="md:w-12 md:h-8 w-9 h-5 bg-opacity-19 border border-gray-500 border-opacity-30 backdrop-blur-md flex justify-center items-center cursor-pointer"
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;