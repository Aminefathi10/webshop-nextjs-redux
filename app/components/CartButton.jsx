"use client"
import { CartIcon } from '../assets';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/features/basket/basketSlice';

function CartButton() {

    const items = useSelector(selectItems)

  return (
    <div className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-sky-400 font-semibold relative">
        <span className='absolute top-[-2px] left-[5.5px] text-sm md:text-md md:top-[-6px] md:left-[18px]'>{items.length}</span>
        <CartIcon className="w-6" />
        <h3 className="hidden md:block ">Basket</h3>
    </div>
  )
}

export default CartButton