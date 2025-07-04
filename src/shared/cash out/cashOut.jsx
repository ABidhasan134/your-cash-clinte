import React, { useState } from "react";
import useUserDitails from "../../hooks/useUserDitails";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const CashOut = () => {
  const [user] = useUserDitails();
  console.log(user);
  return (
    <motion.div
      initial={{ opacity: 100, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 grid justify-center rounded-lg shadow-lg"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4">Cash Out</h2>
      </div>
      <div className="grid justify-center bg-black border-2 border-red-500 py-6 w-[600px]">
        
        <div class="relative w-full max-w-[180px] pt-5 grid text-center">
          <input
            type="text"
            id="Number"
            placeholder="Enter your agent number"
            required
            class="my-5 peer w-full border-0 border-b-2 border-gray-400 bg-transparent py-2.5 text-white text-[17px] placeholder-transparent focus:border-b-[3px] focus:border-transparent focus:outline-none focus:ring-0 focus:border-b-[3px] focus:border-b-gradient-to-r focus:from-[#116399] focus:to-[#38caef] font-normal focus:font-bold transition-all duration-200"
          />
          <label
            for="name"
            class="absolute left-0 top-0 text-[17px] text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[17px] peer-placeholder-shown:cursor-text peer-focus:top-0 peer-focus:text-[17px] peer-focus:text-[#38caef] peer-focus:font-bold"
            >
            Agent Number
          </label>
            <FaArrowCircleRight></FaArrowCircleRight>
          <button class="flex relative items-center gap-2 text-center font-bold 
          text-[18px] tracking-[2px] uppercase px-8 py-3 border-4 border-[#FF0072]
           rounded-sm shadow-md shadow-black/10  transition-all duration-300 
           ease-in-out hover:text-white hover:scale-100 scale-90 before:absolute 
           before:top-0 before:left-1/2 before:right-1/2 before:bottom-0  
           before:opacity-0 before:transition-all before:duration-500 
           hover:before:left-0 hover:before:right-0 hover:before:opacity-100 ">
           <MdOutlineQrCodeScanner className="hover:bg-[#FF0072]"></MdOutlineQrCodeScanner> <span className="flex w-[180px] pl-2">scan QR code</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CashOut;
