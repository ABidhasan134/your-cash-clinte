import React, { useEffect, useState } from 'react'
import logIcon from "../../public/img/logOutIcon.gif"
import cookie from 'react-cookies'

const LogOut = () => {
    const [userinfo,setuserinfo]=useState()
    useEffect(()=>{

    },[userinfo])

    const handleLogout = () => {
        const cooki= cookie.loadAll() 
        setuserinfo(localStorage.removeItem('user'))
        // const removecookie=cookie.remove("your_cash"); 
        cookie.remove("your_cash", { path: '/' });
        console.log(cooki,userinfo);
        window.location.reload();
    }

    return (
        <div>
            <button onClick={handleLogout} className="btn font-bold text-white">
                <img src={logIcon} className="h-8 w-8 font-bold" alt="Logout Icon" />
            </button>
        </div>
    )
}

export default LogOut
