"use client";
import { FaTags, FaTruckFast } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";

const benefits = [
  {
    icon: <RiShieldCheckFill className="text-[#332518] text-4xl" />,
    title: "2 Years Warranty",
    description: "We stand behind the quality of our products and offer a warranty on all our furniture pieces. Rest easy knowing that your investment is protected."
  },
  {
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#2D221D] flex items-center justify-center">
        <FaTags className="text-white text-xl" />
      </div>
    ),
    title: "Affordable Price",
    description: "We believe that quality furniture should be accessible to everyone. That's why we offer a wide range of products at affordable prices."
  },
  {
    icon: <FaTruckFast className="text-[#332518] text-4xl" />,
    title: "Free Shipping",
    description: "We really understand our customers, so we will ship to any location quickly and safely. Enjoy free shipping on all orders."
  }
];

function WhyChooseUs() {
  return (
    <section className="w-full bg-white my-16 px-6 md:px-12 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
        Why We’re a Perfect Fit
      </h2>
      <p className="text-[#606060] mb-14 text-xs md:text-base">
       From premium craftsmanship to personalized comfort, discover what sets our sofas and service apart.
      </p>

      <div className="flex flex-wrap justify-between gap-8 text-left w-full">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start space-y-5 md:w-80 ">
            <div className="flex items-center gap-3">
              {benefit.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
            </div>
            <p className="text-[#606060] md:text-base text-sm ">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;