import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import { NavLink, Outlet } from "react-router-dom";
import Balance from "../shared/balance";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SendMoney from "../Dashbord/user/sendMoney";
import LogOut from "../log/logOut";
import useUserDitails from "../hooks/useUserDitails";
import user1 from "../../public/img/user1.png";

const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);
  const [users, isLoading, isError] = useUserDitails();

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }
  console.log("user is here", users);
  //  && users.roll==="user"
  const dashboardLinks = () => {
    if (user) {
      return (
        <ul className="grid grid-flow-row grid-cols-2 font-bold text-2xl">
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/cashIn">Cash In</NavLink>
          </li>
          {/* <NavLink to="/dashboard/sendMoney"></NavLink> */}
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <SendMoney className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg"></SendMoney>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/cashOut">Cash out</NavLink>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/history">History</NavLink>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="border-4 border-red-500 justify-center items-center grid container mx-auto min-h-lvh">
      <nav className="flex justify-between border-b-2 border-b-white rounded-lg">
        <div className="flex items-center">
          <img src={user1} alt="logo" className="h-[60px] w-[60px] p-2"></img>
          <p>{user}</p>
        </div>
        <div className="flex gap-2 items-center">
          <LogOut></LogOut>
        </div>
      </nav>
      <div className="bg-[#191E24] p-6 rounded-xl">
        <div className="grid grid-cols-2 ">
          <li className=" m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
          <Balance></Balance>
        </li>
        <div className="flex items-center justify-center">
          <p>QR</p>
        </div>
        </div>
        {dashboardLinks()}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
