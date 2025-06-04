import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import InstagramGallery from '@/components/InstagramGallery'
import { Button } from '@mui/material'
import { GoArrowUpRight } from 'react-icons/go'
import AboutUs from '@/components/AboutUs'
import TopCategory from '@/components/TopCategory'
import AboutCollection from '@/components/AboutCollection'

function page() {
  return (
    <>
    <HeroBanner bannerName={"About"} />
    <AboutUs/>
    <AboutCollection/>
    <TopCategory/>
    <section className='py-12 flex justify-center items-center flex-col space-y-4'>
        <h1 className='text-4xl text-black'>Ready to experience Luxury ?</h1>
        <p className='text-[#868686]'>Look at the latest collection that we offer</p>
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
                    <p className="flex gap-2 items-center text-sm px-4">
                      Contact Us <GoArrowUpRight />
                    </p>
                  </Button>
    </section>
    <InstagramGallery/>
    </>
  )
}

export default page