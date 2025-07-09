"use clinte";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import usePublic from "../../hooks/axiosPublic";
import useUserDitails from "../../hooks/useUserDitails";
import History from "../history/history";

const CashOut = () => {
  const [user] = useUserDitails();
  const axiosPublic = usePublic();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [agentStatus, setAgentStatus] = useState(false);
  const [btn1, setBtn1] = useState(false);
  const [agentNumber, setAgentNumber] = useState(0);
  const [cashStatus, setCashStatus] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [cashAmout, setCashAmout] = useState();
  const [passwordStatus, setPasswordStatus] = useState(false);
  // const [btn3, setBtn3] = useState(false);
  const [password, setPassword] = useState();
  // this will log the value on every change
  const handleAgentNumberChange = (e) => {
    const value = e.target.value;

    if (value.length === 11) {
      console.log("valid number", value);
      setAgentStatus(true);
      setAgentNumber(value);
      return;
    } else {
      console.log("agent number is not valid", value);
      setAgentStatus(false);
    }
  };
  const handleAmoutChange = (e) => {
    const value = e.target.value;
    setCashStatus(true);
    setCashAmout(value);
    console.log("your amount of cash out is", value);
    // setAgentStatus(false);
    return;
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPasswordStatus(true);
    setPassword(value);
    console.log("your password is", value);
    // setAgentStatus(false);
  };
  const handelNumAgent = () => {
    const length = agentNumber.length;
    console.log(length);
    if (length === 11) {
      setBtn1(true);
      console.log("agent number is", agentNumber);
      return;
    }
    setBtn1(false);
    setAgentStatus(false);
  };
  const handelCashAmount = () => {
    setBtn2(true);
    console.log("cash out amount on submit", cashAmout);
    return;
  };
  const cashOut = () => {
    console.log(
      "all information of cash out",
      agentNumber,
      cashAmout,
      password
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 grid justify-center rounded-lg shadow-lg bg-black border-2 border-blue-700 h-screen"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4">Cash Out</h2>
      </div>

      <div className="relative w-full pt-5 flex justify-center items-center text-center bg-black py-6">
        {/* agent number */}
        <div className="grid">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your agent number"
              {...register("agentNumber", {
                required: "Agent number is required",
                pattern: {
                  value: /^(01[3-9]\d{8})$/,
                  message: "It must be a Bangladeshi number",
                },
              })}
              onChange={handleAgentNumberChange}
              className={`${btn1 === true ? "hidden" : "my-5 peer w-[230px] border-0 border-b-2 border-gray-400 bg-transparent py-2.5 text-white text-[17px] placeholder-transparent focus:border-b-[3px] focus:outline-none focus:ring-0 focus:border-b-gradient-to-r focus:from-[#992311] focus:to-[#4476d2] font-normal focus:font-bold transition-all duration-200"}`}
            />

            <label
              htmlFor="agentNumber"
              className={`${btn1 === true ? "absolute -left-96 hidden" : "absolute left-40 top-0 text-[17px] text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[17px] peer-placeholder-shown:cursor-text peer-focus:top-0 peer-focus:text-[17px] peer-focus:text-[#4476d2] peer-focus:font-bold"}`}
            >
              Agent Number
            </label>

            {btn1 === true ? (
              ""
            ) : (
              <button
                className={`${agentStatus === true ? "" : " disabled"}`}
                type="submit"
                onClick={handleSubmit(handelNumAgent)}
              >
                <FaArrowCircleRight
                  className={`${agentStatus === true ? `text-4xl scale-90 hover:scale-100 duration-[1s] hover:text-[#4476d2] ` : "text-4xl text-gray-900 disabled"}?`}
                />
              </button>
            )}
          </div>
          {errors.agentNumber && (
            <p className="text-red-500 text-sm text-center -top-10 z-10">
              {errors.agentNumber.message}
            </p>
          )}
        </div>
        {/* cash out amount */}

        {btn1 === true ? (
          <div className="grid">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your agent number"
                {...register("cashAmount", {
                  required: "Amount is required",
                  min: {
                    value: 10,
                    message: "Amount must be at least 10 Tk",
                  },
                  max: {
                    value: 3000,
                    message: "Amount cannot exceed 3000 Tk",
                  },
                })}
                onChange={handleAmoutChange}
                className={`${btn2 === true ? "relative -left-96 hidden" : "my-5 peer w-[230px] border-0 border-b-2 border-gray-400 bg-transparent py-2.5 text-white text-[17px] placeholder-transparent focus:border-b-[3px] focus:outline-none focus:ring-0 focus:border-b-gradient-to-r focus:from-[#116399] focus:to-[#38caef] font-normal focus:font-bold transition-all duration-200"}`}
              />

              <label
                htmlFor="cashAmount"
                className={`${btn2 === true ? "absolute -left-96 hidden" : "absolute left-40 top-0 text-[17px] text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[17px] peer-placeholder-shown:cursor-text peer-focus:top-0 peer-focus:text-[17px] peer-focus:text-[#38caef] peer-focus:font-bold"}`}
              >
                Enter your cash out amount
              </label>

              {btn2 === true ? (
                ""
              ) : (
                <button type="submit" onClick={handleSubmit(handelCashAmount)}>
                  <FaArrowCircleRight
                    className={`${cashStatus === true ? `text-4xl scale-90 hover:scale-100 duration-[1s] hover:text-[#FF0072] ` : "text-4xl text-gray-900"}?`}
                  />
                </button>
              )}
            </div>
            {errors.cashAmount && (
              <p className="text-red-500 text-sm text-center -top-10 z-10">
                {errors.cashAmount.message}
              </p>
            )}
          </div>
        ) : (
          ""
        )}
        {/* password filde */}
        {btn2 === true && btn1 === true ? (
          <div className="grid">
            <div className="flex">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  validate: (value) =>
                    value.length === 5 ||
                    "Your password must be exactly 5 characters.",
                })}
                onChange={handlePassword}
                className={`"my-5 peer w-[230px] border-0 border-b-2 border-gray-400 bg-transparent py-2.5 text-white text-[17px] placeholder-transparent focus:border-b-[3px] focus:outline-none focus:ring-0 focus:border-b-gradient-to-r focus:from-[#f1e12e] focus:to-[#f1e12e] font-normal focus:font-bold transition-all duration-200"}`}
              />

              <label
                htmlFor="password"
                className="absolute left-40 top-16 text-[17px] text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[17px] peer-placeholder-shown:cursor-text peer-focus:top-3 peer-focus:text-[17px] peer-focus:text-[#f1e12e] peer-focus:font-bold"
              >
                Enter your password
              </label>

              <button type="submit" onClick={handleSubmit(cashOut)}>
                <FaArrowCircleRight
                  className={`text-4xl scale-90 hover:scale-100 duration-[1s] hover:text-[#f1e12e]`}
                />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm text-center -top-10 z-10">
                {errors.password.message}
              </p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* QR code sceaner */}
      <div className="grid justify-center items-center">
        <button
          type="button"
          className="max-w-[280px] flex relative left-40 items-center gap-2 text-center font-bold text-[18px] tracking-[2px] uppercase px-8 py-3 border-4 border-[#FF0072] rounded-sm shadow-md shadow-black/10 transition-all duration-300 ease-in-out hover:text-white hover:scale-100 scale-90 before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:opacity-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:right-0 hover:before:opacity-100"
        >
          <MdOutlineQrCodeScanner className="hover:bg-[#FF0072]" />
          <span className="flex w-[180px] pl-2">Scan QR Code</span>
        </button>
        <History />
      </div>
    </motion.div>
  );
};

export default CashOut;
