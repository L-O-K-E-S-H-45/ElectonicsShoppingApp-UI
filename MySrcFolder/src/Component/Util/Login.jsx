import React from 'react'

const Login = () => {
  return (
    <div className='bg-yellow-100 flex items-center justify-center h-auto p-10' >
        <form  >  {/*action="" method="POST" */}
          <section className='bg-lime-300 flex items-center justify-center h-auto w-auto flex-col space-y-5 p-10 rounded-2xl'>
            <input type="text" placeholder='Enter UserEmail' className='h-12 w-80 p-5 rounded-xl' />
            <input type="text" placeholder='Enter Password' className='h-12 w-80 p-5 rounded-xl'  />
            <input type="text" placeholder='Enter UserRole' className='h-12 w-80 p-5 rounded-xl'  />
            <button className='h-16 p-5 bg-red-200 rounded-xl text-2xl flex items-center justify-center 
            font-bold hover:bg-yellow-300'>Register</button>
        </section>
        </form>
      
    </div>
  )
}

export default Login
