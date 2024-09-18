
import Products from "../components/Products";

async function CategoryDetails({ params }) {

    const category = params.category.split('%20').join(' ');
    

  return (
    <div>
      <h1 className="text-xl ml-3 my-2 font-bold text-teal-800">Get the best for your {category}</h1>
      <Products category={category}/>
    </div>
  )
}

export default CategoryDetails
