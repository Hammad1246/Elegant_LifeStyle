"use client";
import React, { useState, useMemo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Box } from "@mui/material";
import Link from "next/link";
import { useFurniture } from "@/app/context/FurnitureContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button";

const CATEGORIES = [
  { id: 1, category: "Beds", image: "/images/c1.png" },
  { id: 2, category: "Beds", image: "/images/c2.png" },
  { id: 3, category: "Beds", image: "/images/c3.png" },
  { id: 4, category: "Coffee Tables", image: "/images/c4.png" },
  { id: 5, category: "Dining Tables", image: "/images/c5.png" },
  { id: 6, category: "Sofas", image: "/images/c6.png" },
  { id: 7, category: "Sofas", image: "/images/c7.png" },
  { id: 8, category: "Sofas", image: "/images/c8.png" },
  { id: 9, category: "Sofas", image: "/images/c9.png" },
  { id: 10, category: "Coffee Tables", image: "/images/c10.png" },
  { id: 11, category: "Dining Tables", image: "/images/c11.png" },
  { id: 12, category: "Dining Tables", image: "/images/c12.png" },
  { id: 13, category: "Dining Tables", image: "/images/c13.png" },
  { id: 14, category: "Beds", image: "/images/c14.png" },
  { id: 15, category: "Beds", image: "/images/c15.png" },
];

const FILTER_OPTIONS = [
  "All",
  "Sofas",
  "Coffee Tables",
  "Beds",
  "Dining Tables",
];

const GRID_STYLES = {
  display: "grid",
  gap: 2,
  gridTemplateColumns: "repeat(6, 1fr)",
  maxWidth: "auto",
  width: "100%",
};

const GalleryCategory = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories = useMemo(() => {
    return selectedCategory === "All"
      ? CATEGORIES
      : CATEGORIES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const { setSelectedFurniture } = useFurniture();

  const handleQuoteClick = (item) => {
    const title = item.category;
    const image = item.image;
    console.log(title, image);

    setSelectedFurniture({ title, image });
    router.replace("/product");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-evenly items-center my-8 md:my-16">
        <h1 className="text-2xl md:text-4xl text-[#191D1F] font-bold mb-4">
          Top Categories
        </h1>
        <p className="text-center text-[#868686] md:mb-12 mb-6 text-xs md:text-base px-6 md:px-0 ">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's
        </p>

        {/* Filter Buttons */}
        <div className="flex md:justify-center md:items-center gap-2 sm:gap-4 mb-8 overflow-x-auto no-scrollbar w-full px-6 md-px-0">
          {FILTER_OPTIONS.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-1 sm:px-6 sm:py-2 text-black group cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? "border-b-2 border-black font-bold"
                  : ""
              }`}
              aria-label={`Filter by ${category}`}
              aria-current={selectedCategory === category ? "true" : undefined}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MUI Box Grid */}
        <div className="w-full h-auto flex justify-center items-center">
          <Box
            sx={GRID_STYLES}
            className=" px-6 md:px-12 mb-10"
            component="section"
            aria-live="polite"
          >
            {filteredCategories.map((category, index) => {
              const cyclePosition = index % 5;
              const span = cyclePosition < 2 ? 3 : 2;

              return (
                <Box
                  key={category.id}
                  sx={{
                    overflow: "hidden",
                    boxShadow: 3,
                    gridColumn: `span ${span}`,
                  }}
                  className="rounded-lg"
                  component="article"
                >
                  <Image
                    src={category.image}
                    alt={`${category.category} example`}
                    className="w-full h-36 md:h-64 object-cover cursor-pointer"
                    loading="lazy"
                    width={span === 3 ? 400 : 250}
                    height={256}
                    onClick={() => handleQuoteClick(category)}
                    aria-label={`Select ${category.category}`}
                  />
                </Box>
              );
            })}
          </Box>
        </div>

        {/* Button */}

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
          <p className="flex gap-2 items-center text-xs md:text-sm md:px-4 px-2">
            Explore More <GoArrowUpRight />
          </p>
        </Button>
      </div>

    
    </>
  );
};

export default GalleryCategory;
