import React from "react";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

function ShowRoom() {
  return (
    <section className="flex justify-center items-center h-[500px] mb-16 px-20">
      <div className="h-auto w-[50%] ">
        <div className="h-auto w-[50%] flex flex-col gap-4">
          <h2 className="text-black text-3xl">Visit Our Showroom</h2>
          <p className="text-black text-md ">
            Step into comfort see, feel, and experience our premium sofas in
            person.
          </p>

          <div>
            <Button
              sx={{
                backgroundColor: "#1D1D1D",
                width: "auto",
                height: "45px",
                borderRadius: "0px",
                border: "1px solid gray",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
              variant="contained"
            >
              <p className="flex gap-2 items-center text-[12px] px-4">
                Find Us on the Map <GoArrowUpRight />
              </p>
            </Button>
          </div>
        </div>
      </div>

      <div className="h-auto w-[50%]">
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
