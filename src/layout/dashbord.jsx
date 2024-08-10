import React, { useContext } from 'react';
import { AuthContext } from '../context/authProvider';
import { NavLink, Outlet } from 'react-router-dom';
import Balance from '../shared/balance';

const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);

  // console.log(user);
  const dashboardLinks = () => {
    if(user){
     return <ul className='bg-red-500'>
        <li><NavLink to="/dashboard/balance">Balance</NavLink></li>
        <li><NavLink to="/dashboard/cashout">Cash Out</NavLink></li>
        <li><NavLink to="/dashboard/send-money">Send Money</NavLink></li>
        <li><NavLink to="/dashboard/cashOut">Cash out</NavLink></li>
      </ul>
    }
  };

  return (
    <div className='border-4 border-red-500 bg-green-600 grid container mx-auto min-h-lvh'>
      <div >
        {dashboardLinks()}
      </div>
      <div>
        <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;
