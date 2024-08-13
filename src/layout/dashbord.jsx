import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authProvider";
import { NavLink, Outlet } from "react-router-dom";
import Balance from "../shared/balance";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);
  const [toggel, setToggol] = useState(false);

  const handelChackBalenc = () => {
    setToggol(!toggel);
    console.log("handelChackBalenc");
  };

  // console.log(user);
  const dashboardLinks = () => {
    if (user) {
      return (
        <ul className="grid grid-flow-row grid-cols-2 font-bold text-2xl">
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <button
              onClick={handelChackBalenc}
              className="flex items-center gap-2 "
            >
              <RiMoneyDollarCircleLine
                className={`${toggel ? "text-green-600 relative -right-24" : "text-white" } transition`}
              ></RiMoneyDollarCircleLine>
              {
                toggel?"help":<span>Balance</span>
              }
            </button>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/cashIn">Cash In</NavLink>
          </li>
          <li className="bg-black m-2 p-2 flex justify-center hover:bg-sky-800 hover:text-white rounded-lg">
            <NavLink to="/dashboard/send-money">Send Money</NavLink>
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
      <div>{dashboardLinks()}</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
