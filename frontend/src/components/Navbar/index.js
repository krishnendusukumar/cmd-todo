import React, { useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import useAdminid from '../../hook/useAdminid';

function Navbar() {
  const [active, setActive] = useState("active");
  const {username} = useAdminid()

  return (
    <div className='absolute top-0 h-16 p-2 flex justify-between w-full'>

        <div className='mt-2 cursor-pointer'>
            <Link to="/home">
            <LuListTodo size={40} style={{color : 'yellow'}}/>
            </Link>
        </div>
        <div>
          {
            active === 'active' ? 
            <button onClick={() => setActive("none")}>
              <IoMenu size={40} style={{color : 'yellow'}} />
            </button>
            : 
            <button onClick={() => setActive("active")}>
              <IoClose size={40} style={{color : 'yellow'}} />
            </button>          
            } 
        </div>

        {
          active === 'active' ?
          <div className='absolute bg-white'>
            <h1>{username}</h1>
          </div>
          :
          null
        }
    </div>
  )
}

export default Navbar