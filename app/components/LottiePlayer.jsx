"use client"
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ animationData, loop = true, autoplay = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      animationData: animationData
    });

    
    return () => animation.destroy();
  }, [animationData, loop, autoplay]);

  return (
    <div>
        <h1 className='text-xl font-bold text-emerald-700 text-center'>No Products Yet</h1>
        <div
            className='h-96'
            ref={containerRef}
            >
        </div>
   </div>
    
  );
};

export default LottiePlayer
