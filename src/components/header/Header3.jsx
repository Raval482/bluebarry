import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOpenModal } from '../../context/OpenModalContext'

const Header3 = () => {
    const [open, setOpen] = useState(false)
    const {toggle} = useOpenModal()
    return (
        <div>
            <div className='max-w-[1400px] mx-auto  justify-between p-4 items-center lg:flex hidden overflow-hidden'>
                <div>
                    <ul className='flex gap-7 items-center text-[15px] font-[400] text-[#3d4750]  '>
                        <li className='p-2 border rounded-lg ' onClick={toggle}><Link to="" ><svg
                            className="w-6 h-6 fill-current text-gray-700"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z" />
                        </svg></Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="">Home</Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="">Categories</Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="">Products</Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="">Pages</Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="">Blog</Link></li>
                        <li className='hover:text-[#6c7fd8]'><Link to="" className='flex'> <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                            className="w-[20px] h-[20px] text-blue-600 me-0.5"
                        >
                            <path d="M10 16v22c0 .3.1.6.2.8.3.6 6.5 13.8 21 20h.2c.2 0 .3.1.5.1s.3 0 .5-.1h.2c14.5-6.2 20.8-19.4 21-20 .1-.3.2-.5.2-.8V16c0-.9-.6-1.7-1.5-1.9-7.6-1.9-19.3-9.6-19.4-9.7-.1-.1-.2-.1-.4-.2-.1 0-.1 0-.2-.1h-.9c-.1 0-.2.1-.3.1-.1.1-.2.1-.4.2s-11.8 7.8-19.4 9.7c-.7.2-1.3 1-1.3 1.9zm4 1.5c6.7-2.1 15-7.2 18-9.1 3 1.9 11.3 7 18 9.1v20c-1.1 2.1-6.7 12.1-18 17.3-11.3-5.2-16.9-15.2-18-17.3z" />
                            <path d="M28.6 38.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l9.9-9.9c.8-.8.8-2 0-2.8s-2-.8-2.8 0L30 34.2l-4.5-4.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8z" />
                        </svg>    Offers</Link></li>
                    </ul>

                </div>
                <div>
                    <div className='text-three'>
                        <div className='border border-[#eee] w-[200px]   h-[40px] rounded-md  relative flex items-center cursor-pointer' onClick={() => setOpen(!open)}>
                            <div className=' p-3 flex justify-between w-100'>
                                <div className='flex gap-2 items-center'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>bakery
                                    </span>                                  </div>
                                <div>
                                    <i class="fa-solid fa-caret-down drop-down-icon-place " ></i>
                                </div>
                            </div>

                        </div>

                        <div className={`drop-down-items ${open ? 'opacity-100 scale-3d ' : 'opacity-0 '} `}>
                            <p className='hover:text-[#6c7fd8]'>Surat</p>
                            <p className='hover:text-[#6c7fd8]'>Delhi</p>
                            <p className='hover:text-[#6c7fd8]'>Ahamdabad</p>
                            <p className='hover:text-[#6c7fd8]'>Mumbai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header3