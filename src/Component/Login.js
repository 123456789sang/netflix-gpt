import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        {/* /bg-image */}
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg" alt="bg-image"/>
        </div>
        <form className='absolute w-3/12 my-36  mx-auto p-12 bg-black right-0 left-0 text-white rounded-sm bg-opacity-80'>
            <h1 className='text-2xl font-bold pb-4 -mt-5'>{isSignInForm ? "Sign In":"Sign Up "}</h1> 

            {!isSignInForm&& <input 
                type="text" 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-700'
            />}
            <input 
                type="text" 
                placeholder='email' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                type="text" 
                placeholder='password' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <button 
               className='p-4 my-6 w-full bg-red-700 rounded-sm'
               >
               {isSignInForm? "Sign In":"Sign Up"}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm?"New to Netflix?Sign Up Now":"Already registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login