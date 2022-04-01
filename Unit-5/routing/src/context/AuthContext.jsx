import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isLogegdIn ,setIsLoggedIn]=useState(false);
    const onLogin=()=>{
        console.log("user has logged in");
        setIsLoggedIn(true)
    }
    const onLogout=()=>{
        console.log("user has Logged");
        setIsLoggedIn(false)
    }
  return <AuthContext.Provider value={{isLogegdIn,onLogin,onLogout}}>{children}</AuthContext.Provider>
}


