import React, { useState } from "react";
import useUserDitails from "../../hooks/useUserDitails";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CashOut = () => {
  const [user] = useUserDitails();
  console.log(user);
  return (
    <>
     <motion.div
      initial={{ opacity: 0, y: 50 }}     
      animate={{ opacity: 1, y: 0 }}      
      exit={{ opacity: 0, y: -50 }}       
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Cash Out</h2>
      
    
      <div className="flex justify-evenly">
        {/* back btn */}
        <button
          class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <Link to='/dashboard/user'>
          <div class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p class="translate-x-2">Go Back</p>
          </Link>
        </button>

        {/* cash out title */}
        <h1 className="text-5xl font-bold">Cash out</h1>
      </div>
      <section>history</section>
      </motion.div>
    </>
  );
};

export default CashOut;
