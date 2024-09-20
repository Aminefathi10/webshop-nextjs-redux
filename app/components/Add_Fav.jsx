"use client"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, addToBasket } from '../redux/features/basket/basketSlice';
// import { useRouter } from 'next/router';

function Add_Fav({ product }) {
  
  const dispatch = useDispatch();
  // const router = useRouter();
  const isAdded = useSelector(selectItems).some(item => item.id === product.id);

  function addProduct(event) {
    if (isAdded) {
      // router.push('/');
      return
    }
      event.stopPropagation();
      event.preventDefault();
      dispatch(addToBasket(product));
  }

    return (
        <div className="flex flex-col justify-evenly text-sky-700 p-2 sm:absolute top-32 right-0 sm:w-fit">
            <button onClick={addProduct} className='aspect-square rounded-full bg-teal-200 hover:bg-teal-300 p-1 md:mb-1'>
              {!isAdded && <AddShoppingCartIcon />}
              {isAdded && <ShoppingCartCheckoutIcon />}
            </button>
            <button className='aspect-square rounded-full bg-teal-200 hover:bg-teal-300 p-1'>
              <FavoriteBorderIcon />
            </button>
        </div>
    )
}

export default Add_Fav