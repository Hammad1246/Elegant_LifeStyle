import React from "react";
import Image from "next/image";

const CATEGORIES = [
  {
    id: 1,
    title: "Sofas",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/furnishC1.png",
    imageFirst: true,
  },
  {
    id: 2,
    title: "Coffee Tables",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:"/images/furnishC2.png",
    imageFirst: false,
  },
  {
    id: 3,
    title: "Dining Tables",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:"/images/furnishC3.png",
    imageFirst: true,
  },
  {
    id: 4,
    title: "Beds",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/furnishC4.png",
    imageFirst: false,
  },
];

function TopCategory() {
  return (
    <section className="h-auto w-full bg-gradient-to-b from-[#504132] to-[#332518] py-16">
      <div className="flex flex-col items-center">
        <div className="text-center mb-16 flex flex-col justify-between items-center">
          <h1 className="text-white text-4xl mb-2 uppercase">Furnish Your Dream Home, One Piece at a Time</h1>
          <p className="text-[#d4c2b8] w-[70%]">
           Explore our standout sofas, chic coffee tables, and dining essentials crafted to transform your space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 w-[90%]">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-start space-y-4"
            >
              {category.imageFirst ? (
                <>
                  <Image
                    src={category.image} 
                    alt={category.title || "Category image"} 
                    className="w-full h-[450px] object-cover shadow-md"
                    loading="lazy"
                    width={800}
                    height={450} 
                  />
                  <div>
                    <h1 className="text-white text-4xl pb-2 font-semibold">
                      {category.title}
                    </h1>
                    <p className="text-[#d4c2b8] text-sm">
                      {category.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h1 className="text-white text-3xl pb-2 font-semibold">
                      {category.title}
                    </h1>
                    <p className="text-[#d4c2b8] text-sm">
                      {category.description}
                    </p>
                  </div>
                  <Image
                    src={category.image}
                    alt={category.title || "Category image"}
                    width={800} 
                    height={450} 
                    className="object-cover shadow-md w-full h-[450px]"
                    loading="lazy"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategory;
