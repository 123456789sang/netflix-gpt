import React from 'react'
import { useState,useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_URL } from '../utils/constant';

const Login = () => {


    const[isSignInForm,setIsSignInForm]=useState(true);
    const [errorMassage,setErrorMessage]=useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email=useRef(null);
    const password=useRef(null); 

    const handleButtonClick=()=>{
        //Validate the form data
        const nameValue = name.current ? name.current.value : '';
        const message  = checkValidateData(email.current.value ,password.current.value,nameValue); 
      
        setErrorMessage(message);
       
        if(message) return;
        if (!isSignInForm) {
            // sign Up 
            createUserWithEmailAndPassword(auth, email.current.value ,password.current.value,nameValue)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                   updateProfile(user, {
                    displayName: nameValue, photoURL:AVATAR_URL
                    }).then(() => {
                        const {uid, email,displayName,photoURL} = auth.currentUser;
                       dispatch(
                        addUser(
                            {
                            uid:uid,
                            email:email 
                            ,displayName:
                            displayName ,
                            photoURL:photoURL
                                
                        } ))
                    }).catch((error) => {
                    // An error occurred
                    // ...
                });
                console.log(user);
             
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });

        }
        else{
              // sign in 
            signInWithEmailAndPassword(auth, email.current.value ,password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
             
                console.log(user);
               
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
    }
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
        <form  onSubmit={(e)=>e.preventDefault()} 
        className='absolute w-3/12 my-36  mx-auto p-12 bg-black right-0 left-0 text-white rounded-sm bg-opacity-80'>
            <h1 className='text-2xl font-bold pb-4 -mt-5'>{isSignInForm ? "Sign In":"Sign Up "}</h1> 

            {!isSignInForm&& <input
            ref={name} 
                type="text" 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-700'
            />}
            <input
               ref={email} 
                type="text" 
                placeholder='email' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                ref={password}
                type="text" 
                placeholder='password' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='font-bold text-xl text-red-500 py-1'>{errorMassage}</p>
            <button 
               className='p-4 my-6 w-full bg-red-700 rounded-sm' onClick={handleButtonClick}
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

export default Login;