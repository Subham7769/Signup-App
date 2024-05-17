import React from 'react'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default App