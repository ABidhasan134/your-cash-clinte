import React, { createContext, useContext, useState } from 'react'


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState("abid hasan");
    const [loading,setLoading]=useState(true);

    const createUser=(name,email,phone)=>{
      setUser(name);
      return 0
        }

    const authInfo={user,setUser,createUser,loading,setLoading}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
