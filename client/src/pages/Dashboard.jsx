import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Link to="/create-listing">
    <div className='mt-5 ml-10 '>
      <button className='border rounded-2xl p-3 hover:bg-gray-800 hover:text-white  '>Add listing </button>
    </div>
    </Link>
  )
}
  