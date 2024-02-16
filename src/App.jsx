import React from 'react'
import Header from './Components/util/Header.jsx'
import { Outlet } from 'react-router-dom'
import Register from './Components/Public/Register.jsx'
import VerifyOTP from './Components/Public/VerifyOTP.jsx'

const App = ({ name,isAuth }) => {
  return (
    <div>
      <Header name={name} isAuth={isAuth} />
      {/* <VerifyOTP/> */}
      <Outlet/>
    </div>
  )
}

export default App