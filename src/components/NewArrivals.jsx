"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import FurnitureCard from "@/components/FurnitureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

const furnitureData = [
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
  },
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
  },
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
  },
  {
    title: "Stockholm",
    price: 49,
    oldPrice: 79,
    image: "/images/furnitureCard.png",
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
    <section className="h-auto lg:min-h-screen bg-white flex flex-col justify-center items-center my-12 gamp-8 md:gap-12">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#17161B]">
          New Arrivals
        </h1>
        <p className="text-[#606060] text-sm sm:text-base">
          Look at the latest collection that we offer
        </p>
      </div>

      <div className="w-full mx-auto">
        <Swiper
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
            height: "45px",
            borderRadius: "0px",
            border: "1px solid gray",
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
          variant="contained"
        >
          <p className="flex gap-2 items-center text-sm px-4">
            VIEW ALL <GoArrowUpRight />
          </p>
        </Button>
      </div>
    </section>
  );
}

export default NewArrivals;