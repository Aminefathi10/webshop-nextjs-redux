import Link from "next/link"

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className="my-52 text-lg">Oops, we could not find the page you are looking for! go back to <Link className="text-sky-500" href='/'>The Home Page</Link></h1>
    </div>
  )
}

export default NotFound
