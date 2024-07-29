import React, { useContext, useState } from 'react'

export const AuthContext=useContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser=(name,email,phone,password)=>{

    }

    const authInfo={user,setUser}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
