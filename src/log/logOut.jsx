import React from 'react'
import logIcon from "../../public/img/logOutIcon.gif"
import cookie from 'react-cookies'

const LogOut = () => {
    const handleLogout = () => {
        const cooki= cookie.loadAll() 
        // const cooki1= cookie.load('your_cash') 
        // console.log(cooki1);
        
console.log(cooki); 
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
