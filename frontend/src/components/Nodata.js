import React from 'react'
import img from '../asset/no-data.jpg'

function Nodata() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <img src={img} className='h-auto max-w-lg rounded-lg shadow-inner ' />
     </div>
  )
}

export default Nodata