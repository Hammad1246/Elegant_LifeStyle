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
    <section className="md:h-screen w-full h-auto bg-white px-6 md:px-12  flex flex-col ">
      {/* Header */}
      <div className="flex justify-between items-center md:py-6 pb-3 ">
        <h1 className="text-black md:text-4xl text-2xl ">Top Categories</h1>
        <Link href={"/gallery"}>
          <Button
            sx={{
              backgroundColor: "#1D1D1D",
              width: "auto",
              height: { xs: "40px", md: "45px" },
              borderRadius: "0px",
              border: "1px solid gray",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
            variant="contained"
          >
            <p className="flex whitespace-nowrap gap-2 items-center md:text-sm text-xs  ">
              Explore Gallery <GoArrowUpRight />
            </p>
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="w-full h-[85%] flex flex-col md:flex-row ">
        {/* Left Section (Sofas) */}
        <div className="md:w-[50%] w-[100%] h-auto ">
          <CategoryCard {...categories[0]} />
        </div>

        {/* Right Section */}
        <div className="md:w-[50%] w-[100%] h-auto flex flex-col gap-4 md:pl-4 pt-4 md:pt-0">
          {/* Coffee Tables */}
          <div className="w-full h-[50%]">
            <CategoryCard {...categories[1]} />
          </div>

          {/* Beds and Dining Tables */}
          <div className="w-full h-[50%] flex gap-4">
            {/* Beds */}
            <div className="w-[50%] h-auto">
              <CategoryCard {...categories[2]} />
            </div>

            {/* Dining Tables */}
            <div className="w-[50%] h-auto">
              <CategoryCard {...categories[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CategoryCard = ({ image, title, count }) => (
  <div className="w-full md:h-full h-44 relative">
    <Image
      src={image}
      alt={title || "Default Alt Text"} 
      className="w-full h-full object-cover rounded-lg"
      loading="lazy"
      width={800} 
      height={600}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex flex-col justify-end md:py-8 py-4 md:pl-8 pl-4">
      <h2 className="text-white text-lg md:text-2xl !font-semibold">{title}</h2>
      <p className="text-gray-300 md:text-sm text-xs">{count}</p>
      <div className="absolute md:bottom-10 bottom-5 md:right-10 right-5  text-white md:text-3xl text-lg">
        <MdArrowOutward />
      </div>
    </div>
  </div>
);

export default Categories;
