"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/f1.png",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.png",
  "/images/f5.png",
  "/images/f1.png",
];

function InstagramGallery() {
  return (
    <section className=" bg-white">
      <h2 className="text-center text-lg md:text-xl font-serif mb-6 text-[#212121]">
        Follow us on Instagram{" "}
        <span className="font-bold text-[#212121]">@elegantlifestyleperth</span>
      </h2>

      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={2.2}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.2 },
            1024: { slidesPerView: 5.2 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="rounded-md w-full h-48 object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default InstagramGallery;