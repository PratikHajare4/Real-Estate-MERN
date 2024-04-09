import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
    <div className="flex m-5 justify-center items-center">
    <h1 className=' sm:text-2xl  text-gray-500'>Admin can add property listing from here</h1>
    </div>
    <Link to="/create-listing">
    <div className='mt-5 ml-10 flex justify-center items-center'>
      <button className='border rounded-2xl p-3 hover:bg-gray-800 hover:text-white  '>Add listing </button>
    </div>
    </Link>
    </>
  )
}
  