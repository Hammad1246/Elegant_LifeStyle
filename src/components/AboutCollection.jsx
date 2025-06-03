

"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function AboutCollection() {
  const product = {
    images: ["/images/bed.png", "/images/bed2.png"],
    title: "Living Room Set",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",

  };

  return (
    <section className="w-full bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-black">OUR COLLECTION</h2>
        <p className="text-gray-500">Look at the latest collection that we offer</p>
      </div>

      <div className="w-full pl-16 ">

            <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            className="relative"
          >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg  overflow-hidden">
                <div className="relative group">
                  <img
                    src={image}
                    alt="Living Room"
                    className="w-full h-[500px] object-cover"
                  />

                </div>
                <div className="py-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <button className="custom-prev absolute left-10 top-[42%] -translate-y-1/2 z-10  p-2 rounded-full  bg-opacity-89 border border-gray-500 border-opacity-30 backdrop-blur-2xl cursor-pointer">
            <FiChevronLeft size={20} />
          </button>
          <button className="custom-next absolute right-60 top-[42%] -translate-y-1/2 z-10  p-2 rounded-full  bg-opacity-89 border border-gray-500 border-opacity-30 backdrop-blur-2xl cursor-pointer">
            <FiChevronRight size={20} />
          </button>
        </Swiper>
      </div>
    </section>
  );
}

export default AboutCollection;


