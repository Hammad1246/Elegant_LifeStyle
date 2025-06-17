import React from "react";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

function ShowRoom() {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center h-auto md:mb-16 mb-8 md:px-12 gap-8 md:gap-0">
      <div className="h-auto md:w-[50%] w-full  ">
        <div className="h-auto md:w-[50%] w-full flex justify-center md:justify-starts md:items-start items-center flex-col md:gap-1 px-6 md:px-0">
          <h2 className="text-black md:text-3xl text-2xl">Visit Our Showroom</h2>
          <p className="text-black text-center md:text-start  md:text-base text-sm  mb-4">
            Step into comfort see, feel, and experience our premium sofas in
            person.
          </p>

          <div>
            <Button
              sx={{
                backgroundColor: "#1D1D1D",
                width: "auto",
                height: { xs: "40px", md: "45px" },
                borderRadius: "0px",
                border: "1px solid gray",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
              variant="contained"
            >
              <p className="flex gap-2 items-center text-[12px] md:px-4 px-2">
                Find Us on the Map <GoArrowUpRight />
              </p>
            </Button>
          </div>
        </div>
      </div>

      <div className="h-auto md:w-[50%] w-[70%]">
        <Image
          src={"/images/map.png"}
          alt="Living Room"
          width={800}
          height={500}
          className="w-auto h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default ShowRoom;
