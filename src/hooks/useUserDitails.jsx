import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import usePublic from './axiosPublic';

const useUserDitails = () => {
    // const [user]=useContext(AuthContext);
    const axiosPublic=usePublic();
    // console.log(user)
    const {data:users={},isLoading,isError,error,refetch}=useQuery({
        queryKey: ["users"],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/users`);
            return res.data;
        }
    })

  return [users,isLoading,isError,error,refetch]
}

export default useUserDitails
