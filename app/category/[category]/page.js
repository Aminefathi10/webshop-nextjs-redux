
import Products from "../../components/Products";
import { fetchProductsByCategory } from "@/app/lib/data";

export default async function CategoryDetails({ params }) {

    const category = params.category.split('%20').join(' ');
    const products = await fetchProductsByCategory(category);

  return (
    <div className="pt-3">
      <Products products={products}/>
    </div>
  )
}
