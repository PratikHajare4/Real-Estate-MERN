import React from 'react'
import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import About from './pages/About'
import Profile from './pages/Profile'

import Header from './components/Header'
import Benefits from './pages/Benefits'
import Residence from './pages/Residence'
import ContactUs from './pages/ContactUs'
import Admin from './pages/Admin'
import SignInPage from './pages/SignInPage'
import Dashboard from './pages/Dashboard'
 


export default function App() {
  return <BrowserRouter>
  
   
  <Header/>
  <Routes>
<Route path="/" element={<Home/>} />


<Route path="/about" element={<About/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/benefits" element={<Benefits/>} />
<Route path="/residence" element={<Residence/>} />
<Route path="/contact" element={<ContactUs/>} />
{/* <Route path="/admin" element={<Admin/>} /> */}

<Route path="/admin/login" element={<SignInPage/>} />
<Route path="/dash" element={<Dashboard/>} />





  </Routes>
  </BrowserRouter>
    
  
}
