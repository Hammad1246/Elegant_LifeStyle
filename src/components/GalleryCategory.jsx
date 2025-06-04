"use client"
import React, { useState, useMemo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Box } from "@mui/material";
import InstagramGallery from "./InstagramGallery";

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

const FILTER_OPTIONS = ["All", "Sofas", "Coffee Tables", "Beds", "Dining Tables"];

const GRID_STYLES = {
  display: "grid",
  gap: 2,
  gridTemplateColumns: "repeat(6, 1fr)",
  maxWidth: "auto",
  width: "100%",
};

const GalleryCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories = useMemo(() => {
    return selectedCategory === "All"
      ? CATEGORIES
      : CATEGORIES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-evenly items-center py-12">
        <h1 className="text-4xl text-[#191D1F] font-bold mb-4">Top Categories</h1>
        <p className="text-center text-[#868686] mb-12 ">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          {FILTER_OPTIONS.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-2 text-black group cursor-pointer ${
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
            className="max-w-[90%] mb-10"
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
                  <img
                    src={category.image}
                    alt={`${category.category} example`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width={span === 3 ? 400 : 250}
                    height={256}
                  />
                </Box>
              );
            })}
          </Box>
        </div>

        {/* Button */}
        <button 
          className="bg-[#1D1D1D] hover:bg-[#333333] text-white text-sm px-4 py-3 border border-gray-500 rounded-none flex items-center gap-2 cursor-pointer"
          aria-label="Explore more categories"
        >
          Explore More <GoArrowUpRight />
        </button>
      </div>

      <InstagramGallery />
    </>
  );
};

export default GalleryCategory;