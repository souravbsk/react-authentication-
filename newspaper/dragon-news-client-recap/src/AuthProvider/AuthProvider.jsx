/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init'
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null);
    const [loader,setLoader] =useState(true)

    //create user
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //update name img
    const updateNameImg = (currentUser,name,photo) => {
        setLoader(true)
        return updateProfile(currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    //login user
    const loginUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
//forget user
const forgetPass = (email) => {
    setLoader(true)
    return sendPasswordResetEmail(auth,email);
}

// sign in with google 
const handleGoogleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth,googleProvider)
}

//get user
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        setLoader(false)
    })
    return () => unSubscribe();
},[])
//sign out
const logOut = () => {
    return signOut(auth)
}
    const authInfo = {
        user,
        createUser,
        updateNameImg,
        loginUser,
        forgetPass,
        loader,
        logOut,
        handleGoogleSignIn
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;