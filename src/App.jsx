import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainHeader from './components/header/MainHeader'
import { OpenModalContextProvider } from './context/OpenModalContext'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>


<OpenModalContextProvider>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
</OpenModalContextProvider>


    </>
  )
}

export default App