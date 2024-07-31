import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Dashbord = () => {
    const {loading,user}=useContext(AuthContext);

    
    if(loading){
        return "loading......"
    }

    const dashbordLinks=()=>{
        if(user){
            return <ul>
                <li><NavLink>Balance</NavLink></li>
                <li><NavLink>Cash out</NavLink></li>
                <li><NavLink>Send Money</NavLink></li>
            </ul>
        }
    }

  return (
    <div>
      <div>
        {dashbordLinks()}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashbord
