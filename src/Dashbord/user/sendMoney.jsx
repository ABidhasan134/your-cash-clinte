import React from 'react'
import { useForm } from "react-hook-form"
import useSequer from '../../hooks/axiosSequer'
import useUserDitails from '../../hooks/useUserDitails'

const SendMoney = () => {
  const [users,isLoading,isError,error,refetch]=useUserDitails();
  // console.log(users)
  const sendernumber= users.phoneNumber;
  const axiosSequer=useSequer()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = ((data) => {
        const info={sendernumber,phone:data.phone,password:data.password,amount:data.amount}
        console.log(info);
        if(sendernumber === data.phone){
          alert("you can't send money to yourself")
          return 
        }
        // console.log(data)
        axiosSequer.post("/sendMoney", info)
        .then((res)=>{
          console.log(res.data);
        })
      })
  return (
    <>
        <button className="btn font-bold text-2xl btn-ghost hover:btn-ghost hover:bg-tr bg-black" onClick={()=>document.getElementById('my_modal_1').showModal()}>send Money</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box grid justify-center">
    <h3 className="font-bold text-lg text-center">Send Money</h3>
    <form className='grid gap-2' onSubmit={handleSubmit(onSubmit)}>
      {/* phone number */}
    <input
                    type='tel'
                    placeholder="phone"
                    className={`input input-bordered ${
                      errors.phone ? "input-error" : "input-ghost"
                    }`}
                    {...register("phone", { required: true,pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/ })}
                  />
                   {errors.phone && errors.phone.type === "required" && (
                  <span className="text-start text-xl text-red-500">This field is required</span>
                )}
                {errors.phone && errors.phone.type === "pattern" && (
                  <span className="text-start text-xl text-red-500">Give a valid number</span>
                )}
                  {/* password */}
                  <input
                  type="password"
                  placeholder="Password"
                  className={`input input-bordered bg-transparent ${errors.password ? "input-error" : "input-info"}`}
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-start text-xl text-red-500">This field is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-start text-xl text-red-500">At least 5 characters</span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span className="text-start text-xl text-red-500">Not more than 5 characters</span>
                )}
                {/* amount of send money */}
                  <input
                    type="number"
                    placeholder="amount"
                    className={`input input-bordered ${
                      errors.amout ? "input-error" : "input-ghost"
                    }`}
                    {...register("amount", { required: true })}
                  />
                  {errors.amount && <span className="text-start text-xl text-red-500">This field is required</span>}
                  <button className='btn'>send money</button>
                  </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
    
  )
}

export default SendMoney
