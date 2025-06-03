import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import GalleryCategory from '@/components/GalleryCategory'

function page() {
  return (
   <>
   <HeroBanner bannerName={"Gallery"}/>
    <GalleryCategory/>
   </>
  )
}

export default page