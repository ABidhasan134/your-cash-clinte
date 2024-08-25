import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';

const PrivetRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    // console.log(user)
    const location =useLocation();
    console.log(location)
    if(loading){
        return <div>Loading.....</div>
    }
    if(user){
        return children
    }
  return (
    <Navigate state={location.pathname} to='/'></Navigate>
  )
}

export default PrivetRouter
