
import Products from "../../components/Products";

async function CategoryDetails({ params }) {

    const category = params.category.split('%20').join(' ');
    

  return (
    <div className="pt-3">
      
      <Products category={category}/>
    </div>
  )
}

export default CategoryDetails
