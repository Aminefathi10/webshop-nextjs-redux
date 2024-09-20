
import Products from "../../components/Products";

async function CategoryDetails({ params }) {

    const category = params.category.split('%20').join(' ');
    

  return (
    <div>
      
      <Products category={category}/>
    </div>
  )
}

export default CategoryDetails
