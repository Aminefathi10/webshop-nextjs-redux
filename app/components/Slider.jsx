"use client"

import { Carousel } from 'react-responsive-carousel';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageSkeleton } from '../ui/skeletons';


function Slider({images}) {

    const [ width, setWidth ] = useState(window.innerWidth);

  function handleWidthChange(){
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => {
    window.removeEventListener("resize", handleWidthChange);
    }
    })

  return (
    
      <div className='md:w-5/6 mx-auto'>
              <Carousel 
              infiniteLoop
              showIndicators={false}
              showStatus={false} 
              showThumbs={ width >= 640 }
          >
              { images.map((src, i) => (
                <div className='flex items-center' key={i}>
                  <Suspense fallback={<ImageSkeleton />}>
                    <Image width={433} height={433} className='w-full aspect-square object-contain' src={src} alt="" />
                  </Suspense>
                  
                </div>
              )) }
          </Carousel>
            </div>
    
  )
}

export default Slider
