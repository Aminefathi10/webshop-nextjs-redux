'use client'

import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';



 function Search(props) {


    const searchRef = useRef(null);
    const resultsContainerRef = useRef(null);
    const [results, setResults] = useState([]);

    const route = useRouter();
    function goToDetails(id){
      route.push('/products/' + id)
    }

    const handleSearchChange = () => {
      searchRef.current.value !== "" ? 
      resultsContainerRef.current.classList.remove("hidden") : resultsContainerRef.current.classList.add("hidden");
      
      const rests = props.products.filter((item) => searchRef.current.value.toLowerCase() === item.title.slice(0, searchRef.current.value.length).toLowerCase());
      setResults(rests);
    }


  return (
    <div onClick={() => searchRef.current.focus()} className={props.classNames}>
          <SearchIcon sx={{margin: "0 3px"}} />
          <input onBlur={() => resultsContainerRef.current.classList.add("hidden")} onChange={handleSearchChange} ref={searchRef} type="text" className="px-2 bg-transparent text-sm border-none outline-none text-black font-semibold flex-1" />

           <div ref={resultsContainerRef} className="absolute w-full left-0 top-9 md:top-11 z-20 bg-white p-2 rounded-md text-gray-600 hidden">
           
            { results.length === 0 && <p className='font-semibold text-sm box-border my-px'>No Results</p>}
            {results.map(({title, id, price, images}) => (
            
              <div onMouseDown={() => goToDetails(id)} key={id} className='h-12 flex cursor-pointer items-center group'>
              
                <img alt='item' className='h-full m-2 aspect-square object-contain' src={images[0]} />
                <div className='h-full group-hover:bg-gray-200 flex flex-col justify-center flex-grow px-2'>
                  <h3 className='text-sm font-semibold line-clamp-1'>{title}</h3>
                  <h3>${price}</h3>
                </div>
                
            </div>
            
            ))}
          
          </div>
    </div>
  )
}

export default Search
