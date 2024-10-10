
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Slider({image}) {
  return (
    
      <div className='md:w-5/6 mx-auto'>
                  <img className='w-full aspect-square object-contain' src={image} alt="" />
                
            </div>
    
  )
}

export default Slider
