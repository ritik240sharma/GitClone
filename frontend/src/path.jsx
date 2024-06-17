import React from 'react'
import { Route,Routes, Navigate } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Explore from "./pages/Explore"
import Signup from "./pages/Signup"
import Error from "./pages/Error"
import LikesPage from "./pages/LikesPage"
import SideBar from "./components/SideBar"
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'
function Path() {
  const {authUser,loading}=useAuthContext();
   if(loading) return null
  return (
    <div className='flex'>
    <SideBar /> 
    <div className='flex justify-center  w-full'>
    <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to={"/signup"}/>} />
        <Route path="/login" element={!authUser?<Login/>:<Navigate to={"/"}/>} />
        <Route path="/explore" element={authUser?<Explore/>:<Navigate to={"/login"}/>} />
        <Route path="/signup" element={!authUser?<Signup/>:<Navigate to={"/"}/>} />
        <Route path="/likes" element={authUser?<LikesPage/>:<Navigate to={"/login"}/>} />
        <Route path="*" element={<Error/>} />
    </Routes>
    <Toaster />
    </div>   
    </div>
  )
}

export default Path