import axios from 'axios'

const axiosPublic=axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const usePublic = () => {
  return axiosPublic;
}

export default usePublic
