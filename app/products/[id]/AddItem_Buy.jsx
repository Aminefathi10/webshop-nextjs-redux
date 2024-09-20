"use client"
import { addToBasket, selectItems } from "@/app/redux/features/basket/basketSlice";
import { useDispatch, useSelector } from 'react-redux';


function AddItem_Buy({divClasses, addClasses, buyClasses, product}) {
    const dispatch = useDispatch();
    const isAdded = useSelector(selectItems).some(item => item.id === product.id);

    function addProduct() {
        dispatch(addToBasket(product));
    }


  return (
        <div className={divClasses}>
            <button className={buyClasses}>
                Purchase Now
            </button>
            <button disabled={isAdded} onClick={addProduct} className={addClasses}>
                {!isAdded && <span>Add To Cart</span>}
                {isAdded && <span>Added</span>}
            </button>
        </div>
  )
}

export default AddItem_Buy
