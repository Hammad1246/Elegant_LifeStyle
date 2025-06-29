"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";

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
    <section className=" bg-white w-full ">
      <h2 className="text-center text-lg md:text-xl font-serif mb-6 text-[#212121] px-6 md:px-0">
        Follow us on Instagram{" "}
        <span className="font-bold text-[#212121]">@elegantlifestyleperth</span>
      </h2>

      <div className="px-6 md:px-12">
        <Swiper
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
          }}
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
              <Image
                src={src} 
                alt={`Instagram post ${index + 1}`} 
                className="rounded-md w-full md:h-48 h-36 object-cover"
                loading="lazy"
                width={600} 
                height={192} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default InstagramGallery;
