import React, { useContext } from "react";
import backgroundImage from "../../public/img/glass-background.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/img/logo.png'
import { AuthContext } from "../context/authProvider";
import usePublic from "../hooks/axiosPublic";
import Swal from 'sweetalert2';

const LogIn = () => {
  const {user,setUser}=useContext(AuthContext)
  const axiosPublic=usePublic();
  const navigate = useNavigate()
  
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response= await axiosPublic.post(`/login`,data);
          console.log(response.data);
          if(response.data.email===data.email || response.data.phoneNumber=== data.email)
            {
            localStorage.setItem('user', JSON.stringify(response.data));
            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your account has been created",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/user")
            setUser(response.data.name);
          }
          else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "You already have an account. Please log in.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
    
  }
  return (
    <div className="grid justify-center">
      <div
      className="hero rounded-3xl min-h-screen w-[1000px] my-6 grid justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-transparent">
        <div className="hero-content text-neutral-content text-center">
          <div className="grid w-[60%]">
            <div>
              <figure>
                <img src={logo} alt="" />
              </figure>
              <h1 className="text-5xl text-black font-bold">
                Log In Your Cash
              </h1>
              <h5 className="text-black">
                welcome back to your cash 
              </h5>
            </div>
            <div className="hero-content text-neutral-content text-center my-0">
              <form
                className="card-body text-5xl text-white my-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-white">
                      Email or phone
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder="email or phone"
                    className={`input input-bordered ${
                      errors.email ? "input-error" : "input-ghost"
                    }`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-start text-xl text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className={`input input-bordered ${
                      errors.password ? "input-error" : "input-ghost"
                    }`}
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="text-start text-xl text-red-500">This field is required</span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-ghost text-black text-2xl hover:text-white hover:bg-sky-800">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <p className="text-black text-2xl relative -mt-6">If you are new at your cash please <Link to="/singup" className="text-blue-500">Sing up </Link></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogIn;
