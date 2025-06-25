import React from 'react'
import MainHeader from '../components/header/MainHeader'
import { useOpenModal } from '../context/OpenModalContext'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'

const HomePageLayout = ({children}) => {
    const { openModal, sidebarOpen } = useOpenModal()
  return (
    <div>
        <div>
            <MainHeader/>
        </div>
        <div>
         
            {children}
        </div>





<div>
{
        openModal && <Modal />
      }

      {
        sidebarOpen && <Sidebar />
      }
</div>


    </div>
  )
}

export default HomePageLayout