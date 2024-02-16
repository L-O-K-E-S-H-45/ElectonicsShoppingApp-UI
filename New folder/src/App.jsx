import React from 'react'
import Header from './Components/util/Header.jsx'
import { Outlet } from 'react-router-dom'
import Register from './Components/Public/Register.jsx'

const App = ({ name,isAuth }) => {
  return (
    <div>
      <Header name={name} isAuth={isAuth} />
      <Outlet/>
    </div>
  )
}

export default App