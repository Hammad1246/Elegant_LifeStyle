"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";

function AboutCollection() {
   const products = [
    {
      image: "/images/signatureSofa1.png",
      title: "Luxury Velvet Sofa Set Taupe Elegance",
      description: "Turn your living space into a statement of style with this 3+2+1 velvet sofa set, featuring quilted sides, plush comfort, and gold-toned accents. Includes free delivery & setup!",
      price: "3,900",
      stock: "(Limited Stock – Contact for latest offers)"
    },
    {
      image: "/images/signatureSofa2.png",
      title: "Cream Grey Velvet Sofa Set Gold Luxe Edition",
      description: "Make a bold statement with this elegant 3+2+1 velvet sofa set, featuring deep comfort, rich cream-grey tones, and a sleek gold base. Includes free delivery & professional setup.",
      price: "2,750",
      stock: "(In Stock – Fast Delivery)"
    },
    {
      image: "/images/signatureSofa3.png",
      title: "Black Velvet Sofa Set Bold Luxury, Golden Touch",
      description: "Dramatic and refined, this 3+2+1 black velvet sofa set features plush seating, rich texture, and a glamorous gold base a true centerpiece for modern luxury living. Complimentary delivery & setup included.",
      price: "4,200",
      stock: "(Pre-order – Ships in 2 weeks)"
    },
    {
      image: "/images/signatureSofa4.png",
      title: "Grey Velvet Sofa Set Classic Comfort, Modern Glam",
      description: "Experience elegance with this 3+2+1+1 grey velvet set featuring tufted upholstery, gold accents, and plush swivel chairs — the perfect blend of comfort and sophistication. Complimentary delivery & setup included.",
      price: "2,100",
      stock: "(Few Left – Contact for details)"
    }
  ];

  return (
    <section className="w-full bg-white md:mb-12 mb-5 ">
      <div className="text-center mb-8">
        <h2 className="md:text-4xl text-2xl font-semibold text-black uppercase">Our Signature Sofa Collection</h2>
        <p className="text-gray-500 md:text-base text-xs px-2">
          From sleek modern designs to timeless classics each piece in our collection reflects our passion for quality, comfort, and craftsmanship.
        </p>
      </div>

      <div className="w-full md:pl-16 pl-6">
       <Swiper
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          className="relative"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg  overflow-hidden">
                <div className="relative group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={500}
                    className="w-full md:h-[400px] h-[200px] object-cover"
                  />
                </div>
                <div className="py-6">
                  <h3 className="md:text-xl text-lg  font-semibold mb-2 text-black">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-4">
                    {product.description}
                  </p>
                  <h5 className="text-black text-sm md:text-base mb-1">
                    Price
                  </h5>
                  <div className="flex gap-2  justify-start items-center text-black ">
                    <span className="flex justify-center items-center !font-bold text-lg md:text-xl ">
                      <FaDollarSign className="" /> {product.price}
                    </span>
                    <span className="text-sm md:text-base">
                      {product.stock}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          {/* <button className="custom-prev absolute left-10 top-[42%] -translate-y-1/2 z-10  p-2 rounded-full  bg-opacity-89 border border-gray-500 border-opacity-30 backdrop-blur-2xl cursor-pointer">
            <FiChevronLeft size={20} />
          </button>
          <button className="custom-next absolute right-60 top-[42%] -translate-y-1/2 z-10  p-2 rounded-full  bg-opacity-89 border border-gray-500 border-opacity-30 backdrop-blur-2xl cursor-pointer">
            <FiChevronRight size={20} />
          </button> */}
        </Swiper>
      </div>
    </section>
  );
}

export default AboutCollection;
