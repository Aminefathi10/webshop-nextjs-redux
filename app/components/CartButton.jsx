"use client"
import { CartIcon } from '../assets/svgs';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/features/basket/basketSlice';
import { useRouter } from 'next/navigation';

function CartButton() {

    const items = useSelector(selectItems);
    const route = useRouter();

  return (
    <div onClick={() => route.push('/basket')} className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-sky-400 font-semibold relative">
        <span className='absolute top-[-5px] left-[5.5px] text-sm md:text-md md:top-[-6px] md:left-[16px]'>{items.length}</span>
        <CartIcon className="w-6" />
        <h3 className="hidden md:block ">Basket</h3>
    </div>
  )
}

export default CartButton
