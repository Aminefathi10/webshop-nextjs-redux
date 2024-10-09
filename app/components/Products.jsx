
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Add_Fav from './Add_Fav.jsx'
import LottiePlayer from './LottiePlayer.jsx';
import animationData from '../assets/animations/no-products-available.json'


async function getProductsData(category) {
  const res = await fetch('https://' + process.env.VERCEL_URL + '/api/products');
  return !category ? res.json() : res.json()
  .then(res => res.filter(item => item.category === category));
}

async function Products({ category }) {
    
  const products = await getProductsData(category);

  return (
    <>
    { products.length === 0 && <LottiePlayer animationData={animationData} />}
    <div className='w-full px-2 sm:grid sm:grid-cols-3 md:grid-cols-4 mx-auto content-center justify-items-center'>
      
      { products.map(({ id, title, price, description, images, rating }) => (
        <Link key={id} href={"/products/" + id}>
        <div className='flex justify-between h-28 sm:h-fit md:w-56 sm:52 group mb-5 cursor-pointer border-2 border-transparent hover:border-teal-700 rounded-xl overflow-hidden shadow-md sm:flex-col relative group'>
            <div className="md:h-52 aspect-square overflow-hidden flex justify-center items-center">
              <img className='h-full object-contain group-hover:scale-110 duration-200' src={images[0]} />
            </div>
            
            <div className="flex flex-col px-1 flex-1 justify-start">
              <h3 className='line-clamp-1 text-bold font-bold'>{title.slice(0, title.indexOf("."))}</h3>
              
              <h3 className='text-orange-500 flex items-end text-sm font-semibold'>
              <span className='font-bold'>{rating.rate}</span>{Array(Math.floor(rating.rate)).fill().map((_, i) => <StarRateIcon sx={{fontSize: "1.55em"}} key={i} />)} {Array(5 - Math.floor(rating.rate)).fill().map((_, i) => <StarBorderIcon sx={{fontSize: "1.55em"}} key={i} />)}
              <span className='text-gray-600 flex items-end'>({rating.count} <PersonIcon/>)</span>
              </h3>
              
              <h2 className='font-semibold text-gray-700'>${price}</h2>
              <p className='line-clamp-2 md:line-clamp-3 text-sm leading-tight sm:hidden md:hidden'>{description}</p>
            </div>
            <Add_Fav product={{ id, title, price, description, images, rating }} />
        </div>
        </Link>
      )) }
    </div>
    </>
  )
}

export default Products
