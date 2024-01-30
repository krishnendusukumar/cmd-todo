import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Show() {
    const [data, setData] = useState();
    useEffect(() => {
        async function fetch() {
            try{
                const result = await axios.get('http://localhost:8000/get',{
                    headers : {
                        "Content-Type" : 'application/json',
                        "Authorization" : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGlndmlqYXkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDY1ODk0MTIsImV4cCI6MTcwNjU5MzAxMn0.xUZFU1w0mc081CliKqgpj5oH-BQv6B-9sHZWPc35qbw"
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
    <div> 
        {
            data ? (
            data.map((item, index) => (
                <div key={index}>
                    {item.title} + " " + {item.description}
                </div>
            ))
            ) : null
        }
    </div>
  )
}

export default Show