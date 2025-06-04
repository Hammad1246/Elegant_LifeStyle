"use client";
import { PiExclamationMarkFill } from "react-icons/pi";
import { useFurniture } from "@/app/context/FurnitureContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <section className="min-h-screen px-4 sm:px-6 py-6 bg-white flex items-center mt-12">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#332518] mb-8 text-center">
          Request a Quote
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
       
          <div className="flex flex-col min-h-[400px] bg-gray-50 rounded-lg overflow-hidden">
            {selectedFurniture && (
              <div className="relative group h-full flex items-center justify-center p-4">
                <img
                  src={selectedFurniture.image}
                  alt={selectedFurniture.title}
                  className="w-full h-full object-fill"
                />
              </div>
            )}
          </div>

          {/* Right Form Section */}
          <form className="h-full bg-gradient-to-br from-[#504132] to-[#332518] text-white p-4 sm:p-5 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-[#FAD02E]/30">
                  Product Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium mb-1">
                      Product
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
                      Quantity
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
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-[#FAD02E]/30">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (___) ___-____"
                      className="w-full border border-gray-300 bg-gray-100 text-black p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#332518]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <PiExclamationMarkFill className="text-white mt-0.5 mr-1.5 flex-shrink-0 text-sm" />
                <label className="text-xs">
                  By submitting this form, you agree to our{" "}
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
