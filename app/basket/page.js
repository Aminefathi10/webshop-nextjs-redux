"use client"
import { useSelector, useDispatch } from "react-redux";
import { selectItems, removeFromBasket, increment, decrement } from "../redux/features/basket/basketSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import { EmptyCart } from "../assets/svgs";
import Link from "next/link";
import { useEffect, useState } from "react";

function Cart() {

  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (items.length > 0) {
      setSubTotal(items.reduce((a = 0, b) => a + Number(b.price) * Number(b.quantity), 0));
      setTotal(items.reduce((a = 0, b) => a + Number(b.price) * Number(b.quantity), 0) * 1.05 + 1.99)
    } else {
      setSubTotal(0);
      setTotal(0);
    }
    
  }, [items])

  return (
    <div className="flex max-w-6xl mx-auto flex-col sm:flex-row py-4">
      <div className="sm:w-3/5 px-5">
        <h1 className="text-xl md:text-3xl font-bold md:pl-8 py-2">Shopping Basket</h1>
        <div className="flex flex-col gap-5 px-2 py-3 w-full">
          { items.length === 0 && <div className="w-full md:w-fit mx-auto">
            <EmptyCart className="w-full md:w-96" />
            <h1 className="font-bold text-lg">Your Basket Is Empty</h1>
            <p>Search something or go back to
            <Link href='/'>
              <span className="ml-1 text-sky-500 font-semibold">Products Feed</span>
            </Link>
            </p>
            
          </div> }
          { items.map(({ id, title, price, image, quantity }) => (
            <div key={id} className="flex items-center justify-between shadow-xl rounded-md w-full">
              <img width={96} height={96} className="w-24 aspect-square object-contain m-2" src={image} alt="item" />

              <div className="flex flex-col flex-1 px-2 justify-evenly h-24">
                  <h1 className="text-xl font-bold  flex justify-between"><p className="line-clamp-1">{title}</p>
                
                  <button onClick={() => dispatch(removeFromBasket(id))} className="text-sm px-2 text-gray-700">
                    <DeleteIcon />
                  </button>
                  </h1>
                  <div className="flex justify-between">
                      <h1 className="text-2xl text-teal-500">${price}</h1>
                      <div className="flex justify-between gap-3 items-center text-gray-500 font-bold">
                        <button onClick={() => dispatch(decrement(id))}>-</button>
                          <p>{quantity}</p>
                        <button onClick={() => dispatch(increment(id))}>+</button>
                      </div>
                  </div>
              </div>
            </div>
          )) }
        </div>
      </div>
      <div className="md:w-2/5 flex flex-col px-3">
            <h1 className="text-2xl font-bold ml-2 my-2">Summary</h1>
            <div className="flex flex-col  gap-2">
              <div className="flex justify-between text-gray-700 font-semibold text-lg">
                <h1>Subtotal</h1>
                <p>$ {subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold text-lg">
                <h1>Shipping Fee</h1>
                <p>$1.99</p>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold text-lg">
                <h1>Tax Rate</h1>
                <p>5%</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <h1>Total</h1>
                <p>$ {total.toFixed(2)}</p>
              </div>
            </div>
            <button className="bg-teal-600 rounded-full text-white py-2 my-4 font-bold text-lg">Checkout</button>
            <h1 className="text-lg font-bold mb-2">Pay With</h1>
            <div className='flex flex-wrap gap-1 pr-20'>
              <span><img className='h-6' src="https://img className='h-6'.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="" /></span>
              <span className='-ml-1'><img className='h-6' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png" alt="" /></span>
              <span><img className='h-6' src="https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" alt="" /></span>
          </div>
      </div>
    </div>
  )
}

export default Cart
