import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/LoginContext'

const ShoppingBag = () => {
 const[total,settotal] = useState(0)
  const {product,setproduct,wishlist,bag,setwishlist,setbag} = useContext(AuthContext)
  if(bag.length===0){
    return <div style={{width:"80%",margin:"auto"}}> <p>THERE ARE NO PRODUCTS ON YOUR SHOPING BAG.</p>
    <p>Check out our new arrivals and start adding to your bag now!</p>
    <Link to="/">  <button>Shop New Arrivals</button> </Link></div>
  }
  return (
    <div style={{width:"80%",margin:"auto"}}>
  <Link  to="/Checkout" > <button>Checkout</button></Link>
  <p>Your Shopping Bag</p>
  <div style={{display:"flex",justifyContent:"end" ,margin:"0 2%"}} ><h5 style={{marginRight:"10px"}} >Price</h5><h5 style={{marginRight:"10px"}} >Quantity</h5><h5 style={{marginRight:"10px"}} >Sub Total</h5></div>
  <hr/>
  {bag?.map((item)=>{
   
    return  <div key={item.id} style={{display:"flex",marginTop:"10px"}} > <img style={{width:"20%"}} src={item.images} alt={item.title} />
      <div> <p>{item.title}</p> <p>{item.name}</p>
      <button>Remove</button> <button style={{width:'100px'}}>Add To Bag</button>  </div> <div style={{display:"flex",marginLeft:"50%"}}><p style={{marginRight:"50px"}}>{item.price}</p><p style={{marginRight:"50px"}}>1</p><p style={{marginRight:"50px"}}>{item.price*2}</p></div> </div>
  })}
  
<div>
  <hr/>
  <div style={{display:"grid" ,gridTemplateColumns:"50% 50%"}} >
    <div></div> <div><p>SubTotal : {}</p>
    <p>Grand Total: {}</p> <p>VAT exception. VAT not included. Shipping not included.</p>
    <Link  to="/Checkout" > <button>Proceed to Checkout</button> </Link> </div>
  </div>
</div>
    </div>
  )
}

export default ShoppingBag
