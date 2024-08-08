import React, { createContext, useContext, useState } from 'react'
import usePublic from '../hooks/axiosPublic';





export const AuthContext=createContext();

const AuthProvider = ({children}) => {
  const axiosPublic=usePublic();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
   

    const createUser=(name,email,phone)=>{
      setUser(name);
      return 0
        }

        // const logInUser=async(data)=>{
        //   const response= await axiosPublic.post(`/login`,data);
        //   console.log(response.data.success);
        //   if(response.data.success===true)
        //   {
            
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Your account has been created",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     navigate("/dashboard/user")
        //   }
        //   else{
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "error",
        //       title: "You already have an account. Please log in.",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //   }
        //   // console.log(response.data);
        // }
    const authInfo={user,setUser,createUser,loading,setLoading}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
