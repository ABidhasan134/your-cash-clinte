import React from "react";
import useUserDitails from "../../hooks/useUserDitails";

const History = () => {
  const [user] = useUserDitails();
  console.log(user.history);
  return <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Trangistion Id</th>
        <th>Phone</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        user.history.map((itmes,index)=>{
          return <tr>
        <th>{itmes.trangistion_id}</th>
        <td>{itmes.history_phone}</td>
        <td>{itmes.history_amount}</td>
        <td>{itmes.history_date}</td>
      </tr>
        })
      }
      
    </tbody>
  </table>
</div>
};

export default History;
