
import axios from "axios";
import { Cookies } from 'react-cookie';

const axiosSequer = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useSequer = () => {
  //use react-cookie for cookies (nstantiate the Cookies class)
  const cookies = new Cookies(); 

  axiosSequer.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = cookies.get('token');  // Access the token from cookies
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach token to headers if exists
      }
      return config;
    }, 
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSequer.interceptors.response.use(
    function (response) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      // Do something with response data
      console.log(response);
      return response;
    }, 
    function (error) {
      // Any status codes that fall outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("Error in the response:", error);
      return Promise.reject(error);
    }
  );

  return axiosSequer;
}

export default useSequer;
