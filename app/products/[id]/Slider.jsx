"use client"

import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
                  <img className='w-full aspect-square object-contain' src={src} alt="" />
                </div>
              )) }
          </Carousel>
            </div>
    
  )
}

export default Slider
