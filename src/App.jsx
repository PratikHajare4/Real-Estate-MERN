import React from 'react'
import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Benefits from './pages/Benefits'
import Residence from './pages/Residence'
import ContactUs from './pages/ContactUs'
 


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/sign-in" element={<SignIn/>} />
<Route path="/sign-up" element={<SignUp/>} />
<Route path="/about" element={<About/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/benefits" element={<Benefits/>} />
<Route path="/residence" element={<Residence/>} />
<Route path="/contact" element={<ContactUs/>} />

  </Routes>
  </BrowserRouter>
    
  
}
