import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAdminid from '../../hook/useAdminid';
import ShowTable from '../ShowTable';
import Nodata from '../Nodata';



function Show() {
    const [data, setData] = useState([]);
    const {adminId, token} = useAdminid();
    useEffect(() => {
        async function fetch() {
            try{
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
    <div className='flex flex-wrap justify-center items-center h-screen bg-brown text-pink-500'> 
        {
            data ? (

                <ShowTable data={data}/>
            ) : 
             null
        }
    </div>
  )
}

export default Show