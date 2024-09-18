import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Advert from './assets/advert.jpg'
import Image from "next/image";

import Products from "./components/Products";

export default function Home() {
  

  return (
    <main className='max-w-5xl mx-auto'>
        <Banner />
        <Categories />
        <Image width='100%' style={{margin: '15px 0'}} src={Advert} alt="add" />
        <Products />
    </main>
  );
}
