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
    <section className="w-full bg-white my-12 px-4 md:px-20 text-center">
      <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
        Why Choose Us
      </h2>
      <p className="text-[#606060] mb-14">
        We strive to provide our customers with the best possible shopping
        experience.
      </p>

      <div className="flex flex-wrap justify-between gap-8 text-left w-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start space-y-5 w-80">
            <div className="flex items-center gap-3">
              {benefit.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
            </div>
            <p className="text-[#606060] text-md">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;