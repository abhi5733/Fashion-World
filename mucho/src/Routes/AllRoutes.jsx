import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Men from '../Components/Men'
import Product from '../Components/Product'
import ShoppingBag from '../Components/ShoppingBag'
import Signup from '../Components/Signup'
import Wishlist from '../Components/Wishlist'
import Women from '../Components/Women'
import WomenPoducts from '../Components/WomenPoducts'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Women/>} />
        <Route path="/Men" element={<Men/>} />
        <Route path="/Login" element={<Signup/>}  />
        <Route path="/ShoppingBag" element={<ShoppingBag/>}  />
        <Route path="/WomenProducts" element={<WomenPoducts/>}  />
        <Route path="/Wishlist" element={<Wishlist/>}  />
        <Route path="/Product" element={<Product/>}  />
      </Routes>
    </div>
  )
}

export default AllRoutes
