import React, { useState, useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";



function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false)


    async function handleLogin(){
        try{
            const body = {username, password};
            const response = await axios.post('http://localhost:8080/login', body);
            let token = await response.data.token;
            let adminId = await response.data.user;
            let username = await response.data.username;
            token = JSON.stringify(token)
            adminId = JSON.stringify(adminId)
            username = JSON.stringify(username);
            localStorage.setItem('token', token)
            localStorage.setItem('adminId', adminId)
            localStorage.setItem('username', username)
        }
        catch(error) {
            console.log(error)
            setError(true)
        }
    }

  return (
    <>
    {error 
        ? 
            alert("some error occurred")
        :
    <div className='flex flex-col justify-center items-center text-white h-screen mb-96'>
        <h3 className='text-4xl mb-24'>
            Admin Login
        </h3>
        <div className='mb-40'>
        <div className='flex text-black'>
            <div>
            <CiUser className='mr-2 w-12 h-16 rounded-3xl text-white custom-color'/>
            </div>
            <div>
                <input placeholder='Enter username' className='text-white rounded-3xl w-60 h-16 bg-black text-center' onChange={(e) => setUsername(e.target.value)}></input>
            </div>
        </div>
        <div className='flex text-black mt-10 ml-2'>
            <div>
                <input type={showPassword ? 'text' : 'password'} placeholder='Enter password' className='text-white z-40 ml-12 w-60 h-16 bg-black rounded-3xl text-center outline-orange-200' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='text-black'>
            <button className='w-12 h-16 rounded-3xl text-white ml-2' onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword 
                    ?
                    <IoEyeSharp size={32} />
                    :
                    <FaEyeSlash size={32}/>
                }
            </button>
            </div>
        </div>
        <Link className='mx-2 text-orange-200' to="/home">
            <button className='text-orange-200 rounded-3xl h-16 w-60 mt-12 bg-black' onClick={handleLogin}>
                Login
            </button>
        </Link>

        <div className='ml-12 flex mt-6'>
            <h3 className='text-white'>
                Don't have an account?
            </h3>
            <Link className='mx-2 text-orange-200' to="/signup">Create an account</Link>
        </div>
        </div>
    </div>
}
    </>
  )
}

export default Login