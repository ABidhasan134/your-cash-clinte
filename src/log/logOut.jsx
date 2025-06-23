import Cookies from "js-cookie";
import { useEffect } from "react";
import logIcon from "../../public/img/logOutIcon.gif";

const LogOut = () => {
  // const [userinfo,setuserinfo]=useState()
  const userinfo = window.localStorage.getItem("user");
  useEffect(() => {}, [userinfo]);
  const cookieOut = Cookies.get("your_cash");
    console.log(cookieOut);
  const handleLogout = () => {
    // const cookieOut = Cookies.get("your_cash");
    // console.log(cookieOut);
    const cooki = Cookies.remove("your_cash"); // This will list all cookies
    // console.log(cooki); // Check if your token is listed
    // const Cookies1=Cookies.get("your_cash");
    // console.log(Cookies1)
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout} className="btn font-bold text-white">
        <img src={logIcon} className="h-8 w-8 font-bold" alt="Logout Icon" />
      </button>
    </div>
  );
};

export default LogOut;
