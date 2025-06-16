"use client";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    type: "large",
    image: "/images/c9.png",
    title: "Sofas",
    count: "150 Items",
  },
  {
    type: "medium",
    image: "/images/f2.png",
    title: "Coffee Tables",
    count: "250 Items",
  },
  {
    type: "small",
    image: "/images/bed.png",
    title: "Beds",
    count: "200 Items",
  },
  {
    type: "small",
    image: "/images/c4.png",
    title: "Dining Tables",
    count: "170 Items",
  },
];

function Categories() {
  return (
    <section className="h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col ">
      {/* Header */}
      <div className="flex justify-between items-center py-6 px-5">
        <h1 className="text-black text-4xl ">Top Categories</h1>
        <Link href={"/gallery"}>
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
            <p className="flex gap-2 items-center text-sm px-1">
              Explore Gallery <GoArrowUpRight />
            </p>
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="w-full h-[85%] flex">
        {/* Left Section (Sofas) */}
        <div className="w-[50%] h-full p-4">
          <CategoryCard {...categories[0]} />
        </div>

        {/* Right Section */}
        <div className="w-[50%] h-full flex flex-col gap-4 p-4">
          {/* Coffee Tables */}
          <div className="w-full h-[50%]">
            <CategoryCard {...categories[1]} />
          </div>

          {/* Beds and Dining Tables */}
          <div className="w-full h-[50%] flex gap-4">
            {/* Beds */}
            <div className="w-[50%] h-full">
              <CategoryCard {...categories[2]} />
            </div>

            {/* Dining Tables */}
            <div className="w-[50%] h-full">
              <CategoryCard {...categories[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CategoryCard = ({ image, title, count }) => (
  <div className="w-full h-full relative">
    <Image
      src={image}
      alt={title || "Default Alt Text"} 
      className="w-full h-full object-cover rounded-lg"
      loading="lazy"
      width={800} 
      height={600}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex flex-col justify-end py-8 pl-8 ">
      <h2 className="text-white text-xl sm:text-2xl !font-semibold">{title}</h2>
      <p className="text-gray-300 text-sm">{count}</p>
      <div className="absolute bottom-10 right-10 text-white text-3xl">
        <MdArrowOutward />
      </div>
    </div>
  </div>
);

export default Categories;
