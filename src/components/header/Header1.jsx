import React from 'react'
import { Link } from 'react-router-dom'
import "./Header1.css"

const Header1 = () => {
  return (
    <div className=' bg-[#3d4750] text-white p-2 lg:block hidden overflow-hidden'>
      <div className='flex justify-between max-w-[1400px] mx-auto'>

        <div>
          Flat 50% off On Grocery Shop.
        </div>

        <ul className='flex gap-5'>
          <li><Link to="">Help?</Link></li>
          <li><Link to="">Track Order</Link></li>
          <li><Link to="">Language</Link></li>
          <li><Link to="">Curency</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Header1