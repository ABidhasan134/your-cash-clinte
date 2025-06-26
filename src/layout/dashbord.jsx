import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import { NavLink, Outlet } from "react-router-dom";
import Balance from "../shared/balance";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SendMoney from "../Dashbord/user/sendMoney";
import LogOut from "../log/logOut";
import useUserDitails from "../hooks/useUserDitails";
import user1 from "../../public/img/user1.png";
import cashIn from '../../public/img/money.png'
import withdraw from '../../public/img/withdraw.png'
import parchment from '../../public/img/parchment.png'


const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);
  const [users, isLoading, isError] = useUserDitails();

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }
  // console.log("user is here", users);
  //  && users.roll==="user"
  const dashboardLinks = () => {
    if (user) {
      return (
        <ul className="grid grid-flow-row grid-cols-2 font-bold text-2xl">
          <li className="grid  justify-center">
            <NavLink to="/dashboard/cashIn"><img src={cashIn} alt="cash In"className="navLinks" /></NavLink>
            <span className="text-xl text-center">Cash In</span>
          </li>
          {/* <NavLink to="/dashboard/sendMoney"></NavLink> */}
          <li className="grid  justify-center">
            <SendMoney ></SendMoney>
            <span className="text-xl text-center">Send Money</span>
          </li>
          <li className="grid justify-center">
            <NavLink to="/cashOut"><img src={withdraw} alt="Cash Out" className="navLinks" /></NavLink>
            <span className="text-xl text-center">Cash Out</span>
          </li>
          <li className="grid justify-center">
            <NavLink to="/dashboard/history"><img src={parchment} alt="History" className="navLinks"/></NavLink>
            <span className="text-xl text-center">History</span>
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
          <img src={users?.phoneQR} alt="QR" className="bg-transparent h-[100px] w-[100px]"/>
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
