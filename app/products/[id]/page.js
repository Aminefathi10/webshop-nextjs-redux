import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Products from '../../components/Products';
import Slider from './Slider.jsx'

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const deliveryDate = currentDate.getDate() + " - " + months[currentDate.getMonth()];

async function getProductsData(id) {
    const res = await fetch('http://localhost:5000/products/' + id);
    return res.json();
  }

async function Details({ location, params }) {


    const {title, description, category, images, price, rating} = await getProductsData(params.id);

    const fakePrice = Math.floor(Math.random() * ( Math.ceil(price) - 5)) + 5 + Math.ceil(price);
    const fakePercentage  =  100 - Math.floor((Math.ceil(price) * 100) / fakePrice) 

  return (
    <div className='max-w-[1300px] md:flex mx-auto'>
      

      <div className=" md:w-4/5">
        <div className='flex flex-col md:flex-row w-full'>
          <div className=" md:w-1/2 mx-auto h-full">
            <Slider images={images} />
          </div>

          <div className='px-3 py-2 md:w-1/2'>
              <h1 className='text-2xl font-medium mb-2'>{title}</h1>
              <h1 className='text-xl flex items-center text-orange-500'>
              <span className='font-medium'>{rating.rate}</span>
              {Array(Math.floor(rating.rate)).fill(<StarRateIcon />)}
              {Array(5 - Math.floor(rating.rate)).fill(<StarBorderIcon />)}
              <span className='text-black font-semibold text-lg'>{rating.count} Reviews</span>
              </h1>
              <h1 className='text-xl font-semibold font-display my-2'>

              <span className='text-3xl text-teal-800'>${Math.ceil(price) - 0.01}</span>
              
              <span className='ml-2 text-md text-gray-400 line-through
              '> 
                ${ fakePrice }
              </span>

              <span className='ml-2 text-red-600'>
                -{ fakePercentage }%
              </span>
              
              </h1>
              <p>{description}</p>
          </div>
          </div>

          <div className='mt-4 hidden md:block'>
            <h1 className='text-2xl font-bold ml-4 my-4'>Related Items</h1>
            <Products category={category}/>
          </div>
          

      </div>

      <div className='md:w-1/5 px-2 border-2 rounded-md md:sticky right-0 top-0 md:h-screen overflow-y-auto'>
            <div className='py-3 flex justify-between border-b border-gray-500'>
                <spna className="font-medium text-md">Ship to</spna>
                <span className='text-gray-600 flex items-center'><LocationOnIcon sx={{fontSize: 15}}/>{location}</span>
            </div>
            <div className='flex mt-3'>
                <LocalShippingIcon sx={{marginRight: 1}} />
                <div>
                  <h1 className='font-semibold'>Free Shipping</h1>
                  <h2><span className='font-medium text-gray-500'>Delevery:</span> <span>{deliveryDate}</span></h2>
                </div>
            </div>
            <div className='flex mt-3 border-b'>
                <GppGoodIcon sx={{marginRight: 1}} />
                <div>
                  <h1 className='font-semibold'>Security & PrivecyPrivecy</h1>
                  <p className='text-sm text-gray-600 font-light leading-4 '>Safe payments: We do not share your personal details with any third parties without your consent.
                  Secure personal details: We protect your privacy and keep your personal details safe and secure.
                  </p>
                </div>
                
            </div>
            <div>
                  <div className='flex justify-between items-end pr-4 mb-2'>
                    <h1 className='my-3 font-bold'>Quantity</h1>
                    
                    <select className='p-2 font-medium text-gray-500 text-sm w-15 rounded-md border-2 border-emerald-400 bg-teal-200'>
                      <option className='mb-1 bg-slate-500 text-white' name="1" id="">1</option>
                      <option className='mb-1 bg-slate-500 text-white' name="2" id="">2</option>
                      <option className='mb-1 bg-slate-500 text-white' name="3" id="">3</option>
                      <option className='mb-1 bg-slate-500 text-white' name="4" id="">4</option>
                      <option className='mb-1 bg-slate-500 text-white' name="5" id="">5</option>
                    </select>
                  </div>
                  
                  <div className='hidden md:flex justify-center md:flex-col md:justify-evenly font-bold'>
                    <button className='px-8 py-2 border-2 md:border-none md:px-9 md:py-3 bg-teal-500 border-teal-500  text-white rounded-l-full md:rounded-full md:mb-2 hover:bg-teal-400'>
                      Purchase Now
                    </button>
                    <button className='px-8 py-2 border-2 border-teal-500 text-teal-500 md:rounded-full rounded-r-full hover:bg-teal-100'>
                      Add To Cart
                    </button>
                  </div>
            </div>

            <div className='mt-4 block md:hidden'>
            <h1 className='text-2xl font-bold ml-4 my-4'>Related Items</h1>
            <Products category={category}/>
          </div>

          </div>
          <div className='flex justify-center md:hidden font-bold bg-white w-full sticky bottom-0 py-1'>
                    <button className='px-8 py-2 border-2 bg-teal-500 border-teal-500  text-white rounded-l-full hover:bg-teal-400 hover:border-teal-400'>
                      Purchase Now
                    </button>
                    <button className='px-8 py-2 border-2 border-teal-500 text-teal-500 rounded-r-full hover:bg-teal-100 hover:border-teal-400 border-l-none'>
                      Add To Cart
                    </button>
          </div>
    </div>
  )
}

export default Details
