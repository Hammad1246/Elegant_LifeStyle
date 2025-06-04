"use client";
import React, { useState, useCallback, useMemo } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SLIDES = [
  { id: 0, image: "/images/heroImage.jpg" },
  { id: 1, image: "/images/heroImage2.jpg" },
  { id: 2, image: "/images/heroImage3.jpg" },
  { id: 3, image: "/images/heroImage4.jpg" },
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
      className="h-[335px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${currentSlide.image}')` }}
      aria-label="Image carousel"
    >
      {/* Overlay */}
      <div 
        className="absolute top-[102px] h-[233px] inset-0 bg-black opacity-27"
        aria-hidden="true"
      />

      {/* Navigation and Content */}
      <div className="relative flex justify-center items-center h-full">
        <div className="flex w-full h-auto justify-between items-center px-7">
          <button
            className="w-12 h-8 bg-opacity-19 border border-gray-500 border-opacity-30 backdrop-blur-md flex justify-center items-center cursor-pointer"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <IoIosArrowBack />
          </button>

          <h1 className="text-white text-6xl">{bannerName}</h1>
          
          <button
            className="w-12 h-8 bg-opacity-19 border border-gray-500 border-opacity-30 backdrop-blur-md flex justify-center items-center cursor-pointer"
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