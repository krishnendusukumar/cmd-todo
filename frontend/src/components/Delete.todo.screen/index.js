import React, { useEffect, useState } from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Delete() {

  const [search , setSearch] = useState();
  const [data, setData] = useState();

  const [adminId, setAdminId] = useState();

  useEffect(() => {
        let admintoken = localStorage.getItem('adminid');
        admintoken = JSON.parse(admintoken);
        setAdminId(admintoken);
  }, [])

  async function handleSearch() {
    try{

      let token = localStorage.getItem('token');
      token = JSON.parse(token);
      const response = await axios.get(`http://localhost:8080/get/${adminId}`, {
        headers : {
          "Content-Type" : 'application/json',
          "authorization" : `bearer ${token}`
        }
      });
      const result = await response.data.todos;
      const filteredResult = result.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
      console.log(filteredResult);
      setData(filteredResult);
    }
    catch(error) {
      console.log(adminId)
      console.log("error occurred ",error)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
    <div className='text-4xl absolute top-20 flex'>
      <div className='flex-col'>

    <input className='text-lg bg-black rounded-xl w-60 h-12 text-white text-center' placeholder='search todo with title' onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}><IoArrowForwardCircle size={40}/></button>
    </div>
    {
      data?.map((item, _id) =>(
        <div key={_id} className='h-screen bg-black text-white'>
          <div>
            {item.title}
            </div>
            <div>
              {item.description}
              </div>
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default Delete