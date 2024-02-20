import React, { useEffect, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import axios from 'axios';

function Navbar() {
  const [active, setActive] = useState('active')
 

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
            <button onClick={() => setActive("null")}>
              <IoMenu size={40} style={{color : 'yellow'}} />
            </button>
            : 
            <button onClick={() => setActive('active')}>
              <IoClose size={40} style={{color : 'yellow'}} />
            </button>          
            } 
        </div>
          
    </div>
  )
}

export default Navbar