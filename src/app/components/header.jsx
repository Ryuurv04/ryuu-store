import Image from "next/image"
import Link from "next/link"
import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEnvelope} />





function header(){

  return(
    <header className="flex justify-between bg-slate-500">
      <div>
        <h1>Ryuu Store</h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faHouse} />
        <Link href='/' className="pl-2">Home</Link>
        <Link href='/products' className="pl-2">Productos</Link>
      </div>
    </header>
  )


}
export default header