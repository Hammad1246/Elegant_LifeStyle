import { Box } from "@mui/material";
import React, { useMemo } from "react";
import Image from "next/image";

const IMAGES = [
  { id: 1, image: "/images/c1.png", alt: "About us image 1" },
  { id: 2, image: "/images/c2.png", alt: "About us image 2" },
  { id: 3, image: "/images/c3.png", alt: "About us image 3" },
  { id: 4, image: "/images/c14.png", alt: "About us image 4" },
  { id: 5, image: "/images/c15.png", alt: "About us image 5" },
];

const GRID_STYLES = {
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(2, 1fr)",
  height: "100%",
  width: "100%",
};

function AboutUs() {
  const imageGrid = useMemo(
    () => [
      // First row - 2 images side by side
      { image: IMAGES[3], colSpan: 1 },
      { image: IMAGES[4], colSpan: 1 },
      // Second row - 1 full width image
      { image: IMAGES[2], colSpan: 2 },
      // Third row - 2 images side by side
      { image: IMAGES[3], colSpan: 1 },
      { image: IMAGES[4], colSpan: 1 },
    ],
    []
  );

  return (
    <div className="h-screen px-10 flex justify-center items-center">
      {/* Text Content */}
      <div className="w-[50%] h-full flex flex-col justify-center items-left px-6 space-y-5">
        <h1 className="text-black text-4xl">About Us</h1>
        <p className="text-sm text-[#868686]">
          Lorem ipsum dolor sit amet consectetur. Cras lorem ultrices morbn
          vitae. Diam amet lectus interdum libero ante sit tortor. Sollicitudin
          mauris orci est neque nibh sit. Vehicula convallis faucibus tempus
          auctor. Varius sed diam penatibus ut. At blandit gravida elit suscipit
          sed ac egestas ipsum. Diam ullamcorper rhoncus et viverra odio mi
          morbi sit. Tempus augue odio pulvinar cursus lacus enim. Lacinia
          luctus sed molestie massa dui eu. Ac eros justo at tincidunt
          sodaleposuere vestibulum nibh. Sagittis mattis enim suspendisse
          dignissim gravida. Magna sed auctor pulvinar aliquam nunc leo.
          Tincidunt mattis massa nulla senectus enim nullam enim sed arcu.Lorem
          ipsum dolor sit amet consectetur. Cras lorem ultrices morbi nam vitae.
          Diam amet lectus interdum libero ante sit tortor. Sollicitudin mauris
          orci est neque nibh sit. Vehicula convallis faucibtempus auctor.
          Varius sed diam penatibus ut. At blandit gra suscipit ut sed ac
          egestas ipsum. Diam ullamcorper rhoncus et viveodio mi morbi sit.
          Tempus augue odio pulvinar cursus lacus eLacinia luctus sed molestie
          massa dui eu. Ac eros justo at tincidusodales posuere vestibulum nibh.
          Sagittis mattis enim suspendisse dignissim gravida. Magna sed ar
          pulvinar aliquam nuleo.Tincidunt mattis massa nulla senectus enim
          nullam enim sarcu.d arcu.Lorem ipsum dolor sit amet consectetur. Cras
          lorem ultrices morbi nam vitae. Diam amet lectus interdum libero ante
          sit tortor. Sollicitudin mauris orci est neque nibh sit. Vehicula
          convallis faucibus tempus auctor. Varius sed diam penatibus ut. .
        </p>
      </div>

      {/* Image Grid */}
      <div className="w-[50%] h-full flex items-center justify-center p-4">
        <div className="w-full h-full max-h-[80vh]">
          <Box sx={GRID_STYLES} className="grid-rows-[auto_auto_auto]">
            {imageGrid.map((item, index) => (
              <Box
                key={`${item.image.id}-${index}`}
                sx={{ gridColumn: `span ${item.colSpan}` }}
                className="rounded-lg overflow-hidden shadow-lg h-full w-full"
              >
                <Image
                  src={item.image.image} 
                  alt={item.image.alt || "Image description"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={item.colSpan === 2 ? 800 : 400}
                  height={400}
                />
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
