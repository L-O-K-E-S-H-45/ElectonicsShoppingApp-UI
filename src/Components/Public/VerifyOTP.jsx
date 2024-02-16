import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const VerifyOTP = () => {

const [otp, setOtp] = useState("");
const navigate=useNavigate();

const handleVerifyOtp =async (event)=>{
  event.preventDefault();
  console.log(otp)
    const userEmail = sessionStorage.getItem("email");
    console.log(userEmail+" ------")

    const url = "http://localhost:8080/flipkart-v1/verify-otp";
    const body = {
      email:userEmail,
      otp:otp
    };
    const header = {
        headers : {
          "Content-Type":"application/json"
        }
    }

    try {
      const response =await axios.post(url,body,header)
      console.log(response)
      window.alert(response.data.message)
      sessionStorage.removeItem("email")
      navigate("/login")
    } catch (error) {
      console.log(error)
      window.alert(error.response.data.message)
    }

}


  return (
    <div className='h-96 bg-orange-100 flex items-center justify-center'>
      <section className='h-60 w-96 bg-green-200 rounded-3xl px-56 flex items-center justify-center'>
        <form>
          <h1 className='text-2xl text-center font-bold-5 mb-2 font-serif'
           >Please Enter OTP</h1>
           <hr className='border-slate-950 border-1 mb-7 w-72 ' />
          <input type="text"  
           className='h-12 w-56 rounded-xl pl-5 p-5 ml-8 text-2xl font-bold'
           onChange={(e)=>{setOtp(e.target.value)}}
          /> <br /><br />
          <button type='submit'
          className='h-10 w-40 text-2xl border-slate-950 border-2 ml-16 font-bold text-rose-600 bg-gray-300 rounded-3xl'
          onClick={handleVerifyOtp}
          >Submit</button>
        </form>
      </section>
    </div>
  )
}

export default VerifyOTP