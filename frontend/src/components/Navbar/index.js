import React, { useEffect, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import axios from 'axios';

function Navbar() {
  const [active, setActive] = useState('active')

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('adminId')
  }
 

  return (
    <div className='absolute top-0 right-0 h-16 p-2 flex justify-between w-full'>

        <div className='mt-2 cursor-pointer'>
            <Link to="/home">
            <LuListTodo size={40} style={{color : 'yellow'}}/>
            </Link>
        </div>
        <div>
          {
            active === 'active' ?
            <>
            <button onClick={() => setActive("null")} className=''>
              <IoMenu size={40} style={{color : 'yellow'}} />
            </button>
            </> 
            : 
            <>
            <button onClick={() => setActive('active')}>
              <IoClose size={40} style={{color : 'yellow'}} />
            </button>
            <div className='text-orange-200 absolute w-40 top-12 right-0 h-auto z-20 rounded-s-xl'>
            <Link to="/home">
              <button className='mt-2 w-24 h-8 custom-color rounded-xl'>
                Home
              </button>
              </Link>
              <Link to="/add">
              <button className='mt-2 w-24 h-8 custom-color rounded-xl'>
                Add
              </button>
              </Link>
              <Link to="/create">
              <button className='mt-2 w-24 h-8 custom-color rounded-xl'>
                Create
              </button>
              </Link>
              <Link to="/show">
              <button className='mt-2 mb-2 w-24 h-8 custom-color rounded-xl'>
                Show
              </button>
              </Link>

             
              <button className='mt-2 mb-2 w-24 h-8 text-black bg-red-300 rounded-xl' onClick={handleLogout}>
              <Link to="/auth">
                Logout
              </Link>
              </button>
              
            </div>          
            </>
            } 
        </div>
        
          
    </div>
  )
}

export default Navbar