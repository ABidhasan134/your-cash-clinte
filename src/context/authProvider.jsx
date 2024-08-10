import React, { createContext, useContext, useEffect, useState } from 'react'
import usePublic from '../hooks/axiosPublic';





export const AuthContext=createContext();

const AuthProvider = ({children}) => {
  const axiosPublic=usePublic();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(user)  

    const createUser=(name,email,phone)=>{
      setUser(name);
      return 0
        }
// usering local storage for hold the user or unsubscribe
        useEffect(() => {
          // Check if there's a user stored in local storage
          const storedUser = localStorage.getItem('user');
          if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
            try {
              setUser(JSON.parse(storedUser)); // Set the stored user as the current user
              axiosPublic.get('/jwt')
              .then((res)=>console.log(res))
            } catch (error) {
              console.error("Failed to parse user from localStorage", error);
            }
          }
          setLoading(false);
        }, []);

    const authInfo={user,setUser,createUser,loading,setLoading}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
