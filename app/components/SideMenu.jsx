'use client'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';



function SideMenu({username, country, flag}) {
    const categoriesRef = useRef(null);
    const arrowDownRef = useRef(null);
    const arrowDownRef_2 = useRef(null);
    const brandsRef = useRef(null);
    
    
    function slideBack() {
        document.getElementById("slideref").classList.add("-translate-x-full");
        document.getElementById('shadowLayerRef').classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }

  return (
    <>
    <div id="slideref" className='w-5/6 max-w-96 h-screen overflow-y-scroll fixed top-0 left-0 z-30 bg-white -translate-x-full duration-200'>
        
        <header className="flex w-full font-bold bg-slate-500 text-white py-4 px-2 justify-between">

            <h1>Hello, {username ? username : "Sing in"}</h1>
            <button onClick={slideBack} className='w-7 h-7 rounded-full hover:bg-slate-400 flex items-center justify-center'><CloseIcon /></button>


        </header>
        {/* categories */}
        <h1 className="text-xl font-bold px-4 my-2">Categories</h1>
            <div className='overflow-hidden'>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Computers</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Smart Home</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Electronics</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Arts & Crafts</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Automotive</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Baby</div>
                <div ref={arrowDownRef} onClick={e => {
                    e.target.classList.add("hidden");
                    categoriesRef.current.classList.remove("hidden");
                }} className="p-2 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none text-center text-gray-600">
                show more<KeyboardArrowDownIcon /></div>
                <div ref={categoriesRef} className='hidden'>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Beauty and Personal Care</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Women&apos;s Fashion</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Men&apos;s Fashion</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Girls Fashion</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Boys Fashion</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Health and Household</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Home and Kitchen</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Industrial and Scientific</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Luggage</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Movies & Television</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Pet supplies</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Software</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Sports and Outdoors</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Tools & Home Improvement</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Toys and Games</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Video Games</div>
                <div onClick={() => {
                    categoriesRef.current.classList.add("hidden");
                    arrowDownRef.current.classList.remove("hidden");
                }} className="p-2 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none text-center text-gray-600">
                show less<KeyboardArrowUpIcon />
                </div>
                </div>
            </div>
        {/* brands */}
        <h1 className="text-xl font-bold px-4 my-2">Brands</h1>
            <div className="overflow-hidden">
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Nike</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Adidas</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Zara</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">H&M</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Levi&apos;s</div>
                <div ref={arrowDownRef_2} onClick={e => {
                    e.target.classList.add("hidden");
                    brandsRef.current.classList.remove("hidden");
                }} className="p-2 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none text-center text-gray-600">
                show more<KeyboardArrowDownIcon /></div>
                <div ref={brandsRef} className="hidden">
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Uniqlo</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Gucci</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Prada</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Under Armour</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Apple</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Samsung</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Sony</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Microsoft</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">LG</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Panasonic</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Dell</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">HP</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Lenovo</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Philips</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Bosch</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Denso</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Valeo</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Magna International</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Aisin Seiki</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Continental</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">ZF Friedrichshafen</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Bridgestone</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Michelin</div>
                <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Goodyear</div>
                <div onClick={() => {
                    brandsRef.current.classList.add("hidden");
                    arrowDownRef_2.current.classList.remove("hidden");
                }} className="p-2 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none text-center text-gray-600">
                show less<KeyboardArrowUpIcon />
                </div>
                </div>
            </div>
        {/* settings */}
        <h1 className="text-xl font-bold px-4 my-2">Help and Settings</h1>
        <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Your Account</div>
        <div className="p-2 flex items-center px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none"><img className='mr-1' width={20} src={flag} alt="" />{country}</div>
        <div className="p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Customer Service</div>
        <div className="mb-5 p-2 px-10 text-md font-semibold hover:bg-slate-300 cursor-pointer select-none">Sign In</div>

    </div>

    <div onClick={slideBack} id="shadowLayerRef" className="fixed h-screen w-screen bg-black opacity-50 top-0 z-20 hidden duration-200"/>

    </>

  )
}

export default SideMenu
