import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ name,isAuth}) => {
  return (
    <div>
        
      <header className=' bg-teal-50'>
        <nav className='flex justify-between items-center h-24 p-1 py-0 px-32'>
            <Link to={"/"}>
                <img src="/src/Images/flipKartlogo.png" alt="logo"  
                className=' mix-blend-multiply h-24 '/>
            </Link>
            {/* Search Bar */}
            <div >
                <input type="text" placeholder='Search for products, categories, etc...'  
                className='h-12 w-96 text-1.5xl p-5 rounded-full' />
            </div>
            {/* Link Block */}
            <div className='flex justify-center items-center space-x-10 text-2xl font-bold'>
                {/* Login */}
                {console.log(name)}
              {isAuth ? <Link to="/account">{name}</Link> :<Link to="/login">Login</Link>}

                {/* Become a seller option */}
                <Link to={"/seller/register"}>
                    Become a seller
                </Link>

                {/* Cart */}
                <Link to={"/cart"}>
                    Cart
                </Link>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
