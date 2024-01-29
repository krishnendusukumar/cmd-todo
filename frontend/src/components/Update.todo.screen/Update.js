import React from 'react'
import { Link } from 'react-router-dom'

function Update() {

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
        <div className='absolute top-20 text-4xl text-white'>
            <h1>Add a task</h1>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter title' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter description' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' />
            </div>
        </div>
        <div className=''>
            <button className='text-orange-200 rounded-2xl h-12 w-60 bg-black'>
            <Link className='mx-2 text-orange-200' to="/home">Add</Link>
            </button>
        </div>
    </div>
  )
}

export default Update