"use client"
import { useSelector, useDispatch } from "react-redux";
import { selectItems, removeFromBasket } from "../redux/features/basket/basketSlice";
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {

  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <div className="flex max-w-5xl flex-col sm:flex-row">
      <div className="sm:w-3/4 px-5">
        <h1 className="text-3xl font-bold pl-10">Basket</h1>
        <div className="flex flex-col gap-5 px-2 py-3">
          { items.map(({ id, title, price, images, quantity }) => (
            <div key={id} className="flex items-center justify-between shadow-md border border-black rounded-md">
              <img className="w-24 aspect-square object-contain m-2" src={images[0]} alt="item" />
              <div className="flex flex-col flex-1 justify-between px-2">
                <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
                <div className="flex justify-between">
                  <h1 className="text-2xl text-teal-500">${price}</h1>
                  <p>{quantity}piece</p>
                </div>
              </div>
              <button onClick={() => dispatch(removeFromBasket(id))} className="text-md px-2 text-gray-700">
                <DeleteIcon />
              </button>
            </div>
          )) }
        </div>
      </div>
      <div className="w-1/4">

      </div>
    </div>
  )
}

export default Cart
