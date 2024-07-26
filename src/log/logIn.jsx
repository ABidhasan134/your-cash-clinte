import React from "react";
import backgroundImage from "../../public/img/glass-background.jpg";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className="hero rounded-3xl min-h-screen min-w-[100%] my-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-transparent">
        <div className="hero-content text-neutral-content text-center">
          <div className="grid w-[60%]">
            <div>
              <h1 className="text-5xl text-black font-bold">
                Log In Your Cash
              </h1>
              <h5 className="text-black">
                Your Cash offers secure and convenient mobile financial
                services,
                <br />
                allowing you to manage your finances effortlessly from your
                smartphone. With a focus <br /> on trust and reliability, we
                provide easy access to your money, quick transfers, and seamless
                payments, all backed by top-notch security measures.
              </h5>
            </div>
            <div className="hero-content text-neutral-content text-center ">
              <form
                className="card-body text-5xl text-white"
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
                <div className="form-control mt-6">
                  <button className="btn btn-ghost text-black text-2xl hover:text-white hover:bg-sky-800">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
