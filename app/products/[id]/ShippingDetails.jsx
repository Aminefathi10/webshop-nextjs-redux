"use client"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  { useSelector } from 'react-redux';
import { selectLocation } from '@/app/redux/features/location/locationSlice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AddItem_Buy from './AddItem_Buy';
import { useState } from 'react';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const deliveryDate = currentDate.getDate() + " - " + months[currentDate.getMonth()];


function ShippingDetails({ product }) {
    
    const location = useSelector(selectLocation);
        
    const [quantity, setQuantity] = useState(1);

    function handleChange (e) {
      setQuantity(e.target.value);
    }

  return (
    <>
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
                    
                    <select onChange={handleChange} className='p-2 font-medium text-gray-500 text-sm w-15 rounded-md border-2 border-emerald-400 bg-teal-200'>
                      <option className='mb-1 bg-slate-500 text-white'>1</option>
                      <option className='mb-1 bg-slate-500 text-white'>2</option>
                      <option className='mb-1 bg-slate-500 text-white'>3</option>
                      <option className='mb-1 bg-slate-500 text-white'>4</option>
                      <option className='mb-1 bg-slate-500 text-white'>5</option>
                    </select>
                  </div>
                  
                  <AddItem_Buy
                   product={{...product, quantity}}
                   divClasses='hidden md:flex justify-center md:flex-col md:justify-evenly font-bold'
                   addClasses='px-8 py-2 border-2 border-teal-500 text-teal-500 md:rounded-full rounded-r-full hover:bg-teal-100'
                   buyClasses='px-8 py-2 border-2 md:border-none md:px-9 md:py-3 bg-teal-500 border-teal-500  text-white rounded-l-full md:rounded-full md:mb-2 hover:bg-teal-400' />
                   
            </div>
            
          </div>
          <AddItem_Buy
           product={{...product, quantity}}
           divClasses='flex justify-center md:hidden font-bold bg-white w-full sticky bottom-0 py-1'
           buyClasses='px-8 py-2 border-2 bg-teal-500 border-teal-500  text-white rounded-l-full hover:bg-teal-400 hover:border-teal-400'
           addClasses='px-8 py-2 border-2 border-teal-500 text-teal-500 rounded-r-full hover:bg-teal-100 hover:border-teal-400 border-l-none' />
          </>
  )
}

export default ShippingDetails
