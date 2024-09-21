"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { selectLikedItems } from '../redux/features/favorite/fovoriteSlice';


function FavoriteButton() {

    const items = useSelector(selectLikedItems);

  return (
    <div className="flex flex-col items-center justify-center mx-4 text-white cursor-pointer hover:text-sky-400 font-semibold relative">
                
      <FavoriteIcon />
      <h3 className="hidden md:block ">Favorite</h3>
      { items.length > 0 && <span className='p-1 text-xs flex justify-center items-center bg-red-500 text-white rounded-full absolute top-0 right-[-4.8px] w-[13px] h-[13px] md:right-3 md:top-[-3px]'>{items.length}</span> }

    </div>
    
  )
}


export default FavoriteButton
