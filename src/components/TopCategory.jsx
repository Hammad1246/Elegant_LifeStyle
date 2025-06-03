import React from "react";

const CATEGORIES = [
  {
    id: 1,
    title: "Sofas",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/c9.png",
    imageFirst: true
  },
  {
    id: 2,
    title: "Coffee Tables",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/c4.png",
    imageFirst: false
  },
  {
    id: 3,
    title: "Dining Tables",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/c6.png",
    imageFirst: true
  },
  {
    id: 4,
    title: "Beds",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/c15.png",
    imageFirst: false
  }
];

function TopCategory() {
  return (
    <section className="h-auto w-full bg-gradient-to-b from-[#504132] to-[#332518] py-16">
      <div className="flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl mb-2">OUR TOP CATEGORIES</h1>
          <p className="text-[#d4c2b8]">Look at the latest collection that we offer</p>
        </div>

        <div className="grid grid-cols-2 gap-20 w-[90%]">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col items-start space-y-4">
              {category.imageFirst ? (
                <>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[450px] object-cover shadow-md"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-white text-2xl pb-2 font-semibold">{category.title}</h3>
                    <p className="text-[#d4c2b8] text-sm">{category.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-white text-2xl pb-2 font-semibold">{category.title}</h3>
                    <p className="text-[#d4c2b8] text-sm">{category.description}</p>
                  </div>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[450px] object-cover shadow-md"
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