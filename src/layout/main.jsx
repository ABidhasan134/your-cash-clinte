import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container mx-auto grid justify-center items-center max-h-lvh'>
      <Outlet></Outlet>
    </div>
  )
}

export default Main
