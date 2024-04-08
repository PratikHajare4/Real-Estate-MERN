import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-rose-600 shadow-md '>
        <div className=' flex flex-row justify-between items-center max-w-6xl mx-auto p-3 '>
    <Link to="/" >
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
        <span className='text-slate-200'>Hom</span>
        <span className='text-slate-700'>Assist</span>
        </h1>
    </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
            <input type="text" placeholder='Search...' className='bg-transparent w-15 sm:w-64 focus:outline-none' />
            <FaSearch className='text-slate-600   sm:outline-none'/>
        </form>
        <ul className='flex gap-4 text-white'>
            <Link to="/">
            <li className='hidden sm:inline  hover:text-black'>Home</li>
            </Link>
            <Link to="/about">
            <li className='hidden sm:inline  hover:text-black'>About Us</li>
            </Link>
            <Link to="/benefits">
            <li className='hidden sm:inline  hover:text-black'>Benefits</li>
            </Link>
            <Link to="/residential">
            <li className='hidden sm:inline  hover:text-black'>Residential</li>
            </Link>
            <Link to="/commercial">
            <li className='hidden sm:inline  hover:text-black'>Commercial</li>
            </Link>
            <Link to="/contact">
            <li className='hidden sm:inline  hover:text-black'>Contact US</li>
            </Link>
           
            {/* <Link to="/sign-in">
            <li className='hidden sm:inline  hover:text-black'>Sign IN</li>
            </Link> */}
        </ul>
        </div>
    </header>
  )
}
