import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Util/Login.jsx'
import BecomeSeller from './Component/Util/BecomeSeller.jsx'
import Cart from './Component/Util/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
            <Routes>
                <Route path='/' />
                <Route path="/login" element={<Login/>} />
                <Route path='/seller' element={<BecomeSeller/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode> 
)

