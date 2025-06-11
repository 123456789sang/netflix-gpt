import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import {addUser,removeUser}  from "../utils/userSlice"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { LOGO } from '../utils/constant';
   
const Header = () => {
    
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
           // An error happened.
   
        });
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email,displayName,photoURL} = user;
                dispatch(addUser(
                    {
                    uid:uid,
                    email:email 
                    ,displayName:
                    displayName ,
                    photoURL:photoURL
                        
                } ))
               navigate("/browse")
            } else {
            // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });
        // this will be called when component will be unmount 
        return ()=>unsubscribe();
    },[])
    return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
            className='w-44'
            src={LOGO}
            alt="logo"
        />
      
       {user && <div className='flex  p-2 items-center gap-1'>
            <img   className='w-12 h-12 rounded-full p-1'
            src={user?.photoURL} alt="user-icon"/>
            <button onClick={handleSignOut}  className='font-bold text-white '>Sign Out</button>
       </div>}
       
    </div>
  )
}

export default Header