import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event)=>{
    event.preventDefault();

    const url = "http://localhost:8080/flipkart-v1/login";
    const body = {
      email : email,
      password : password
    }
    const header = {
      headers : {
        "Content-Type" : "application/json"
      },
      withCredentials:true
    }

    try {
      const response = await axios.post(url,body,header);
      console.log(response)
      window.alert(response.data.message)
      navigate("/")
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message)
      window.alert(error.response.data.message)
    }

  }

  return (
      <div className="p-16 flex items-center justify-center bg-gray-100 ">
      <div className='shadow-2xl shadow-gray-600 flex items-center justify-center rounded-2xl'>
        <div className='bg-slate-900 h-96 w-80 rounded-l-2xl text-white flex justify-center p-7'>
        <div>
          <p className='font-bold text-2xl pb-5'>Login</p>
          <p>Get access to your Orders, Wishlist and Recommendations</p>  
        </div>
      </div>
      <div className="bg-yellow-200 h-96 px-24 py-16 rounded-r-2xl">
        <form>
            <div className="mb-4">
                <input type="text" placeholder='User Email' onChange={(e)=>{setEmail(e.target.value)}}
                className="pl-3 h-7 mt-1 block w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div className="mb-4">
                <input type="text" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}
                className="pl-3 h-7 mt-1 block w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
          </div>

          <div>
            <button type='submit' onClick={handleLogin}
            className='bg-yellow-900 h-8 w-20 rounded-md text-white active:bg-blue-600 transition ease-in-out'> Login</button>
          </div>

          <div className=' h-10 mt-9'>
            <Link to='/customer/register'><span className='text-gray-700 font-sans text-xs font-semibold'>New to FlipKart ? Create an Account</span></Link>
          </div>
          
        </form>
      </div>
      </div>
</div>

  )
}
export default Login
