"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import FurnitureCard from "@/components/FurnitureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel } from "swiper/modules";

const furnitureData = [
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
  },
  {
    title: "Sofa",
    price: 49,
    oldPrice: 79,
    image: "/images/f5.png",
  },
  {
    title: "Dining",
    price: 49,
    oldPrice: 79,
    image: "/images/f2.png",
  },
  {
    title: "Dining",
    price: 49,
    oldPrice: 79,
    image: "/images/f4.png",
  },
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
  },
];

function NewArrivals() {
  return (
    <section className="h-auto lg:min-h-screen bg-white flex flex-col justify-center items-center md:my-16 my-8 gap-7  md:gap-12">
      <div className="text-center space-y-2 w-[80%]">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-[#17161B]">
          Fresh Finds for Your Living Space
        </h1>
        <p className="text-[#606060]  text-xs md:text-sm sm:text-base ">
         Explore our latest collection of stylish, cozy sofas just arrived and ready to redefine your comfort.
        </p>
      </div>

      <div className="w-full mx-auto">
        <Swiper
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {furnitureData.map((item, index) => (
            <SwiperSlide key={index}>
              <FurnitureCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Button
          sx={{
            backgroundColor: "#1D1D1D",
            width: "auto",
           height: { xs: "40px", md: "48px" },
            borderRadius: "0px",
            border: "1px solid gray",
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
          variant="contained"
        >
          <p className="flex gap-2 items-center text-xs md:text-sm px-4">
            VIEW ALL <GoArrowUpRight />
          </p>
        </Button>
      </div>
    </section>
  );
}

export default NewArrivals;