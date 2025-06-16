import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white  w-full flex justify-center items-center">
      <div className="container mb-8 mt-16 w-[90%]">
        {/* Top Section */}
        <div className="flex  justify-between  ">
          {/* Left Column */}
          <div className=" w-[40%] space-y-7">
            <Image
              src="/images/footerLogo.png"
              alt="Elegant Lifestyle"
              className="w-[247px] h-[64px] mb-6"
              width={247}
              height={64}
            />
            <p className="text-sm text-[#606060]">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-[#606060]">
                <p className="flex justify-center items-center">
                  <FaMapMarkerAlt className="mr-2 text-black" />
                  3/18 RUDLOC RD, MORLEY WA
                </p>
              </div>
              <div className="flex items-center text-sm text-[#606060]">
                <p className="flex justify-center items-center">
                  <FaPhoneAlt className="mr-2 text-black" />
                  +61 410 985 414
                </p>
              </div>
              <div className="flex items-center text-sm text-[#606060]">
                <p className="flex justify-center items-center">
                  <FaPhoneAlt className="mr-2 text-black" />
                  +61 422 288 285
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap w-[50%] justify-between">
            {/* Company */}
            <div className="w-1/4">
              <h4 className="!font-semibold text-lg text-[#191D1F] mb-4">
                Company
              </h4>
              <ul className="space-y-5 text-sm text-[#606060]">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="w-1/4">
              <h5 className="!font-semibold text-lg text-[#191D1F] mb-4">
                Products
              </h5>
              <ul className="space-y-5 text-sm text-[#606060] ">
                <li>
                  <a href="#" className="hover:underline ">
                    Beds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Chairs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tables
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    All
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="w-1/4">
              <h5 className="!font-semibold text-lg text-[#191D1F] mb-4">
                Follow Us
              </h5>
              <ul className="space-y-5 text-sm text-[#606060]">
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg "
              >
                <FaArrowUp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#606060] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-sm text-[#606060]">
          <p>©ElegantLifestyle. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:underline  !font-semibold  text-[#191D1F]"
              style={{
                fontFamily: "var(--font-cardo), serif",
              }}
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:underline !font-semibold  text-[#191D1F]"
              style={{
                fontFamily: "var(--font-cardo), serif",
              }}
            >
              Terms & Conditions
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:underline !font-semibold  text-[#191D1F]"
              style={{
                fontFamily: "var(--font-cardo), serif",
              }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
