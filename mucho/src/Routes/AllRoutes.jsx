import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Men from '../Components/Men'
import Signup from '../Components/Signup'
import Women from '../Components/Women'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Women/>} />
        <Route path="/Men" element={<Men/>} />
        <Route path="/Login" element={<Signup/>}  />
      </Routes>
    </div>
  )
}

export default AllRoutes
