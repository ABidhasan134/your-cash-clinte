import React, { useEffect, useState } from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import useUserDitails from '../hooks/useUserDitails';

const Balance = () => {
  const [toggel, setToggol] = useState(false);
  const [users, isLoading, isError, error, refetch] = useUserDitails();
  console.log(users)
  // when I log in I should refetch 
  useEffect(() => {
    if (isError) {
      refetch();
    }
  }, [isError, refetch]);

  const handelChackBalenc = () => {
    setToggol(!toggel);
    setTimeout(()=>{
      setToggol(false);
    },3000);
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Reloade please</div>;

  return (
    <div>
      <button onClick={handelChackBalenc} className="flex items-center gap-2">
        <RiMoneyDollarCircleLine
          className={`${toggel ? "text-green-600 relative -right-24" : "text-white"} transition`}
        />
        <span>{toggel ? <></> : "Balance"}</span>
        {toggel && users && (
        <div>
          <p>{users.amount || "00"}  </p>
        </div>
      )}
      </button>

      
    </div>
  );
};

export default Balance;
