import React, { useEffect, useState } from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import useAdminid from '../../hook/useAdminid';

function Delete() {

  const [deleted, setDeleted] = useState()
  const {adminId, token, username} = useAdminid()

  const location = useLocation()
    console.log(location)
    const { _id, title, description, tags, status } = location.state || {};
    console.log(_id, title, description, tags, status)


  async function Delete() {
    try{
      const response = await axios.delete(`http://localhost:8080/delete/${adminId}/${_id}`, {
        headers : {
          "Content-Type" : 'application/json',
          "authorization" : `bearer ${token}`
        }
      });
      const result = await response.data;
      setDeleted(true);
    }
    catch(error) {
      console.log("error occurred ",error)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
        <div className='absolute top-20 text-4xl text-white'>
            <h4 className='text-2xl'>Are you sure, you want to delete this Task?</h4>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter title' value={title}/>
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter description' value={description} />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' value={tags} />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' value={status} />
            </div>
        </div>
        <div className='flex'>
            <button className='text-orange-200 rounded-2xl h-12 w-28 bg-black'>
            <Link className='mx-2 text-orange-200' to="/show">Cancel</Link>
            </button>
            <button className='text-orange-200 rounded-2xl h-12 w-28 bg-black' onClick={Delete}>
            <Link className='mx-2 text-red-200' to="/show">Delete</Link>
            </button>
        </div>
    </div>
  )
}

export default Delete