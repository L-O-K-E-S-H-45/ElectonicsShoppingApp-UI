import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ name,isAuth}) => {
  return (
      <div className='bg-amber-200 flex justify-between items-center p-5 text-lg font-semibold'>
          {/* <header> */}
          <nav>
              <Link><img className='pl-10 h-10 w-30' src='https://ignatisd.gr/eshop/images/logo2.png' alt="logo" /></Link>
          </nav>
          
          {/* SEARCH BAR */}
          <div>
              <input className='h-9 w-96 rounded-xl p-5' type="text" placeholder='looking for...' />
          </div>
              {/* LINK BLOCK */}
          <div className='flex justify-center items-center space-x-10 px-20'>
              {/* Login */}
              {console.log(name)}
              {isAuth ? <Link to="/account">{name}</Link> :<Link to="/login">Login</Link>}

              {/* Become a seller */}
              <Link to="/seller">Become a seller</Link>

              {/* Cart */}
              <Link to="/cart">Cart</Link>
          </div>
      {/* </header> */}
      </div>
  )
}

export default Header