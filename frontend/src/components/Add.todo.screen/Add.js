import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../Context.admin.id';

function Add() {
    const {adminId} = useContext(AdminContext);

    const [addTodo, setAddTodo] = useState({
        title : "",
        description : "",
        tags : "",
        status : ""
    })
    function handleInput(e, type) {
        console.log(type, "this is the type")
        setAddTodo(
            {
                ...addTodo , 
                [type] : e.target.value
            }
        )
    }

    async function handleAdd() {
        console.log(addTodo.title , addTodo.description, addTodo.tags , addTodo.status)
            try{
                const token = localStorage.getItem('token')
                axios.post(`http://localhost:8080/post/${adminId}`
                , addTodo,
                {
                    headers : {
                        "authorisation" : `bearer ${token}`
                    }
                })
            }
            catch(err) {
                console.log("some error occurred", err)
            }
    }
    

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
        <div className='absolute top-20 text-4xl text-white'>
            <h1>Add a task</h1>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' value={addTodo.title} onChange={(e) => handleInput(e, "title")} placeholder='Enter title' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' value={addTodo.desc} onChange={(e) => handleInput(e, "description")} placeholder='Enter description' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' value={addTodo.tags} onChange={(e) => handleInput(e, "tags")} placeholder='Enter tags with spaces' />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' value={addTodo.status} onChange={(e) => handleInput(e, "status")} placeholder='Enter Status with spaces' />
            </div>
        </div>
        <div className=''>
            <button className='text-orange-200 rounded-2xl h-12 w-60 bg-black' onClick={handleAdd}>
            <Link className='mx-2 text-orange-200' to="/home">Add</Link>
            </button>
        </div>
    </div>
  )
}

export default Add