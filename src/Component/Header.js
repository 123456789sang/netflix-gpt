import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { Link } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen,setIsOpen]=useState(false);
    const user = useSelector(store => store.user);
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).catch((error) => {
        console.error("Sign-out error:", error);
        });
    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);
     
    const toggleMenu =()=>{
        setIsOpen(!isOpen);
    }
    const handleToggleSearchClick=()=>{
       dispatch(toggleGptSearchView())
    };
    const handleLanguageChange =(e)=>{
       dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className="fixed top-0 left-0 w-full h-16 px-4 py-2 bg-gradient-to-b from-black/70 z-50 flex justify-between items-center">
            <img className="w-32 md:w-44" src={LOGO} alt="logo" />
            {user && (
                <div className="flex items-center gap-2">
                    {showGptSearch&&(<select className='p-2 m-2 bg-black text-white'
                       onClick={handleLanguageChange}
                    >
                       {SUPPORTED_LANGUAGES.map((lang)=>(
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                       ))}
                    </select>)}
                    <button onClick={handleToggleSearchClick}  className='px-2 py-1 mr-4 bg-red-500 rounded-md text-white'>
                        {showGptSearch ? "HomePage" :"GPT SEARCH"}
                    </button>  
                   <button onClick={toggleMenu}>
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="user" />
                   </button>
                   {isOpen && (
                        <div
                                className=
                                'absolute right-0 top-full w-56 shadow-xl text-white rounded-bl-lg border-l border-b border-yellow-400 z-50 bg-black/70 '
                            >
                                <div className="flex flex-col items-start p-4 gap-3">
                                    <Link
                                    to="/about"
                                    className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                                    >
                                    About
                                    </Link>
                                    <Link
                                    to="/content"
                                    className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                                    >
                                    Content
                                    </Link>
                                    <Link
                                    to="/profile"
                                    className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                                    >
                                    Profile
                                    </Link>
                                    <Link
                                    to="/update-profile"
                                    className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                                    >
                                    Update Profile
                                    </Link>
                                    <Link
                                    to="/more"
                                    className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                                    >
                                    More
                                    </Link>
                                    
                                </div>
                        </div>
                    )}
                    <button onClick={handleSignOut} className="text-white font-bold text-sm md:text-base">Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default Header;
