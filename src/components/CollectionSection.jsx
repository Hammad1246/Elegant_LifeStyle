"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

const product = {
  images: ["/images/bed.png", "/images/bed2.png", "/images/bed.png"],
};

function CollectionSection() {
  return (
    <section className="w-full h-screen  bg-gradient-to-b from-[#504132] to-[#332518] relative flex justify-center items-center overflow-hidden">
      {/* Texture Wall */}
      <div className="w-[8%] h-full hidden lg:block">
        <img
          src="/images/textureWall.png"
          alt="texture wall"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-[92%] h-full lg:h-[80%] text-white flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-[25%] px-3 h-auto lg:h-full flex flex-col justify-between items-start space-y-4">
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl lg:text-4xl">OUR COLLECTION</h1>
            <p className="text-sm">
              Look at the latest collection that we offer
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl">Living Room Set</h2>
            <p className="text-sm">
              The room you spend the most time relaxing is your living room.
              Combine modern style with comfort to make your living room more
              comfortable.
            </p>
            <Button
              sx={{
                backgroundColor: "#504132",
                width: "auto",
                height: "45px",
                borderRadius: "0px",
                border: "1px solid gray",
              }}
              variant="contained"
            >
              <p className="flex gap-2 items-center text-xs sm:text-sm">
                View All <GoArrowUpRight />
              </p>
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-[75%] h-full flex items-center justify-center relative">
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
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full aspect-video relative">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            aria-label="Previous slide"
            className="custom-prev absolute left-4 sm:left-8 lg:left-24 top-1/2 -translate-y-1/2 z-10 bg-opacity-89 border border-zinc-500 border-opacity-30 backdrop-blur-2xl p-2 sm:p-3 rounded-full shadow-md  transition cursor-pointer"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            aria-label="Next slide"
            className="custom-next absolute right-4 sm:right-8 lg:right-24 top-1/2 -translate-y-1/2 z-10 bg-opacity-89 border border-zinc-500 border-opacity-30 backdrop-blur-2xl p-2 sm:p-3 rounded-full shadow-md  transition cursor-pointer"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;