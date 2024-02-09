import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';


function SignUp() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false)


    async function handlesignup(){
        const body = {username, password}
        try{
        const response = await axios.post('http://localhost:8080/signup', body);
        const user = await response.data.user;
        let token = await response.data.token;
        token = JSON.stringify(token)
        localStorage.setItem('token', token)
        console.log(response.data)
        }
        catch(error) {
            console.log(error)
        }
    }

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen mb-96'>
        <h3 className='text-4xl mb-24'>
            Admin SignUp
        </h3>
        <div className='mb-40'>
        <div className='flex text-black'>
            <div>
            <CiUser className='w-12 h-16 rounded-3xl text-white '/>
            </div>
            <div>
                <input placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} className='text-white rounded-3xl w-60 h-16 bg-black text-center'></input>
            </div>
        </div>
        <div className='flex text-black mt-10'>
            <div>
                <input type={showPassword ? 'text' : 'password'} placeholder='Enter password' className='text-white z-40 ml-12 w-60 h-16 bg-black rounded-3xl text-center outline-orange-200' onChange={(e) => setPassword(e.target.value)}/>
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
        <Link className='mx-2 text-orange-200' to="/login">
            <button className='text-orange-200 rounded-3xl h-16 w-60 mt-12 bg-black' onClick={handlesignup}>
                Login
            </button>
        </Link>

        </div>
    </div>
  )
}

export default SignUp