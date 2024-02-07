import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Show() {
    const [data, setData] = useState([]);

    const [adminId, setAdminId] = useState();


    useEffect(() => {
        let admintoken = localStorage.getItem('adminid');
        admintoken = JSON.parse(admintoken);
        setAdminId(admintoken);
    }, [])
    
    useEffect(() => {
        async function fetch() {
            try{
                let token = localStorage.getItem('token')
                token = JSON.parse(token)
                const result = await axios.get(`http://localhost:8080/get/${adminId}`,{
                    headers : {
                        "Content-Type" : 'application/json',
                        "authorization" : `bearer ${token}`
                    }
                }
                )
                const resulted = await result.data.todos
                setData(resulted)
                console.log(resulted)
            }
            catch(err) {
                console.log("console reached here")
                console.log("some error occurred" , err)
            }
        }
        fetch();
    }, [])

  return (
    <div className='flex flex-wrap justify-center items-center h-screen'> 
        {
            data ? (
            data.map((item, index) => (
                <div key={index} className='bg-amber-100 max-w-1/2 rounded overflow-hidden shadow-lg m-4'>
                    <div className='px-4 py-6'>
                    <div class="font-bold text-xl mb-2">{item.title}</div>
                    <div className='text-gray-700 text-base'>{item.description}</div>
                        </div>
                            </div>
            ))
            ) : null
        }
    </div>
  )
}

export default Show