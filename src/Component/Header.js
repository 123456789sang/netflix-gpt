import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

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

  return (
    <div className="fixed top-0 left-0 w-full h-16 px-4 py-2 bg-gradient-to-b from-black/70 z-50 flex justify-between items-center">
  <img className="w-32 md:w-44" src={LOGO} alt="logo" />
  {user && (
    <div className="flex items-center gap-2">
      <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="user" />
      <button onClick={handleSignOut} className="text-white font-bold text-sm md:text-base">Sign Out</button>
    </div>
  )}
</div>

  );
};

export default Header;
