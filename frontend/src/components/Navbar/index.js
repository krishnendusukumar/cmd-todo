import React from 'react'
import { LuListTodo } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='absolute top-0 h-16 p-2 flex justify-between w-full'>

        <div className='mt-2 cursor-pointer'>
            <Link to="/home">
            <LuListTodo size={32} style={{color : 'yellow'}}/>
            </Link>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar