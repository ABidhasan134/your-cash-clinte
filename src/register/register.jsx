import React from "react";
import backgorundRegister from "../../public/img/registerBG.jpg";
import logo from "../../public/img/logo.png";
import { useForm } from "react-hook-form";
import moneyBG from "../../public/img/monye.jpg";
import useSequer from "../hooks/axiosSequer";

const Register = () => {
  const axiosSequer = useSequer();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // register function
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const phoneNumber = data.phone;
    const password = data.password;
    // if(password.length<4){
    //   alert("password must be at least 4 characters")
    //   return 0;
    // }
    console.log(data.name);
    axiosSequer
      .post("/jwt", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="grid justify-center items-center my-6">
      <figure className="flex justify-center z-50">
        <img src={logo} alt="" />
      </figure>
      {/* rgister area */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="absolute z-10 blur-sm ">
            <img className="min-w-[1280px] h-auto" src={moneyBG} alt="" />
          </figure>
          <img
            src={backgorundRegister}
            className="max-w-[50%] rounded-lg shadow-2xl z-50"
          />
          <div className="felx flex-1 z-50">
            <form
              className="card-body text-5xl text-white my-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sky-800 font-semibold">
                    your name
                  </span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className={`input input-bordered bg-transparent ${
                    errors.name ? "input-error" : "input-info"
                  }`}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-start text-xl text-red-500">
                    This field is required
                  </span>
                )}
                {/* phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sky-800 font-semibold">
                      phone number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="phone"
                    className={`input input-bordered bg-transparent ${
                      errors.phone ? "input-error" : "input-info"
                    }`}
                    {...register("phone", { required: true,pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/ })}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                  <span className="text-start text-xl text-red-500">This field is required</span>
                )}
                 {errors.phone && errors.phone.type === "pattern" && (
                  <span className="text-start text-xl text-red-500">Give a valid number</span>
                )}
                </div>
              </div>
              {/* email */}
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className={`input input-bordered bg-transparent ${
                    errors.email ? "input-error" : "input-info"
                  }`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-start text-xl text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sky-800 font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="password"
                  className={`input input-bordered bg-transparent ${
                    errors.password ? "input-error" : "input-info"
                  }`}
                  {...register("password", { required: true, minLength: 5 })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-start text-xl text-red-500">This field is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-start text-xl text-red-500">At least 5 characters</span>
                )}
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
  );
};

export default Register;
