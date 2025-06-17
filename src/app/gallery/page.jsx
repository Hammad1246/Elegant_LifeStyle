import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import GalleryCategory from '@/components/GalleryCategory'
import InstagramGallery from '@/components/InstagramGallery'

function page() {
  return (
   <>
   <HeroBanner bannerName={"Gallery"}/>
    <GalleryCategory/>
      <InstagramGallery />
   </>
  )
}

export default page