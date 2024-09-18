import Link from "next/link"

function Category(props) {
  return (
    
      <div className={props.classes}>
      <Link href={'/' + props.category}>
          <h1 className="px-3 font-bold text-xl">{props.title}</h1>
          <div className="grid grid-cols-2 w-full my-3 gap-2">
              <img className="flex-grow grid-flow-dense w-full" src={props.Image} alt="" />
              {props.Image_2 && <img className="flex-grow" src={props.Image_2} alt="" />}
              {props.Image_3 && <img className="flex-grow" src={props.Image_3} alt="" />}
              {props.Image_4 && <img className="flex-grow" src={props.Image_4} alt="" />}
          </div>
          <p className="text-sky-600 group-hover:underline cursor-pointer font-semibold">See the details &gt;</p>
      </Link>
      </div>
    
  )
}

export default Category
