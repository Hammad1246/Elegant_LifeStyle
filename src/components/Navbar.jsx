"use client"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useState, useCallback, useMemo } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTruckArrowRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from 'next/link';

const shippingMessages = [
  "Free shipping on orders of $49+",
  "Save big on our summer sale!",
  "Enjoy exclusive discounts this week!",
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handlePrevMessage = useCallback(() => {
    setCurrentMessageIndex(prev => 
      prev === 0 ? shippingMessages.length - 1 : prev - 1
    );
  }, []);

  const handleNextMessage = useCallback(() => {
    setCurrentMessageIndex(prev => 
      prev === shippingMessages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const currentMessage = useMemo(() => shippingMessages[currentMessageIndex], [currentMessageIndex]);

  const memoizedNavigation = useMemo(() => navigation.map(item => ({
    ...item,
    current: pathname === item.href
  })), [pathname]);

  return (
    <nav className="absolute top-0 left-0 w-screen">
      {/* Shipping Banner */}
      <div className="w-screen h-[34px] bg-[#332518] flex justify-center items-center">
        <div className="flex justify-evenly items-center w-auto h-[18px] md:gap-14 lg:gap-20 gap-8">
          <IoIosArrowBack
            className="cursor-pointer text-white"
            onClick={handlePrevMessage}
            aria-label="Previous message"
          />
          <div className="w-auto h-full flex items-center gap-3 overflow-hidden">
            <FaTruckArrowRight className="text-white mr-2" />
            <p className="text-sm text-white">
              {currentMessage}
            </p>
          </div>
          <IoIosArrowForward
            className="cursor-pointer text-white"
            onClick={handleNextMessage}
            aria-label="Next message"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <Disclosure as="nav" className="absolute w-screen bg-transparent z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="mx-auto w-[80%]">
          <div className="relative flex h-[68px] items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton 
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-label="Toggle navigation"
              >
                <Bars3Icon className="block size-6 group-data-open:hidden" />
                <XMarkIcon className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Company Logo"
                  src="/images/brandLogo.png"
                  className="h-auto w-auto"
                  width={100}
                  height={40}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-7">
                  {memoizedNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-white border-b-[1.5px] border-white "
                          : "text-white hover:border-b-[1.5px] hover:border-white",
                        "inline-block px-1 py-1 text-sm text-center"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {memoizedNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </nav>
  );
}