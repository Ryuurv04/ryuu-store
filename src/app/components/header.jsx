import Image from "next/image"
import Link from "next/link"


function header(){

  return(
    <header className="flex justify-between bg-slate-500">
      <div>
        <h1>Ryuu Store</h1>
      </div>
      <div>
        <Link href='/' className="pl-2">Home</Link>
        <Link href='/products' className="pl-2">Productos</Link>
      </div>
    </header>
  )


}
export default header