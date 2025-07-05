import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainHeader from './components/header/MainHeader'
import { OpenModalContextProvider } from './context/OpenModalContext'
import Sidebar from './components/Sidebar'
import RegistrationForm from './components/auth/RegistrationForm'
import LoginForm from './components/auth/LoginForm'
import HomePageDummy from './components/auth/HomePageDummy'
import Layout from './components/auth/Layout'
import Chat from './components/auth/Chat'
import { CheatProvider } from './components/auth/CheatContext'

const App = () => {
  return (
    <>


<OpenModalContextProvider>
  <CheatProvider>

      <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/homes" element={<Layout/>}>
          <Route path="/homes/userdata/:id" element={<Chat/>} />
        </Route>
      </Routes>
  </CheatProvider>
</OpenModalContextProvider>


    </>
  )
}

export default App