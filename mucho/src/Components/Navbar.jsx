import React, { useContext } from 'react'
import  "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/LoginContext'
// import image from "../picture/logo.png"
import image from "../picture/logo.jpg"
const Navbar = () => {
  const {isauth,logout,bag,infor} = useContext(AuthContext)
  return (
    <div style={{width:"80%", margin:"auto"}}>
      <div style={{display:"grid", gridTemplateColumns:"60% 40%"}}><div className='hi' style={{display:"flex"}}> <Link className='texts'  to="/"><h3>Women</h3></Link>  <Link className='texts' style={{marginLeft:"5%"}} to="/Men"><h3>Men</h3></Link> <h3>Kid</h3><h3>Life</h3> </div> <div className='hi2' style={{display:"flex"}}><p>Signup for Newsletter</p>  <div className='dropdown' > <p>My account</p><div className='dropdown-content'>{isauth?<><h3>Welcome</h3> <br/> <p>{infor.First_Name}</p> <Link className='texts' to="/Wishlist">  <p>My Wishlist</p> </Link> <Link className='texts' to="/ShoppingBag">  <p>My Bag</p> </Link>  <p onClick={()=>logout()} >Logout</p></>:<Link to="/Login" className='texts'  ><button style={{marginTop:"5%",backgroundColor:"black",padding:"5px 10px",color:"white"}}>Create Account</button></Link>} </div></div> <Link className='texts'  to="/Wishlist"><p>My wishlist</p></Link>   <p>International | English
</p></div></div>

 <div style={{display:"grid", gridTemplateColumns:"60% 40%",marginTop:"20px"}} ><div>  <img style={{width:"80%",height:"100px"}} src={image}  alt="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo-s.png?v=20221102T163423"/> </div> <div> <Link className='texts'  to="/ShoppingBag">  <h3 style={{marginTop:""}}>Shopping bag  {bag.length?bag.length:0}</h3> </Link></div></div>
   
   <div style={{display:"grid", gridTemplateColumns:"80% 20%",marginTop:"20px"}}> <div style={{display:"flex",justifyContent:"space-evenly"}}> <Link className='texts'  to="/WomenProducts"><p>New Arrivals</p></Link> <p>Designers</p><p>Clothing</p><p>Shoes</p><p>Bags</p><p>Accessories</p><p>Jewelerry</p><p>Festive Seasons</p><p>Sale</p></div> <div style={{display:"flex",alignItems:"center",justifyContent:"end"}}><input placeholder='search for' style={{height:"20px"}}/></div> </div>
    </div>
  )
}

export default Navbar
