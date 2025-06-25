import React, { useState } from 'react'
import "./Header2.css"
import { useOpenModal } from '../../context/OpenModalContext'

const Header2 = () => {
    const [open, setOpen] = useState(false)
  
    return (
        <div className='border-b border-b-[#eee] lg:block hidden overflow-hidden'>

        <div className='flex justify-between mt-4 bg-[#fff] max-w-[1400px] mx-auto p-5 gap-5 '>
            <div className=''>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/logo/logo.png" alt="" />
            </div>
            <div className='text-three'>
                <div className='border border-[#eee]  w-[400px] h-[45px] rounded-md  relative flex items-center'>
                    <div className='w-[30%] p-3 flex items-center border-r border-r-[#eee]'>
                        <div>
                            bakery
                        </div>
                        <div>
                            <i className="fa-solid fa-caret-down drop-down-icon cursor-pointer" onClick={() => setOpen(!open)}></i>
                        </div>
                    </div>
                    <div className='p-4 w-[70%] '>
                        <i className="fa-sharp fa-solid fa-magnifying-glass  search-glass cursor-pointer"></i>
                        <input type="text" className=' border-0 outline-0' placeholder='Search Products...' />
                    </div>



                </div>

                <div className={`drop-down-items ${open ? 'opacity-100 scale-3d ' : 'opacity-0 '} `}>
                    <p className='hover:text-[#6c7fd8]'>Cold Drinks</p>
                    <p className='hover:text-[#6c7fd8]'>Fruits</p>
                    <p className='hover:text-[#6c7fd8]'>Bakery</p>
                    <p className='hover:text-[#6c7fd8]'>Vegetables</p>
                </div>
            </div>
            <div className='flex gap-5 '>
                <div className='flex items-center gap-3 justify-center text-[#3d4750]'>
                    <div>
                    <i className="fa-regular fa-user text-blue-600 text-2xl" ></i>
                    </div>
                    <div className='xl:block hidden'>
                        <p className='text-[12px] p-0 '>Account</p>
                        <p className='font-bold text-[14px]'>Login</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                    <div>
                    <i className="fa-regular fa-star text-blue-600 text-2xl"></i>
                    </div>
                    <div className='xl:block hidden'>
                        <p className='text-[12px] p-0'>0 items</p>
                        <p className='font-bold text-[14px]'>Wishlist</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                    <div>
                    <i className="fa-solid fa-cart-shopping text-blue-600 text-2xl" ></i>
                    </div>
                    <div className='xl:block hidden' >
                        <p className='text-[12px] p-0'>2 items</p>
                        <p className='font-bold text-[14px]'>Cart</p>
                    </div>
                </div>



            </div>
        </div>
        </div>
    )
}

export default Header2