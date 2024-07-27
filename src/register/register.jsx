import React from 'react'
import backgorundRegister from '../../public/img/registerBG.jpg'
import logo from '../../public/img/logo.png'
import { useForm } from "react-hook-form";
import moneyBG from '../../public/img/monye.jpg'

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data);
  return (
   <div className='grid justify-center items-center my-6' >
   
    <figure className='flex justify-center z-50'> 
        <img src={logo} alt="" />
    </figure>
    {/* rgister area */}
     <div className="hero" 
     >
  <div className="hero-content flex-col lg:flex-row"
        >
             <figure className='absolute z-10 blur-sm '>
        <img className='min-w-[1280px] h-auto' src={moneyBG} alt="" />
    </figure>
    <img
      src={backgorundRegister}
      className="max-w-[50%] rounded-lg shadow-2xl z-50" />
    <div className='felx flex-1 z-50'>
    <form
                className="card-body text-5xl text-white my-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sky-800 font-semibold">your name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className={`input input-bordered bg-transparent ${
                      errors.name ? "input-error" : "input-info"
                    }`}
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-start text-xl text-red-500">This field is required</span>}
                  {/* phone */}
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sky-800 font-semibold">Password</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="phone"
                    className={`input input-bordered bg-transparent ${
                      errors.phone ? "input-error" : "input-info"
                    }`}
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span className="text-start text-xl text-red-500">This field is required</span>}
                  
                </div>
                </div>
                {/* email */}
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-black">
                      Email
                    </span>
                  </label>
                  <input
                    type='email'
                    placeholder="email"
                    className={`input input-bordered bg-transparent ${
                      errors.email ? "input-error" : "input-info"
                    }`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-start text-xl text-red-500">This field is required</span>}
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sky-800 font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className={`input input-bordered bg-transparent ${
                      errors.password ? "input-error" : "input-info"
                    }`}
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="text-start text-xl text-red-500">This field is required</span>}
                  
                </div>
                <div className="form-control mt-2">
                  <button className="btn bg-sky-500 text-black text-2xl hover:text-white hover:border-b-2 hover:border-b-sky-600 hover:bg-transparent">
                    Sing Up
                  </button>
                </div>
              </form>
    </div>
  </div>
</div>
   </div>
  )
}

export default Register
