import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircle, IoConstructOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState()



  useEffect(() => {
    async function handleNavigate () {
      try{
        const token = localStorage.getItem('token')
        console.log(token)
        var response = await axios.get(`http://localhost:8080/user`,
        {
          headers : {
            "authorization" : `bearer ${token}`
          }
        })
        console.log(response)
        const user = await response.data.username
        setUsername(user)
        
      }
      catch(err) {
        console.log("some error occurred", err)
      }
    };

    handleNavigate();
  }, [username])

  return (
    <>
        <div className='flex flex-col justify-center items-center text-white h-screen'>
          <div className='text-4xl absolute top-20'>
            <h1>Welcome to Home <i className='text-purple-500'>{username?.toLowerCase()}</i></h1>
          </div>
          <div>
            <div className='flex justify-between w-60'>
              <div className='text-3xl'>Show</div>
              <Link className='mx-2 text-orange-200 mb-12' to="/show"><IoArrowForwardCircle size={40}/></Link>
            </div>
            <div className='flex justify-between mb-12 w-60'>
              <div className='text-3xl'>Create</div>
              <Link className='mx-2 text-orange-200' to="/add"><IoArrowForwardCircle size={40}/></Link>
            </div>
            <div className='flex justify-between mb-12 w-60'>
              <div className='text-3xl'>Find</div>
              <Link className='mx-2 text-orange-200' to="/find"><IoArrowForwardCircle size={40}/></Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;