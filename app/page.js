import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Advert from './assets/advert.jpg'
import Image from "next/image";
import  { fetchProductsData } from './lib/data'
import Products from "./components/Products";
import { Suspense } from "react";
import { ProductsLoading } from "./ui/productsLoading";

export default async function Home() {

  const products = await fetchProductsData()

  return (
    <main className='max-w-5xl mx-auto h'>
        <Banner />
        <Categories />
        <Image width='100%' style={{margin: '15px 0'}} src={Advert} alt="add" />
        <Suspense fallback={<ProductsLoading />}>
          <Products products={products} />
        </Suspense>
    </main>
  );
}
