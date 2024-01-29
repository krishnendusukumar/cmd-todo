import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Delete() {

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
    <div className='text-4xl absolute top-20'>
      <h1>Delte a task</h1>
    </div>
    <div>
      <div className='flex justify-between mb-12 w-60'>
        <input className='text-lg bg-black rounded-xl w-60 h-12 text-white text-center' placeholder='search todo'/>
      </div>
      <div className='flex justify-between mb-12 w-60'>
        <div className='text-3xl'>Delete</div>
      <Link className='mx-2 text-orange-200' to="/login"><IoArrowForwardCircle size={40}/></Link>
      </div>
    </div>
  </div>
  )
}

export default Delete