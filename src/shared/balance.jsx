import React, { useState } from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import useUserDitails from '../hooks/useUserDitails';

const Balance = () => {
  const [toggel, setToggol] = useState(false);
  const [users,isLoading,isError,error,refetch]=useUserDitails();
  const handelChackBalenc = () => {
    setToggol(!toggel);
    console.log("handelChackBalenc");
  };
  console.log(users)
  return (
    <div>
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
            <div></div>
    </div>
  )
}

export default Balance
