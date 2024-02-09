import React, { useEffect, useState } from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAdminid from '../../hook/useAdminid';
import ShowTable from '../ShowTable';


function Find() {
  const [search , setSearch] = useState();
  const [data, setData] = useState();
  const {adminId, token} = useAdminid()

    async function handleSearch() {
      try{
        const response = await axios.get(`http://localhost:8080/get/${adminId}`, {
          headers : {
            "Content-Type" : 'application/json',
            "authorization" : `bearer ${token}`
          }
        });
        const result = await response.data.todos;
        console.log(result)
        const filteredResult = result.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
        console.log(filteredResult);
        setData(filteredResult);
        console.log(data)
      }
      catch(error) {
        console.log(adminId)
        console.log("error occurred ",error)
      }
    }
    
  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
    <div className='text-4xl absolute top-20 flex'>
    <div className='flex'>
      <input className='text-lg bg-black rounded-xl w-60 h-12 text-white text-center' placeholder='search todo with title' onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}><IoArrowForwardCircle size={40}/></button>
    </div>
    </div>
    {
      data ? 
      <ShowTable data={data}/> : 
      null
    }
    </div>
  )
}

export default Find