import React from 'react'
import  "../Styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:"80%",border:"1px solid", margin:"auto"}}>
      <div style={{display:"grid", gridTemplateColumns:"60% 40%"}}><div className='hi' style={{display:"flex",border:"1px solid"}}> <Link to="/">Women</Link>  <Link to="/Men">Men</Link> <h3>Kid</h3><h3>Life</h3> </div> <div className='hi2' style={{display:"flex",border:"1px solid"}}><p>Signup for Newsletter</p><p>My account</p><p>My wishlist</p><p>International | English
</p></div></div>

 <div style={{display:"grid", gridTemplateColumns:"60% 40%",marginTop:"20px"}} ><div>  <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo-s.png?v=20221102T163423"  alt="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/> </div> <div> <h3 style={{marginTop:"-1%"}}>Shopping bag</h3> </div></div>
   
   <div style={{display:"grid", gridTemplateColumns:"80% 20%",marginTop:"20px"}}> <div style={{display:"flex",justifyContent:"space-evenly",border:"1px solid"}}><p>New Arrivals</p> <p>Designers</p><p>Clothing</p><p>Shoes</p><p>Bags</p><p>Accessories</p><p>Jewelerry</p><p>Festive Seasons</p><p>Sale</p></div> <div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><input placeholder='search for' style={{height:"20px"}}/></div> </div>
    </div>
  )
}

export default Navbar
