import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
      <div className='text-4xl absolute top-20'>
        <h1>Welcome to Home</h1>
      </div>
      <div>
        <div className='flex justify-between w-60'>
          <div className='text-3xl'>Show</div>
        <Link className='mx-2 text-orange-200 mb-12' to="/show"><IoArrowForwardCircle size={40}/></Link>
        </div>
        <div className='flex justify-between mb-12 w-60'>
          <div className='text-3xl'>Create</div>
        <Link className='mx-2 text-orange-200' to="/add"><IoArrowForwardCircle size={40}/></Link>
        </div>
        <div className='flex justify-between mb-12 w-60'>
          <div className='text-3xl'>Update</div>
        <Link className='mx-2 text-orange-200' to="/update"><IoArrowForwardCircle size={40}/></Link>
        </div>
        <div className='flex justify-between mb-12 w-60'>
          <div className='text-3xl'>Delete</div>
        <Link className='mx-2 text-orange-200' to="/delete"><IoArrowForwardCircle size={40}/></Link>
        </div>
      </div>
    </div>
  )
}

export default Home