'use client '
import { useQuery } from '@tanstack/react-query'
import usePublic from './axiosPublic';

const useUserDitails = () => {
    // const {user}=useContext(AuthContext);
    const axiosPublic=usePublic();
    // console.log(user)
    const user=localStorage.getItem('user');
    const userEmail=JSON.parse(user)
    // console.log(userEmail.email);
    const {data:users={},isLoading,isError,error,refetch}=useQuery({
        queryKey: ["users"],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/users/${userEmail.email}`);
            // console.log("this respons from the user hook",res)
            return res.data;
        }
    })

  return [users,isLoading,isError,error,refetch]
}

export default useUserDitails
