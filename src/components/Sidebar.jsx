import React from 'react'
import "./Sidebar.css"
import { useOpenModal } from '../context/OpenModalContext'

const Sidebar = () => {
    const {sidebarToggal} = useOpenModal()
  return (
    <div className='fixed top-0 sidebar-outer block lg:hidden'>
            <div className=''>
                <div className='flex justify-between mb-4'>
                            <p>My Menu</p>
                            <button className='close-menu' onClick={sidebarToggal}>x</button>
                </div>

                <ul className='sidebar-menu'>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Products</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Offers</li>
                </ul>
                <div className='logos '>
                        <ul className='flex justify-center gap-2 mt-10'>
                            <li>
                            <i class="fa-brands fa-facebook-f text-white"></i>
                            </li>
                            <li>
                            <i class="fa-brands fa-twitter text-white"></i>
                            </li>
                            <li>
                            <i class="fa-brands fa-instagram text-white"></i>
                            </li>
                            <li>
                            <i class="fa-brands fa-linkedin-in text-white"></i>
                           
                            </li>
                        </ul>
                </div>

            </div>
    </div>
  )
}

export default Sidebar