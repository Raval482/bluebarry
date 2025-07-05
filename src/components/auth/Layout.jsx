import React from 'react'
import HomePageDummy from './HomePageDummy'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
            <HomePageDummy/>
        </div>
            <div className='col-span-7'>
                    <Outlet/>
            </div>

    </div>
  )
}

export default Layout