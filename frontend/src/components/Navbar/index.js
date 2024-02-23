import React, { useEffect, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import axios from 'axios';

function Navbar() {
  const [active, setActive] = useState(true)

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('adminId')
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      setActive(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [active]);

 

  return (
    <div className='absolute top-0 right-0 h-16 p-2 flex justify-between w-full'>

        <div className='mt-2 cursor-pointer'>
            <Link to="/home">
            <LuListTodo size={40} style={{color : 'yellow'}}/>
            </Link>
        </div>
        <div>
          {
            active === true ?
            <>
            <button onClick={() => setActive(false)} className=''>
              <IoMenu size={40} style={{color : 'yellow'}} />
            </button>
            </> 
            : 
            <>
            <button onClick={() => setActive(true)}>
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
              <Link to="/find">
              <button className='mt-2 w-24 h-8 custom-color rounded-xl'>
                Find
              </button>
              </Link>
              <Link to="/show">
              <button className='mt-2 mb-2 w-24 h-8 custom-color rounded-xl'>
                Show
              </button>
              </Link>

             
              <button className='mt-2 mb-2 w-24 h-8 text-black bg-red-300 rounded-xl' onClick={handleLogout}>
              <Link to="/login">
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