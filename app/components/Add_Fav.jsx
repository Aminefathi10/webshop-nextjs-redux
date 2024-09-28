"use client"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, addToBasket } from '../redux/features/basket/basketSlice';
import { addToFavorite, removeFromFavorite, selectLikedItems } from '../redux/features/favorite/fovoriteSlice';
import { useRouter } from 'next/navigation';

function Add_Fav({ product }) {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const isAdded = useSelector(selectItems).some(item => item.id === product.id);
  const isLiked = useSelector(selectLikedItems).some(item => item.id === product.id);

  function addProduct(event) {
      event.stopPropagation();
      event.preventDefault();
    if (isAdded) {
      router.push('/basket');
      return
    }
      dispatch(addToBasket({ quantity: "1", ...product }));
  }

  function likeItem(event) {
    event.stopPropagation();
    event.preventDefault();
    if (isLiked) {
      dispatch(removeFromFavorite(product.id));
      return
    }
    dispatch(addToFavorite(product));
  }

    return (
        <div className="flex flex-col justify-evenly text-sky-700 p-2 sm:absolute top-32 right-0 sm:w-fit">
            <button onClick={addProduct} className='aspect-square rounded-full bg-teal-200 hover:bg-teal-300 p-1 md:mb-1'>
              {!isAdded && <AddShoppingCartIcon />}
              {isAdded && <ShoppingCartCheckoutIcon />}
            </button>
            <button onClick={likeItem} className='aspect-square rounded-full bg-teal-200 hover:bg-teal-300 p-1 felx justify-center items-center'>
              {!isLiked && <FavoriteBorderIcon />}
              {isLiked && <FavoriteIcon className='text-red-500' />}
            </button>
        </div>
    )
}

export default Add_Fav