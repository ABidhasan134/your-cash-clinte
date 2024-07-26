import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container mx-auto grid justify-center 
    items-center border-2 border-gray-400'>
      <Outlet></Outlet>
    </div>
  )
}

export default Main
