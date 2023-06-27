import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';

export let AuthContext = createContext(null)

let auth = getAuth(app);

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)

    // email account create user 
    let createUserEmail = (emailValue, passwordValue) => {
        return createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    }

    // email account login user 
    let loginUser = (emailValue, passwordValue) => {
        return signInWithEmailAndPassword(auth, emailValue, passwordValue)
    }

    //observed user
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
            setLoading(false)
            // jwt token user post server axious use
            if(currentUser){
                axios.post(("https://bistro-boss-project-server.vercel.app/jwt"),{email: currentUser.email})
                .then(data=> {
                    localStorage.setItem("accessToken", data.data.token)
                    // console.log(data.data.token)
                })
            }
            else{
                localStorage.removeItem("accessToken")
            }
        });

        return () => {
            return unSubscribe
        }
    }, [])

    // logOut user
    let logOut = () => {
        return signOut(auth)
    }

    // userUpdateProfile
    let userUpdateProfile = (user,name,photo) => {
       return updateProfile(user, {
            displayName:name , photoURL:photo
        })
    }

    //googleLogin
    let googleProvider= new GoogleAuthProvider(app)

    let googleSingInUser=()=>{
        return signInWithPopup(auth , googleProvider)
    }




    let authInfo = {
        user,
        loading,
        createUserEmail,
        loginUser,
        logOut,
        userUpdateProfile,
        googleSingInUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;