import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAdminid from '../../hook/useAdminid'
import axios from 'axios'

function Update() {
    const {adminId, token} = useAdminid()
    const [update, setUpdate] = useState()
    const location = useLocation()
    console.log(location)
    const { _id, title, description, tags, status } = location.state || {};
    console.log(_id, title, description, tags, status)
    const [data, setData] = useState({
        title : title,
        description : description,
        tags : tags,
        status : status,
    })


    async function Update() {
        try{
            console.log(data)
          const response = await axios.put(`http://localhost:8080/put/${adminId}/${_id}`,
          data,
           {
            headers : {
              "Content-Type" : 'application/json',
              "authorization" : `bearer ${token}`
            }
          });
          const result = await response.data;
          setUpdate(true);
        }
        catch(error) {
          console.log("error occurred ",error)
        }
      }

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
      };

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen'>
        <div className='absolute top-20 text-4xl text-white'>
            <h4 className='text-2xl'>Are you sure, you want to delete this Task?</h4>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter title' value={data.title}
            name="title"
            onChange={handleInputChange} />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter description' value={data.description}
            name="description"
            onChange={handleInputChange} />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <input className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' value={data.tags.join(', ')}
            name="tags"
            onChange={(e) => setData({ ...data, tags: e.target.value.split(', ') })} />
            </div>
        </div>
        <div className='flex justify-between w-68'>
            <div>
                <select className='rounded-2xl w-60 h-12 mb-12 outline-orange-200 bg-black text-center text-lg' placeholder='Enter tags with spaces' value={data.status}
            name="status"
            onChange={handleInputChange}>
                <option value={'Open'}>Open</option>
                <option value={'Closed'}>Closed</option>
            </select>
            </div>
        </div>
        <div className='flex'>
            <button className='text-orange-200 rounded-2xl h-12 w-28 bg-black'>
            <Link className='mx-2 text-orange-200' to="/show">Cancel</Link>
            </button>
            <button className='text-orange-200 rounded-2xl h-12 w-28 bg-black' onClick={Update}>
            <Link className='mx-2 text-red-200' to="/show">Update</Link>
            </button>
        </div>
    </div>
  )
}

export default Update