import React from 'react'
import axios from "axios";
const axiosSequer = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useSequer = () => {
  return axiosSequer;
}

export default useSequer;
