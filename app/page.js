import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Advert from './assets/advert.jpg'
import Image from "next/image";
import  { fetchProductsData } from './lib/data'
import Products from "./components/Products";

export default async function Home() {

  const products = await fetchProductsData()

  return (
    <main className='max-w-5xl mx-auto'>
        <Banner />
        <Categories />
        <Image width='100%' style={{margin: '15px 0'}} src={Advert} alt="add" />
        <Products products={products} />
    </main>
  );
}
