'use client'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/bannerImages/61lwJy4B8PL._SX3000_.jpg'
import img2 from '../assets/bannerImages/71C-ztbXMCL._SX3000_.jpg'
import img3 from '../assets/bannerImages/71Ie3JXGfVL._SX3000_.jpg'
import img4 from '../assets/bannerImages/71LRjWQb6SL._SX3000_.jpg'


function Banner() {
 
  return (
    <div className="relative">
        <Carousel 
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false} 
            showThumbs={false}
        >
            <div>
                <Image width={'100%'} src={img1} alt="" />
            </div>
            <div>
                <Image width={'100%'}src={img2} alt="" />
            </div>
            <div>
                <Image width={'100%'} src={img3} alt="" />
            </div>
            <div>
                <Image width={'100%'} src={img4} alt="" />
            </div>
        </Carousel>
        <div className="w-full h-10 absolute bottom-0 left-0 md:bg-gradient-to-b from-transparent to-white" />
    </div>
  )
}

export default Banner
