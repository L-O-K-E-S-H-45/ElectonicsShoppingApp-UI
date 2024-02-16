import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = ({role}) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const respond = (event) => {
    event.preventDefault();
    console.log(username, password);
    console.log(role);
  }

  return (
    <div className='p-16 flex items-center justify-center bg-gray-100' >
      <div className='shadow-2xl shadow-gray-600 flex items-center justify-center rounded-2xl'>
        <div className='bg-slate-900 h-96 w-80 rounded-l-lg text-white flex justify-center p-7'>
        <div>
          <h3 className='font-bold text-2xl pb-5'>Looks like you're new here!</h3>
          <p>Sign up with your mobile number to get started</p>  
          </div>
        </div>
      <section className='bg-yellow-200 h-96 px-24 py-16 rounded-r-lg'>
        <form>
          <div className="mb-4">
            <input type="email" placeholder='email address' onChange={(event) => setUsername(event.target.value)}
                className='pl-3 h-7 mt-1 w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
          </div>
          <div className="mb-4">
            <input type="text" placeholder='password' onChange={(event) => setPassword(event.target.value)}
            className='pl-3 h-7 mt-1 w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
          </div>
          <div className="mb-4">
            <button type='submit' onClick={respond} className='bg-yellow-900 h-8 w-20 rounded-md text-white'>Register</button>
          </div>

         <div className=' h-10 mt-9'>
            <Link to='/login'><span className='text-gray-700 font-sans text-xs font-semibold'>Existing user? Login</span></Link>
          </div>

        </form>
      </section>
      </div>
      
    </div>
  )
}

export default Register