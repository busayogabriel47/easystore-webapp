import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
