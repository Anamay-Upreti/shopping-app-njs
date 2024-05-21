import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black ">
         <Link className="navbar__link relative" href="#"> HOME</Link>
         <Link className="navbar__link relative" href="#"> Categories</Link>
         <Link className="navbar__link relative" href="#"> Mens</Link>
         <Link className="navbar__link relative" href="#"> Womens</Link>
         <Link className="navbar__link relative" href="#"> jwellery</Link>
         <Link className="navbar__link relative" href="#"> Perfumes</Link>
         <Link className="navbar__link relative" href="#"> Blog</Link>
         <Link className="navbar__link relative" href="#"> Hot Officers</Link> 
            </div>
        </div>
    </div>
  )
}

export default Navbar