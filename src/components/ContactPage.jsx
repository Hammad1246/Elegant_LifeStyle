"use client";
import { PiExclamationMarkFill } from "react-icons/pi";
import { useFurniture } from "@/app/context/FurnitureContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ContactPage() {
  const { selectedFurniture } = useFurniture();
  const router = useRouter();

  useEffect(() => {
    if (!selectedFurniture) {
      router.replace("/");
    }
  }, [selectedFurniture, router]);

  if (!selectedFurniture) return null; // Prevent flicker

  return (
    <section className="min-h-screen md:px-12 px-6 py-6 bg-white flex items-center mt-12">
      <div className="w-full ">
        <div className="text-center pb-5">
          <h1 className="text-4xl font-bold text-[#332518] text-center">
            Request a Quote
          </h1>
          <p className="text-gray-500 mt-1">
            Fill out the form below to get a customized quote for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
          <div className="flex w-full flex-col md:min-h-[400px] min-h-[300px] bg-gray-50 rounded-lg overflow-hidden lg:col-span-4">
            {selectedFurniture && (
              <Image
                src={selectedFurniture.image}
                alt={selectedFurniture.title || "Furniture image"}
                className="w-full md:h-[500px] h-[300px] object-cover rounded-2xl"
                width={800}
                height={500}
              />
            )}
          </div>

          {/* Right Form Section */}
          <form className="h-[500px] w-full  text-black p-4 sm:p-5 rounded-lg shadow-md lg:col-span-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center w-full gap-2 pb-3">
                  <h2 className="text-lg font-bold whitespace-nowrap">
                    Product Information
                  </h2>
                  <span className="h-px flex-1 bg-[#332518]/30"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium mb-1">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={selectedFurniture.title}
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="1"
                      min="1"
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center w-full gap-2 pb-3">
                  <h2 className="text-lg font-bold whitespace-nowrap">
                    Contact Information
                  </h2>
                  <span className="h-px flex-1 bg-[#332518]/30"></span>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                     
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                     
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                    
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <PiExclamationMarkFill className="text-white mt-0.5 mr-1.5 flex-shrink-0 text-sm" />
                <label className="text-xs">
                  Read our{" "}
                  <a href="#" className="font-bold hover:underline transition">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-bold hover:underline transition">
                    Terms of Service
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-[#504132] text-white py-2 px-4 rounded-md font-bold text-sm transition-all duration-200 transform hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                Get Your Quote Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
