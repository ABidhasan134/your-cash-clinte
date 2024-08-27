import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import { NavLink, Outlet } from "react-router-dom";
import Balance from "../shared/balance";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SendMoney from "../Dashbord/user/sendMoney";
import LogOut from "../log/logOut";


const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);
  // console.log(user)

  

  // console.log(user);
  const dashboardLinks = () => {
    if (user) {
      return (
        <ul className="grid grid-flow-row grid-cols-2 font-bold text-2xl">
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
           <Balance></Balance>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/cashIn">Cash In</NavLink>
          </li>
            {/* <NavLink to="/dashboard/sendMoney"></NavLink> */}
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <SendMoney className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg"></SendMoney>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/cashOut">Cash out</NavLink>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/cashOut">History</NavLink>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="border-4 border-red-500 justify-center items-center grid container mx-auto min-h-lvh">
      <nav className="flex justify-between border-b-2 border-b-white rounded-lg">
        <h1 className="text-2xl font-bold">Your cash</h1>
        <div className="flex gap-2 items-center">
        <p>{user}</p>
        <LogOut></LogOut>
        </div>
      </nav>
      <div>{dashboardLinks()}</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
