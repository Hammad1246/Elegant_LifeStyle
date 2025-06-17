import { BiDollar } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { useFurniture } from "@/app/context/FurnitureContext";
import Link from "next/link";
import Image from "next/image";

export default function FurnitureCard({ title, price, oldPrice, image }) {
  const { setSelectedFurniture } = useFurniture();

  const handleQuoteClick = () => {
    setSelectedFurniture({ title, image });
  };

  return (
    <div className="bg-white   overflow-hidden w-auto h-auto mx-2">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="md:w-full h-36 w-64 md:h-72 object-cover rounded-lg"
      />
      <div className="py-4">
        <h2 className="md:text-2xl text-xl text-black ">{title}</h2>
        <div className="text-[#606060] mt-2 flex justify-start items-center">
          <span className="md:text-base text-sm flex justify-start items-center">
            <BiDollar />
            {price.toFixed(2)} USD
          </span>
          <span className="line-through text-[#606060] md:text-base text-sm ml-2">
            ${oldPrice.toFixed(2)} USD
          </span>
        </div>
        <p className="md:text-sm text-xs text-[#606060] mt-2">
          Look at the latest collection that we offer….
        </p>
        <Link href={"/product"}>
          <button
            className="mt-4 text-black text-sm  md:text-base cursor-pointer flex justify-center items-center gap-1 "
            onClick={handleQuoteClick}
          >
            Get A Quote <GoArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
