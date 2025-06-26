import React, { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import useUserDitails from "../hooks/useUserDitails";

const Balance = () => {
  const [toggel, setToggol] = useState(false);
  const [users, isLoading, isError, error, refetch] = useUserDitails();
  // console.log("here is the users",users)
  // when I log in I should refetch
  useEffect(() => {
    if (isError) {
      refetch();
    }
  }, [isError, refetch, users.amount]);

  const handelChackBalenc = () => {
    setToggol(!toggel);
    setTimeout(() => {
      setToggol(false);
    }, 3000);
    refetch();
  };

  if (isLoading) return <div className="text-2xl font-bold">Loading...</div>;
  if (isError) return <div className="text-2xl font-bold">Reloade please</div>;

  return (
    <div>
      <p>your wallet balance</p>
      <button onClick={handelChackBalenc} className="flex items-center gap-2">
        <RiMoneyDollarCircleLine
          className={`transition-all duration-1000 ease-in-out text-2xl font-bold ${
            toggel
              ? "animate-bounce text-green-600 relative -right-24"
              : "text-white"
          }`}
        />

        <span className="text-2xl font-bold">{toggel ? <></> : "Balance"}</span>
        {toggel && users && (
          <div>
            <p className="text-2xl font-bold">{users.amount || "00"} </p>
          </div>
        )}
      </button>
    </div>
  );
};

export default Balance;
