"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React, { useRef, useState } from "react";

const product = {
  images: ["/images/sofa1.png", "/images/bed.png", "/images/bed.png"],
};

function CollectionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  return (
    <section className="w-full md:h-screen h-[550px]  bg-gradient-to-b from-[#504132] to-[#332518] relative flex justify-center items-center overflow-hidden">
      {/* Texture Wall */}
      <div className="w-[8%] h-full hidden lg:block">
        <Image
          src="/images/textureWall.png"
          alt="Texture wall"
          className="w-full h-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
      </div>

      {/* Main Content */}
       <div className="w-full lg:w-[92%] h-full lg:h-[80%] text-white flex flex-col lg:flex-row gap-6 lg:gap-0 px-2 py-6 lg:py-0">
        {/* Sidebar */}
        <div className="w-full lg:w-[25%] px-2 sm:px-4 lg:px-3 h-auto lg:h-full flex flex-col justify-between items-start space-y-4 md:mb-6 mb-3 lg:mb-0">
          <div className="md:space-y-4  mb-6 md:md-0">
            <h1 className="text-lg  md:text-4xl uppercase">
              Sofas for Every Style
            </h1>
            <p className="text-xs sm:text-base lg:text-base">
              Modern to classic curated sofas for every home.
            </p>
          </div>
          <div className="md:space-y-4 space-y-1">
            <h2 className="text-sm sm:text-lg lg:text-2xl">
              Cream Grey Velvet Elegance
            </h2>
            <p className="text-xs sm:text-base lg:text-base pb-4 md:pb-0">
              A luxurious 3+2+1 sofa set with plush velvet upholstery and a
              striking gold base — perfect for adding comfort and style to any
              modern living space. Complimentary delivery & setup included.
            </p>
            <Button
              sx={{
                backgroundColor: "#504132",
                width: "auto",
                height: { xs: "38px", sm: "45px" },
                borderRadius: "0px",
                border: "1px solid gray",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                "&:hover": {
                  backgroundColor: "#332518",
                },
              }}
              variant="contained"
              fullWidth={true}
            >
              <p className="flex gap-2 items-center text-xs sm:text-sm justify-center">
                View All <GoArrowUpRight />
              </p>
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-[75%] h-64 sm:h-80 lg:h-full flex items-center justify-center relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="w-full h-full relative"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full aspect-video relative">
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
            <button
            aria-label="Previous slide"
            className={`custom-prev absolute left-10 sm:left-4 lg:left-24 top-1/2 -translate-y-1/2 z-10 bg-opacity-89 border border-zinc-500 border-opacity-30 backdrop-blur-2xl p-1 sm:p-2 rounded-full shadow-md transition cursor-pointer
           ${activeIndex === 0 ? "invisible pointer-events-none" : ""}
          `}
          >
            <FiChevronLeft size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
          </button>
          <button
            aria-label="Next slide"
            className="custom-next absolute right-10 sm:right-4 lg:right-24 top-1/2 -translate-y-1/2 z-10 bg-opacity-89 border border-zinc-500 border-opacity-30 backdrop-blur-2xl p-1 sm:p-2 rounded-full shadow-md transition cursor-pointer"
          >
            <FiChevronRight size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
