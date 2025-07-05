
import { Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/auth/RegistrationForm'
import LoginForm from './components/auth/LoginForm'
import Layout from './components/auth/Layout'
import Chat from './components/auth/Chat'


const App = () => {
  return (
    <>



      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/homes" element={<Layout/>}>
          <Route path="/homes/userdata/:id" element={<Chat/>} />
        </Route>
      </Routes>



    </>
  )
}

export default App