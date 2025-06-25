import React from 'react'
import { Link } from 'react-router-dom'
import { useOpenModal } from '../../context/OpenModalContext'

const MobileHeader = () => {
    const {toggle,sidebarToggal} = useOpenModal()
    return (
        <div className='block md:hidden overflow-hidden'>
            <div className='p-5'>
                <div className='flex justify-between'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/logo/logo.png" alt="" />
                <ul className='flex gap-7 items-center text-[15px] font-[400] text-[#3d4750]  '>
                        <li className='p-2 border rounded-lg' onClick={toggle}><Link to="" ><svg
                            className="w-6 h-6 fill-current text-gray-700"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z" />
                        </svg></Link></li>
                    </ul>
                </div>
                <div className='border border-[#eee]  h-[40px] mt-5 rounded-md flex justify-between items-center px-5'>
                    <input type="text" placeholder='Search products...' className='w-[80%]'/>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <ul className='flex gap-5 items-center justify-center mt-5'>
                        <li><i className="fa-regular fa-user text-blue-600 text-2xl" ></i></li>
                        <li> <i className="fa-regular fa-star text-blue-600 text-2xl"></i></li>
                        <li> <i className="fa-solid fa-cart-shopping text-blue-600 text-2xl" ></i></li>
                        <li><i class="fa-solid fa-bars  text-blue-600 text-2xl" onClick={sidebarToggal}></i></li>
                    </ul>
            </div>
        </div>
    )
}

export default MobileHeader