'use clinte'
import React, { useState } from "react";
import useUserDitails from "../../hooks/useUserDitails";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { motion } from "framer-motion";
import History from "../history/history";
import { useForm } from "react-hook-form";

const CashOut = () => {
  const [user] = useUserDitails();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [agentBtn,setAgentBtn]=useState(false)

  // this will log the value on every change
 const handleAgentNumberChange = (e) => {
  const value = e.target.value;

  if (value.length === 11) {
    console.log("valid number", value);
    setAgentBtn(true);
  } else {
    console.log("agent number is not valid", value);
    setAgentBtn(false);
  }
};
  const onSubmit = (data) => {
    console.log("Cash Out Submitted Data:", data);
    // send data to backend here
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

      
        <div className="relative w-full pt-5 flex justify-center items-center text-center bg-black border-2 border-red-500 py-6">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your agent number"
            {...register("agentNumber", { required: true })}
            onChange={handleAgentNumberChange}
            className="my-5 peer w-[230px] border-0 border-b-2 border-gray-400 bg-transparent py-2.5 text-white text-[17px] placeholder-transparent focus:border-b-[3px] focus:outline-none focus:ring-0 focus:border-b-gradient-to-r focus:from-[#116399] focus:to-[#38caef] font-normal focus:font-bold transition-all duration-200"
          />
          <label
            htmlFor="agentNumber"
            className="absolute left-40 top-0 text-[17px] text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[17px] peer-placeholder-shown:cursor-text peer-focus:top-0 peer-focus:text-[17px] peer-focus:text-[#38caef] peer-focus:font-bold"
          >
            Agent Number
          </label>
          {
            agentBtn===true?<button type="submit">
            <FaArrowCircleRight className="text-4xl scale-90 hover:scale-100 duration-[1s] hover:text-[#FF0072]" />
          </button>:<button type="submit" disabled>
            <FaArrowCircleRight className="text-4xl text-gray-900" />
          </button>
          }
          
          </form>
        </div>

        {errors.agentNumber && (
          <p className="text-red-500 text-sm text-center -mt-3">
            Agent number is required
          </p>
        )}

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
