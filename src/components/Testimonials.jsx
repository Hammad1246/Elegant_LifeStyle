"use client";
import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "I was so impressed with the selection of furniture, they have a great variety of styles and colors to choose from. I'll definitely be shopping here again.",
    author: "Anonymous",
  },
  {
    text: "I was able to find the perfect pieces for my home, and the quality of the items I received was exceptional. Thank you.",
    author: "Maman Suganda",
  },
  {
    text: "Overall, I had a great experience shopping and would highly recommend it to anyone looking for stylish, high-quality furniture.",
    author: "Fajar Sad Boy",
  },
  {
    text: "Overall, I had a great experience shopping and would highly recommend it to anyone looking for stylish, high-quality furniture.",
    author: "Fajar Sad Boy",
  },
];

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <section className="my-12  bg-[#FFFFFF]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif mb-2 text-[#191D1F]">Testimonials</h2>
        <p className="text-sm text-[#606060]">
          We strive to provide our customers with the best possible shopping
          experience.
        </p>
      </div>

      <div className="relative px-4 max-w-screen-xl mx-auto overflow-hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides
          centeredSlidesBounds
          watchSlidesProgress
          initialSlide={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTestimonial(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.author}
                text={testimonial.text}
                active={index === activeTestimonial}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            aria-label="Previous testimonial"
            className="w-10 h-10 flex items-center justify-center text-[#1E1E1E] rounded-full border border-[#DEDEDE] transition cursor-pointer"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            aria-label="Next testimonial"
            className="w-10 h-10 flex items-center justify-center text-[#1E1E1E] rounded-full border border-[#DEDEDE] transition cursor-pointer"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;