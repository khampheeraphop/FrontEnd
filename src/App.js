import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/Signin'
import Home from './components/Home'
import SignUp from './components/SignUp.Popup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/Booknow' element={<Home/>}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App