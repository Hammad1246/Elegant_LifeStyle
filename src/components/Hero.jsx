"use client"
import React, { useState, useCallback, useMemo } from 'react';
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";

const SLIDES = [
  { id: 0, image: "/images/heroImage.jpg" },
  { id: 1, image: "/images/c1.png" },
  { id: 2, image: "/images/c2.png" },
  { id: 3, image: "/images/c13.png" },
];

const BUTTON_STYLES = {
  backgroundColor: "#606060",
  width: "auto",
  height: "48px",
  borderRadius: "0px",
  border: "1px solid gray",
  "&:hover": {
    backgroundColor: "#707070"
  },
};

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const currentSlide = useMemo(() => SLIDES[activeIndex], [activeIndex]);

  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${currentSlide.image}')` }}
      aria-label="Hero banner"
    >
      {/* Overlay */}
      <div 
        className="absolute top-[102px] inset-0 bg-black opacity-27"
        aria-hidden="true"
      />

      {/* Brand Logo */}
      <div className="relative inset-0 flex items-start top-10 justify-center">
        <img
          src="/images/brandName.png"
          alt="Brand logo"
          className="w-80 h-80 object-contain"
          loading="lazy"
          width={320}
          height={320}
        />
      </div>

      {/* Content Section */}
      <div className="w-auto h-[190px] absolute md;bottom-12 md:left-16 bottom-8 left-4 flex justify-between flex-col text-white">
        <div className="w-full h-auto flex flex-col gap-1.5">
          <p className="md:text-sm text-xs">READY TO SHIP</p>
          <h1 className="md:text-6xl text-3xl">In-Stock Sofas</h1>
          <p className="md:text-sm text-xs">
            Get set for the season with furniture that arrives by the holidays.
          </p>
        </div>
        <div>
          <Button
            sx={BUTTON_STYLES}
            variant="contained"
            aria-label="Shop now"
            
          >
            <span className="flex gap-1 items-center text-sm">
              SHOP NOW <GoArrowUpRight className='text-lg'/>
            </span>
             
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="h-auto w-[10%] absolute bottom-8 left-[45%] flex justify-between items-center">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            className={`border-[1.7px] w-6 cursor-pointer ${
              activeIndex === index
                ? "border-[#FFF]"
                : "border-[#FFFFFF80] opacity-50"
            }`}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;